import React from 'react'
import { View,Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import { globalStyles } from '../styles/global'
import {useNavigation} from "@react-navigation/native"

export default function ListItem({item}) {
  const navigation=useNavigation();

  return (
    <TouchableOpacity onPress={()=>navigation.navigate("SingleList",item)}>
        <View style={styles.cover}>
                <Image  style={styles.image} source={{uri:'https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x'}}></Image>
                <Text style={styles.title}>{'\t'}{item.title}</Text>
{/*                 <Text style={styles.desc}>{item.desc}</Text> */}

                <View  style={styles.bottomCover}>
                    <Text style={[styles.textBottom,{width:"50%"}]} >🏛️ Places: <Text style={{fontFamily:"nunito-bold"}}>{item.placesCount} </Text></Text>
                    <Text style={styles.textBottom}>💰 Cost: <Text style={{fontFamily:"nunito-bold"}}>{item.cost}₺</Text></Text>
                    <Text style={[styles.textBottom,{width:"50%"}]} >🛣️ Distance: <Text style={{fontFamily:"nunito-bold"}}>{item.distance}</Text></Text>
                    <Text style={styles.textBottom}>😻 Fav: <Text style={{fontFamily:"nunito-bold"}}>{item.fav}</Text></Text>
                </View>
        </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    cover:{
        borderWidth:1,
        borderColor:"#bbbfbf",
        borderRadius:10,
        borderStyle:"solid",
        marginBottom:20,
    },
    image:{
        width:"100%",
        height:240,
        objectFit:"cover",
        borderRadius:10,  
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,
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
        fontFamily:"nunito-regular",
    },
    title:{
        fontSize:24,
        fontStyle:"bold",
        flex:1,
        fontFamily:"nunito-bold",
        width:"100%",
        justifyContent:"center",
        marginVertical:10,
        paddingHorizontal:10,
        textAlign:"center"
    },
    desc:{
        fontSize:18,
        fontFamily:"nunito-regular",

    }
})