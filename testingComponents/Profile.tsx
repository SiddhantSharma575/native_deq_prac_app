import React, { Component } from 'react'
import { Text, View } from 'react-native'

interface ProfileProps {
    data : string
}

class Profile extends Component<ProfileProps> {
  constructor(props:ProfileProps) {
    super(props)
  }  
  render() {
    return (
      <View>
         <Text>{this.props.data}</Text>
      </View>
    )
  }
}

export default Profile
