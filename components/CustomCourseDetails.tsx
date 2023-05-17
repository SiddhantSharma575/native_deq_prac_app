import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import CourseCard from './CourseCard';
import DemandCourseComponent from './DemandCourseComponent';


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
  switchNo: number;
  courseLiveCards : CardStateType[]
}

const liveCourseArray: CardStateType[] = [
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
]




class CustomCourseDetails extends Component<{}, CourseDetailsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      switchNo: 1,
      courseLiveCards : liveCourseArray
    };
  }
  render(): React.ReactNode {
    return (
      <View style={styles.course__details__container}>
        <View style={styles.switch__bar}>
          <TouchableOpacity
            style={[styles.switch, this.state.switchNo === 1 && styles.active]}
            onPress={() => this.setState({switchNo: 1})}>
            <Text
              style={[
                styles.text,
                this.state.switchNo === 1 && styles.activetext,
              ]}>
              Live
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.switch, this.state.switchNo === 2 && styles.active]}
            onPress={() => this.setState({switchNo: 2})}>
            <Text
              style={[
                styles.text,
                this.state.switchNo === 2 && styles.activetext,
              ]}>
              On Demand
            </Text>
          </TouchableOpacity>
        </View>
        {this.state.switchNo === 1 && 
        <FlatList
         data={this.state.courseLiveCards}
         renderItem={({item}) => (
          <CourseCard cardImg={item.cardImg}  ratingText={item.ratingText} badgeText={item.badgeText}
           badgeColor={item.badgeColor} mainText={item.mainText} otherText={item.otherText} btnText={item.btnText} />
         )}
         horizontal
         />
        }
        {
          this.state.switchNo === 2 && 
           <DemandCourseComponent />
        }
      </View>
    );
  }
}

export default CustomCourseDetails;

const styles = StyleSheet.create({
  course__details__container: {
    marginTop: 10,
    width : "100%"
  },
  switch__bar: {
    flexDirection: 'row',
  },
  switch: {
    width: '50%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FEE7D7',
    padding: 10,
  },
  active: {
    borderBottomColor: '#FD6F09',
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: '#FEA76F',
  },
  activetext: {
    color: '#FD6F09',
  },
});
