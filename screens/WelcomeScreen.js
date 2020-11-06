 import React from 'react';
 import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
 import CustomButton from '../componnts/CustomButton'
 import {LinearGradient} from 'expo-linear-gradient'
 import Icon from 'react-native-vector-icons/Entypo'

 export class welcomeScreen extends React.Component {

   render(){
   return (
     <View style={styles.container}>
       <LinearGradient  
         colors={['#a13388', '#10356c']}
          style={{flex: 1}}
          start={{x: 0, y: 0}}
         end={{x: 0, y: 1}}>
           <View style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
             <Image source={require('../assets/logo1.jpg')} style={{height: 200, width: 200, borderRadius: 100}} />
             <Text style={{fontWeight: '200', fontSize: 50, color: '#fff', marginTop: 20}}>Service App</Text>
           </View>
           <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
             <CustomButton onPress={() => this.props.navigation.navigate('LoginScreen')}>
               <Icon name="user" size={28} style={{left: 20, position: 'absolute'}} color={'#a13388'} />
               <Text style={{fontSize: 20, color: '#10356c', textAlign: 'center'}}>Log in as User</Text>
             </CustomButton>
             <CustomButton style={{marginTop: 30}} onPress={() => this.props.navigation.navigate('LoginScreen')}>
             <Icon name="man" size={32} style={{left: 15, position: 'absolute'}} color={'#a13388'} />
               <Text style={{fontSize: 20, color: '#10356c', textAlign: 'center'}}>Log in as Technician</Text>
             </CustomButton>
           </View>
         </LinearGradient>  
     </View>
   );
   }
 }

 const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
 });
