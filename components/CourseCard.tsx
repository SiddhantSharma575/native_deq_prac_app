import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BadgeSection from './BadgeSection';
import CustomCardButton from './CustomCardButton';

interface CardPropsType {
  cardImg : any;
  ratingText : number;
  badgeText : string;
  badgeColor : string;
  mainText : string;
  otherText: string;
  btnText : string
}


class CourseCard extends React.Component<CardPropsType> {
  constructor(props : CardPropsType) {
    super(props)
  }

  render() {
    return (
      <View style={styles.card__container}>
        <View style={styles.image__section}>
          <Image
            source={this.props.cardImg}
            style={styles.cart__img}
          />
          <View style={styles.ratingSection}>
          <Image source={require("../assets/star.png")} />
          <Text style={styles.ratingSecText}>{this.props.ratingText}</Text>
          </View>
          <View style={styles.bageSection}>
          <BadgeSection badgeText={this.props.badgeText} badgeColor={this.props.badgeColor}  />
          </View>
          
        </View>
        <View style={styles.sectionBottomView}>
          <View style={styles.sec1}>
            <Text style={styles.sec1Text}>{this.props.mainText}</Text>
          </View>
          <View style={styles.sec2}>
            <Text style={styles.sec2Text} >{this.props.otherText}</Text>
          </View>
            <View style={{alignItems : "flex-end", marginRight : 15}}>
               <CustomCardButton btnText={this.props.btnText} />
            </View>
        </View>
      </View>
    );
  }
}
export default CourseCard;

const styles = StyleSheet.create({
  card__container: {
    // width: '100%',
    height: 270,
    backgroundColor: '#fff',
    elevation: 3,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image__section: {
    width: '100%',
    height : "55%",
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor:'rgba(0,0,0,0.5)',
    position : "relative"
 },
  cart__img: {
    width : "100%",
    height : "100%",
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    opacity : 0.4
  },
  ratingSection : {
    position: "absolute",
    flexDirection : "row",
    alignItems : "center",
    left: 15,
    top : 15
  },
  ratingSecText : {
    color : "#fff",
    marginLeft : 3
  },
  bageSection : {
    position : "absolute",
    right: 15,
    top : 15,    
  },
  sectionBottomView : {
    marginTop : 10
  }, 
  sec1: {
   width : 140,
   height: 35 ,
   marginHorizontal : 12,
  //  marginVertical :  10
  },
  sec1Text : {
    fontWeight : "400",
    // color : "",
    fontSize : 14,
    lineHeight : 15,
    color: "#282F3E"
  },
  sec2: {
    width : "100%",
    height : 20,
    marginHorizontal : 12,
    marginTop : 10,
  },
  sec2Text  : {
    fontSize : 12,
    fontWeight : "500",
    lineHeight : 12,
  }
});
