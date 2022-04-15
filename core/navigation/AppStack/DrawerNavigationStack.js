import React,{Suspense, useContext, useEffect,useState} from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';


//Config File  //
import config from '../../config.json';
// Screens //
import {ScrLock} from "../../screens/index";

// Auth helper
import { isLoggedInAsync } from '../../lib/helper/AuthHelper';
// Fetch data from TAB NAVIGATOR //
import {TabNavHome,TabNavFuelIn,TabNavProfile} from './TabNavigationStackBottom';
import { StyleSheet } from 'react-native';

import AppContext from '../../context/AppContext';



const Drawer = createDrawerNavigator();
// Custom Drawer - Content //
 import CustomDrawer from '../../screens/private/drawer/CustomDrawer'
//const CustomDrawer = React.lazy(()=>import('../../screens/private/drawer/CustomDrawer'));



// Use navigation //


const DrawerNavigationStack =({...props}) =>{
    const appContext = useContext(AppContext);

    console.log(appContext);

    useEffect(()=>{
            isLoggedInAsync().then(r=>{
                if(r==false){
                    props.navigation.navigate(config.SCREENS.LOGIN)
                    return;
                }
            });
    },[]);
    return(
       

        <Drawer.Navigator initialRouteName={config.SCREENS.LOCK} screenOptions={{
            headerShown:true, 
            headerTintColor: config._STYLES.BAR.headerColor, 
            headerStyle: styles.headerStyle,
            headerTitleAlign:'center',
            headerTintColor:config._STYLES.BAR.defaultTextColor,
            drawerActiveBackgroundColor: config._STYLES.BAR.drawerActiveBackgroundColor,
            drawerActiveTintColor: config._STYLES.BAR.drawerActiveTintColor,
            drawerInactiveTintColor: config._STYLES.BAR.drawerInactiveTintColor,
            headerTitleStyle:styles.headerTitleStyle,
            drawerLabelStyle: {
                marginLeft: -25,
                fontFamily: 'Roboto-Medium',
                fontSize: 15,
              }
        }} drawerContent={props => <CustomDrawer navigation={props}/>}>

        <Drawer.Screen name="Home"
        component={TabNavHome}
        options={{
            headerTitle:'Dashbaord',
            headerStyle:[styles.headerStyle,{backgroundColor:config._STYLES.BAR.headerColor}],
            drawerIcon: () => (
            <Ionicons name="home-outline" size={22} color={config._STYLES.BAR.defaultTextColor} />
          ),
        }}/>

            <Drawer.Screen name={config.SCREENS.LOCK} options={{title:"Lock",headerShown:false}} component={ScrLock} />

            <Drawer.Screen name={config.SCREENS.PROFILE} options={{
                title: 'Profile',
                headerShown:true,
                headerStyle:[styles.headerStyle,{backgroundColor:'#09679e'}],
                headerTitleStyle:{                    
                    fontFamily:'Roboto',
                    color: "white",
                    fontSize:18,
                },
                drawerIcon : ()=>{ <MaterialCommunityIcons name={'profile'} size={18} style={styles.icon}></MaterialCommunityIcons> },

            }} component={TabNavProfile} />

            <Drawer.Screen name={config.SCREENS.FuelIn} options={{
                title: "Incoming Fuel Requests",
                headerShown:true,
                headerStyle:[styles.headerStyle,{backgroundColor:config._STYLES.BAR.screen1.headerColor}],
                headerTitleStyle:{                    
                    fontFamily:'Roboto',
                    color: "white",
                    fontSize:18,
                },
                drawerIcon : ()=>{ <MaterialCommunityIcons name={'fuel'} size={18} style={styles.icon}></MaterialCommunityIcons> },

            }} component={TabNavFuelIn} />

            
        </Drawer.Navigator>

       
    );
}

export default DrawerNavigationStack;

const styles = StyleSheet.create({
    headerStyle : {
        backgroundColor:config._STYLES.BAR.bgcolor_top,
        height:60
    },
    headerTitleStyle:{
        fontFamily:'Roboto-Black',
        fontWeight:'500'
    },
    dtabheader:{
        display:'none'
    },
    
});