import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CourseCard from './CourseCard';

interface CourseDetailsState {
  switchNo: number;
}

class CustomCourseDetails extends Component<{}, CourseDetailsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      switchNo: 1,
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
        <CourseCard />
      </View>
    );
  }
}

export default CustomCourseDetails;

const styles = StyleSheet.create({
  course__details__container: {
    marginTop: 10,
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
