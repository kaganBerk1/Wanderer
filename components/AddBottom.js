import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"

export default function AddBottom() {
  const navigation=useNavigation();

  return (
    <View style={styles.cover}>
        <View style={styles.iconCover}>
            <Ionicons  onPress={()=>navigation.navigate("Create")} style={{alignSelf:"center",marginLeft:5,marginTop:-2}} name="ios-add-circle" size={70}  color="#5e316b" />
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    cover:{
        position: 'absolute', 
        alignSelf: 'center',
        bottom:10,
        height:80,
        backgroundColor:"transparent",
    },
    iconCover:{
        backgroundColor:"#dbdbdb",
        borderRadius:20,
        width:75,
        height:70,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
    }
})