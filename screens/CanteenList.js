import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Container, Content, H1} from 'native-base';

export default class ListKantin extends React.Component{
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
        <Content style={styles.contentStyle}>
          <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
              <Image source={require('../assets/kantin18.png')} style={styles.imgKantin}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textJudul}>Kantin Qyta</Text>
              <Text style={styles.textDesc}>Aneka Soto, Minuman</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
              <Image source={require('../assets/kantin18.png')} style={styles.imgKantin}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textJudul}>Kantin Qyta</Text>
              <Text style={styles.textDesc}>Aneka Soto, Minuman</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
              <Image source={require('../assets/kantin18.png')} style={styles.imgKantin}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textJudul}>Kantin Qyta</Text>
              <Text style={styles.textDesc}>Aneka Soto, Minuman</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
              <Image source={require('../assets/kantin18.png')} style={styles.imgKantin}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textJudul}>Kantin Qyta</Text>
              <Text style={styles.textDesc}>Aneka Soto, Minuman</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
              <Image source={require('../assets/kantin18.png')} style={styles.imgKantin}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textJudul}>Kantin Qyta</Text>
              <Text style={styles.textDesc}>Aneka Soto, Minuman</Text>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        backgroundColor: 'white'
    },
    contentStyle:{
        paddingHorizontal: 20,
    },
    cardContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginVertical: 10
    },
    imgContainer: {
        width: '15%', 
        height: 110
    },
    imgKantin: {
        width: 110,
        height: 110,
        borderRadius: 20
    },
    textContainer: {
        width: '30%',
        right: 90,
        top: 5,
        height: 90
    },
    textJudul: {
        fontSize: 17, 
        fontWeight: 'bold',
        marginBottom: 5
    },
    textDesc: {
        fontSize: 15, 
        color: 'gray'
    }
  })