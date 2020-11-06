import React from 'react'
import {View, Text, ScrollView, ImageBackground, TouchableOpacity} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Surface} from 'react-native-paper'


let tvIcon = {uri: 'https://kodi.tv/sites/default/files/styles/hero_large/public/hero_slide/field_image/kodi-tv1.jpg?itok=_KwDW7sC'}
let fridgeIcon = {uri: 'https://icdn2.digitaltrends.com/image/gle12hslss-press-720x720.jpg'}
let acIcon = {uri: 'https://www.bajajfinserv.in/Air_Conditioners_on_Easy_EMI__BannerImage_EMI-Network-Category-Pages_Mobile.jpg'}
let coolerIcon = {uri: 'https://image.made-in-china.com/2f0j00SdLQCKBhSZbI/Popular-in-Lahore-Portable-India-Mini-Air-Cooler-Price-JH601-.jpg'}
let washIcon = {uri: 'https://www.kenresearch.com/blog/wp-content/uploads/2020/08/washing-machine-market.jpg'}
let waterIcon = {uri: 'https://cdn3.vectorstock.com/i/1000x1000/56/72/realistic-electric-water-heater-boiler-poster-vector-22905672.jpg'}
let fanIcon = {uri: 'https://www.orientelectric.com/theme/Orient/img/fan-banner.jpg'}
let otherIcon = {uri: 'https://raypcb.com/wp-content/uploads/2018/12/c81d71c0734dd19.jpg'}

export class ElectricalScreen extends React.Component{
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Television'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={tvIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Television</Text>
                </View>
                <View style={{marginRight: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Refrigerator'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={fridgeIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Refrigerator</Text>
                </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
                <View style={{marginLeft: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Air Conditioner'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={acIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Air Conditioner</Text>
                </View>
                <View style={{marginRight: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Air Cooler'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={coolerIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Air Cooler</Text>
                </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
                <View style={{marginLeft: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Washing Machine'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={washIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Washing Machine</Text>
                </View>
                <View style={{marginRight: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Water Heater'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={waterIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Water Heater</Text>
                </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
                <View style={{marginLeft: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Fans'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={fanIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Fans</Text>
                </View>
                <View style={{marginRight: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Others'})} >
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={otherIcon} style={{height: 150, width: 150}} />
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