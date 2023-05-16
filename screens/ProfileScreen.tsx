import  {Component} from "react";
import {FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View} from "react-native"
import CustomHeader from "../components/CustomHeader";
import CustomDetailItem from "../components/CustomDetailItem";

type TabType =  {
    id : number;
    name : string;
    isActive : boolean
}

type ProfileScreenState = {
    tabs : TabType[]
}
type CustomDetailsTypes = {
    id : number,
    leftIcon : any,
    content : string,
    rightIcon? : any,
    rightContent? : any,
}

const listData : CustomDetailsTypes[] = [
    {
        id: 1,
        leftIcon : require("../assets/username.png"),
        content : "Shruti Mishra"
    },
    {
        id: 2,
        leftIcon : require("../assets/cake.png"),
        content : "12-02-1996"
    },
    {
        id: 3,
        leftIcon : require("../assets/gender.png"),
        content : "Female"
    },
    {
        id: 4,
        leftIcon : require("../assets/map.png"),
        content : "Bengaluru, Karnatka"
    },
    {
        id: 5,
        leftIcon : require("../assets/call.png"),
        content : "+91-8527824755"
    },
    {
        id: 6,
        leftIcon : require("../assets/mail.png"),
        content : "mishra.shruti.93@gmail.com"
    },
    {
        id: 7,
        leftIcon : require("../assets/password.png"),
        content : "Change Password",
    },
    {
        id : 8,
        leftIcon : require("../assets/signout.png"),
        content : "Sign Out"
    }
    
]

const tabData : TabType[] = [
    {
        id : 1,
        name : "Account Details",
        isActive : true
    },
    {
        id : 2,
        name : "Course Details",
        isActive : false
    },
    {
        id : 3,
        name : "Job Details",
        isActive : false
    }
]


class ProfileScreen extends Component <{}, ProfileScreenState>  {
    constructor(props : {}){
        super(props);
        this.state = {
            tabs : tabData
        }
    }

    handleTab(id : number) {
       this.setState({
        tabs : this.state.tabs.map((tab) => {
            if(tab.id === id) {
                const newTab = {
                    ...tab,
                }
                newTab.isActive = true;
                return newTab;
            }else {
                const newTab = {
                    ...tab
                }
                newTab.isActive = false;
                return  newTab;
            }
        })
       })  
    }
    componentDidMount(): void {
        this.setState({
            tabs : this.state.tabs.map((tab) => {
                if(tab.id === 1) {
                    const newTab = {
                        ...tab,
                    }
                    newTab.isActive = true;
                    return newTab;
                }else {
                    const newTab = {
                        ...tab
                    }
                    newTab.isActive = false;
                    return  newTab;
                }
            })
           })  
    }
    render() {
        return (
            <View style={styles.profile__container}>
                <CustomHeader />
                
                <View style={styles.prfile__info__section}>
                    <View style={styles.profile__image__sec}>
                        <Image source={require("../assets/avatar.png")} />
                        <Image source={require("../assets/edit.png")} style={styles.edit__image} />
                    </View>
                    <View style={styles.profile__bottom__sec}>
                        <Text style={styles.text1} >Good Morning</Text>
                        <Text style={styles.text2}>Shruti Mishra</Text> 
                        <Text style={styles.text3}>Profile Score 35%. <Text style={styles.text3Inner} >Complete your profile.</Text></Text>
                    </View>
                    <View style={styles.proflie__tab__navigator}>
                        {
                            this.state.tabs.map((tab) => (
                                <TouchableOpacity style={[styles.tab1, tab.isActive && styles.active]} onPress={() => this.handleTab(tab.id)}>
                                       <Text style={[styles.txt, tab.isActive && styles.active_text]}>{tab.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    <View style={styles.edit_icon_sec}>
                        <Image source={require("../assets/edit.png")} style={styles.edit__img__st} />
                    </View>
                </View>
                <View style={{flex : 1}}>
                <FlatList
                 data={listData}
                 renderItem={({item}) => (
                    <CustomDetailItem leftIcon={item.leftIcon} content={item.content} />
                 )}
                 keyExtractor={item => item.id.toString()}  
                 
                />  
                </View> 
            </View>
        )
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    profile__container : {
     flex:1
    },
    prfile__info__section : {
        justifyContent : "center",
        alignItems : "center"
    },
    profile__image__sec : {
        justifyContent : "center",
        alignItems : "center",
        position : "relative"
    },
    edit__image : {
        width : 20,
        height: 20,
        position : "absolute",
        bottom : 7,
        right : 5      
    },
    profile__bottom__sec :{
        alignItems :"center",
        justifyContent : "center"
    },
    text1 : {
        fontFamily : "Montserrat",
        fontWeight : "400",
        fontSize : 14,
        textAlign :  "center",
        lineHeight : 16,
        color : "#000000",
        marginTop : 18
    },
    text2 : {
        fontFamily: 'Montserrat',
        fontWeight : "500",
        fontSize : 24,
        lineHeight : 34,
        color: "#000000",
        textAlign : "center",
        marginTop :10
    },
    text3 : {
        color : "#000000",
        fontFamily: 'Montserrat',
        fontStyle : "normal",
        fontWeight : "400",
        fontSize : 10,
        textAlign :  "center",
        lineHeight : 10,
        marginTop : 10
    },
    text3Inner : {
        textDecorationLine : "underline",
        lineHeight : 10,
        textDecorationColor : "#000000",
        fontWeight : "600"      
    },
    proflie__tab__navigator : {
        flexDirection : "row",
        width : "90%",
        height: 40,
        marginHorizontal: 10,
        marginVertical : 10,
        backgroundColor: "#FEE7D7",
        borderRadius : 20,
        marginTop : 40
    },
    tab1 : {
        flex : 1,
        alignItems :  "center", 
        justifyContent : "center"
    },
    txt: {
        color : "#FD6F09",
    },
    active : {
        width : "30%",
        backgroundColor : "#FD6F09",
        borderRadius : 20
    },
    active_text : {
        color: "#FFFFFF"
    },
    edit_icon_sec : {
        width : "100%",
        alignItems : "flex-end",
        marginRight : "13%",
        marginTop : 16
    },
    edit__img__st : {
        width : 20,
        height : 20
    }
})