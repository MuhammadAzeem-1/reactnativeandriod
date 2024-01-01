import React  from "react";
import {View, StyleSheet, Text} from "react-native"
import Background from "./Background";
import Btn from "./Btn";

const Home = (props)=>{
return (
   <Background>
     <View style={{marginHorizontal: 40 , marginVertical: 100}}>  
         <Text style={{color:"white", fontSize:64}}>Let's Start</Text>
         <Text style={{color:"white", fontSize: 64, marginBottom: 40}}>Coding</Text>
         <Btn bgColor={"#2BB789"} textColor="white" btnLabel="Login" Press={()=> props.navigation.navigate("Login")}/> 
         <Btn bgColor={"white"} textColor="#006A42" btnLabel="Signup" Press={()=> props.navigation.navigate("Signup")} /> 
     </View>

   </Background>
)}

const styles = StyleSheet.create({})

export default Home;