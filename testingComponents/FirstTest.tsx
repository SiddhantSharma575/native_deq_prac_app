import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class FirstTest extends Component {
  render() {
    return (
      <View style={{flex : 1, alignItems : "center" }}>
        <Text testID='sample' style={styles.txt1}>Test Text Element</Text>
      </View>
    )
  }
}

export default FirstTest;

const styles = StyleSheet.create({
    txt1 : {
        fontSize : 23,
        color : "#000",
        marginTop : 15
    }
})