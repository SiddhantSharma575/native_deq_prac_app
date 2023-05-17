import React, {Component} from "react"
import {View, Text, StyleSheet} from "react-native"

interface BadgeSectionProps {
    badgeText : string,
    badgeColor  : string
}
 
class BadgeSection extends Component<BadgeSectionProps> {
    render() {
        return (
            <View style={[styles.badgeContainer,{backgroundColor : this.props.badgeColor}]}>
                <Text style={styles.badgeText}>{this.props.badgeText}</Text>
            </View>
        )
    }
}

export default BadgeSection;

const styles = StyleSheet.create({
    badgeContainer:  {
        width : 80,
        height: 24,
        // backgroundColor: "#FEE7D7",
        alignItems : "center",
        justifyContent: "center",
        borderRadius : 16
    },
    badgeText : {
        color: "#FD6F09",
        fontSize : 8,
        lineHeight : 8
    }
})