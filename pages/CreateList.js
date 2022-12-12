import React, { useEffect, useState } from 'react'
import { View,Text,Button,StyleSheet,TextInput,ScrollView, BackHandler ,Image,TouchableOpacity} from 'react-native'
import { globalStyles } from '../styles/global'
import { Feather } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"
import * as ImagePicker from 'expo-image-picker';  // not react-image-picker 
import axios from 'axios';
import uuid from 'react-native-uuid';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function CreateList({route}) {
    const [places,setPlaces]=useState([])
    const [selecetedIndex,setSelecetedIndex]=useState(null)
    const [placeName,setPlaceName]=useState("")
    const [hasGalleryPermissions,setHasGalleryPermissions]=useState("")
    const [image, setImage] = useState(null);
    const [imageURL,setImageURL] = useState("")

    const [cost,setCost]=useState(0)
    const [comment,setComment]=useState("")
    const navigation=useNavigation();

    async function getPermission(){
        const galleryStatus =await ImagePicker.requestMediaLibraryPermissionsAsync()
        setHasGalleryPermissions(galleryStatus.status=="granted")
    } 

    useEffect(()=>{
        getPermission()
    
    
    },[])
 
  
    function handleSelecetedItem(index){
        if(index===selecetedIndex){
            setSelecetedIndex(null)
        }else{
            setSelecetedIndex(index);
        }
    }

    function deletePlace(selectedIndex){
        let newArray= places.filter((val,index)=>selecetedIndex!==index)
        setPlaces(newArray)
        setSelecetedIndex(null)
    }

   async  function sendImageToServer(result){
        let endpoint="https://wanderer.obs.ap-southeast-3.myhuaweicloud.com/"
        let imageKEY=uuid.v4()+"-"+result.fileName
        setImageURL(endpoint+imageKEY)
        const formData = new FormData()
        formData.append("file",{
            uri:result.uri,
            type:result.type,
            name:result.fileName,
            
        })
        formData.append("imageKEY",imageKEY)
        //console.log(formData)

/*         axios.post('https://25d4-31-223-87-41.eu.ngrok.io/list/uploadImage', {
            body:formData,
            headers: {'Content-Type': 'multipart/form-data' }
        }) */
        fetch('http://119.8.162.103:8000/list/uploadImage', {
            method: 'POST',
            body: formData
        })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:');
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }

    function handleNewPlace(){
        //console.log(image)
        let newObj={
            placeName,
            comment,
            cost,
            imageURL,
            image
        }
        //console.log(newObj)
        setPlaces(prevArray => [...prevArray, newObj])
        setComment("")
        setPlaceName("")
        setCost(null)
        setImage(null)
    }


    async function handleImage(){
        if(!hasGalleryPermissions){
            alert("Please Give Permmisions ")
        }else if(image==!""){
            setImage(0)
        }else{
            try {
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    quality: 1,
                  });
              
                  if (!result.cancelled) {
                    console.log(result)
                   
                    sendImageToServer(result)
                    setImage(result.uri);
                  }
                 // console.log(result) 
           } catch (error) {
            console.log(error)
           }
        }
    }

  return (
        <ScrollView>
            <View style={[globalStyles.container,{alignItems:"center",width:"100%",paddingTop:20,}]}>
                {
                    places.map((val,index)=>{
                        return(
                            <View  style={{width:"100%",paddingTop:5}} key={index}>
                            {
                            selecetedIndex == index ?
                            <TouchableOpacity onPress={()=>handleSelecetedItem(index)} style={[styles.placeCover,{flexDirection:"row",width:"100%" ,flexWrap:"wrap",height:254}]}> 
                                <Text style={styles.ancher}>#{index+1}</Text>
                                <Image  style={selecetedIndex==index?{ width:"100%",height:100,resizeMode:"cover",borderRadius:10}:styles.image} source={{uri:val.image}}/>
                                <Text  style={styles.title} > {val.placeName}</Text>
                                <Text style={styles.comment}>{val.comment}</Text>
                                <Text  style={styles.title} >{val.cost}₺</Text>
                                <View style={styles.button} >
                                    <Button onPress={()=>deletePlace(index)}  title="Delete 👷🏻" color="#a83432"></Button>
                                </View>

                            </TouchableOpacity> 
                            :
                            <TouchableOpacity  style={styles.dropdown} onPress={()=>handleSelecetedItem(index)}> 
                                <Text style={styles.secondAncher}>#{index+1}</Text> 
                                <Text style={styles.shortDesc}>{val.placeName}</Text>
                            </TouchableOpacity > 
                            }
                            </View>
                        )
                    })
                }

                <View style={[styles.placeCover,{flexDirection:"row",width:"100%" ,flexWrap:"wrap",marginTop:30,}]}> 
                             {image ?
                                <TouchableOpacity onPress={()=>handleImage()} style={{width:"100%",height:250,padding:5}} >
                                    <Image source={{ uri: image }} style={{ width:"100%",height:"100%",resizeMode:"cover",borderRadius:10}}/>
                                </TouchableOpacity>
                             :
                                <TouchableOpacity style={styles.upload} onPress={()=>{handleImage()}}>
                                    <Feather style={styles.image}  name="image" size={80} color="black" />
                                    <Text>Click to upload image</Text>
                                </TouchableOpacity>
                             }    
                            <TextInput value={placeName} multiline={false} onChangeText={(value)=>setPlaceName(value)} style={styles.title} maxLength={20}  placeholder='Enter Place Name'></TextInput>
                            <TextInput value={comment}  onChangeText={(value)=>setComment(value)} style={styles.comment} maxLength={60} multiline={false}  placeholder='Comment For Here'></TextInput>
                            <TextInput value={cost}  onChangeText={(value)=>setCost(value)}  style={styles.title} maxLength={6}   keyboardType='numeric' placeholder="Cost You've Spend"></TextInput>
                            <View style={styles.button} >
                                <Button onPress={()=>handleNewPlace()}  title="Add Place +" color="#5e316b"></Button>
                            </View>
                </View> 
                {
                    places.length>=0&&
                    <View style={styles.buttonCover}>
                        <Button onPress={()=>navigation.navigate("CreateCont",{places})}  title="Next" ></Button>
                    </View>
                }
            </View>
        </ScrollView>
  )
}

