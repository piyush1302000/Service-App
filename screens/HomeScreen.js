import React from 'react'
import {View, Text, ScrollView, Dimensions, ImageBackground, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {LinearGradient} from 'expo-linear-gradient'

const windowWidth = Dimensions.get('window').width
let electricalUrl = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFADZmSOOgOUQIDb64Dt_wMh0eNnLI63FFyQ&usqp=CAU'}
let electronicUrl = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFfvIU89OXCBk07WRR3cywMmR4vLvyWmNG4w&usqp=CAU'}
let furnitureUrl = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStOAPlykiEYf1W-gfddZHuIEiAkFOyQxhYrQ&usqp=CAU'}
let plumbingUrl = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSMe68shvkrpxMjJ1faYw6Y_mKIqDszcoJ3w&usqp=CAU'}

export class HomeScreen extends React.Component{


    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                 <LinearGradient  
                 colors={['#36d1dc', '#5b86e5']}
                 style={{flex: 1, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, justifyContent: 'flex-end'}}
                 start={{x: 0, y: 0}}
                 end={{x: 1, y: 0}}
                 >   
                 <Text style={{fontSize: 30, textAlign: 'left', color: '#fff', fontWeight: '500', marginLeft: 20}}>Service App</Text>
                 <Text style={{fontSize: 15, textAlign: 'left', color: '#fff', marginLeft: 20, marginBottom: 40}}>Repair It!</Text>
                </LinearGradient>
                </View>
                <View style={{flex: 1}}>
                 <View style={{flex: 1, marginTop: 20}}>
                 <ScrollView style={{marginTop: 10}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'left', marginLeft: 20}}>Equipments</Text>
                       <View style={{marginTop: 20, alignItems: 'center'}}>
                       <TouchableOpacity onPress={() => this.props.navigation.navigate('ElectricalScreen', {text: "Electrical"})}>    
                       <ImageBackground source={electricalUrl} style={{width: windowWidth -20, height: 150, justifyContent: 'flex-end'}} >
                       <Text style={{fontSize: 22, fontWeight: 'bold', color: "#fff", textAlign: 'left', marginLeft: 20, marginBottom: 15}}>Electrical</Text>
                       </ImageBackground>
                       </TouchableOpacity>
                       </View>
                       <View style={{marginTop: 20, alignItems: 'center'}}>
                       <TouchableOpacity onPress={() => this.props.navigation.navigate('ElectronicScreen', {text: "Electronic"})}>    
                       <ImageBackground source={electronicUrl} style={{width: windowWidth -20, height: 150, justifyContent: 'flex-end'}} >
                       <Text style={{fontSize: 22, fontWeight: 'bold', color: "#fff", textAlign: 'left', marginLeft: 20, marginBottom: 15}}>Electronic</Text>
                       </ImageBackground>
                       </TouchableOpacity>
                       </View>
                       <View style={{marginTop: 20, alignItems: 'center'}}>
                       <TouchableOpacity onPress={() => this.props.navigation.navigate('FurnitureScreen', {text: "Furniture"})}>    
                       <ImageBackground source={furnitureUrl} style={{width: windowWidth -20, height: 150, justifyContent: 'flex-end'}} >
                       <Text style={{fontSize: 22, fontWeight: 'bold', color: "#fff", textAlign: 'left', marginLeft: 20, marginBottom: 15}}>Furniture</Text>
                       </ImageBackground>
                       </TouchableOpacity>
                       </View>
                       <View style={{marginTop: 20, alignItems: 'center'}}>
                       <TouchableOpacity onPress={() => this.props.navigation.navigate('PlumbingScreen', {text: "Plumbing"})}>    
                       <ImageBackground source={plumbingUrl} style={{width: windowWidth -20, height: 150, justifyContent: 'flex-end'}} >
                       <Text style={{fontSize: 22, fontWeight: 'bold', color: "#fff", textAlign: 'left', marginLeft: 20, marginBottom: 15}}>Plumbing</Text>
                       </ImageBackground>
                       </TouchableOpacity>
                       </View>
                       </ScrollView>
                    </View> 
                </View>
            </View>
        )
    }
}