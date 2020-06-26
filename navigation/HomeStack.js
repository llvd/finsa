import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import PaymentHistory from '../screens/PaymentHistory';
import Tabungan from '../screens/Tabungan';

const Stack = createStackNavigator();

export default class HomeStack extends React.Component {
    render() {
        return (
            <Stack.Navigator headerMode="none" initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
                <Stack.Screen name="Tabungan" component={ Tabungan }/>
            </Stack.Navigator>
        )
    }
}


