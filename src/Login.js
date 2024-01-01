import React  from "react";
import Background from "./Background";
import { Text, TouchableOpacity, View } from "react-native";
import Field from "./Field";
import Btn from "./Btn";


const Login = (props)=>{
return (
    <Background>
        <TouchableOpacity
              onPress={() => props.navigation.navigate('Home')}>
              <Text
                style={{color: "#006A42", fontWeight: 'bold', fontSize: 16}}>
                Go to Home
              </Text>
            </TouchableOpacity>
            
        <View style={{alignItems:"center", width:460}}>
            <Text style={{color: "white", fontSize:64, fontWeight: "bold", marginVertical:20}}>
                Login
            </Text>

            <View style={{backgroundColor:"white", height:700, width:460, borderTopLeftRadius:130, paddingTop:100, alignItems:"center"}}> 
                <Text style={{fontSize: 40, color:"#006A42", fontWeight: "bold"}}>
                    Welcomne Back
                </Text>

                <Text style={{color: 'grey', fontSize: 19, fontWeight: "bold", marginButtom:20}}>
                    Login to Your Account
                </Text>

                <Field 
                placeholder="Email / UserName" 
                keyboardType={"email-address"} 
                />

                <Field placeholder="Password" secureTextEntry={true} />

                <View style={{alignItems: "flex-end", width: "78%", paddingRight: 16, marginBottom: 200}}>
                    <Text>
                           Forgot Password ?
                    </Text>                
                </View>
                
                <Btn textColor="white" bgColor={"#006A42"} btnLabel="Login" />
                <View>
                    <Text>Don't Have an account ?</Text>
                    <TouchableOpacity onPress={()=> props.navigation.navigate("Signup")}>
                       <Text style={{color: "#006A42" , fontWeight: "bold" , fontSize:16}}>Signup</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    </Background>
)
}



export default Login