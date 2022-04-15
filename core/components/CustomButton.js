import React from 'react';
import { StyleSheet, Text, View,Pressable} from 'react-native';


const CustomButton = ({onPress,text,type="PRIMARY",bgColor, fgColor}) =>{
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`],bgColor ? {backgroundColor: bgColor} : {},]}>
            <Text style={[styles.btnText,styles[`btnText_${type}`],fgColor ? {color: fgColor} : {},]}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container : {        
        width : '100%',
        padding:8,
        marginVertical:5,
        alignItems:'center',
        borderRadius:2,
    },
    container_PRIMARY:{
        backgroundColor:'#3871F3'
    },
    container_TERTIARY:{        
    },
    btnText:{
    },
    btnText_PRIMARY:{
        letterSpacing:2,
        color:'#fff',
        fontFamily:'GeForceLightAlt',
        fontWeight:'bold',
        fontSize:15
    },
    btnText_TERTIARY:{ 
        //color:'#ff6600'       
    },
});

export default CustomButton;