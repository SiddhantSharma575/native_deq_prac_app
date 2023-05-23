import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button__container}>
        <Text style={styles.btn_Text}> Verify</Text>
      </TouchableOpacity>
    )
  }
}

export default CustomButton;
const styles = StyleSheet.create({
    button__container : {
        width : "90%",
        marginLeft : "5%",
        marginRight : "5%",
        height : 52,
        borderRadius : 26,
        backgroundColor : "#0F14AE",
        alignItems :"center", 
        justifyContent : "center",
        position : "absolute",
        bottom:  30
    },
    btn_Text : {
        fontWeight : "600",
        color : "#ffffff",
        fontSize : 16
    }
})