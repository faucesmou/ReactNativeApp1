import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Text } from 'react-native';
/* import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; */
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
//import { Tab3Screen } from '../screens/Tab3Screen';

import { StackNavigator } from './StackNavigator';
import { StackNavigator2 } from './StackNavigator2';
import { Tab3Screen } from '../screens/Tab3Screen';

import { Pagina3Screen } from '../screens/Pagina3Screen';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { colores } from '../theme/appTheme';
import { TopTabNavigator } from './TopTabNavigator';




export const Tabs = () => {
  return Platform.OS === 'ios'
  ?<TabsIOS/>
  :<TabsAndroid/>
}





const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator 
    initialRouteName="Home"
    activeColor='blue'/* "#f0edf6" */
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: colores.primary/* 'blue' */ /* '#694fad' */ }}/* color de fondo del tab bottom  */
 /*  esto no funciona  tabBarOptions={{
      labelStyle: {
        fontSize: 25,
      },
    }} */
    screenOptions={({ route })=> ({

      tabBarLabelStyle: {
        fontSize: 35,/* esto no funciona */
      },
      tabBarIcon: ( color, ) => {
        console.log(route.name)
        let iconName: string = '';
        switch( route.name ) {
          case 'Tab1Screen':
            iconName= 'mail-unread-outline'
            break;
          case 'Tab2Screen':
            iconName= 'airplane-outline'
            break;
          case 'Tab3Screen':
            iconName= 'accessibility-outline'
            break;   
        }
        return <Icon name={ iconName }  size={35} color={ colores.blanco } />
      }
       
    })}

    >
        <BottomTabAndroid.Screen name="Tab1Screen" options= {{ title: 'Correo'}}  component={ Pagina1Screen } />   
      <BottomTabAndroid.Screen name="Tab2Screen" options= {{ title: 'Navegacion'}} component={ TopTabNavigator } />
      <BottomTabAndroid.Screen name="Tab3Screen" options= {{ title: 'Tab3'}} component={ Pagina3Screen } />
    </BottomTabAndroid.Navigator>
    
  );
}





const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
    sceneContainerStyle={{
      backgroundColor: 'white'
    }}
 /*    screenOptions={{ 
      tabBarActiveTintColor: colores.primary,
      tabBarStyle: {
        borderTopColor: 'blue',
        borderTopWidth: 1,
        elevation: 0
      },
      tabBarLabelStyle: {
        fontSize: 10,
      }
    }} */
    screenOptions={({ route })=> ({
      
      tabBarActiveTintColor: colores.primary,
      tabBarStyle: {
        borderTopColor: 'blue',
        borderTopWidth: 3,
        elevation: 0
      },
      tabBarLabelStyle: {
        fontSize: 22,
        color: 'blue'
      },

      tabBarIcon: ( color/* , focused, size */) => {
        console.log(route.name)

        let iconName: string = '';
        switch( route.name ) {
          case 'Tab1Screen':
            iconName= 'mail-unread-outline'
            break;
          case 'TopTabNavigator':
            iconName= 'airplane-outline'
            break;
          case 'Tab3Screen':
            iconName= 'accessibility-outline'
            break;    
        }

        return <Icon name={ iconName } size={20} color={ colores.primary } />
      }
    })}
 /*   El curso usa 'tabBarOptions' pero està deprecado y se la app recomienda usar 'screenOptions' que es el que uso arriba. tabBarOptions={{ 
      activeTintColor: colores.primary,
      style: {
        borderTopColor: colores.primary,
        borderTopWidth: 5,
        elevation: 0,
      },
      labelStyle: {
        fontSize: 15
      }
    }} */
    >
     {/*  <Tab.Screen name="Tab1Screen" options= {{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color}}>T1</Text> }} component={ Pagina1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options= {{ title: 'Tab1'}} component={ Pagina1Screen } />   
      <BottomTabIOS.Screen name="TopTabNavigator" options= {{ title: 'TopTabNavigator'}} component={ TopTabNavigator } />
      <BottomTabIOS.Screen name="Tab3Screen" options= {{ title: 'Tab3'}} component={ Pagina3Screen } />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </BottomTabIOS.Navigator>
  );
}