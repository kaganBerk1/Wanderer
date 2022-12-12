import React , {useEffect, useState} from 'react'
import { View,TextInput, StyleSheet,Button} from 'react-native'
import axios from "axios";

import { globalStyles } from '../styles/global'
import AsyncStorage from "@react-native-async-storage/async-storage"


export default function ({ route, navigation }) {
  const [title, setTitle] = useState("");
  const [totalPlaceNumber, setTotalPlaceNumber] = useState("");
  const [cost,setCost]= useState("")
  const [distance, setDistance] = useState("");
  const [userName,setUserName]=useState("")

  async function getUserName(){
    //console.log(route.params.palces)
    try {
        let userName = await AsyncStorage.getItem("userName")
        setUserName(userName)
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
  getUserName()
},[])
 
  function createList(){
    axios({
      method: 'post',
      url: 'http://119.8.162.103:8000/list/create',
      data: {
        title: title,
        cost: cost,
        destinationNumber:totalPlaceNumber,
        distance:distance,
        places:route.params.places,
        userName:userName
      }
      }).then(res => {
/*           setLoading(false) */
          navigation.navigate("Home")
      }).catch((err)=>{
          console.log(err)
/*           setLoading(false) */

  })
  }


  return (
    <View style={globalStyles.container}>
          <TextInput   style={styles.title} onChangeText={(value)=>setTitle(value)}  placeholder='Title'></TextInput>
          <TextInput   style={styles.title} onChangeText={(value)=>setTotalPlaceNumber(value)} maxLength={20} keyboardType='numeric' multiline placeholder='Total Places'></TextInput>
          <TextInput  onChangeText={(value)=>setCost(value)}  style={styles.comment} keyboardType='number-pad' maxLength={6}  placeholder='Total Cost'></TextInput>
          <TextInput  onChangeText={(value)=>setDistance(value)}  style={styles.title} maxLength={6}   keyboardType='numeric' placeholder="Average Distance"></TextInput>
        <View style={styles.buttonCover}>
                <Button onPress={()=>createList()}  title="Share List 🤞🏻" ></Button>
            </View>
    </View>
  )
}

const styles= StyleSheet.create({
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
  buttonCover:{
    width:120,
    marginVertical:20,
    borderRadius:10,
    overflow:"hidden",
    width:"100%"
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


})