import React, { Component } from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';
import config from '../../../config.json';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FuelTab =({...props})=>{  
    return (
        <View style={styles.container}>
            
            <View style={styles.tabs}>
                <TouchableOpacity onPress={()=>props.navigation.navigate(config.SCREENS.DASHBOARD)}>
                    <IonIcon style={styles.icon} name='md-home-outline' size={15} />
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tabs}>
                <TouchableOpacity>
                    <FontAwesome5 name={'gas-pump'} size={15} style={[styles.icon,styles.active]}/>
                    <Text style={[styles.text,styles.active]}>Fuel</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tabs}>
                <TouchableOpacity>
                    <IonIcon style={styles.icon} color="white" name='md-home-outline' size={15} />
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}

export default FuelTab;

const styles = StyleSheet.create({
    container:{
        height:35,
        flexDirection:'row',
        backgroundColor:config._STYLES.BAR.screen1.footerColor
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
        borderRightColor:'white',        
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