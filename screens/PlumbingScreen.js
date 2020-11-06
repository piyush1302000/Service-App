import React from 'react'
import {View, Text, ScrollView, Dimensions, ImageBackground, TouchableOpacity} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Surface} from 'react-native-paper'

let leakIcon = {uri: 'https://www.cobblestonesoftware.com/hubfs/Blog%20Images/December%202018%20Shutterstock%20Images/Stop-Revenue-Leakage-Licensed-621958247600x400.jpg'}
let pipeIcon = {uri: 'https://pixfeeds.com/images/home-improvements/640-463731553-plumber-at-work.jpg'}
let tapIcon = {uri: 'https://ae01.alicdn.com/kf/HTB19RN7Kv5TBuNjSspmq6yDRVXa5/Into-the-wall-cold-and-hot-Water-Taps-Bathroom-Faucet-Wall-type-Mixer-Single-Handles-Table.jpg_q50.jpg'}
let otherIcon = {uri: 'https://plumbermatewater.com/wp-content/uploads/2019/07/protect-your-bathroom-fixture-in-your-home-from-germs-bacteria-scale-sulfur.jpg'}

export class PlumbingScreen extends React.Component{
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
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
                <View style={{marginLeft: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Leakage'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={leakIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Leakage</Text>
                </View>
                <View style={{marginRight: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Pipeline'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={pipeIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Pipeline</Text>
                </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
                <View style={{marginLeft: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Taps'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={tapIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Taps</Text>
                </View>
                <View style={{marginRight: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Others'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={otherIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Others</Text>
                </View>
                </View>
                 </LinearGradient>
            </View>
        )
    }
}