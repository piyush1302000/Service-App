 import React from 'react'
 import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation'
 import {createDrawerNavigator} from 'react-navigation-drawer'
 import {LinearGradient} from 'expo-linear-gradient'
 import {welcomeScreen} from './screens/WelcomeScreen'
 import {LoginScreen} from './screens/LoginScreen'
 import {LoadingScreen} from './screens/LoadingScreen'
 import {HomeScreen} from './screens/HomeScreen'
 import {ElectricalScreen} from './screens/ElectricalScreen'
 import {ElectronicScreen} from './screens/ElectronicScreen'
 import {FurnitureScreen} from './screens/FurnitureScreen'
 import {PlumbingScreen} from './screens/PlumbingScreen'
 import {SettingScreen} from './screens/settingScreen'
 import {FormScren} from './screens/FormScreen'
 import {CustomDrawer} from './componnts/CustomDrawer'
 import {Ionicons} from '@expo/vector-icons'

 const HomeStackNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions : ({navigation}) => {
      return {
       headerBackground: (
        <LinearGradient  
         colors={['#36d1dc', '#5b86e5']}
         style={{flex: 1}}
         start={{x: 0, y: 0}}
         end={{x: 1, y: 0}}/>
       ),
       headerLeft: (
        <Ionicons name="ios-menu" size={32} color={'#fff'} onPress={() => navigation.openDrawer()} style={{marginLeft: 25}} />
      )
      }
    }
 },
  ElectricalScreen: {
    screen: ElectricalScreen,
    navigationOptions: {
       headerBackground: (
        <LinearGradient  
         colors={['#2c3e50', '#3498db']}
         style={{flex: 1}}
         start={{x: 0, y: 0}}
         end={{x: 1, y: 0}}/>
       )
      }
 },
 ElectronicScreen: {
  screen: ElectronicScreen,
  navigationOptions: {
     headerBackground: (
      <LinearGradient  
       colors={['#2c3e50', '#3498db']}
       style={{flex: 1}}
       start={{x: 0, y: 0}}
       end={{x: 1, y: 0}}/>
     )
    }
},
 FurnitureScreen: {
  screen: FurnitureScreen,
  navigationOptions: {
     headerBackground: (
      <LinearGradient  
       colors={['#2c3e50', '#3498db']}
       style={{flex: 1}}
       start={{x: 0, y: 0}}
       end={{x: 1, y: 0}}/>
     )
    }
},
 PlumbingScreen: {
  screen: PlumbingScreen,
  navigationOptions: {
     headerBackground: (
      <LinearGradient  
       colors={['#2c3e50', '#3498db']}
       style={{flex: 1}}
       start={{x: 0, y: 0}}
       end={{x: 1, y: 0}}/>
     )
    }
},
FormScren: {
  screen: FormScren,
  navigationOptions: {
     headerBackground: (
      <LinearGradient  
       colors={['#000000', '#434343']}
       style={{flex: 1}}
       start={{x: 0, y: 0}}
       end={{x: 1, y: 0}}/>
     )
    }
  } 
 })

 const DrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: HomeStackNavigator,
    navigationOptions: {
    title: 'Home',
    drawerIcon: () => <Ionicons name="ios-home" size={24} />
    }
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: {
    title: 'Settings',
    drawerIcon: () => <Ionicons name="ios-settings" size={24} />
    }
  }
},
{
  contentComponent: CustomDrawer,
  contentOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#6b52ae'
  }
}
)

 const AppStackNavigator = createStackNavigator({
     welcomeScreen: {
        screen: welcomeScreen,
        navigationOptions : {
           headerBackground: (
            <LinearGradient  
             colors={['#a13388', '#10356c']}
             style={{flex: 1}}
             start={{x: 0, y: 0}}
             end={{x: 1, y: 0}}/>
           )
          }
     },
     LoginScreen: {
       screen: LoginScreen,
       navigationOptions: {
         headerBackground: (
          <LinearGradient  
          colors={['#f2fcfe', '#1c92d2']}
          style={{flex: 1}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          />
         )
       }
     },
 })

 const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen,
  AppStackNavigator,
  DrawerNavigator
})

 const AppContainer = createAppContainer(AppSwitchNavigator)

 export default AppContainer