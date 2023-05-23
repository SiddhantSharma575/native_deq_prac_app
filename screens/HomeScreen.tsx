import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import CustomHomeSlider from '../components/CustomHomeSlider';

export class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex  : 1}}>
        <ScrollView>
              <View style={styles.top__header}>
                  <Image style={styles.user_img} source={require("../assets/home_user.png")} />
                  <View>
                    <Text style={styles.text1} >Hi, Shruti</Text>
                    <Text style={styles.text2} >Let’s start learning</Text>
                  </View>
                  <View style={{alignItems : "center", flexDirection : "row", flex : 1, justifyContent : "flex-end", marginRight : "5%"}}>
                     <Image source={require("../assets/search_final.png")} style={styles.top_img} />
                     <Image source={require("../assets/grp__noti.png")} style={styles.top_img}  />
                  </View>
              </View>
              <View>
                  <CustomHomeSlider />
              </View>
        </ScrollView>
      </View>
    )
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
    top__header  : {
        width : "100%",
        height : 162,
        backgroundColor :"#0c67ab",
        flexDirection : "row",
        alignItems :'center'
    },
    user_img : {

    }, 
    text1:  {
        fontSize : 24,
        fontWeight : "600",
        lineHeight : 24,
        color : "#ffffff"
    },
    text2 : {
        fontSize : 12,
        fontWeight : '400',
        lineHeight :15,
        color : "#ffffff"
    },
    top_img : {
        width : 32,
        height : 32,
        marginRight : 15
    }
})
