import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,useWindowDimensions, Pressable} from 'react-native';
// Config //
import config from '../../config.json';
//import { isLoggedInAsync } from '../../lib/helper/AuthHelper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const ScrFlash = ({...props}) =>{
    const {height,width} = useWindowDimensions();

    const ClickToContinue = () =>{      
       props.navigation.navigate(config.SCREENS.LOGIN);
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={ClickToContinue}>
                <Image source={require('../../assets/logo/com_logo1.png')} style={ [styles.logo, {height : height*0.25 , width : width*0.40}]} resizeMode='contain'/>
            </Pressable>
            
            <Pressable onPress={ClickToContinue}>
                <Text style={{color:'lightgray',textAlign:'center'}}>Locked</Text>
                <SimpleLineIcons name={'lock'} style={{textAlign:'center'}}  size={25} color="red"/>
                <Text style={styles.continue}> Tap to <Text style={{fontWeight:'bold',fontSize:25}}>Login</Text></Text>
            </Pressable>
            <Text style={styles.footer}>Ver : {config.APP_VERSION} Build : {config.APP_BUILD}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign: "center",
        backgroundColor: 'white',
    },
    continue:{
        fontSize:25,
        fontFamily:'GeForceLight',        
       
        color:'#39ac39',
        letterSpacing:3,
        marginTop:'30%'
    },
    footer:{
        fontFamily:'GeForceLight',
        position: 'absolute', 
        justifyContent: "center",
        alignItems: "center",       
        bottom: 15,
        fontStyle:'italic',
        color:'#008ae6',
        fontWeight:'600',
        letterSpacing:1
    }
});

export default ScrFlash;