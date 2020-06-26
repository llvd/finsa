import React from 'react';
import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from './HomeStack'
import PaymentStack from './PaymentStack'
import CanteenStack from './CanteenStack'
import ProfileStack from './ProfileStack'

const MaterialBottom = createMaterialBottomTabNavigator()

export default class BottomNav extends React.Component{
    render() {
        return (
            <MaterialBottom.Navigator
                activeColor="#11E69F"
                inactiveColor="#C0C6CF"
                options={{ headerShown: false }}
                barStyle={{ backgroundColor: 'white' }}
            >
                <MaterialBottom.Screen
                    name="Home"
                    component={HomeStack}
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
                    component={CanteenStack}
                    options={{
                        tabBarLabel: 'Kantin',
                        tabBarIcon: ({ focused }) => (focused ?
                            <Image source={require('../assets/icon/tab/activeCanteen.png')} style={{ width: 24, height: 24 }} />
                            :
                            <Image source={require('../assets/icon/tab/inActiveCanteen.png')} style={{ width: 24, height: 24 }} />
                        ),
                    }} />
                <MaterialBottom.Screen
                    name="ClassPay"
                    component={PaymentStack}
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
                    component={ProfileStack}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ focused }) => (focused ?
                            <Image source={require('../assets/icon/tab/activeProfile.png')} style={{ width: 24, height: 24 }} />
                            :
                            <Image source={require('../assets/icon/tab/inActiveProfile.png')} style={{ width: 24, height: 24 }} />
                        ),
                    }} />
            </MaterialBottom.Navigator >
        )
    }
};

