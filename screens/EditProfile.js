import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, H1, Icon, Picker, View } from 'native-base';
import Modal from 'react-native-modal';

export default class Change extends React.Component {
    render() {
        const name = 'Sindy Lailasari'
        const email = 'akudi@test.in'
        return (
            <Container style={styles.containerStyle}>
                <Content>
                    <Form style={styles.containerForm}>
                        <Item stackedLabel style={styles.marginForm}>
                            <Label style={styles.colorLabel} >Nama Lengkap</Label>
                            <Input style={{ color: "#C0C6CF" }} placeholder={name} />
                        </Item>
                        <Item stackedLabel style={styles.marginForm}>
                            <Label style={styles.colorLabel}>Email</Label>
                            <Input style={{ color: "#C0C6CF" }} placeholder={email} />
                            <Icon active={true} name='eye' />
                        </Item>
                    </Form>
                    <View style={styles.containerBtn}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Profile')}><Text style={styles.textBtn}>Simpan</Text></TouchableOpacity>
                    </View>

                </Content>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        paddingHorizontal: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    containerForm: {
        marginHorizontal: -15
    },
    colorLabel: {
        color: '#C0C6CF',
        marginBottom: -5
    },
    marginForm: {
        marginBottom: 16
    },
    containerBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 88,
        borderRadius: 10,
        backgroundColor: '#11E69F'
    },
    textBtn: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    }
})
