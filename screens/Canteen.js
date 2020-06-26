import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { Container,Content, Form, Item, Input, Label, H1, Icon, Picker } from 'native-base';


export default class Canteen extends React.Component{
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
 
  render(){
    return(
      <Container style={styles.containerStyle}>
        <Content>
          <View style={styles.header}> 
            <H1 style={styles.h1}>Pilih Kategori</H1>
          </View>
          <View style={styles.contentContainer}>
            <TouchableOpacity>
              <View style={[styles.cardContainer, styles.shadowContainer]}>
                <View style={styles.content}>
                  <Image source={require('../assets/icon/kantin.png')} style={styles.img}/>
                  <Text style={styles.text}>Kantin</Text>
                  <Image source={require('../assets/icon/next.png')} style={styles.icon}/>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.cardContainer, styles.shadowContainer]}>
                <View style={styles.content}>
                  <Image source={require('../assets/icon/kantin1.png')} style={styles.img}/>
                  <Text style={styles.text}>Koperasi</Text>
                  <Image source={require('../assets/icon/next.png')} style={styles.icon}/>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.kantinContainer}>
            <View> 
              <H1 style={styles.h1}>Kantin</H1>
            </View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('CanteenList')}>
              <Text style={styles.seeAll}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.kantinContainer}>
            <TouchableOpacity>
              <View style={[styles.cardKantin, styles.shadowContainer]}>
                <Image source={require('../assets/kantin18.png')} style={styles.imgKantin}/>
                <Text>Kantin 18</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.cardKantin, styles.shadowContainer]}>
                <Image source={require('../assets/kantin18.png')} style={styles.imgKantin}/>
                <Text>Kantin Qyta</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.kantinContainer}>
            <TouchableOpacity>
              <View style={[styles.cardKantin, styles.shadowContainer]}>
                <Image source={require('../assets/kantin18.png')} style={styles.imgKantin}/>
                <Text>Kantin 18</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.cardKantin, styles.shadowContainer]}>
                <Image source={require('../assets/kantin18.png')} style={styles.imgKantin}/>
                <Text>Kantin Qyta</Text>
              </View>
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
        paddingVertical: 32,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    header:{
        width: 296,
        flexDirection: 'column',
        margin: 0,
        marginBottom: 15
    },
    h1:{
        fontSize : 20,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    cardContainer: {
        width: 120,
        height: 200,
        borderRadius: 20,
        marginBottom: 20,
        backgroundColor:'white',
        justifyContent: 'space-evenly'
    },
    content: {
        alignItems: 'center'
    },
    shadowContainer:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    img: {
        resizeMode: 'contain',
        width: 40 ,
        height: 40,
        marginVertical: 15,
        alignItems: 'center'
    },
    icon: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        marginVertical: 15,
        alignItems: 'center'
    },
    text: {
        color: "gray",
        fontSize: 16
    },
    kantinContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardKantin: {
        width: 140,
        height: 155,
        borderRadius: 20,
        backgroundColor: 'white',
        marginVertical: 10,
        alignItems: 'center',
        overflow: 'hidden'
    },
    seeAll: {
        color: '#11E69F'
    },
    imgKantin: {
        resizeMode: 'contain',
        width: 140,
        height: 120,
        marginBottom: 5
    },
    footer:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 68
    }
  })
