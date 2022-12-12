
import { useEffect, useState } from "react";
import { View,Text ,Button,StyleSheet, Dimensions, Keyboard,SafeAreaView,Image,TouchableOpacity,ActivityIndicator,} from "react-native";
import { globalStyles } from "../styles/global";
import Modal from "react-native-modal";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";
import {useNavigation,useIsFocused} from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const ScreenWidth= Dimensions.get("screen").width;

export default function Login() {
    const [isModalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [newUserName, setNewUserName] = useState("");
    const [newPassword, setNewPassword] = useState(0);
    const [newPasswordConfirm, setNewPasswordConfirm] = useState(0);
    const navigation=useNavigation();
    const isFocused = useIsFocused();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    setModalVisible(false);
    setUserName("")
    setNewUserName("")
    setPassword("")
    setNewPassword("")
    setNewPasswordConfirm("")
}, [isFocused]);

  function handleLogin(){
    setLoading(true);
    axios({
        method: 'post',
        url: 'http://119.8.162.103:8000/auth/login',
        data: {
          name: userName,
          password: password
        }
    }).then(res => {
        saveUserName(userName)
        navigation.navigate("Home")
        setLoading(false)

    }).catch((err)=>{
        //console.log(err)
      alert("Invalid User Name or Password")
      setLoading(false)
    })


}

async function saveUserName(Username){
    try {
      await AsyncStorage.setItem("userName",Username)
    } catch (error) {
      console.log(error)
    }
}
  

  function handleNewUser(){
    setLoading(true)
    if(newPassword===newPasswordConfirm){
        axios({
            method: 'post',
            url: 'http://119.8.162.103:8000/auth/register',
            data: {
              name: newUserName,
              password: newPassword
            }
        }).then(res => {
            setLoading(false)
            //console.log(newUserName)
            saveUserName(newUserName)
            navigation.navigate("Home")
        }).catch((err)=>{
            console.log(err)
            //alert("Uour User Name is not unique")
            setLoading(false)

        })
    }else{
        alert("passwords do not match")
    }
  }

  const Divider = () => <View style={[styles.dividerStyle]} />;

  const LoginButton = ({type}) => (
    <TouchableOpacity
      style={type=="login"?styles.loginButtonStyle:styles.createButton}
      onPress={type==="login"?handleLogin:handleNewUser}>
      <Text style={[styles.loginTextStyle]}>
        {type==="login"?"Login":"create"}
      </Text>
    </TouchableOpacity>
  );


const Logo = () => (
    <Image
        resizeMode="contain"
        source={require("../assets/logo.png")}
        style={[styles.logoImageStyle]}
    />
);

  return (
        <View style={[globalStyles.container,{marginTop:30}]}>

            <View style={{width:"100%",alignItems:"center"}}>
                <Text style={{
                    fontSize:44,
                    fontFamily:"nunito-bold"
                }}>Wanderer</Text>
            </View>
            <SafeAreaView style={[styles.container, styles]}>
                <Logo />
                <View  style={
                    {
  
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#acabb0",
                    }
                }>
                  <TextInput value={userName} onChangeText={(value)=>setUserName(value)}  style={[styles.comment,{marginBottom:20}]}  multiline={false} placeholder='Username'></TextInput>
                  <TextInput  value={password}   onChangeText={(value)=>setPassword(value)}   style={styles.title}  secureTextEntry={true} multiline={false}   placeholder="Password"></TextInput>
                </View>
                {
                  loading?
                  <ActivityIndicator style={{marginTop:20}} color="#acabb0" size="large" />
                  :
                  <LoginButton type="login"/>
                }
                <TouchableOpacity
                style={
                    {
                        marginTop: 32,
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#acabb0",
                    }
                }
                    onPress={toggleModal}>
                    <Text style={{
                      color: "#acabb0",
                    }}>
                        {"Create a account"}
                    </Text>
                </TouchableOpacity>
                <Divider />
            </SafeAreaView>

            <Modal   isVisible={isModalVisible}   onBackdropPress={() => setModalVisible(false)} >
                <View style={{ height: Dimensions.get('window').height*0.4,backgroundColor:"white",borderRadius:30, }}>
                <AntDesign onPress={()=>setModalVisible(false)} name="closecircleo" style={styles.close} size={36} color="black" />
                    <View style={styles.textCover}>
                        <TextInput value={newUserName} onChangeText={(value)=>setNewUserName(value)}  style={styles.comment}  multiline placeholder='Username'></TextInput>
                        <TextInput  value={newPassword}  onChangeText={(value)=>setNewPassword(value)}   style={styles.title}  secureTextEntry={true}   placeholder="Password"></TextInput>
                        <TextInput value={newPasswordConfirm}  onChangeText={(value)=>setNewPasswordConfirm(value)}  style={styles.title}  secureTextEntry={true}   placeholder="Password Again"></TextInput>

                    </View>

                    {
                  loading?
                  <ActivityIndicator style={{marginTop:20}} color="#acabb0" size="large" />
                  :
                  <LoginButton/>
                }


              {/*       <Button title="Hide modal" onPress={toggleModal} /> */}
                </View>
            </Modal>
        </View>
  )
}

const styles= StyleSheet.create({
    title:{
        width:"100%",
        height:50,
        borderBottomWidth:0.5,
        borderStyle:"dashed",
        borderColor:"#313131",
        paddingHorizontal:10,
        alignItems:"center",
        paddingVertical:10,
        fontFamily:"nunito-bold",
        fontSize:18
    },
    buttonCover:{
      width:120,
      marginVertical:20,
      borderRadius:10,
      overflow:"hidden",
      width:"100%"
  },
    comment:{
        width:"100%",
        height:50,
        borderBottomWidth:0.5,
        borderStyle:"dashed",
        borderColor:"#313131",
        paddingHorizontal:10,
        paddingVertical:12,
        fontFamily:"nunito-bold",
        fontSize:18,
        alignItems:"center",
       
  
    },
    textCover:{
        padding:20,
        paddingBottom:0,
        marginTop:20,
    },
    close:{
        position:"absolute",
        right:8,
        zIndex:20,
        top:8,
    },
    container: {
        flex: 1,
        backgroundColor: "#f7f7f7",
      },
      logoImageStyle: {
        width: 200,
        height: 200,
        alignSelf: "center",
      },
      textInputContainer: {
        marginTop: 12,
        alignItems: "center",
        justifyContent: "center",
      },
      passwordTextInputContainer: {
        marginTop: 16,
      },
      loginButtonStyle: {
        height: 40,
        width: ScreenWidth * 0.9,
        backgroundColor: "#25a9e2",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 32,
        elevation: 5,
        shadowRadius: 8,
        shadowOpacity: 0.3,
        shadowColor: "#166080",
        shadowOffset: {
          width: 0,
          height: 3,
        },
      },
      createButton:{
        height: 40,
        width: ScreenWidth * 0.7,
        backgroundColor: "#25a9e2",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 32,
        elevation: 5,
        shadowRadius: 8,
        shadowOpacity: 0.3,
        shadowColor: "#166080",
        shadowOffset: {
          width: 0,
          height: 3,
        },
      },
      loginTextStyle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
      },
      signupStyle: {
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
      },
      signupTextStyle: {
        color: "#acabb0",
      },
      dividerStyle: {
        height: 0.5,
        marginTop: 24,
        marginBottom: 12,
        borderRadius: 16,
        width: ScreenWidth * 0.8,
        alignSelf: "center",
        backgroundColor: "#ccc",
      },
      socialLoginContainer: {
        marginTop: 16,
        alignItems: "center",
        justifyContent: "center",
      },
    
    
  })