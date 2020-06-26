import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

export default class AuthStack extends React.Component {
    render() {
        return (
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="SignIn" component={SignIn}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
            </Stack.Navigator>
        )
    }
}
