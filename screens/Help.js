import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Left, Right } from 'native-base';

export default class Help extends React.Component{
  render(){
    const icon = <Image  style={styles.arrow} resizeMode='contain' source={require('../assets/icon/arrow.png')}/>
    return(
      <Container style={styles.containerStyle}>
        <Content style={styles.Content}>
          {/* List */}
          <List style={styles.leftContainerList}>
            <ListItem style={styles.listItem} onPress={()=> this.props.navigation.navigate('Tentang Akun Saya')}>
              <Left>
                <Image  style={styles.icon} resizeMode='contain' source={require('../assets/icon/hAkun.png')}/>
                <View style={styles.textContainerList}>
                  <Text style={styles.textList}>Tentang Akun Saya</Text>
                </View>
              </Left>
              <Right>
                {icon}
              </Right>
            </ListItem>
            <ListItem style={styles.listItem} onPress={()=> this.props.navigation.navigate('Kelas Pay')}>
              <Left>
                <Image  style={styles.icon} resizeMode='contain' source={require('../assets/icon/hPay.png')}/>
                <View style={styles.textContainerList}>
                  <Text style={styles.textList}>Kelas Pay</Text>
                </View>
              </Left>
              <Right>
                {icon}
              </Right>
            </ListItem>
            <ListItem style={styles.listItem} onPress={()=> this.props.navigation.navigate('Kantin')}>
              <Left>
                <Image  style={styles.icon} resizeMode='contain' source={require('../assets/icon/hKantin.png')}/>
                <View style={styles.textContainerList}>
                  <Text style={styles.textList}>Kantin</Text>
                </View>
              </Left>
              <Right>
                {icon}
              </Right>
            </ListItem>
            <ListItem style={styles.listItem} onPress={()=> this.props.navigation.navigate('Hubungi Kami')}>
              <Left>
                <Image  style={styles.icon} resizeMode='contain' source={require('../assets/icon/hub.png')}/>
                <View style={styles.textContainerList}>
                  <Text style={styles.textList}>Hubungi Kami</Text>
                </View>
              </Left>
              <Right>
                {icon}
              </Right>
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
        paddingVertical: 20,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    Content:{
        width: 296,
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
  })

