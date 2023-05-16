import {Component} from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type CustomDetailsProps = {
  leftIcon : any,
  content : string,
  rightIcon? : any,
  rightContent? : any,
  rightIconOnPress? : any
}

class CustomDetailItem extends Component<CustomDetailsProps> {
  constructor(props : CustomDetailsProps) {
    super(props)
  }


  render() {
    console.log(this.props.content)
    return(
      <View style={{height : 50,  marginVertical : 10}}>
          <View style={{flexDirection : 'row', flex : 1, alignItems  : "center"}}> 
          <Image 
           style={{
            height : 36,
            width : 36,
            marginHorizontal : 16,
            marginVertical : 12,
            resizeMode:'contain'
           }}
           source={this.props.leftIcon}
          />
          <View style={{
            flexDirection : "row",
            flex :  1,
            alignItems : "center",
            height : 45,
            borderBottomColor : "#979797",
            borderBottomWidth :  0.5,
            marginRight : 15
          }}>
            <Text style={styles.item}>
            {this.props.content}
            </Text>

          
            {this.props.rightIcon && <Image
            style={{
              height: 20,
              width: 20,
              marginRight:16
            }}
            source={this.props.rightIcon}
          />
          }

          {this.props.rightContent != null && this.props.rightContent !== "" && <Text onPress={this.props.rightIconOnPress} style={styles.rightContent}>
            {this.props.rightContent}
          </Text>
          }
          </View>
      </View>
      </View>
    )

  }
}


export default CustomDetailItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#00000000",
    color: "#000000",
    fontSize: 14,
    fontWeight: "normal",
    flex: 1,
    flexDirection: "row"
  },
  rightContent: {
    backgroundColor: "#00000000",
    color: "#222CC9",
    fontSize: 10,
    fontWeight: "normal",
    flexDirection: "row",
    marginRight:16
  },
  seprator: {
    backgroundColor: "#979797",
    height: 1
  }
});