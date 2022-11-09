import React, { useEffect, useRef, useState } from 'react'
import { View, Text ,Image, FlatList,Animated, Dimensions, ScrollView,ImageBackground} from 'react-native'
import { globalStyles } from '../styles/global'




export default function SingleList(props) {
    const places=props.route.params.places
    const scrollX=useRef(new Animated.Value(0)).current
    const {width,height}=Dimensions.get("screen")
    const imageWidth=width*0.9
    const imageHeight=height*0.6

  return (
        <ScrollView style={{width}} 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        >
            <Animated.FlatList
            horizontal
            data={places}
            keyExtractor={(item) => item.id}
            onscroll={Animated.event(
                [{nativeEvent:{contentOffset:{x:scrollX}}}],
                {useNativeDriver:true}
            )}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>{
    
                return(
                    <ImageBackground source={{uri:item.imageURL}} style={{flex:1,width:width,height:height*0.9,alignItems:"center"}} blurRadius={30}>    
                        <Text style={globalStyles.titleText}>{props.route.params.title}</Text>
            
                        <Text><Text style={globalStyles.titleText}>#{item.id+1}</Text> {item.name}</Text>
                        <Image  style={{width:imageWidth,height:imageHeight-80,resizeMode:"cover",borderRadius:20,borderWidth:1,borderColor:"#5e316b"}} source={{uri:item.imageURL}} b></Image>
                        <Text>{item.desc}</Text>
                        <Text>{item.cost}</Text>
                        <Text>{props.route.params.desc}</Text>
                        <Text>{props.route.params.cost}</Text>
                        <Text>{props.route.params.fav}</Text>
                        <Text>{props.route.params.distance}</Text>
                        <Text>{props.route.params.placesCount}</Text>
                        <Text>{props.route.params.userName}</Text>
                    </ImageBackground>
                )
            }}
            >

            </Animated.FlatList>
{/*             <View style={{position:"absolute",bottom:0,alignSelf:"center"}}>
                <Text>⬤ ⬤ ⬤ ⚪</Text>

            </View> */}



        </ScrollView>
  )
}   
