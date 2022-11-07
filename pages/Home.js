import React from 'react'
import { Button, StyleSheet, Text, View,} from 'react-native';
import { globalStyles } from '../styles/global';
import {useNavigation} from "@react-navigation/native"

export default function Home() {
  const navigation=useNavigation();

  function navigateTo(){
     navigation.navigate("About")
  }

  return (
    <View style={globalStyles.container}>
            <Text  style={globalStyles.titleText}>Home Page</Text>
            <Button title="anan" onPress={navigateTo}></Button>
    </View>
  )
}

