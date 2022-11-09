import React, { useEffect, useRef, useState } from 'react'
import { View, Text ,Image, FlatList,Animated, Dimensions, ScrollView,ImageBackground,StyleSheet} from 'react-native'
import { globalStyles } from '../styles/global'
import { AntDesign } from '@expo/vector-icons';



export default function SingleList(props) {
    const places=props.route.params.places
    const scrollX=useRef(new Animated.Value(0)).current
    const {width,height}=Dimensions.get("screen")
    const imageWidth=width*0.9
    const imageHeight=height*0.6

  return (
        <ScrollView style={{width,backgroundColor:"#ece8ed",paddingTop:10}} 
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
                    <ImageBackground imageStyle={{opacity:0.8,borderRadius:30,}} source={{uri:item.imageURL}} style={{flex:1,width:width,height:height*0.7,alignItems:"center"}} blurRadius={30}> 
                        {
                            item.id!==props.route.params.places.length && <AntDesign style={styles.rightArrow} name="caretright" size={24} color="black" />
                        }
                        {
                            item.id!==0 && <AntDesign style={styles.leftArrow} name="caretleft" size={24} color="black" />   
                        }
                        <Text style={styles.innetText}><Text style={styles.headerTitle}>#{item.id+1}</Text> {item.name}</Text>
                        <Image  style={{width:imageWidth,height:imageHeight-80,resizeMode:"cover",borderRadius:20,borderWidth:2,borderColor:"#5e316b"}} source={{uri:item.imageURL}} b></Image>
                        <Text style={styles.desc}> {item.desc}</Text>
                        <Text style={styles.cost}>💰 {item.cost}₺</Text>
                    </ImageBackground>
                )
            }}
            >
            </Animated.FlatList>

            <Text style={styles.title}>{props.route.params.title} Yeni Dünya Düzeni</Text>
            <Text style={styles.userNameSay}>{props.route.params.userName} says: </Text>

            <Text style={styles.secondDesc} >   {props.route.params.desc} asdasd asdasd asdasd asdasd asd asdas dasd asdasdas asdas </Text>
            <View  style={styles.bottomCover}>
                    <Text style={[styles.textBottom,{width:"50%"}]} >🏛️ Places: <Text style={{fontFamily:"nunito-bold"}}>{props.route.params.placesCount} </Text></Text>
                    <Text style={styles.textBottom}>💰 Cost: <Text style={{fontFamily:"nunito-bold"}}>{props.route.params.cost}₺</Text></Text>
                    <Text style={[styles.textBottom,{width:"50%"}]} >🛣️ Distance: <Text style={{fontFamily:"nunito-bold"}}>{props.route.params.distance}</Text></Text>
                    <Text style={styles.textBottom}>😻 Fav: <Text style={{fontFamily:"nunito-bold"}}>{props.route.params.fav}</Text></Text>
            </View>
            <Text style={[styles.textBottom,{textAlign:"right",marginRight:10,}]}>Created By {props.route.params.userName}</Text>
{/*             <View style={{position:"absolute",bottom:0,alignSelf:"center"}}>
                <Text>⬤ ⬤ ⬤ ⚪</Text>

            </View> */}



        </ScrollView>
  )
}   

const styles=StyleSheet.create({
    title:{
        fontFamily:"nunito-bold",
        fontSize:20,
        color:"#313131",
        paddingVertical:10,
        textAlign:"center",
        paddingHorizontal:10,
    },
    innetText:{
        fontFamily:"nunito-bold",
        fontSize:24,
        color:"#313131",
        paddingBottom:8,
        marginTop:10,
        textAlign:"center",
    },
    headerTitle:{
        fontFamily:"nunito-bold",
        fontSize:24,
        color:"#313131",
    },
    desc:{
        fontFamily:"nunito-bold",
        fontSize:20,
        padding:10,
        color:"black",
        textAlign:"center",
        minHeight:75,
    },
    cost:{
        fontFamily:"nunito-bold",
        fontSize:20,
        color:'#5e316b',
        height:"100%",
        marginLeft:20,
        alignSelf: 'flex-start',     
    },
    secondDesc:{
        fontFamily:"nunito-regular",
        fontSize:18,
        color:"#313131",
        paddingHorizontal:10,
        textAlign:"justify",
        borderBottomWidth:1,
        borderBottomColor:"#313131",
        paddingBottom:20,
    },
    bottomCover:{
        flex:1,
        flexDirection:"row",
        justifyContent:'space-between',
        flexWrap:"wrap",
        paddingHorizontal:8,
        
    },
    textBottom:{
        paddingVertical:20,
        fontSize:18,
        fontFamily:"nunito-regular",
    },
    userNameSay:{
        fontFamily:"nunito-bold",
        fontSize:18,
        opacity:0.9,
        color:"#313131",
        textAlign:"left",
        marginTop:10,
        marginLeft:10
    },
    rightArrow:{
        position:"absolute",
        right:10,
        top:250,
        zIndex:1,
        backgroundColor:"#f1f1f1",
        padding:10,
        borderRadius:50,
        opacity:0.5
    },
    leftArrow:{
        position:"absolute",
        left:10,
        top:250,
        zIndex:1,
        backgroundColor:"#f1f1f1",
        padding:10,
        borderRadius:50,
        opacity:0.5
    }
})