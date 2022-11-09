import React, { useEffect, useState,useRef } from 'react'
import { View, FlatList,ScrollView, Animated} from 'react-native';
import { globalStyles } from '../styles/global';
import ListItem from '../components/ListItem';
import AddBottom from '../components/AddBottom';

export default function Home(props) {
    const [showAddButton,setShowAddButton]=useState(true)


  let dummyObjects= [
    {
        id:0,
        title:"İstanbulda hızlı gezi turu Lütfen tıklayın",
        cost:800,
        distance:"200 km",
        placesCount:8,
        fav:30,
        userName:"Kağan",
        desc:"Hızlı ve güvenli istanbul gezisi",
        imageURL:"https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x",
        places:[
            {
                id:0,
                name:"Dolma Bahçe",
                desc:"Çok güzel bir yer...",
                imageURL:"https://images.pexels.com/photos/11531658/pexels-photo-11531658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                cost:130,
            },
            {
                id:1,
                name:"Galata",
                desc:"Çok güzel bir yer... Galata",
                imageURL:"https://images.pexels.com/photos/14083884/pexels-photo-14083884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                cost:120,
            },
            {
                id:2,
                name:"Şehzade cağ kebabı",
                desc:"buraya bayıldım muazzamdı. 2 kişi 300tl",
                imageURL:"https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                cost:300,
            },
            {
                id:4,
                name:"Olalal",
                desc:"Çok güzel bir yer... Galata",
                imageURL:"https://images.pexels.com/photos/14083884/pexels-photo-14083884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                cost:110,
            },
            {
                id:5,
                name:"Love and Thunder",
                desc:"Çok güzel bir yer... Galata",
                imageURL:"https://images.pexels.com/photos/14083884/pexels-photo-14083884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                cost:160,
            },
            {
                id:6,
                name:"Oh my god",
                desc:"Çok güzel bir yer... Galata",
                imageURL:"https://images.pexels.com/photos/14083884/pexels-photo-14083884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                cost:160,
            },
        ]
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
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  const fadeOut = () => {
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
    <View style={[globalStyles.container,{backgroundColor:"#ece8ed"}]}>
        <FlatList
        keyExtractor={(item) => item.id}
        data={dummyObjects}
        renderItem={({item})=>{
            return(
                <ListItem item={item}></ListItem>
            )
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
            props.navigation.setOptions({
                headerShown:false
            })
            if(e.nativeEvent.contentOffset.y <= 170) {
                props.navigation.setOptions({
                    headerShown:true
                })
            }}
        }
        onMomentumScrollBegin={()=>{
            setTimeout(()=>{
                setShowAddButton(false)
            },300)
        }}
        onMomentumScrollEnd={()=>{
            setTimeout(()=>{
                    setShowAddButton(true)
            },300)
        }} 
        ></FlatList>

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

