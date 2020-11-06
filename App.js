import React from 'react'
import {View} from 'react-native'
import AppContainer from './AppNavigator'
import * as firebase from 'firebase'
import {firebaseConfig} from './config/config'
firebase.initializeApp(firebaseConfig)

export default class App extends React.Component{

  render(){
    return(
      <View style={{flex: 1}}>
        <AppContainer/>
      </View>
    )
  }
}