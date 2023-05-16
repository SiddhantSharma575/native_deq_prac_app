import { StatusBar, Text, View } from "react-native"
import Counter from "./components/Counter";
import Users from "./components/Users";
import ProfileScreen from "./screens/ProfileScreen";

const App = () => {
  return <View style={{flex : 1,backgroundColor : "#fff",
}}> 
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
     <ProfileScreen />
  </View>
}

export default App;