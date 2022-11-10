import React from 'react'
import { View,TextInput, StyleSheet,Button} from 'react-native'
import { globalStyles } from '../styles/global'

export default function () {
  return (
    <View style={globalStyles.container}>
          <TextInput   style={styles.title} maxLength={20} keyboardType='numeric' multiline placeholder='Total Places'></TextInput>
          <TextInput    style={styles.comment} keyboardType='numeric' maxLength={6} multiline placeholder='Total Cost'></TextInput>
          <TextInput    style={styles.title} maxLength={6}   keyboardType='numeric' placeholder="Average Distance"></TextInput>
        <View style={styles.buttonCover}>
                <Button onPress={()=>navigation.navigate("CreateCont",places)}  title="Share List 🤞🏻" ></Button>
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