import React, {Component} from "react";
import {View, Text, StyleSheet, FlatList} from "react-native"
import CourseCard from "./CourseCard";

interface CardStateType {
    cardImg : any;
    ratingText : number;
    badgeText : string;
    badgeColor : string;
    mainText : string;
    otherText: string;
    btnText : string
  }
  
interface CourseDetailsState {
    courseDemandCards : CardStateType[]
}

const demandCourseArray: CardStateType[] = [
    {
      cardImg : require("../assets/sample.png"),
      ratingText : 4.0,
      badgeText : "22 May- 24 May",
      badgeColor : "#FEE7D7",
      mainText : "Social Media Management",
      otherText : "By Sayef Mamud, PixelCo",
      btnText : "Attend Now"
    },
    {
      cardImg : require("../assets/sample3.png"),
      ratingText : 4.0,
      badgeText : "60 Min",
      badgeColor : "#E7E7FE",
      mainText : "Fundamental of Pharmacy",
      otherText : "By Linda Martin",
      btnText : "23:45:23"
    },
    {
        cardImg : require("../assets/html.png"),
        ratingText : 4.0,
        badgeText : "4.0",
        badgeColor : "#FEE7D7",
        mainText : "HTML5",
        otherText : "By Mohit Yadav",
        btnText : "Study Now"   
    },
    {
        cardImg : require("../assets/css.png"),
        ratingText : 3.5,
        badgeText : "3.5",
        badgeColor : "#FEE7D7",
        mainText : "Image Editing",
        otherText : "By Linda Martin",
        btnText : "Study Now"   
    }
  ]
  
  



class DemandCourseComponent extends Component<{}, CourseDetailsState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            courseDemandCards : demandCourseArray
        }
    }
    render() {
        return(
                <FlatList
                style={{marginBottom : 50}}
                data={this.state.courseDemandCards}
                renderItem={({item}) => (
                    <CourseCard cardImg={item.cardImg} badgeColor={item.badgeColor} badgeText={item.badgeText} mainText={item.mainText} otherText={item.otherText} ratingText={item.ratingText} btnText={item.btnText}   />
                )}
                numColumns={2}
                 />
        )
    }
}

export default DemandCourseComponent;

const styles = StyleSheet.create({

})