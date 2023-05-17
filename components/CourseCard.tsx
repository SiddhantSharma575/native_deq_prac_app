import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

class CourseCard extends React.Component {
  render() {
    return (
      <View style={styles.card__container}>
        <View style={styles.image__section}>
          <Image
            source={require('../assets/sample.png')}
            style={styles.cart__img}
          />
        </View>
      </View>
    );
  }
}
export default CourseCard;

const styles = StyleSheet.create({
  card__container: {
    width: '50%',
    height: 270,
    backgroundColor: 'red',
    elevation: 3,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image__section: {
    width: '100%',
    height: 160,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cart__img: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
