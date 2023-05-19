import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class BottomSheetCont extends Component {
  render() {
    return (
      <>
         <View style={{height : 150, backgroundColor :"#fff", borderRadius: 20}}>
            <View style={{height : "30%"}}></View>
            <View style={{width : "100%", height : 1, backgroundColor :  "#EAEBFF"}} />
            <View style={{height : "30%"}}></View>
            <View style={{width : "100%", height : 1, backgroundColor :  "#EAEBFF"}} />
         </View>
         <View style={{height : 20}} />
         <View style={{height : 50, backgroundColor : "#fff", borderRadius : 20}}>
         </View>
      </>
    )
  }
}

export default BottomSheetCont
