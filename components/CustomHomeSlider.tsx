import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export class CustomHomeSlider extends Component {

  render() {
    return (
      <View style={styles.slider__container}>
          <Image resizeMode={"stretch"} style={styles.slider__img} source={require("../assets/sample3.png")} />    
          <View style={styles.slider__top}>
          <Text style={styles.sliderText1}>Adobe illustrator training course</Text>
          <Text style={styles.sliderText2}>Ms. Niket Nayak</Text>
          <View style={{flexDirection  : "row", alignItems  :"center", marginTop : 8}}>
            <Image source={require("../assets/star.png")} />
            <Text style={styles.slider_rating_text}>4.0</Text>
          </View>
          <View style={{flexDirection : "row", alignItems  :"center", marginTop : 8}}>
            <Text style={styles.price__text}>₹2,599</Text>
            <Text style={styles.price__text2}>₹4,599</Text>
          </View>
          <TouchableOpacity style={styles.slider_btn}>
              <Text style={styles.slider__btn_text}>Buy Now</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.slider__bottom}>
            <View style={styles.bottom__circle}></View>
            <View style={styles.bottom__circle}></View>
            <View style={styles.bottom__circle}></View>
            <View style={styles.bottom__circle}></View>
            <View style={styles.bottom__circle}></View>
          </View>
      </View>
    )
  }
}

export default CustomHomeSlider

const styles = StyleSheet.create({
    slider__container : {
        width : "100%",
        height: 200,
        backgroundColor : "#000000",
    },
    slider__img : {
        width : "100%",
        height : "100%",
        opacity : 0.5
    },
    slider__top : {
        position : "absolute",
        top : 28, 
        left : 18
    },
    sliderText1 : {
        fontWeight : "500",
        fontSize : 16,
        color  : "#ffffff",
        lineHeight : 16
    },
    sliderText2 : {
        fontSize : 12,
        lineHeight : 14,
        color : "#ffffff",
        fontWeight: "600"
    },
    slider_rating_text  : {
        fontSize   : 10,
        lineHeight : 12,
        fontWeight : "500",
        color : "#ffffff",
        marginLeft : 10
    },
    price__text :{
        fontWeight : "600",
        fontSize : 12,
        lineHeight : 15,
        color : "#ffffff",
    },
    price__text2 :  {
        fontWeight : "600",
        fontSize : 12,
        lineHeight : 15,
        color : "#ffffff",
        textDecorationLine : "line-through",
        marginLeft  : 10
    },
    slider_btn : {
        width : 84,
        height : 28,
        backgroundColor : "#FE5007",
        borderRadius: 20,
        alignItems : "center",
        justifyContent  : "center",
        marginTop:  8
    },
    slider__btn_text : {
        color : "#ffffff",
        fontSize : 10,
        fontWeight :"600",
        lineHeight :16
    },
    slider__bottom : {
        position : "absolute",
        bottom : 15,
        left : "40%",
        flexDirection: "row"
    },
    bottom__circle : {
        width : 6,
        height  : 6,
        backgroundColor : "#FE5007",
        marginLeft  : 15,
        borderRadius : 50
    }
})