const styles= StyleSheet.create({
    buttonCover:{
        width:120,
        marginVertical:20,
        borderRadius:10,
        overflow:"hidden",
    },
    image:{
        alignItems:"center",
        objectFit:"cover",
        resizeMode:"cover",
        borderRadius:10
    },
    title:{
        width:"100%",
        height:50,
        borderBottomWidth:0.5,
        borderStyle:"dashed",
        borderColor:"#313131",
        paddingHorizontal:10,
        alignItems:"center",
        paddingVertical:10,
        fontFamily:"nunito-bold",
        fontSize:18
    },
    comment:{
        width:"100%",
        height:50,
        borderBottomWidth:0.5,
        borderStyle:"dashed",
        borderColor:"#313131",
        paddingHorizontal:10,
        paddingVertical:12,
        fontFamily:"nunito-bold",
        fontSize:18

    },
    placeCover:{
        borderWidth:1,
        borderRadius:10,
        borderColor:"#5e316b",
        marginBottom:20,
        paddingTop:0,
    },
    ancher:{
        position:'absolute',
        left:-5,
        top:-5,
        fontSize:24,
        backgroundColor:"#ece8ed",
        borderWidth:1,
        borderColor:"#313131",
        borderRadius:15,
        padding:8,
        fontFamily:"nunito-bold",
        zIndex:1,
    },
    secondAncher:{
        position:'absolute',
        left:10,
        fontSize:24,
        borderColor:"#313131",
        padding:8,
        fontFamily:"nunito-bold",
        zIndex:1,
    },
    dropdown:{
        backgroundColor:"#ece8ed",
        width:"100%",
        height:50,
        marginBottom:10,
        borderRadius:20,
        borderWidth:1,
        borderColor:"#5e316b",
        alignItems:"center",
        justifyContent:"center",

    },
    shortDesc:{
        fontSize:18,
        borderColor:"#313131",
        fontFamily:"nunito-bold",
    },
    button:{
        alignSelf:"flex-end",
        width:"100%",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        overflow:"hidden",
    

    },
    upload:{
        width:"100%",
        height:200,
        justifyContent:"center",
        alignItems:"center",
        fontFamily:"nunito-regular",
        borderBottomWidth:0.5,
        borderStyle:"dashed",
        borderColor:"#313131",
    }
})