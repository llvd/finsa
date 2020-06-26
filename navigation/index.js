import React from 'react';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainBBNavigation';
import {AuthContext} from '../components/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';

export default class NavContainer extends React.Component {
    static contextType = AuthContext

    render() {
        return (
            <NavigationContainer>
                {this.context.user == null ? <AuthNavigation/> : <MainNavigation/>}
            </NavigationContainer>
        )
    }
}