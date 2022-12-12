import React, { useEffect, useState,useRef } from 'react'
import { View, FlatList,ScrollView, Animated} from 'react-native';
import { globalStyles } from '../styles/global';
import ListItem from '../components/ListItem';
import AddBottom from '../components/AddBottom';
import axios from "axios";
import {useNavigation} from "@react-navigation/native"


export default function Home(props) {
    const [showAddButton,setShowAddButton]=useState(true)
    const [lists,setLists]=useState([])
    const [isFetching, setIsFetching] = useState(false);

  function getAllList(){
    axios({
        method: 'get',
        url: 'http://119.8.162.103:8000/list/',
    }).then(res => {
        //console.log(res)
        setLists(res.data)
    }).catch((err)=>{
        //console.log(err)
      setLoading(false)
    })
    setIsFetching(false)
  }

  useEffect(()=>{
    getAllList()
    //console.log(lists)
  },[])


  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  const onRefresh = () => {
    //set isRefreshing to true
    setIsFetching(true)
    getAllList()
    
    // and set isRefreshing to false at the end of your callApiMethod()
}

  useEffect(()=>{
    fadeIn();
  },[])

  return (
    <View style={[globalStyles.container,{backgroundColor:"#ece8ed"}]}>
        <FlatList
        keyExtractor={(item) => item._id}
        data={lists}
        onRefresh={onRefresh}
        refreshing={isFetching}
        renderItem={({item})=>{
            return(
                <ListItem  item={item}></ListItem>
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
            <AddBottom ></AddBottom>
        </Animated.View> 
       }
    </View>
  )
}

