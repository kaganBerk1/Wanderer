import React from 'react'
import { Button, StyleSheet, Text, View, FlatList,ScrollView, Animated} from 'react-native';
import { globalStyles } from '../styles/global';
import {useNavigation} from "@react-navigation/native"
import ListItem from '../components/ListItem';
import AddBottom from '../components/AddBottom';

export default function Home(props) {
  const navigation=useNavigation();
  const screenY=new Animated.Value(0)
  const translateY=screenY.interpolate({
    inputRange:[0,45],
    outputRange:[0,-45]
  })
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

  function changeNavigationOptions(){
     navigation.setOptions({
        
     })
  }

  return (
    <View style={globalStyles.container}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            /* onScroll={()=>{
        
                props.navigation.setOptions({
                    headerShown:false
                })
            }}

            onMomentumScrollEnd={()=>{
               
                props.navigation.setOptions({
                    headerShown:true
                })
            }} */

            onScroll={(e) => {
                props.navigation.setOptions({
                    headerShown:false
                })
                if(e.nativeEvent.contentOffset.y <= 200) {
                    props.navigation.setOptions({
                        headerShown:true
                    })
                }}
            }
            
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
        <AddBottom></AddBottom>
    </View>
  )
}

const styles=StyleSheet.create({
    
})
