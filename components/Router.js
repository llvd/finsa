import React from 'react';
import {
  Image,
  View,
  Text,
  Button
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Canteen from '../screens/Canteen';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import ClassPay from '../screens/ClassPay';
import PaymentHistory from '../screens/PaymentHistory';

const Stack = createStackNavigator();
const MaterialBottom = createMaterialBottomTabNavigator();


export default class Router extends React.Component {
  createTabs = () => {
    return (
      <MaterialBottom.Navigator
        activeColor="#11E69F"
        inactiveColor="#C0C6CF"
        options={{ headerShown: false }}
        barStyle={{ backgroundColor: 'white' }}
      >
        <MaterialBottom.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (focused ?
              <Image source={require('../assets/icon/tab/activeHome.png')} style={{ width: 24, height: 24 }} />
              :
              <Image source={require('../assets/icon/tab/inActiveHome.png')} style={{ width: 24, height: 24 }} />
            ),
          }} />
        <MaterialBottom.Screen
          name="Canteen"
          component={Canteen}
          options={{
            tabBarLabel: 'Kantin',
            tabBarIcon: ({ focused }) => (focused ?
              <Image source={require('../assets/icon/tab/activeCanteen.png')} style={{ width: 24, height: 24 }} />
              :
              <Image source={require('../assets/icon/tab/inActiveCanteen.png')} style={{ width: 24, height: 24 }} />
            ),
          }} />
        <MaterialBottom.Screen
          name="Payment"
          component={ClassPay}
          options={{
            tabBarLabel: 'Kelas Pay',
            tabBarIcon: ({ focused }) => (focused ?
              <Image source={require('../assets/icon/tab/activeClass.png')} style={{ width: 24, height: 24 }} />
              :
              <Image source={require('../assets/icon/tab/inActiveClass.png')} style={{ width: 24, height: 24 }} />
            ),
          }} />
        <MaterialBottom.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => (focused ?
              <Image source={require('../assets/icon/tab/activeProfile.png')} style={{ width: 24, height: 24 }} />
              :
              <Image source={require('../assets/icon/tab/inActiveProfile.png')} style={{ width: 24, height: 24 }} />
            ),
          }} />
      </MaterialBottom.Navigator>
    )
  }
  render() {
    const noHeader = { headerShown: false }
    const style = {
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#203354',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: '500',
        fontSize: 20,
        padding: 0,
      }
    }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Bottom Tabs" >
          {/* <Stack.Screen name="Splash" component={Splash} options={noHeader}/>
        <Stack.Screen name="Onboard" component={Onboard} options={noHeader}/>
        <Stack.Screen name="Intro" component={Intro} options={noHeader}/> */}
          <Stack.Screen name="SignIn" component={SignIn} options={noHeader} />
          <Stack.Screen name="SignUp" component={SignUp} options={noHeader} />
          {/* <Stack.Screen name="Ubah Akun" component={changeProfile} options={style}/>
        <Stack.Screen name="Temukan Akun Anda" component={Forgot} options={style}/>
        <Stack.Screen name="Bantuan" component={Help} options={style}/>
        <Stack.Screen name="Tentang Akun Saya" component={aboutAccount} options={style}/>
        <Stack.Screen name="Kantin" component={aboutKantin} options={style}/>
        <Stack.Screen name="Hubungi Kami" component={CallUs} options={style}/>
        <Stack.Screen name="Kelas Pay" component={aboutPayment} options={style}/>
        <Stack.Screen name="Cara Membayar" component={caraBayar} options={style}/>
        <Stack.Screen name="Cara Menabung" component={caraNabung} options={style}/>
        <Stack.Screen name="Info Aplikasi" component={InfoApp} options={style}/>
        <Stack.Screen name="Tabungan" component={Tabungan} options={style}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/> */}
          <Stack.Screen name="Riwayat" component = { PaymentHistory } options={style} />
          <Stack.Screen name="Bottom Tabs" children = { this.createTabs } options={noHeader} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  };
}

