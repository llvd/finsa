import React from 'react';
import { View } from 'react-native';
import SwitchButton from 'switch-button-react-native'

export default class Switch extends React.Component{
    constructor (props) {
        super(props);
    
        this.state = {
          activeSwitch: 1
        };
    }
    render () {
        return (
            <View >
                <SwitchButton 
                    onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                    text1 = 'Task'                        // optional: first text in switch button --- default ON
                    text2 = 'Tabungan'                       // optional: second text in switch button --- default OFF
                    switchWidth = {312}                 // optional: switch width --- default 44
                    switchHeight = {40}                 // optional: switch height --- default 100
                    switchdirection = 'ltr'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                    switchBorderRadius = {10}          // optional: switch border radius --- default oval
                    switchSpeedChange = {300}           // optional: button change speed --- default 100
                    switchBorderColor = '#13D494'       // optional: switch border color --- default #d4d4d4
                    switchBackgroundColor = '#13D494'      // optional: switch background color --- default #fff
                    btnBorderColor = '#11E69F'          // optional: button border color --- default #00a4b9
                    btnBackgroundColor = '#11E69F'      // optional: button background color --- default #00bcd4
                    fontColor = 'white'               // optional: text font color --- default #b1b1b1
                    activeFontColor = '#fff'            // optional: active font color --- default #fff
                />
                { this.state.activeSwitch === 1 ? this.props.view1: this.props.view2 }
            </View>
        );
    }
} 

