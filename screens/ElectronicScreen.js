import React from 'react'
import {View, Text, ScrollView, Dimensions, ImageBackground, TouchableOpacity} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Surface} from 'react-native-paper'

let desktopIcon = {uri: 'https://cdn.mobilesyrup.com/wp-content/uploads/2020/07/dell-xps-desktop-2020-scaled.jpg'}
let laptopIcon = {uri: 'https://cdn.mos.cms.futurecdn.net/A4GDK27VMnz6LtFDy9yzk.jpg'}
let mobileIcon = {uri: 'https://cdn0.vox-cdn.com/hermano/verge/product/image/9019/akrales_190307_3272_0020_squ.jpg'}
let othersIcon = {uri: 'https://cdn2.vectorstock.com/i/1000x1000/99/96/household-appliances-and-electronic-devices-vector-12329996.jpg'}

export class ElectronicScreen extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.getParam('text')}`,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 23,
         textAlign: 'center',
         alignSelf: 'center',
         width: '100%'
        },
        headerRight: <View></View>
      });

    render(){
        return(
            <View style={{flex: 1}}>
                <LinearGradient  
                 colors={['#2c3e50', '#3498db']}
                 style={{flex: 1}}
                 start={{x: 0, y: 0}}
                 end={{x: 0, y: 1}}
                 >
                <ScrollView>    
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
                <View style={{marginLeft: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Desktop'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={desktopIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Desktop</Text>
                </View>
                <View style={{marginRight: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Laptop'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={laptopIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Laptop</Text>
                </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
                <View style={{marginLeft: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Mobile'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={mobileIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Mobile</Text>
                </View>
                <View style={{marginRight: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Others'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={othersIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Others</Text>
                </View>
                </View>
                </ScrollView>
                 </LinearGradient>
            </View>
        )
    }
}