import React from 'react'
import { Button, StyleSheet, Text, View, FlatList,ScrollView,} from 'react-native';
import { globalStyles } from '../styles/global';
import {useNavigation} from "@react-navigation/native"
import ListItem from '../components/ListItem';

export default function Home() {
  const navigation=useNavigation();

  let dummyObjects= [
    {
        id:0,
        title:"İstanbulda hızlı gezi turu Lütfen tıklayın",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:0,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },

  ]

  function navigateTo(){
     navigation.navigate("About")
  }

  return (
    <View style={globalStyles.container}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            
        >
  
                <FlatList
                data={dummyObjects}
                renderItem={({item})=>{
                    return(
                        <ListItem item={item}></ListItem>
                    )
                }}

                ></FlatList>
        </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    
})
