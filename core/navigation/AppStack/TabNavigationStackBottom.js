import React from 'react';
import { StyleSheet,Text } from 'react-native';
import config from '../../config.json';
// TAB Screens  //
import {ScrDashboard,ScrProfile,ScrLock,FuleRequestsIn} from '../../screens/index';
import { DashboardTab,ProfileTab,FuelTab } from '../../screens/private/tabs';

import IonIcon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Tab = createBottomTabNavigator();

const TabNavHome = ({...props}) =>{
    return (
            <Tab.Navigator initialRouteName={config.SCREENS.DASHBOARD}    
            screenOptions={{
                headerShown : false,
                tabBarStyle:styles.barStyle,
                tabBarActiveTintColor: config._STYLES.BAR.defaultTextColor,
                tabBarInactiveTintColor : config._STYLES.BAR.defaultTextColor,
            }}  tabBar={props=><DashboardTab {...props} />} >             
                
                <Tab.Screen name={config.SCREENS.DASHBOARD} component={ScrDashboard} options={{ 
                    tabBarLabel:"Dashboard" ,                    
                    tabBarIcon : ({focused})=>(
                        <IonIcon color={focused ? config._STYLES.BAR.selectedTextColor: config._STYLES.BAR.defaultTextColor} name='md-home-outline' size={15} />
                    )
                }}/>

            </Tab.Navigator>
    );
}

const TabNavFuelIn = ({...props}) =>{
    return (
        <Tab.Navigator initialRouteName={config.SCREENS.FuelIn}    
        screenOptions={{
            headerShown : false,
            tabBarStyle:styles.barStyleFuel,
            tabBarActiveTintColor: config._STYLES.BAR.defaultTextColor,
            tabBarInactiveTintColor : config._STYLES.BAR.defaultTextColor,           
        }} tabBar={props=><FuelTab {...props} />} >                 
          
            <Tab.Screen name={config.SCREENS.FuelIn} component={FuleRequestsIn} options={{ 
                tabBarLabel:"Fuel Request In" ,
                tabBarIcon : ({focused})=>(                        
                    <MaterialCommunityIcons name={'fuel'} color={focused ? config._STYLES.BAR.selectedTextColor:config._STYLES.BAR.defaultTextColor} size={18} style={styles.icon}/>
                )
            }}/>

        </Tab.Navigator>

           
    );
}

const TabNavProfile = ({...props}) =>{
    return (
            <Tab.Navigator initialRouteName={config.SCREENS.FuelIn}    
            screenOptions={{
                headerShown : false,
                tabBarStyle:styles.barStyleProfile,
                tabBarActiveTintColor: config._STYLES.BAR.selectedTextColor,
                tabBarInactiveTintColor : config._STYLES.BAR.defaultTextColor,
            }} tabBar={props=><ProfileTab {...props} />} >
                
                <Tab.Screen name={config.SCREENS.FuelIn} component={ScrProfile} options={{ 
                    tabBarLabel:"Profile",
                    tabBarIcon : ({focused})=>(                        
                        <SimpleLineIcons name={'user'} color={focused ? config._STYLES.BAR.selectedTextColor:config._STYLES.BAR.defaultTextColor} size={18} style={styles.icon}/>
                    )
                }}/>
               
            </Tab.Navigator>
    );
}




export {TabNavHome,TabNavFuelIn,TabNavProfile};

const styles = StyleSheet.create({
    barStyle:{
        backgroundColor: config._STYLES.BAR.home.footerColor,
        height:39
    },
    barStyleFuel:{
        backgroundColor: config._STYLES.BAR.screen1.footerColor,
        height:39
    },
    tabBarLabel:{
        color: 'white',
        fontSize: 12,
    },
    barStyleProfile:{
        backgroundColor: config._STYLES.BAR.profile.footerColor ,//'#09679e',
        height:39
    }
     

  });