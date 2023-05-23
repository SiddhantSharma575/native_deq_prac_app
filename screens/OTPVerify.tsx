import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import OtpBox from '../components/OtpBox';
import CustomButton from '../components/CustomButton';

export class OTPVerify extends Component {
  render() {
    return (
      <View style={{flex : 1}}>
          <CustomHeader />
          <View style={styles.header_container}>
            <Text style={styles.header__text}>Verify OTP</Text>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.text1}  >We have sent a 4 digit OTP to</Text>
            <View style={styles.inner__container}>
              <Text style={styles.text2}>9999999999</Text>
              <TouchableOpacity>
              <Image source={require("../assets/edit.png")} style={styles.edit__img} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop : "10%", flexDirection : "row"}}>
           <OtpBox />
           <OtpBox />
           <OtpBox />
           <OtpBox />
          </View>
          <View style={styles.bottom_text_container}>
            <Text style={styles.bottom_text1}>Didn’t Receive OTP?</Text>
            <View style={styles.bottom_text_inner_container}>
            <Text style={styles.bottom_text2} >00:26 </Text>
            <Text style={styles.bottom_text3} >RESEND</Text>
            </View>
          </View>
          <CustomButton />
      </View>
    )
  }
}

export default OTPVerify;

const styles = StyleSheet.create({
    header_container: {
        width : "90%",
        marginTop : "5%",
        marginLeft : "5%",
    },
    header__text : {
        fontWeight : "400",
        fontSize : 24,
        color : "#000000",
        lineHeight : 32
    },
    inner__container : {
      marginTop : 10,
      flexDirection : "row",
      alignItems : "center"
    },
    edit__img : {
      width : 18,
      height : 18,
      marginLeft : 10
    },
    text1 :{ 
      fontWeight : "400",
      fontSize : 12,
      lineHeight : 14,
      color: "#9D9D9D"

    },
    text2 :  {
      fontSize:  16,
      fontWeight:  "600",
      color : "#000000",
      lineHeight : 20
    }, 
    bottom_text_container : {
      flexDirection : "row",
      marginLeft : "5%",
      marginRight : "5%",
      justifyContent : "space-between",
      marginTop :  12
    },
    bottom_text_inner_container :{
      flexDirection : "row",
      justifyContent:  "center",
      alignItems : "center"
    },
    bottom_text1 : {
      color : "#000000",
      fontSize : 12,
      fontWeight : '400'
    },
    bottom_text2 : {
      color:  "#FD6F09",
      fontSize: 12,
      fontWeight : '700'
    },
    bottom_text3: {
      color : "#9D9D9D",
      fontSize:  12,
    }
})
