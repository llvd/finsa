import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Canteen from '../screens/Canteen';
import CanteenList from '../screens/CanteenList';

const Stack = createStackNavigator();

export default class CanteenStack extends React.Component {
    render() {
        return (
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Canteen" component={ Canteen }/>
                <Stack.Screen name="CanteenList" component={ CanteenList }/>
            </Stack.Navigator>
        )
    }
}