import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Container,Content,Item,Input } from 'native-base';
import SwitchButton from '../components/SwitchButton';
import Modal from 'react-native-modal';
import { AuthContext } from '../components/AuthProvider'

export default class Payment extends React.Component{
  static contextType = AuthContext;

    constructor(props) {
    super(props);
    this.state = {

    };
  }

  state = {
    isModalVisible: false,
    isChecked: false,
    isToken:'',
    amount: ""
  };

  tryTabung = async() => {
    let amount = parseInt(this.state.amount)
    if (amount !== NaN) {
        this.context.tabung(amount)
        this.toggleModal()
    }
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  toggleModal2 = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  modalNabung = () =>{
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
            <Text style={styles.headerModal}>Apakah Anda Ingin Menabung?</Text>
            <Text style={{fontSize:14, color:'#C8CDD5',textAlign:'center',width:260,marginTop: 10,marginBottom: -10}}>Saldo anda akan dikurangkan sebagian untuk menabung</Text>
              <View style={styles.containerBtnModal}>
                <TouchableOpacity style={[styles.btnModal,styles.btn1]} onPress={this.tryTabung}> 
                  <Text style={[styles.txtBtnModal,styles.txtBtn1]}>Bayar</Text>
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
  modalOut = () =>{
    return(
      <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
        <View style={styles.modalBox}>
          <View style={styles.contentModal}>
            <Text style={styles.headerModal}>Apakah Anda Ingin Keluar Kelas?</Text>
              <View style={styles.containerBtnModal}>
                <TouchableOpacity style={[styles.btnModal,styles.btn1]} onPress={()=> this.outClass()}> 
                  <Text style={[styles.txtBtnModal,styles.txtBtn1]}>Keluar</Text>
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
  modalBayar = () =>{
    return(
      <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
        <View style={styles.modalBox}>
          <View style={styles.contentModal}>
            <Text style={styles.headerModal}>Apakah Anda Ingin Membayar?</Text>
              <View style={styles.containerBtnModal}>
                <TouchableOpacity style={[styles.btnModal,styles.btn1]} onPress={()=> this.props.navigation.navigate('SignIn')}> 
                  <Text style={[styles.txtBtnModal,styles.txtBtn1]}>Bayar</Text>
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
  modalJoin = () =>{
    return(
      <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
        <View style={styles.modalBox}>
          <View style={styles.contentModal}>
            <View style={styles.containerInputJoin}>
              {this.textInputJoin()}
            </View>
            <View style={styles.containerBtnModalJoin}>
              <TouchableOpacity onPress={this.toggleModal}> 
                <Text style={[styles.txtBtnModal,styles.txtBtnDecline]}>Batal</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.inClass()}> 
                <Text style={[styles.txtBtnModal,styles.txtBtn2]}>Masuk</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  handleInputChange = (a) => {
    this.setState({amount: a})
 }

  textInput = () => {
    return (
        <Item style={{borderColor:'transparent'}} >
          <Input style={styles.inputValue} placeholderTextColor='#CBD1D7' placeholder='Masukan Nominal' onChangeText={this.handleInputChange}/>
        </Item>
    );
  }
  textInputJoin = () => {
    return (
        <Item style={{borderColor:'transparent'}} >
          <Input style={styles.inputValue} placeholderTextColor='#CBD1D7' placeholder='Masukan Token' />
        </Item>
    );
  }
  _save = () =>{
    return(
      <View style={styles.containerSave}>
        <View style={styles.containerDesc}>
          <Text style={styles.desc}>{"Minimal saldo yang bisa diambil sebesar Rp. 10.000 \n\nSaldo utama akan terpotong sejumlah saldo yang anda tarik"}</Text>
        </View>
        <View style={styles.containerInputTabung}> 
          <View style={styles.containerInput}>
            {this.textInput()}
          </View>
          <TouchableOpacity style={[styles.btnTabung,styles.btn1]} onPress={this.toggleModal}> 
            <Text style={[styles.txtBtnModal,styles.txtBtn1]}>Tabung</Text>
          </TouchableOpacity>
            {this.modalNabung()} 
        </View>
      </View>
    )
  }
  _task = () =>{
    const titleTask= 'Kegiatan HUT Stematel'
    const deadlineTask= 'Last 25 January 2020'
    const price= 20000
    return(
      <TouchableOpacity onPress={this.toggleModal}style={[styles.containerTask,styles.shadowContainer]}>
        {/* {this.modalBayar()}  */}
        <View style={styles.detailCard}>
          <Text style={styles.titleText}>{titleTask}</Text>
          <Text style={styles.dateTask}>{deadlineTask}</Text>
        </View>
        <View style={styles.infoTask}>
          <Text style={styles.textPrice}>Rp. {price}</Text>
          <View style={styles.iconCheck}>
            {this.state.isChecked === true ? 
            <Image style={styles.iconCheck} source={require('../assets/icon/bayarActive.png')}/>
            :
            <Image style={styles.iconCheck} source={require('../assets/icon/bayarInActive.png')}/>}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  inClass=()=>{
    const kelas ='XI RPL 4'
    return(
    <Container style={styles.containerStyle}>
      <View style={styles.containerCard}>
        <View style={styles.sectionTop}>
          <Text style={styles.textClass}>{kelas}</Text>
          <View style={styles.outClass}>
            <TouchableOpacity onPress={this.toggleModal}>
              <Image style={styles.imgLogout} source={require('../assets/icon/logoutClass.png')}/>
            </TouchableOpacity>
            {/* {this.modalOut()} */}
          </View>
        </View>
      </View>
      <SwitchButton view1={this._task()} view2={this._save()} />
    </Container>
    )
  }
  outClass=()=>{
    const kelas ='XI RPL 4'
    return(
    <Container style={styles.containerStyle}>
      <View style={styles.containerJoinClass}>
        <Text style={{fontWeight:'bold',color:'white',fontSize: 28}}>Masuk Kelas</Text>
        <TouchableOpacity onPress={this.toggleModal}>
          <Image source={require('../assets/icon/plus.png')} style={styles.iconJoin}/>
        </TouchableOpacity>
        {this.modalJoin()}
      </View>
      <View style={styles.containerDesc}>
          <Text style={styles.desc}>
            {"Masukan kode kelas yang diberikan guru untuk masuk ke kelasmu"}
          </Text>
        </View>
    </Container>
    )
  }
  render(){
    this.state.isToken='727ue8'
    return(
      this.state.isToken==='727ue8'? this.inClass(): this.outClass()
    )
  }
}

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        paddingVertical: 32,
        paddingHorizontal: 24,
        alignItems:'center',
        backgroundColor: 'white',
    },
    //header card
    containerCard:{
        marginBottom: 10,
        width: 312,
        height: 90,
        backgroundColor: '#11E69F',
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerJoinClass:{
        width: 312,
        height: 64,
        padding:20,
        backgroundColor: '#11E69F',
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconJoin:{
        width:20,
        height:20,
        resizeMode:'contain'
    },
    sectionTop:{
        marginVertical:12,
        marginHorizontal:18,
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    textClass:{
        flex:3,
        fontSize: 28,
        color: 'white',
        fontWeight: '500',
    },
    outClass:{
        width: 24,
        height: undefined,
        justifyContent:'center'
    },
    imgLogout:{
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    // efek shadow  
    shadowContainer:{
        shadowColor: "#F1F1F1",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,

        elevation: 2,
    },
    // card Task
    containerTask:{
        marginTop: 17,
        margin: 8,
        width: 296,
        backgroundColor:'white',
        borderRadius: 10,
        paddingVertical: 9,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    detailCard:{
        flexDirection: 'column',
    },
    titleText:{
        fontSize: 16,
        color: '#636363'
    },
    dateTask:{
        fontSize:14,
        color:'#C0C6CF'
    },
    infoTask:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    textPrice:{
        fontSize:14,
        color: '#00F08F',
        fontWeight: 'normal'
    },
    iconCheck:{
        marginTop: 2,
        resizeMode: 'contain',
        width: 18,
        height: 18
    },
    //----------------------//

    // container menabung
    containerSave:{
        width: Dimensions.get("window").width=312,
        height: "85%",
        flexDirection:'column',
        justifyContent: 'space-between',
    },
    // deskripsi teks
    containerDesc: {
        width: Dimensions.get("window").width=296,
        marginVertical: 25,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    desc:{
        color: '#636363',
        fontSize: 16,
        fontWeight: '100'
    },
    // Input token menabung/ambil tabungan
    containerInputTabung:{
        position: 'relative',
        bottom:0,
        justifyContent: "space-between",
        alignItems:'center',
        width: 296,
        flexDirection: 'row'
    },
    // Input token masuk kelas
    containerInputJoin:{
        alignItems:'center',
        width: 254,
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

    // shape of modal
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
    // header of modal
    headerModal:{
        color: '#203354',
        fontWeight: '500',
        fontSize: 16,
    },
    // button modal
    containerBtnModal:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        marginVertical: 28
    },
    containerBtnModalJoin:{
        flexDirection:'row',
        alignSelf:'flex-end',
        justifyContent: 'center',
        marginVertical: 20
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
    // text putih
    txtBtn1:{
        color: 'white',
    },
    // text hijau
    txtBtn2:{
        color: '#11E69F'
    },
    // text abu abu
    txtBtnDecline:{
        color: '#C4C4C4',
    },
    txtBtnModal:{
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: '400'
    }
  })


