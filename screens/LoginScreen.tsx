import React, {Component} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {Dimensions} from 'react-native';

interface LoginState {
  isHide: boolean;
  emailError: string;
  passwordError: string;
  email: string;
  password: string;
}

export class LoginScreen extends Component<{}, LoginState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isHide: false,
      emailError: '',
      passwordError: '',
      email: '',
      password: '',
    };
  }

  handleLogin() {
    // console.warn(this.state.email + ' ' + this.state.password);
    if (this.state.email === "") {
      this.setState({...this.state, emailError: 'error'});
      return;
    }
    if(this.state.password === "") {
      this.setState({...this.state, passwordError : "error"})
      return;
    }
  }
  render() {
    return (
      <ScrollView style={styles.login__container} testID="login-screen">
        <CustomHeader />
        <Text style={styles.header_text}>Login</Text>
        <View style={styles.input__container}>
          <View style={styles.input__inner__container}>
            <TextInput
              testID="email-input"
              value={this.state.email}
              placeholder="Enter Your Mobile Number/Email Id*"
              onChangeText={text =>{
                 this.setState({...this.state, email: text, emailError: ""})
                }
              }
            />
            <View style={styles.hr}></View>
            {this.state.emailError && (
              <Text style={styles.error_msg} testID="email-error">
                Please enter valid email id
              </Text>
            )}
          </View>
          <View style={styles.input__inner__container}>
            <View style={styles.input_pass_cont}>
              <TextInput
                testID="password-input"
                value={this.state.password}
                secureTextEntry={this.state.isHide === false}
                placeholder="Enter Password*"
                onChangeText={text =>{
                  this.setState({...this.state, password: text, passwordError : ""})
                }
              }
              />
              <TouchableOpacity
                testID="pass-img"
                onPress={() =>
                  this.setState({...this.state, isHide: !this.state.isHide})
                }>
                <Image
                  style={styles.view_pass_img}
                  source={
                    this.state.isHide
                      ? require('../assets/view.png')
                      : require('../assets/hide_pass.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <View style={styles.hr}></View>
            {this.state.passwordError && (
              <Text style={styles.error_msg} testID='password-error'>
                Password entered is incorrect. Please enter correct password
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={{alignItems: 'flex-end', marginRight: '10%', marginTop: 10}}>
          <Text style={{color: '#FE5007', fontSize: 14, fontWeight: '500'}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          testID="btn"
          style={styles.btn__container}
          onPress={() => this.handleLogin()}>
          <Text style={styles.btn_text}>Login</Text>
        </TouchableOpacity>

        <View style={styles.seperator__view}>
          <View style={styles.common_line}></View>
          <Text
            style={{
              marginHorizontal: 20,
              fontWeight: '400',
              fontSize: 16,
              color: '#000000',
            }}>
            Or login with
          </Text>
          <View style={styles.common_line}></View>
        </View>

        <View style={styles.social__container}>
          <TouchableOpacity>
            <Image
              style={styles.social__img}
              source={require('../assets/google.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.social__img}
              source={require('../assets/fb.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.social__img}
              source={require('../assets/apple.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottom_text}>
          <Text style={styles.outer_text}>Don’t have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.inner_text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  login__container: {
    flex: 1,
  },
  header_text: {
    fontSize: Math.round(Dimensions.get('window').width * 0.05),
    color: '#000000',
    fontWeight: '400',
    lineHeight: 32,
    padding: 20,
    fontFamily: 'Montserrat',
  },
  input__container: {
    //   height  : "25%",
    //   justifyContent : "space-around",
    //   backgroundColor : "red"
    marginTop: Dimensions.get('window').height * 0.05,
  },
  input__inner__container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height * 0.02,
  },
  input_pass_cont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hr: {
    width: '90%',
    height: 1,
    backgroundColor: '#FEE7D7',
  },
  view_pass_img: {
    marginRight: Dimensions.get('window').width * 0.03,
    width: Dimensions.get('window').width * 0.04,
    height: Dimensions.get('window').height * 0.04,
    resizeMode: 'contain',
  },
  error_msg: {
    fontSize: 12,
    color: '#FF0000',
    fontWeight: '400',
    alignItems: 'center',
    lineHeight: 12,
    padding: 5,
  },
  btn__container: {
    width: '90%',
    backgroundColor: '#0F14AE',
    alignSelf: 'center',
    padding: 20,
    alignItems: 'center',
    borderRadius: 26,
    marginTop: '30%',
  },
  btn_text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 20,
  },
  seperator__view: {
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  common_line: {
    width: '28%',
    height: 2,
    backgroundColor: '#FEE7D7',
  },
  social__container: {
    marginTop: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  social__img: {
    width: 26,
    height: 26,
  },
  bottom_text: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  outer_text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    alignItems: 'center',
  },
  inner_text: {
    color: '#0F14AE',
    fontWeight: '600',
  },
});
