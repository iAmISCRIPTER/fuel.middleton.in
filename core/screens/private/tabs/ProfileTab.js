import React, { Component } from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';
import config from '../../../config.json';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const ProfileTab =({...props})=>{  
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
                    <SimpleLineIcons style={[styles.icon,styles.active]} color="white" name='user' size={15} />
                    <Text style={[styles.text,styles.active]}>Profile</Text>
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

export default ProfileTab;

const styles = StyleSheet.create({
    container:{
        height:35,
        flexDirection:'row',
        backgroundColor:config._STYLES.BAR.profile.footerColor
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