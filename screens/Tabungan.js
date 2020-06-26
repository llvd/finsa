import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Input, Item } from 'native-base';
import Modal from 'react-native-modal';
import { AuthContext } from '../components/AuthProvider';

export default class Tabungan extends React.Component{
  static contextType = AuthContext;

  textInput = () => {
    return (
        <Item style={{borderColor:'transparent'}} >
          <Input style={styles.inputValue} placeholderTextColor='#CBD1D7' placeholder='Masukan Nominal' onChangeText={this.handleInputChange} />
        </Item>
    );
  }

  state = {
    isModalVisible: false,
    amount: ""
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  tryTabung = async() => {
    let amount = parseInt(this.state.amount)
    if (amount !== NaN) {
        this.context.tabung(amount)
    }
  }

  modal = () =>{
    return(
      <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
        <View style={{
        padding: 20,
        width: 296,
        height: 160,
        backgroundColor: 'white',
        borderRadius: 6,
        alignItems:'center',
        }}>
          <View style={styles.contentModal}>
            <Text style={styles.headerModal}>Apakah Anda Ingin Mengambil?</Text>
            <Text style={{fontSize:14, color:'#C8CDD5',textAlign:'center',width:260,marginTop: 10,marginBottom: -10}}>Silahkan beritahukan riwayat kepada admin di sekolahmu jika menabung</Text>
              <View style={styles.containerBtnModal}>
                <TouchableOpacity style={[styles.btnModal,styles.btn1]} onPress={this.tryTabung}> 
                  <Text style={[styles.txtBtnModal,styles.txtBtn1]}>Ambil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnModal,styles.btn2]} onPress={this.toggleModal}> 
                  <Text style={[styles.txtBtnModal,styles.txtBtn2]}>Tidak</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </Modal>
    )
  }
  render(){
    return(
      <Container style={styles.containerStyle}>
        <View>
          <View style={[styles.containerCardSaldo, styles.shadowContainer]}>
            <View> 
              <Text style={[styles.textCardColor,styles.titleTabungan]}>Saldo Tabungan</Text>
              <Text style={[styles.textCardColor,styles.saldoTabungan]}>Rp. {this.context.userdata.tabungan}</Text>
            </View>
          </View>
          <View style={styles.containerDesc}>
            <Text style={styles.desc}>{"Minimal saldo yang bisa diambil sebesar Rp. 10.000 \n\nSaldo utama akan terpotong sejumlah saldo yang anda tarik"}</Text>
          </View>
        </View>

        {/* Input Ambil Tabungan */}
        <View style={styles.containerInputTabung}> 
          <View style={styles.containerInput}>
            {this.textInput()}
          </View>
          <TouchableOpacity style={[styles.btnTabung,styles.btn1]} onPress={this.toggleModal}> 
            <Text style={[styles.txtBtnModal,styles.txtBtn1]}>Ambil</Text>
          </TouchableOpacity>
            {this.modal()} 
        </View>
      </Container>
    ) 
  }
}
const styles = StyleSheet.create({
    containerStyle : {
        flex:1,
        paddingVertical: 32,
        paddingHorizontal: 20,
        alignItems:'center',
        justifyContent: 'space-between',
    },
    containerCardSaldo:{
        width: Dimensions.get("window").width=296,
        padding: 20,
        height: 130,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: `#11E69F` 
    },
    shadowContainer:{
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 10,

        elevation: 12,
    },
    textCardColor :{
        color: 'white',
    },
    titleTabungan:{
        fontSize: 16,
        fontWeight: '500'
    },
    saldoTabungan:{
        fontSize: 30
    },
    containerDesc: {
        width: Dimensions.get("window").width=250,
        marginVertical: 25,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    desc:{
        color: '#636363',
        fontSize: 16,
        fontWeight: '100'
    },
    containerInputTabung:{
        justifyContent: "space-between",
        alignItems:'center',
        width: 296,
        flexDirection: 'row'
    },
    containerInput:{
        alignItems:'center',
        width: 192,
    },
    inputValue:{
        fontSize: 14,
        borderColor: '#11E69F',
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
    },
    btnTabung:{
        alignItems: 'center',
        justifyContent:'center',
        height: 40,
        width: 100,
        borderRadius:10,
    },

    modal:  {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        padding: 20,
        width: 296,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 6,
        alignItems:'center',
    },
    contentModal:{
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
