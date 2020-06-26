import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import InfoApp from '../screens/InfoApp';
import EditProfile from '../screens/EditProfile';
import Help from '../screens/Help';

const Stack = createStackNavigator();

export default class ProfileStack extends React.Component {
    render() { 
        return (
            <Stack.Navigator headerMode="none" initialRouteName="Profile">
                <Stack.Screen name="Profile" component={ Profile }/>
                <Stack.Screen name="InfoApp" component={ InfoApp }/>
                <Stack.Screen name="EditProfile" component={ EditProfile }/>
                <Stack.Screen name="Help" component={ Help }/>
            </Stack.Navigator>
        )
    }
}