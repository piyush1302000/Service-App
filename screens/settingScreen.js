import React from 'react'
import {View, Text} from 'react-native'
import CustomButton from '../componnts/CustomButton'
import * as firebase from 'firebase'
import 'firebase/auth'

export class SettingScreen extends React.Component{

    onSignOut = async () => {
        try{
            await firebase.auth().signOut()
            this.props.navigation.navigate('welcomeScreen')
        }catch(error)
        {
            alert('Unable to Sign Out Right Now!')
        }
    }
    

    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <CustomButton onPress={this.onSignOut}>
                    <Text style={{fontSize: 20, color: "#1c92d2"}}>Log Out</Text>
                </CustomButton>
            </View>
        )
    }
}