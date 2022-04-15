import React, { Component } from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';
import config from '../../../config.json';
import IonIcon from 'react-native-vector-icons/Ionicons';


const DashboardTab =({...props})=>{  
    return (
        <View style={styles.container}>
            
            <View style={styles.tabs}>
                <TouchableOpacity>
                    <IonIcon style={[styles.icon,styles.active]} name='md-home-outline' size={15} />
                    <Text style={[styles.text,styles.active]}>Home</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    );
}

export default DashboardTab;

const styles = StyleSheet.create({
    container:{
        height:35,
        flexDirection:'row',
        backgroundColor:config._STYLES.BAR.footerColor
    },    
    active:{
        color:'yellow',
        textTransform:'uppercase',
        letterSpacing:2        
    },
    tabs:{        
        marginLeft:'auto',
        marginRight:'auto',
        alignContent:'center',
        paddingTop:5,
        alignItems:'center',                
        borderRightColor:'white'
    },
    icon :{
        marginLeft:'auto',
        marginRight:'auto',
        color:'white'
    },
    text:{
        color:'white',
        fontSize:10,
        alignContent:'center'
    }



});