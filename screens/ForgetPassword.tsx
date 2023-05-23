import React, { Component } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Dimensions } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import InputBox from '../components/InputBox';

interface ForgetPasswordState {
    forgetPass: string
}

export class ForgetPassword extends Component<{}, ForgetPasswordState> {
    constructor(props : {}) {
        super(props)
        this.state = {
            forgetPass : ""
        }
    }
  render() {
    return (
        <View style={styles.forget__pass__container}>
      <ScrollView >
        <CustomHeader />
        <View style={styles.header_container}>
            <Text style={styles.header__text} >Forgot Password</Text>
        </View>
        <View style={styles.detail__container}>
            <Text style={styles.detail__text}>Enter the email address associated with your account and we will email you OTP on registered email address.</Text>
        </View>
        <View style={{marginTop : "10%"}}>
        {this.state.forgetPass && <Text style={styles.txt1}>Enter Your Mobile Number/Email Id*</Text>}
            <InputBox value={this.state.forgetPass} placeholderText="Enter Your Mobile Number/Email Id*" onChangeText={(text) => this.setState({...this.state, forgetPass: text })}  />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btn__container}>
             <Text style={styles.btn__text} >Send OTP</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ForgetPassword;

const styles = StyleSheet.create({
    forget__pass__container : {
        flex : 1,
        // backgroundColor : "red",
        // height: '100%',
        position : "relative"
    },
    header_container : {
        height : Dimensions.get("window").height * 0.06,
        justifyContent : "center",
       //alignItems : "center"
       marginLeft : "5%"
    },
    txt1 : {
        paddingLeft: 15,
        color :"#9D9D9D"

    },
    header__text : {
        fontSize : 24,
        fontWeight: "400",
        color : "#000000",
        lineHeight : 30
    },
    detail__container : {
        marginLeft : "5%",
        marginRight: "5%",
    },
    detail__text : {
        fontSize : 12,
        fontWeight : "400",
        lineHeight : 14,
        color  : "#9D9D9D",
        alignItems : 'center'
    },
    btn__container : {
        // flex : 1,
        position : "absolute",
        bottom : 15,
        left : "5%",
        right : "5%",
        justifyContent : "center",
        alignItems : 'center',
        backgroundColor : "#0F14AE",
        height : 52,
        borderRadius : 26
        // borderWidth: 1,
    },
    btn__text : {
       color : "#FFFFFF",
       fontSize : 16,
       fontWeight : "600",
       lineHeight : 20
    }
})
