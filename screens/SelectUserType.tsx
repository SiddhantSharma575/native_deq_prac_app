import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

interface SelectUserState {
  selected : string
}


class SelectUserType extends Component<{}, SelectUserState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selected : ""
    }
  }
  render() {
    return <View style={styles.sle__container}>
       <View style={{alignItems : "center", height : "20%", justifyContent : "flex-end", marginBottom
       : 10}}>
        <Text style={styles.main_Text}>Choose User Type</Text>
       </View>
       <View style={styles.section_1}>
         <Image style={styles.img} source={require("../assets/student_user.png")}  />
         <Text style={styles.mText}>Student</Text>
         <TouchableOpacity testID='stubtn' onPress={() => this.setState({selected : "student"})} style={[styles.custView, this.state.selected === "student" && styles.active]}>
           {this.state.selected === "student" && <View style={styles.inner}></View>}
         </TouchableOpacity>
       </View>
       <View style={styles.section_1}>
         <Image style={styles.img} source={require("../assets/Instructor_img.png")}  />
         <Text style={styles.mText}>Instructor</Text>
         <TouchableOpacity testID='insbtn' onPress={() => this.setState({selected :"instructor"})} style={[styles.custView,this.state.selected === "instructor" && styles.active]}>
            {this.state.selected === "instructor" && <View style={styles.inner}></View>}
         </TouchableOpacity>
       </View>
       <View style={styles.section_1}>
         <Image style={styles.img} source={require("../assets/User_img.png")}  />
         <Text style={styles.mText}>Recruiter</Text>
         <TouchableOpacity testID='recbtn' onPress={() => this.setState({selected : "recruiter"}) } style={[styles.custView, this.state.selected === "recruiter" && styles
        .active]}>
            {this.state.selected === "recruiter" && <View style={styles.inner}></View>}
         </TouchableOpacity>
       </View>
       <TouchableOpacity testID='btn' style={[styles.btn__container, this.state.selected === "" && {opacity : 0.5}]}> 
        <Text style={styles.btn_text}>Choose</Text>
      </TouchableOpacity>
    </View>;
  }
}

export default SelectUserType;

export const styles = StyleSheet.create({
  sle__container:  {
    flex : 1,
    // backgroundColor : "red"
    // alignItems : "center"
  },
  main_Text : {
    fontSize : 20,
    fontWeight : "800",
    color : "#000",
    lineHeight : 24
  },
  section_1 :{
    width : "95%",
    // marginLeft : "5%",
//marginRight : "5%",
    // height : 96,
    alignSelf : "center",
    padding : 10,
    borderRadius : 12,
    backgroundColor :"#dadada",
    flexDirection : "row",
    alignItems : "center",
    marginTop: 20,
    // alignSelf : "center"
  },
  img : {
    width : 72,
    height : 72,
    borderRadius : 50,
    marginLeft : 20
  },
  mText : {
    color: "#000000",
    fontWeight: "600",
    marginLeft : 16,
    fontSize : 18
  },
  custView  : {
    backgroundColor :  "#fff",
    width : 20,
    height : 20, 
    position : "absolute",
    right : 25,
    borderRadius : 50,
    alignItems : "center",
    justifyContent : "center",

    // padding : 10
  },
  active : {
    // backgroundColor: "red"
    borderWidth: 1,
    borderColor: "#FE5007"
  },
  inner : {
    width : 15,
    height : 15,
    borderRadius : 50,
    // padding : 10,
    backgroundColor : "#FE5007"
  },
  btn__container  : {
   width : "90%",
   height : 52,
   marginLeft : "5%",
   marginRight : "5%",
   alignItems : 'center',
   justifyContent : "center",
   backgroundColor : "#0F14AE",
   borderRadius : 26,
   position : 'absolute',
   bottom: 25
  },
  btn_text: {
    color : "#FFFFFF",
    fontWeight: "600",
    fontSize:  16
  }
})