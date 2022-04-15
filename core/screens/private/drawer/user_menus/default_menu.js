import React from 'react'
import {StyleSheet,TouchableOpacity} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const UserMenu = () =>{
    return(
        <TouchableOpacity style={[styles.subfootericon,{borderLeftWidth:1}]}>
            <SimpleLineIcons name={'lock'} size={15} style={{color:'red'}} />                    
        </TouchableOpacity>
    );
}
export default UserMenu;