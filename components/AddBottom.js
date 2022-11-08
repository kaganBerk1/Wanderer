import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export default function AddBottom() {
  return (
    <View style={styles.cover}>
        <Text style={styles.button}>
            Button
        </Text>
    </View>
  )
}

const styles=StyleSheet.create({
    cover:{
        display:"flex",
        justifyContent:"flex-end",
        backgroundColor:"yellow"
    },
    button:{
        display:"flex",
        justifyContent:"flex-end",
        backgroundColor:"red"
    }
})