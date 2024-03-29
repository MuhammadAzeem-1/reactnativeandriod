import React  from "react";
import Background from "./Background";
import { Text, View, TouchableOpacity } from "react-native";
import Field from "./Field";
import Btn from "./Btn";


const Signup = (props) => {
    return (
       <Background>
          <TouchableOpacity
              onPress={() => props.navigation.navigate('Home')}>
              <Text
                style={{color: "#006A42", fontWeight: 'bold', fontSize: 16}}>
                Go to Home
              </Text>
            </TouchableOpacity>

        <View style={{alignItems: "center", width:460}}>
            <Text style={{
                color: "white",
                fontSize: 64,
                fontWeight: "bold",
                marginTop: 20
            }}> 
                Register
            </Text>

            <Text style={{color: "white", fontSize: 19, fontWeight: "bold", marginBottom: 20}}>
              Create a new Account
            </Text>

            <View style={{
                backgroundColor: "white",
                height: 700,
                width: 460,
                borderTopLeftRadius: 130,
                paddingTop: 50,
                alignItems: "center"
            }}> 
                <Field placeholder="First Name"/>
                <Field placeholder="Last Name"/>
                <Field placeholder="email / UserName" keyboardType={"email-address"}/>
                <Field placeholder="Contact Number" keyboardType={"number"}/>
                <Field placeholder="Password" secureTextEntry={true}/>
                <View style={{display: "flex", flexDirection: "row", width: "78%", paddingRight: 16}}>
                  <Text style={{color: "grey", fontSize: 16}}>By signing in, you agree to our</Text>
                  <Text style={{color: "#006A42", fontSize: 16, fontWeight: "bold"}}>Term & Condition</Text>
                </View>


                <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color: "#006A42", fontWeight: 'bold', fontSize: 16}}>
              Privacy Policy
            </Text>
          </View>

  <Btn
            textColor="white"
            bgColor={"#006A42"}
            btnLabel="Signup"
            Press={() => {
              alert('Accoutn created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: "#006A42", fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View> 





            </View>

            {/* 

        */}
         </View>
        
       </Background>
    ) 
}

export default Signup