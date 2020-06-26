// OLD: Stats.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Thumbnail } from 'native-base';
import StatChart from '../components/StatChart';
import {AuthContext} from '../components/AuthProvider'

export default class Home extends React.Component {
    static contextType = AuthContext;

    componentList = () => {
        const nominalPengeluaran = 14000
        return (
            <View style={styles.historyContainer}>
                <View style={styles.section}>
                    <Text style={styles.textHeader}>Buku Tulis</Text>
                    <Text style={styles.dateHistory}>09.05.2020</Text>
                </View>
                <Text style={styles.textHeader}>Rp. {nominalPengeluaran}</Text>
            </View>
        )
    }
    _saldo = () => {

        return (
            <View style={[styles.containerCardSaldo, styles.shadowContainer]}>
                <TouchableOpacity style={styles.containerSaldo}>
                    <Text style={styles.textSaldo}>Saldo Saku</Text>
                    <Text style={styles.valueSaldo}>Rp.{this.context.userdata.saldo}</Text>
                </TouchableOpacity>
                <View style={{ height: 92, width: 2, backgroundColor: '#F1F1F1' }} />
                <TouchableOpacity style={styles.containerSaldo} onPress={() => this.props.navigation.navigate('Tabungan')}>
                    <Text style={styles.textSaldo}>Tabungan</Text>
                    <Text style={styles.valueSaldo}>Rp. {this.context.userdata.tabungan}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            // <ScrollView style={{backgroundColor: 'white'}}>
            <Container style={styles.containerStyle}>
                <View style={styles.containerProfile}>
                    <Thumbnail style={styles.thumb} source={require('../assets/avatar-placeholder.png')} />
                    <Text style={styles.opening}>Halo, {this.context.user.displayName}.</Text>
                </View>
                {this._saldo()}
                <StatChart />
                <View style={[styles.containerOutCost, styles.shadowContainer]}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.textHeader}>Pengeluaran</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('PaymentHistory')}><Text style={styles.textSeeAll}>See All</Text></TouchableOpacity>
                    </View>
                    {this.componentList()}
                </View>
            </Container>
            // </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle : {
        flex:1,
        paddingVertical: 32,
        paddingHorizontal: 20,
        alignItems:'center',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    containerProfile:{
        width: 296,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    thumb:{
        borderRadius:50,
        width: 50,
        height: 50
    },
    opening:{
        margin:18,
        fontWeight: 'bold',
        fontSize: 18
    },
    shadowContainer:{
        shadowColor: "#F1F1F1",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,

        elevation: 2,
    },
    containerCardSaldo:{
        width: 312,
        height: 92,
        marginVertical: 32,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor:'white',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    containerSaldo:{
        flexDirection:'column',
        justifyContent: 'center'
    },
    textSaldo:{
        fontWeight:'500',
        fontSize: 16
    },
    valueSaldo:{
        fontSize: 20,
        fontWeight: '500'
    },
    containerOutCost:{
        marginTop: 32,
        width: 312,
        padding: 20,
        borderRadius: 20,
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'white'
    },
    headerContainer:{
        width:270,
        marginBottom: 15,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    textHeader: {
        fontSize: 16,
        color: '#636363',
        fontWeight:'500'
    },
    textSeeAll:{
        fontSize:14,
        fontWeight: '500',
        color: '#11E69F'
    },
    historyContainer:{
        width:270,
        marginVertical: 12,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    section:{
        flexDirection: 'column',
        flex:1,
    },
    dateHistory:{
        color: '#C0C6CF',
        fontSize: 12
    }
  })