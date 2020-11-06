import React from 'react'
import {View, Text, ScrollView, Dimensions, ImageBackground, TouchableOpacity} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Surface} from 'react-native-paper'

let tableIcon = {uri: 'https://ii1.pepperfry.com/media/catalog/product/a/n/568x625/anne-solid-wood-coffee-table-in-provincial-teak-finish-by-amberville-anne-solid-wood-coffee-table-in-smd0mj.jpg'}
let chairIcon = {uri: 'https://ii1.pepperfry.com/media/catalog/product/s/y/568x625/sylvia-iconic-chair-in-grey-colour-by-star-india-sylvia-iconic-chair-in-grey-colour-by-star-india-y2estu.jpg'}
let doorIcon = {uri: 'https://www.greenply.com/assets/categories/home_page_images/27/original/category-tn-Doors.jpg?1566207668'}
let windowIcon = {uri: 'https://images.theconversation.com/files/349379/original/file-20200724-25-1b07lko.jpg?ixlib=rb-1.1.0&rect=8%2C25%2C5599%2C3707&q=45&auto=format&w=496&fit=clip'}
let bedIcon = {uri: 'https://ii1.pepperfry.com/media/catalog/product/e/n/568x625/enri-king-size-bed-with-storage-in-wenge-finish-by-mintwud-enri-king-size-bed-with-storage-in-wenge--mjhjug.jpg'}
let otherIcon = {uri: 'https://www.bajajfinserv.in/From_home_appliances_electronics_to_furniture_decor_large_img_790-CP_From-home-appliances-and-electronics-to-furniture-and-decor-Shop-on-EMI-this-summer-20kb.jpg'}

export class FurnitureScreen extends React.Component{
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Tables'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={tableIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Tables</Text>
                </View>
                <View style={{marginRight: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Chairs'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={chairIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Chairs</Text>
                </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
                <View style={{marginLeft: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Doors'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={doorIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Doors</Text>
                </View>
                <View style={{marginRight: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Windows'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={windowIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Windows</Text>
                </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
                <View style={{marginLeft: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormScren', {text: 'Beds'})}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4}}>
                        <ImageBackground source={bedIcon} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Beds</Text>
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
                </ScrollView>
                 </LinearGradient>
            </View>
        )
    }
}