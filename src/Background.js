import React, { Children } from "react";
import { View , ImageBackground } from "react-native";


const Background =({children})=>{
    return (
        <View>
            {/* <ImageBackground source={require("./assets/bg.jpg")} styles={{ height : "100%"}}/> */}
            <View style={{ backgroundColor: "lightblue" }}>
                {children}
            </View>
        </View>
    )
}


export default Background