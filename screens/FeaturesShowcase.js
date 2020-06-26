// OLD: OnBoard.js

import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Swiper from '../components/Swiper';

export default class Onboard extends React.Component {
    render() {
        const Header = {
            on1: 'Smart Payment Solutions',
            on2: 'Assignment Payment',
            on3: 'Ready To Start Journey'
        }
        const Desc = {
            on1: 'Kami memudahkan semua pembayaran dan tabungan dengan hanya klik saja.',
            on2: 'Assignment Payment keperluan yang akan membuat anda harus membayar semua prioritas kebutuhan sekolah ',
            on3: 'Kami memudahkan semua pembayaran dan tabungan dengan cukup klik saja.'
        }
        return (
            <Swiper onPress={() => this.props.navigation.navigate('Intro')}>
                <View style={styles.containerStyle}>
                    <View style={styles.partImage}>
                        <Image source={require('../assets/onBoard/onBoard1.png')} style={styles.img} />
                    </View>
                    <View style={styles.partText}>
                        <Text style={styles.Header}>{Header.on1}</Text>
                        <Text style={styles.Desc}>{Desc.on1}</Text>
                    </View>
                </View>
                <View style={styles.containerStyle}>
                    <View style={styles.partImage}>
                        <Image source={require('../assets/onBoard/onBoard2.png')} style={styles.img} />
                    </View>
                    <View style={styles.partText}>
                        <Text style={styles.Header}>{Header.on2}</Text>
                        <Text style={styles.Desc}>{Desc.on2}</Text>
                    </View>
                </View>
                <View style={styles.containerStyle}>
                    <View style={styles.partImage}>
                        <Image source={require('../assets/onBoard/onBoard3.png')} style={styles.img} />
                    </View>
                    <View style={styles.partText}>
                        <Text style={styles.Header}>{Header.on3}</Text>
                        <Text style={styles.Desc}>{Desc.on3}</Text>
                    </View>
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 32
    },
    partImage: {
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        resizeMode: 'contain',
        width: 300,
        height: 260,
    },
    partText: {
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: -100,
    },
    Header: {
        width: 296,
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold',
        margin: 0,
        marginBottom: 16,
    },
    Desc: {
        width: 296,
        fontSize: 14,
        color: '#636363',
        fontWeight: '100',
        margin: 0
    }
})

