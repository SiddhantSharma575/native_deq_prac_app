import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export class OtpBox extends Component {
  render() {
    return (
      <TextInput
       maxLength={1}
       keyboardType="number-pad"
       style={styles.otp_input} 
       
      />
    )
  }
}

export default OtpBox

const styles = StyleSheet.create({
    otp_input : {
        width : 72,
        height : 72,
        borderColor : "#FEE7D7",
        borderWidth  : 1.5,
        borderRadius:  10,
        marginLeft : "5%",
        paddingLeft : 20,
        fontSize : 48,
        fontWeight : '600',
        color:  "#FD6F09",
        paddingTop : 5
    },
})