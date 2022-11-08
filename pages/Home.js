import React, { useEffect, useState,useRef } from 'react'
import { Button, StyleSheet, Text, View, FlatList,ScrollView, Animated} from 'react-native';
import { globalStyles } from '../styles/global';
import {useNavigation} from "@react-navigation/native"
import ListItem from '../components/ListItem';
import AddBottom from '../components/AddBottom';

export default function Home(props) {
    const [showAddButton,setShowAddButton]=useState(true)

  const navigation=useNavigation();
  const screenY=new Animated.Value(0)

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
        id:1,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:2,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:3,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:4,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:5,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:6,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:7,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:8,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:9,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:10,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:11,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:12,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:13,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:14,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:15,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:16,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:17,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:18,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:19,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:20,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:21,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:22,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:23,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:24,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },
    {
        id:25,
        title:"İstanbulda hızlı gezi turu",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
    },

  ]


  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true
    }).start();
  };

  useEffect(()=>{
    fadeIn();
  },[])

  return (
    <View style={globalStyles.container}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
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

            onScrollBeginDrag={()=>{
                setTimeout(()=>{
                    setShowAddButton(false)
                    fadeOut();
                },100)
            }}
            onScrollEndDrag={()=>{
                setTimeout(()=>{
                    setShowAddButton(true)
                    fadeIn();
                },1500)
            }}
            
        >
  
                <FlatList
                keyExtractor={(item) => item.id}
                data={dummyObjects}
                renderItem={({item})=>{
                    return(
                        <ListItem item={item}></ListItem>
                    )
                }}



                ></FlatList>
        </ScrollView>
       {
        showAddButton&&
        <Animated.View     
        style={{
            opacity: fadeAnim,
          }}>
            <AddBottom></AddBottom>
        </Animated.View> 
       }
    </View>
  )
}

const styles=StyleSheet.create({
    
})
