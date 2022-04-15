import React from 'react';
import { StyleSheet,Text, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// Use Hooks for Validating Input binds //
import { Controller } from 'react-hook-form';

const CustomInput = ({control,name,placeholder,secureTextEntry,iconType,rules={}}) =>{
    return (
                <Controller 
                    control={control}
                    name={name}
                    rules={rules}
                    render = {({field : {onChange,onBlur},fieldState:{error}})=>(
                        <>
                        <View style={[styles.container,{borderColor: error ? 'red' : '#e8e8e8'},]}>
                             <AntDesign style={styles.iconStyle} name={iconType} size={25} color="#666" />
                            <TextInput
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={styles.input}                            
                            secureTextEntry={secureTextEntry}/>                           
                        </View>
                        {error && (
                                <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
                        )}
                        </>

                    )}
                />        
    )
}
const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        width: '100%',        

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 5,
        marginVertical: 5,        
        minHeight:38
    },
    input:{
       marginTop:-28,
       fontFamily:'GeforceLight',
       fontSize:22,
       fontWeight:'600',
       marginLeft:48
    },
    iconStyle: {        
        width: '15%',
        height:30,
        marginTop:2,
        borderRightWidth: 1,
        borderRightColor: '#ccc',
    }
});

export default CustomInput;