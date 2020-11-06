import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import SocialButton from '../componnts/SocialButton'
import {Input} from 'react-native-elements'
import {InputText} from '../componnts/Input'
import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

export class LoginScreen extends React.Component{

  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      isFocused: false
    }
  }

  onFocusChange = () => {
    this.setState({isFocused: true})
}

  onSignIn = async () => {
    if (this.state.email && this.state.password) {
      this.setState({isLoading: true})
      try{
        const response = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        if (response) {
          this.setState({isLoading: false})
          this.props.navigation.navigate('HomeScreen')
        }
      }catch(error)
      {
        this.setState({isLoading: false})
        switch (error.code) {
          case 'auth/user-not-found':
            alert('A user with that email does not exist.Try signing Up');
            break;
          case 'auth/invalid-email':
          alert('Please enter an email address')
        }
      }
    }else{
      alert('Please enter email and password');
    }
  }

  onSignUp = async () => {
    if (this.state.email && this.state.password) {
      this.setState({isLoading: true})
      try{
        const response = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        if (response) {
          this.setState({isLoading: false})
          this.onSignIn(this.state.email, this.state.password)
        }
      }catch(error){
        this.setState({isLoading: false})
        if (error.code == 'auth/email-already-in-use') {
          alert('User already Exists.Try Loggin in');
        }
      }
    }
    else{
      alert('Please enter email and password');
    }
  }

  render(){
    return(
      <View style={{flex: 1}}>
         <LinearGradient  
            colors={['#1c92d2', '#f2fcfe']}
            style={{flex: 1}}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            >
              {this.state.isLoading?
              <View style={[StyleSheet.absoluteFill, {alignItems: 'center', justifyContent: 'center', zIndex: 1000, elevation: 1000}]}>
                  <ActivityIndicator size="large" color="#1c92d2" />
              </View> : null }
              <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
                <Image source={require('../assets/image.webp')} style={{height: 120, width: "90%"}} />
                <View style={{marginTop: 30}}></View>
                <View style={[styles.Container, {borderColor: this.state.isFocused? '#0779ef' : '#eee'}]}>
                <Input
                placeholder="email"
                placeholderTextColor={'#b6b6b6'}
                onFocus={this.onFocusChange}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                keyboardType="email-address"
                onChangeText={email => this.setState({email: email})}
                leftIcon={
                    <Icon
                    name="user"
                    size={22}
                    color={this.state.isFocused? '#0779e4' : '#fff'} />
                }
                 />
                 </View>
                 <View style={[styles.Container, {borderColor: this.state.isFocused? '#0779ef' : '#eee'}]}>
                 <Input
                placeholder="password"
                placeholderTextColor={'#b6b6b6'}
                onFocus={this.onFocusChange}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                secureTextEntry={true}
                onChangeText={password => this.setState({password: password})}
                leftIcon={
                    <Icon
                    name="lock"
                    size={22}
                    color={this.state.isFocused? '#0779e4' : '#fff'} />
                }
                 /> 
                 </View>
                <TouchableOpacity onPress={this.onSignIn} >
                <LinearGradient
                  colors={['#f2fcfe', '#1c92d2']}
                  style={{width: 300, height: 50, borderRadius: 80, alignItems: 'center', justifyContent: 'center', marginTop: 50}}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}>
                      <Text style={{fontSize: 20, color: '#fff'}}>Log in</Text>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onSignUp} >
                <LinearGradient
                  colors={['#f2fcfe', '#1c92d2']}
                  style={{width: 300, height: 50, borderRadius: 80, alignItems: 'center', justifyContent: 'center', marginTop: 30}}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}>
                      <Text style={{fontSize: 20, color: '#fff'}}>Sign up</Text>
                </LinearGradient>
                </TouchableOpacity>
                <View style={{marginTop: 20}}>
                <Text style={{fontSize: 15, color: '#1c92d2'}}>Password must be of more than 5 digits</Text>
                </View>
                {/* <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#fff"
                backgroundColor="#1c92d2"
                onPress={() => this.signInWithGoogleAsync()} /> */}
              </View>
         </LinearGradient>     
      </View>
    )
  }
}
const styles = StyleSheet.create({
  textInput: {
    width: 300,
    height: 50,
    borderRadius: 80,
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  textInput1: {
    width: 300,
    height: 50,
    borderRadius: 80,
    backgroundColor: '#fff',
    textAlign: 'center',
    marginTop: 30
  },
  Container: {
    width: '90%',
    height: 50,
    borderRadius: 100,
    borderWidth: 3.5,
    marginVertical: 10
},
inputContainer: {
    borderBottomWidth: 0
},
inputText: {
    color: '#0779e4',
    fontWeight: '300',
    marginLeft: 5
}
})