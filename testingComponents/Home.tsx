import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import Users from './Users';
import Profile from './Profile';

interface HomeState {
    data:  string
}

export class Home extends Component <{}, HomeState> {
  constructor(props : {}) {
    super(props);
    this.state = {
        data : ''
    }
  }
  
  componentDidMount(): void {
      Users.all().then((data) => {
        console.log("Check Api Data", data)
      })
  }

  change(x : string) {
    // return x * 10;
    this.setState({data : x})
  }
  render() {
    return (
      <View style={{flex : 1, justifyContent:  "center" ,alignItems : "center"}}>
        {/* <TextInput keyboardType="number-pad" testID={"username"} onChangeText={(x) => this.change(Number(x))} style={{backgroundColor : "gray", borderRadius : 15}} placeholder='Enter Number' /> */}
       {/* <TextInput testID="username" onChangeText={(text) => this.change(text)} style={{ borderRadius : 15, width : "100%", height : 44, borderColor : "#000", borderWidth : 0.50}} placeholder="Enter Username" /> */}
        {/* <TextInput testID="password" onChangeText={(text) => this.change(text)} style={{ borderRadius : 15, width : "100%", height : 44, borderColor : "#000", borderWidth : 0.50}} placeholder="Enter Password" /> */}

        <Profile data="Just Testing..." /> 
      </View>
    )
  }
}

export default Home;
