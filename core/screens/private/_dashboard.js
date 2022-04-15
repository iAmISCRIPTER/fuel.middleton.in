import React,{useContext, useEffect} from 'react';
import { StyleSheet,View,Text } from 'react-native';

import config from '../../config.json';
import { isLoggedInAsync } from '../../lib/helper/AuthHelper';

import AppContext from '../../context/AppContext';

import { Platform } from 'react-native';

const ScrDashboard = ({...props}) =>{
    const appContext = useContext(AppContext);
    useEffect(() => {        
        isLoggedInAsync(appContext);
    }, []);

    return ( 
        <View>
            
        </View>
    );

}
export default ScrDashboard;