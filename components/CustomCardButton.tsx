import React,{Component} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
interface CustomCardButtonProps {
    btnText : string
}

class CustomCardButton extends Component<CustomCardButtonProps> {

    render() {
        console.log(this.props.btnText)
        return (
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.btnText}>{this.props.btnText}</Text>
            </TouchableOpacity>
        )
    }
}

export default CustomCardButton;
const styles = StyleSheet.create({
    buttonContainer : {
        width : 110,
        height : 36,
        backgroundColor: "#0F14AE",
        borderRadius : 16,
        alignItems :"center",
        justifyContent : "center",
    },
    btnText : {
        color : "#fff"
    }
})