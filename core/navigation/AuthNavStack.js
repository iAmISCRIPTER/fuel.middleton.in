import React, { useContext, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Config File  //
import config from '../config.json';
// Screens //
import AppContext from '../context/AppContext';

import {ScrFlash,ScrLogin} from "../screens/index";

const Stack = createNativeStackNavigator();

const AuthNavigationStack = ({...props}) =>{

    return(            
        <Stack.Navigator screenOptions={{headerShown:false,cardStyle:{backgroundColor: 'red'}}} initialRouteName={config.SCREENS.LOCK}>            
            <Stack.Screen name={config.SCREENS.FLASH} options={{title:config.APP_NAME}} component={ScrFlash}></Stack.Screen>            
            <Stack.Screen name={config.SCREENS.LOGIN} options={{title:config.APP_INITIAL + "LOGIN"}} component={ScrLogin}></Stack.Screen>
        </Stack.Navigator>            
    );
};

export default AuthNavigationStack;