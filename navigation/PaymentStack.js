import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ClassPay from '../screens/ClassPay';

const Stack = createStackNavigator();

export default class PaymentStack extends React.Component{
    render() {
        return (
            <Stack.Navigator headerMode="none" initialRouteName="ClassPay">
                <Stack.Screen name="ClassPay" component={ClassPay} />
            </Stack.Navigator>
        )
    }
}