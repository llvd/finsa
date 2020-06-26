import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, H1, Icon, Picker } from 'native-base';
import Modal from 'react-native-modal';
import {AuthContext} from '../components/AuthProvider';

export default class SignUp extends React.Component {
    static contextType = AuthContext

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            password: "",
            isModalVisible: false,
            modalMessage: ""
        };
    }

    trySignUp = async () => {
        let success = await this.context.register(this.state.email, this.state.password, this.state.name)
        if (!success) {
            this.showModal(this.context.lastError)
        }
    }

    showModal = (message) => {
        this.setState({ modalMessage: message, isModalVisible: true, });
    };

    hideModal = () => {
        this.setState({ isModalVisible: false })
    }

    onEmailChange = e => {
        this.setState({email: e})
    }

    onNameChange = e => {
        this.setState({name: e})
    }

    onPasswordChange = e => {
        this.setState({password: e})
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            <Container style={styles.containerStyle}>
                <View style={styles.header}>
                    <H1 style={styles.h1}>Hello,</H1>
                    <Text style={styles.subHeader}>Create your account now</Text>
                </View>
                <Content>
                    <Form style={styles.containerForm}>
                        <Item stackedLabel style={styles.marginForm}>
                            <Label style={styles.colorLabel}>Email</Label>
                            <Input style={{ color: "#C0C6CF" }} onChangeText={this.onEmailChange} />
                        </Item>
                        <Item stackedLabel style={styles.marginForm}>
                            <Label style={styles.colorLabel}>Nama</Label>
                            <Input style={{ color: "#C0C6CF" }} onChangeText={this.onNameChange} />
                        </Item>
                        <Item stackedLabel style={styles.marginForm}>
                            <Label style={styles.colorLabel}>Password</Label>
                            <Input style={{ color: "#C0C6CF" }} onChangeText={this.onPasswordChange} />
                            <Icon active={true} name='eye' />
                        </Item>
                      
                    </Form>
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button} onPress={this.trySignUp}>
                            <Text style={[styles.text, styles.textBtn]}>Get Started</Text>
                        </TouchableOpacity>
                        <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
                            <View style={styles.modalBox}>
                                <Text style={styles.headerModal}>Registrasi Gagal</Text>
                                <Text style={styles.textModal}>{ this.state.modalMessage }</Text>
                                <TouchableOpacity style={styles.btnModal} onPress={this.hideModal}>
                                    <Text style={styles.txtBtnModal}>COBA LAGI</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    </View>
                    <View style={styles.footer}>
                        <Text style={{ color: '#C0C6CF', fontWeight: '400' }}>
                            Already have an account?
            </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                            <Text style={{ color: '#11E69F', fontWeight: '400' }}>
                                Sign In
              </Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        padding: 45,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    header:{
        width: 296,
        flexDirection: 'column',
        margin: 0,
        marginBottom: 42
    },
    h1:{
        fontSize : 28,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    subHeader:{
        fontSize: 16,
        color: '#C0C6CF'
    },
    containerForm:{
        marginTop: 42,
        marginHorizontal: -15
    },
    colorLabel:{
        color: '#C0C6CF',
        marginBottom: -5
    },
    marginForm:{
        marginBottom: 16
    },
    containerButton:{
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 20
    },
    button:{
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#11E69F',
        width: 296,
        height: 60,
        marginTop: 20,
        borderRadius: 30,
    },
    textBtn: {
        fontWeight: '400',
        fontSize: 16,
        color: 'white'

    },
    modal:  {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        paddingVertical:29,
        paddingHorizontal:17,
        width: 296,
        height: 198,
        backgroundColor: 'white',
        borderRadius: 6
    },
    headerModal:{
        color: '#203354',
        fontWeight: '400',
        fontSize: 16,
        marginBottom: 20
    },
    textModal:{
        color: '#636363',
        fontWeight: '400',
        fontSize: 16,
        marginBottom: 20
    },
    btnModal:{
        width: 262,
        alignItems: 'flex-end',
        marginTop: 20
    },
    txtBtnModal:{
        color: '#11E69F',
        fontWeight: '400',
        fontSize: 16,
    },
    footer:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 68
    }
  })
