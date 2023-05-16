import  {Component, ReactNode} from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native"

class CustomHeader extends Component {
    render() {
        return (
            <View style={styles.header__container}>
                <TouchableOpacity style={styles.image__container}>
                    <Image source={require("../assets/BackButtonback.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.image__container}>
                    <Image source={require("../assets/setting.png")}  />
                </TouchableOpacity>
            </View>
        )
    }
}

export default CustomHeader;

const styles = StyleSheet.create({
    header__container : {
        flexDirection : "row",
        justifyContent :"space-between",
        width : "100%",
        height : 50
    },
    image__container : {

    }
})