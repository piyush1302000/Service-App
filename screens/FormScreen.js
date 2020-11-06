import React from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import CustomButton from '../componnts/CustomButton'

const windowWidth = Dimensions.get('window').width
export class FormScren extends React.Component{
  static navigationOptions = {
    headerTintColor: '#fff'
  }
  constructor()
  {
    super();
    this.state={
      name:'',
      email:'',
      password:'',
    }
  }
    submit()
    {
      console.warn(this.state)
    }
  render(){
      return(
        <LinearGradient  
                 colors={['#000000', '#434343']}
                 style={{flex: 1}}
                 start={{x: 0, y: 0}}
                 end={{x: 0, y: 1}}
                 >
            <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
             <TextInput
               placeholder="Enter Name"
               placeholderTextColor="#434343"
               onChangeText={(text)=>{this.setState({name:text})}}
               style={{borderWidth: 1, borderColor: 'skyblue', margin:17, height: 40, width: windowWidth - 60, borderRadius: 10, color: '#fff', textAlign: 'center'}}
             />
             {this.props.navigation.getParam('text') == 'Others'?
             <TextInput
             placeholder="Enter Product Name"
             placeholderTextColor="#434343"
             onChangeText={(text)=>{this.setState({name:text})}}
             style={{borderWidth: 1, borderColor: 'skyblue', margin:17, height: 40, width: windowWidth - 60, borderRadius: 10, color: '#fff', textAlign: 'center'}}
             />:
            <TextInput
             placeholder={this.props.navigation.getParam('text')}
             placeholderTextColor="#fff"
             editable={false}
             onChangeText={(text)=>{this.setState({name:text})}}
            style={{borderWidth:1,borderColor: 'skyblue',margin:17, height: 40, width: windowWidth - 60, borderRadius: 10, textAlign: 'center', color: '#fff'}}
            />
             }
             <TextInput
               placeholder="Problem"
               placeholderTextColor="#434343"
               multiline={true}
               scrollEnabled={true}
               onChangeText={(text)=>{this.setState({name:text})}}
               style={{borderWidth:1,borderColor: 'skyblue',margin:17, height: 80, width: windowWidth - 60, borderRadius: 10, textAlign: 'center', color: '#fff'}}
             />
             <TextInput
               placeholder="Enter Address"
               placeholderTextColor="#434343"
               multiline={true}
               scrollEnabled={true}
               onChangeText={(text)=>{this.setState({name:text})}}
               style={{borderWidth:1,borderColor: 'skyblue',margin:17, height: 60, width: windowWidth - 60, borderRadius: 10, textAlign: 'center', color: '#fff'}}
             />
             <TextInput
               placeholder="Phone Number"
               placeholderTextColor="#434343"
               keyboardType="numeric"
               onChangeText={(text)=>{this.setState({name:text})}}
               style={{borderWidth:1,borderColor: 'skyblue',margin:17, height: 40, width: windowWidth - 60, borderRadius: 10, textAlign: 'center', color: '#fff'}}
             />
             <TextInput
               placeholder="Enter Pin"
               placeholderTextColor="#434343"
               keyboardType="numeric"
               onChangeText={(number)=>{this.setState({name:number})}}
               style={{borderWidth:1,borderColor: 'skyblue',margin:17, height: 40, width: windowWidth - 60, borderRadius: 10, textAlign: 'center', color: '#fff'}}
             />
           <CustomButton style={{width: windowWidth - 50, backgroundColor: '#434343', marginTop: 25}}>
             <Text style={{color: '#fff', fontSize: 20}}>Submit</Text>
           </CustomButton>  
      </View>
      </LinearGradient>
      )
    }
}    
