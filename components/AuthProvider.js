import React, { createContext } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore'
import config from '../firebase/config'

export const AuthContext = createContext({});

export default class AuthProvider extends React.Component {
    unsubscribeFunc = null;
    unsubscribeData = null;
    db = null

    constructor(props) {
        super(props)
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        this.db = firebase.firestore();
    }

    state = {
        user: null,
        lastError: "",
        userdata: null
    }

    componentDidMount = () => {
        this.unsubscribeFunc = firebase.auth().onAuthStateChanged(async userAuth => {
            if (userAuth != null) {
                await this.updateUserData(userAuth.email)
            }
            this.setState({ user: userAuth });
        })
    }

    componentWillUnmount = () => {
        if (this.unsubscribeFunc) {
            this.unsubscribeFunc();
        }
        if (this.unsubscribeData) {
            this.unsubscribeData();
        }
    }

    updateUserData = async (email) => {
        let doc = await this.db.doc(`users/${email}`).get()
        if (doc.exists) {
            this.setState({ userdata: doc.data() })
            console.log(this.state.userdata)
        } else {
            await this.db.collection('users').doc(email).set({saldo: 0, tabungan: 0})
        }
        
        let docRef = await this.db.doc(`users/${email}`)
        this.unsubscribeData = docRef
            .onSnapshot((doc) => {
                this.setState({ userdata: doc.data() })
            })
    }

    login = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (err) {
            console.log(err)
            return false
        }
    }

    logout = async () => {
        try {
            if (this.state.user) {
                this.unsubscribeData()
                await firebase.auth().signOut()
            }
        } catch (err) {
            console.log(err)
            return false
        }
    }

    register = async (email, password, name) => {
        try {
            let nucred = await firebase.auth().createUserWithEmailAndPassword(email, password)
            await nucred.user.updateProfile({ displayName: name })
            this.setState({ user: nucred.user })
            return true
        } catch (err) {
            console.log(err)
            this.setState({ lastError: err.message })
            return false
        }
    }

    tabung = async (amount) => {
        if (this.state.user && this.state.userdata) {
            if (amount < this.state.userdata.saldo) {
                let newSaldo = +(+this.state.userdata.saldo - amount);
                let newTabungan = +(+this.state.userdata.tabungan + amount);
                this.db.doc(`users/${this.state.user.email}`).set({saldo: newSaldo, tabungan: newTabungan})
            }
        } 
    }

    render() {
        return (
            <AuthContext.Provider value={{
                login: this.login,
                logout: this.logout,
                register: this.register,
                tabung: this.tabung,
                user: this.state.user,
                userdata: this.state.userdata,
                lastError: this.state.lastError
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}