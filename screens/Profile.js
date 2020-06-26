import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Left, Right, Icon, H1, Thumbnail } from 'native-base';
import Modal from 'react-native-modal';
import {AuthContext} from '../components/AuthProvider'

export default class Profile extends React.Component{
  static contextType = AuthContext

  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  onSignOut = () => {
    this.context.logout();
  }
 
  render(){
    const icon = <Image  style={styles.arrow} resizeMode='contain' source={require('../assets/icon/arrow.png')}/>
    return(
      <Container style={styles.containerStyle}>
        <Content>
          {/*Header*/}
          <View style={styles.header}> 
            <H1 style={styles.h1}>Profile</H1>
          </View>
          {/* Identity */}
          <View style={styles.containerIdentity}>
            <Left style={styles.identityThumbnail}>
              <Thumbnail small source={require('../assets/icon/hAkun.png')}/>
            </Left>
            <View style={styles.textContainerIdentity}>
              <Text style={[styles.identityTextColor,styles.name]}>{this.context.user.displayName}</Text>
              <Text style={[styles.identityTextColor,styles.email]}>{this.context.user.email}</Text>
            </View>
            <TouchableOpacity style={styles.iconEdit} onPress={()=> this.props.navigation.navigate('EditProfile')}>
              <Right>
              <Image  style={styles.arrow} resizeMode='contain' source={require('../assets/icon/edit.png')}/>
              </Right>
            </TouchableOpacity>
            
          </View>
          {/* List */}
          <List style={styles.leftContainerList}>
            <ListItem style={styles.listItem} onPress={()=> this.props.navigation.navigate('Help')}>
              <Left>
                <Image  style={styles.icon} resizeMode='contain' source={require('../assets/icon/help.png')}/>
                <View style={styles.textContainerList}>
                  <Text style={styles.textList}>Bantuan</Text>
                </View>
              </Left>
              <Right>
                {icon}
              </Right>
            </ListItem>
            <ListItem style={styles.listItem} onPress={()=> this.props.navigation.navigate('InfoApp')}>
              <Left>
                <Image style={styles.icon} resizeMode='contain' source={require('../assets/icon/info.png')}/>
                <View style={styles.textContainerList}>
                  <Text style={styles.textList}>Info Aplikasi</Text>
                </View>
              </Left>
              <Right>
                {icon}
              </Right>
            </ListItem>
            <ListItem style={styles.listItem} onPress={this.toggleModal}>
              <Left>
                <Image  style={styles.icon} resizeMode='contain' source={require('../assets/icon/logoutAccount.png')}/>
                <View style={styles.textContainerList}>
                  <Text style={styles.textList}>Log Out</Text>
                </View>
              </Left>
              <Right>
                {icon}
              </Right>
              <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
                <View style={styles.modalBox}>
                  <View style={styles.contentModal}>
                  <Text style={styles.headerModal}>Apakah Anda Ingin Keluar?</Text>
                    <View style={styles.containerBtnModal}>
                      <TouchableOpacity style={[styles.btnModal,styles.btn1]} onPress={this.onSignOut}> 
                        <Text style={[styles.txtBtnModal,styles.txtBtn1]}>Keluar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.btnModal,styles.btn2]} onPress={this.toggleModal}> 
                        <Text style={[styles.txtBtnModal,styles.txtBtn2]}>Tidak</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        paddingVertical: 32,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    header:{
        width: 296,
        flexDirection: 'column',
        margin: 0,
        marginBottom: 20
    },
    h1:{
        fontSize : 20,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    containerIdentity:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 46
    },
    identityThumbnail:{
        width: 32,
        height: 32,
    },
    textContainerIdentity:{
        flex: 5,
        flexDirection:'column',
    },
    identityTextColor:{
        color:'#636363',
    },
    name:{
        fontSize: 18,
        fontWeight: '900'
    },
    email:{
        fontSize: 14,
        fontWeight: '300'
    },
    iconEdit:{
        width:16,
        height: 16,
    },
    icon:{
        width: 24,
        height: 24,
    },
    arrow: {
        width: 14,
        height: 14,
    },
    listItem:{
        borderColor:'transparent'
    },
    leftContainerList:{
        marginHorizontal: -18
    },
    textContainerList:{
        marginHorizontal: 10,
    },
    textList:{
        fontSize: 16,
        color: '#636363',
        fontWeight: '300'
    },
    modal:  {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        paddingVertical:16,
        paddingHorizontal:18,
        width: 296,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 6,
        alignItems:'center',
    },
    contentModal:{
        marginHorizontal:18,
        marginVertical:16,
        justifyContent: 'center',
        alignItems:'center',
    },
    headerModal:{
        color: '#203354',
        fontWeight: '500',
        fontSize: 16,
    },
    containerBtnModal:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        marginVertical: 28
    },
    btnModal:{
        alignItems: 'center',
        justifyContent:'center',
        height: 40,
        width: 88,
        borderRadius:10,

        marginHorizontal: 16
    },
    btn1:{
        backgroundColor: '#11E69F',
    },
    btn2:{
        borderColor: '#11E69F',
        borderWidth: 1,
    },
    txtBtn1:{
        color: 'white',
    },
    txtBtn2:{
        color: '#11E69F'
    },
    txtBtnModal:{
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    }
  })

