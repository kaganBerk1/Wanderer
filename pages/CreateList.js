import React, { useState } from 'react'
import { View,Text,Button,StyleSheet,TextInput,ScrollView, BackHandler ,Image,TouchableOpacity} from 'react-native'
import { globalStyles } from '../styles/global'
import { Feather } from '@expo/vector-icons';


export default function CreateList() {
    const [places,setPlaces]=useState([])
    const [selecetedIndex,setSelecetedIndex]=useState(null)
    const [title,setTitle]=useState("")
    const [cost,setCost]=useState(0)
    const [comment,setComment]=useState("")
    

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

    function handleNewPlace(){
        let newObj={
            title,
            comment,
            cost
        }
        setPlaces(prevArray => [...prevArray, newObj])
        setComment("")
        setTitle("")
        setCost(null)
    }
  return (
        <ScrollView>
            <View style={[globalStyles.container,{alignItems:"center",width:"100%",paddingTop:20,}]}>
                {
                    places.map((val,index)=>{
                        return(
                            <View  style={{width:"100%",paddingTop:5}}>
                            {
                            selecetedIndex == index ?
                            <TouchableOpacity onPress={()=>handleSelecetedItem(index)} style={[styles.placeCover,{flexDirection:"row",width:"100%" ,flexWrap:"wrap"}]}> 
                                <Text style={styles.ancher}>#{index+1}</Text>
                                <Image  style={styles.image} source={{uri:'https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x'}}></Image>
                                <Text  style={styles.title} > {val.title}</Text>
                                <Text style={styles.comment}>{val.comment}</Text>
                                <Text  style={styles.title} >{val.cost}₺</Text>
                                <View style={styles.button} >
                                    <Button onPress={()=>deletePlace(index)} title="Delete 👷🏻" color="#a83432"></Button>
                                </View>

                            </TouchableOpacity> 
                            :
                            <TouchableOpacity  style={styles.dropdown} onPress={()=>handleSelecetedItem(index)}> 
                                <Text style={styles.secondAncher}>#{index+1}</Text> 
                                <Text style={styles.shortDesc}>{val.title}</Text>
                            </TouchableOpacity > 
                            }
                            </View>
                        )
                    })
                }

                <View style={[styles.placeCover,{flexDirection:"row",width:"100%" ,flexWrap:"wrap",marginTop:20,}]}> 
                            <Feather style={styles.image}  name="image" size={24} color="black" />
                            <TextInput value={title} onChangeText={(value)=>setTitle(value)} style={styles.title} maxLength={20} multiline placeholder='Enter Title'></TextInput>
                            <TextInput value={comment}  onChangeText={(value)=>setComment(value)} style={styles.comment} maxLength={60} multiline placeholder='Comment For Here'></TextInput>
                            <TextInput value={cost}  onChangeText={(value)=>setCost(value)}  style={styles.title} maxLength={6}   keyboardType='numeric' placeholder="Cost You've Spend"></TextInput>
                            <View style={styles.button} >
                                <Button onPress={()=>handleNewPlace()}  title="Add Place +" color="#5e316b"></Button>
                            </View>
                </View> 
                {
                    places.length>3&&
                    <View style={styles.buttonCover}>
                        <Button onPress={()=>handleNewPlace()}  title="Next" ></Button>
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
        width:"100%",
        height:200,
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

    }
})