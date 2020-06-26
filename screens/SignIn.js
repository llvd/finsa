import React from 'react';
import Modal from 'react-native-modal';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, H1 } from 'native-base';
import { AuthContext } from '../components/AuthProvider';

export default class SignIn extends React.Component {
    static contextType = AuthContext;
    
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isModalVisible: false,
            modalMessage: ""
        };
    }

    showModal = (message) => {
        this.setState({ modalMessage: message, isModalVisible: true, });
    };

    hideModal = () => {
        this.setState({ isModalVisible: false })
    }

    onSignInPressed = async () => {
        if (this.state.email == "" || this.state.password == "") {
            return this.showModal("Fields cannot be empty")
        } 
        
        let success = await this.context.login(this.state.email, this.state.password)
        if (!success) {
            this.showModal("Login failed.")
        }
    }

    render() {
        return (
            <Container style={styles.containerStyle}>
                <View style={styles.header}>
                    <H1 style={styles.h1}>Welcome Back,</H1>
                    <Text style={styles.subHeader}>Sign in to continue</Text>
                </View>
                <View style={styles.containerLogo}>
                    <Image source={require('../assets/logo2.png')} style={styles.icon} />
                </View>
                <Content>
                    <Form style={styles.containerForm}>
                        <Item stackedLabel style={styles.marginForm}>
                            <Label style={styles.colorLabel}>Email</Label>
                            <Input style={{ color: "#C0C6CF" }} onChangeText={(text) => { this.setState({email: text}) }} />
                        </Item>
                        <Item stackedLabel style={styles.marginForm}>
                            <Label style={styles.colorLabel}>Password</Label>
                            <Input style={{ color: "#C0C6CF" }} onChangeText={(text) => { this.setState({password: text}) }} />
                        </Item>
                    </Form>
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button} onPress={this.onSignInPressed}>
                            <Text style={[styles.text, styles.textBtn]}>Sign In</Text>
                        </TouchableOpacity>
                        <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
                            <View style={styles.modalBox}>
                                <Text style={styles.headerModal}>Sign In Gagal</Text>
                                <Text style={styles.textModal}>{ this.state.modalMessage }</Text>
                                <TouchableOpacity style={styles.btnModal} onPress={this.hideModal}>
                                    <Text style={styles.txtBtnModal}>COBA LAGI</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    </View>
                    <View>
                        <TouchableOpacity style={{ justifyContent: 'flex-start' }} onPress={() => this.props.navigation.navigate('Temukan Akun Anda')}>
                            <Text style={{ color: '#636363', fontWeight: '400' }}>
                                Forgot password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <Text style={{ color: '#C0C6CF', fontWeight: '400' }}>
                            Don’t have an account? 
                        </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text style={{ color: '#11E69F', fontWeight: '400' }}>
                                Create Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding: 32,
        paddingTop: 42,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    header: {
        width: 296,
        flexDirection: 'column',
        margin: 0,
        marginBottom: 20
    },
    h1: {
        fontSize: 28,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    subHeader: {
        fontSize: 16,
        color: '#C0C6CF'
    },
    containerLogo: {
        marginVertical: 16,
        width: 130,
        height: 130,
        justifyContent: 'center',
    },
    icon: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain'
    },
    containerForm: {
        marginTop: 13,
        marginHorizontal: -15
    },
    colorLabel: {
        color: '#C0C6CF',
        marginBottom: -5
    },
    marginForm: {
        marginBottom: 16
    },
    containerButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#11E69F',
        width: 296,
        height: 60,
        borderRadius: 30,
    },
    textBtn: {
        fontWeight: '400',
        fontSize: 16,
        color: 'white'

    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        paddingVertical: 29,
        paddingHorizontal: 17,
        width: 296,
        height: 198,
        backgroundColor: 'white',
        borderRadius: 6
    },
    headerModal: {
        color: '#203354',
        fontWeight: '400',
        fontSize: 16,
        marginBottom: 20
    },
    textModal: {
        color: '#636363',
        fontWeight: '400',
        fontSize: 16,
        marginBottom: 20
    },
    btnModal: {
        width: 262,
        alignItems: 'flex-end',
        marginTop: 20
    },
    txtBtnModal: {
        color: '#11E69F',
        fontWeight: '400',
        fontSize: 16,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 68
    }
})