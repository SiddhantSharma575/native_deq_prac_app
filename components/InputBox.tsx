import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
interface InputBoxProps {
    placeholderText : string;
    secureTextEntry? : boolean;
    rightIcon?: any;
    value : string;
    onChangeText : (text : string) => void 
}

export class InputBox extends Component<InputBoxProps, {}> {
  constructor(props : InputBoxProps) {
    super(props)

  }
  render() {
    return (
      <View style={styles.input__box__container}>
         <TextInput value={this.props.value} placeholder={this.props.placeholderText} secureTextEntry={this.props.secureTextEntry} onChangeText={this.props.onChangeText} style={styles.main__input}/>
         <View style={styles.hr}></View>
      </View>
    )
  }
}

export default InputBox;

const styles = StyleSheet.create({
    input__box__container : {
        width :"90%",
        marginLeft : "5%",
        marginRight : "5%",
        // borderWidth: 1,
        // borderColor : "red" marginTop  : "10%"
    },
    main__input : {

    },
    hr : {
        backgroundColor:  "#FEE7D7",
        height : Dimensions.get("window").height  * 0.001
    }
})
