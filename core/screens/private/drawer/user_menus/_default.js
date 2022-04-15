import React from 'react'
import {StyleSheet,TouchableOpacity,View,Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import config from './../../../../config.json';

const DefaultMenu = ({...props}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.menu}>

                <TouchableOpacity onPress={()=> props.navigation.navigation.navigate(config.SCREENS.FuelIn) }>
                    <FontAwesome5 name={'gas-pump'} size={18} style={styles.icon}> {''}
                        <Ionicons name='md-arrow-forward-outline' size={15} color="green"/> {''}
                        <Text style={styles.menuText}>Incoming Fuel Requests</Text>
                    </FontAwesome5>
                </TouchableOpacity>



            </View>
        </View>
    );
}
export default DefaultMenu;

const styles = StyleSheet.create({
    container : {
        backgroundColor:'white'
    },
    icon:{
        color:'#187DBF',
    },
    icon2:{
        color:'#F75D5A',
    },
    menu : {
        paddingLeft:10,paddingTop:5,height:30,borderBottomWidth:1,borderBottomColor:'#ccc',flexDirection:'row'
    },
    menuText:{        
        color: 'black',
        fontSize:13,
        letterSpacing:1,
        fontFamily:'Roboto'
    }
});