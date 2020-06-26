import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Container } from 'native-base';

export default class PaymentHistory extends React.Component {
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
    render() {
        const nama = ' Sindy '
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Container style={styles.containerStyle}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.textHeader}>Pengeluaran</Text>
                        <TouchableOpacity><Text style={styles.textSeeAll}>Clear All</Text></TouchableOpacity>
                    </View>
                    {this.componentList()}
                </Container>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        marginVertical: 32,
        paddingVertical: 0,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    shadowContainer: {
        shadowColor: "#F1F1F1",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,

        elevation: 2,
    },
    containerOutCost: {
        marginVertical: 32,
        width: 312,
        padding: 20,
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headerContainer: {
        width: Dimensions.get("window").width = 312,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textHeader: {
        fontSize: 16,
        color: '#636363',
        fontWeight: '500'
    },
    textSeeAll: {
        fontSize: 14,
        fontWeight: '500',
        color: '#11E69F'
    },
    historyContainer: {
        width: Dimensions.get("window").width = 312,
        margin: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    section: {
        flexDirection: 'column',
        flex: 1,
    },
    dateHistory: {
        color: '#C0C6CF',
        fontSize: 12
    }
})