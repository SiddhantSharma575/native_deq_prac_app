import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.splashContainer}>
        <View style={styles.top1}></View>
        <View style={styles.top2}></View>
        <Image
          source={require('../assets/splash.png')}
          style={styles.splashImg}
        />
        <View style={styles.top3}></View>
      </View>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  splashImg: {
    width: 260,
    height: 270,
    resizeMode: 'contain',
  },
  top1: {
    width: 86,
    height: 85,
    backgroundColor: 'rgb(24,32,187)',
    borderRadius: 50,
    position: 'absolute',
    top: 65,
    left: -43,
  },
  top2: {
    width: 19,
    height: 19,
    backgroundColor: 'rgb(89,96,208)',
    borderRadius: 50,
    position: 'absolute',
    top: 71,
    left: 51,
  },
  top3: {
    width: 142,
    height: 142,
    backgroundColor: 'rgb(255,157,61)',
    borderRadius: 80,
    position: 'absolute',
    bottom: -50,
    right: -55,
  },
});
