import React from 'react'
import {View, Text, ScrollView, SafeAreaView, Platform, Image} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'

export class CustomDrawer extends React.Component{

    render(){
        return(
             <ScrollView>
                <SafeAreaView style={{backgroundColor: '#2E424D', paddingTop: Platform.OS == 'android'? 30 : 0, flex: 1}} />
                <View style={{height: 200, backgroundColor: '#2E424D', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/logo1.jpg')} style={{height: 100, width: 100, borderRadius: 50}} />
                    <Text style={{fontSize: 22,color: '#fff'}}>Service App</Text>
                </View>
                <DrawerItems {...this.props} />
            </ScrollView>
        )
    }
}