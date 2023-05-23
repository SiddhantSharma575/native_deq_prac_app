import {StatusBar, Text, View} from 'react-native';
import Counter from './components/Counter';
import Users from './components/Users';
import ProfileScreen from './screens/ProfileScreen';
import {applyMiddleware, Store, createStore} from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Article from './components/Article';
import Home from './testingComponents/Home';
import SplashScreen from './screens/SplashScreen';
import FirstTest from './testingComponents/FirstTest';
import SelectUserType from './screens/SelectUserType';
import LoginScreen from './screens/LoginScreen';
import ForgetPassword from './screens/ForgetPassword';
import OTPVerify from './screens/OTPVerify';
import HomeScreen from './screens/HomeScreen';

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor={'#0c67ab'} barStyle={"light-content"} />
        {/* <ProfileScreen /> */}
        {/* <Article /> */}
        {/* <Home /> */}
        {/* <SplashScreen /> */}
        {/* <FirstTest /> */}
        {/* <SelectUserType /> */}
        {/* <LoginScreen /> */}
        {/* <ForgetPassword /> */}
        {/* <OTPVerify /> */}
        <HomeScreen />
      </View>
    </Provider>
  );
};

export default App;
