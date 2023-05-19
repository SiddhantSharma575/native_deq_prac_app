import React, {Component} from "react"
import {View, Text, StyleSheet} from "react-native"

interface BadgeSectionProps {
    badgeText : string,
    badgeColor  : string,
    badgeTextColor : string
    
}
 
class BadgeSection extends Component<BadgeSectionProps> {
    render() {
        return (
            <View style={[styles.badgeContainer,{backgroundColor : this.props.badgeColor}]}>
                <Text style={[styles.badgeText, {color : this.props.badgeTextColor}]}>{this.props.badgeText}</Text>
            </View>
        )
    }
}

export default BadgeSection;

const styles = StyleSheet.create({
    badgeContainer:  {
         padding : 10,
        // backgroundColor: "#FEE7D7",
        // alignItems : "center",
        // justifyContent: "center",
        borderRadius : 16
    },
    badgeText : {
        // color: "#FD6F09",
        fontSize : 10,
        lineHeight : 10,
        fontWeight : "500",

    }
})