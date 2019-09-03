import React from 'react'
import {
  View,
  Text,
  ScrollView,
  Image
} from "@react-native";
import { useSelector } from "react-redux";
//import Background from "./Logo1.png";



function Heading () {
  const currentUsername = useSelector(state => state.auth.login.username);
const HEADER_MAX_HEIGHT = 120
// const HEADER_MIN_HEIGHT = 70
const PROFILE_IMAGE_MAX_HEIGHT = 80
// const PROFILE_IMAGE_MIN_HEIGHT = 40
return(

    <View style={{flex: 1}}>
        <View style = {{
            position: 'absolute',
            top:0,
            left:0,
            right:0,
            backgroundColor: 'lightskyblue',
            height:HEADER_MAX_HEIGHT
        }}>

        </View>
        <ScrollView style={{flex:1}}>
            <View style={{
                height:PROFILE_IMAGE_MAX_HEIGHT,
                widht:PROFILE_IMAGE_MAX_HEIGHT,
                borederRadius:PROFILE_IMAGE_MAX_HEIGHT/2,
                borderColor: "white",
                overflow: 'hidden',
                marginTop: HEADER_MAX_HEIGHT - ( PROFILE_IMAGE_MAX_HEIGHT / 2 ),
                marginLeft: 10
            }}>
                <Image source={require('./Logo1.png')}
                    style={{ flex: 1, width: null, height: null}}></Image>
            </View>
            <View>
                <Text style={{fontWeight:'bold',fontSize:26,paddingLeft:10}}>{currentUsername}</Text>
            </View>
        </ScrollView>

    </View>

)

}

export default Heading;