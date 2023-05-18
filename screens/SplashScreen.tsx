import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.splashContainer}>
         <View style={styles.top1}></View>
         <Image source={require("../assets/splash.png")} style={styles.splashImg} />
      </View>
    )
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
    splashContainer : {
        flex : 1,
        justifyContent  : "center",
        alignItems: "center",
        backgroundColor :"#FFFFFF"
    },
    splashImg : {
        width : 260,
        height : 270,
        resizeMode : "contain"
    },
    top1 : {
        width : 85,
        height: 85,
        backgroundColor: "linear-gradient(156.11deg, #2C3AD6 15.35%, #0406A1 89.63%)",
    }    
})

