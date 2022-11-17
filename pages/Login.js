
import { useState } from "react";
import { View,Text ,Button,StyleSheet, Dimensions} from "react-native";
import LoginScreen, { SocialButton } from "react-native-login-screen";
import { globalStyles } from "../styles/global";
import Modal from "react-native-modal";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
    const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
        <View style={[globalStyles.container,{marginTop:30}]}>

            <View style={{width:"100%",alignItems:"center"}}>
                <Text style={{
                    fontSize:44,
                    fontFamily:"nunito-bold"
                }}>Wanderer</Text>
            </View>
            <LoginScreen
            logoImageSource={require("../assets/logo.png")}
            onLoginPress={() => {}}
            onSignupPress={toggleModal}
            onEmailChange={() => {}}
            onPasswordChange={() => {}}
            disableSocialButtons
            emailPlaceholder="Username"
            style={{
                backgroundColor:"transparent"
            }}
            >
            </LoginScreen>

            <Modal   isVisible={isModalVisible}   onBackdropPress={() => setModalVisible(false)} >
                <View style={{ height: Dimensions.get('window').height*0.4,backgroundColor:"white",borderRadius:30, }}>
                <AntDesign onPress={()=>setModalVisible(false)} name="closecircleo" style={styles.close} size={36} color="black" />
                    <View style={styles.textCover}>
                        <TextInput    style={styles.comment}  multiline placeholder='Username'></TextInput>
                        <TextInput    style={styles.title}  secureTextEntry={true}  keyboardType='numeric' placeholder="Password"></TextInput>
                        <TextInput    style={styles.title}  secureTextEntry={true}  keyboardType='numeric' placeholder="Password Again"></TextInput>

                    </View>

                    <LoginScreen
                        logoImageSource={require("../assets/logo.png")}
                        onLoginPress={() => {}}
                        disableSignup
                        loginButtonText="Create"
                        disableSocialButtons
                        disableDivider
                        logoImageStyle={{
                            display:"none"
                        }}
                        style={{
                            backgroundColor:"transparent",
                            margin:0,
                            padding:0,
                        }}
                        loginButtonStyle={{
                            width:"90%",
                            margin:0,
                            padding:0,
                        }}
                        textInputContainerStyle={
                            {
                            display:"none"         
                            }
                        }
                        >
                        </LoginScreen>


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
        fontSize:18
  
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
    }
  })