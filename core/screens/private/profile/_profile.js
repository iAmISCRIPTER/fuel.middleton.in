import React,{useContext, useEffect} from 'react';
import { StyleSheet,View,Text,Image,TouchableOpacity,ScrollView,Alert } from 'react-native';


import AppContext from '../../../context/AppContext';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



const ScrProfile = ({...props}) =>{
    const appContext = useContext(AppContext);

    console.log(appContext);

    return ( 
        <View style={styles.container}>            
            <View style={styles.img}>
                <TouchableOpacity>
                    <Image  style={styles.pfileimg} Imag source={ require('../../../assets/logo/user_male.png') } /> 
                </TouchableOpacity>

                <View style={[styles.dtl,{marginTop:0,height:'100%'}]}>

                    <ScrollView style={{color:'white'}}>

                    <View style={styles.dtlItem}>
                        <Text style={{fontSize:20,fontStyle:'italic',letterSpacing:2,textTransform:'uppercase'}}>{appContext.authdata.UserData.user_name} </Text>
                    </View>
                    <View style={styles.dtlItem}>                      
                        <Text style={{fontSize:10,letterSpacing:1,textTransform:'uppercase'}}>{appContext.authdata.UserData.access_role_name} </Text>                        
                    </View>

                    <View style={[styles.dtlItem,{marginTop:20}]}>
                        <Text style={{fontSize:14,letterSpacing:1,textTransform:'lowercase'}}><Fontisto style={{color:'blue',fontSize:15}} name='email'/> {appContext.authdata.UserData.user_email} </Text>                        
                    </View>
                    <View style={[styles.dtlItem,{marginTop:10}]}>
                        <Text style={{fontSize:14,letterSpacing:1,textTransform:'lowercase'}}><Fontisto style={{color:'blue',fontSize:15}} name='phone'/> {appContext.authdata.UserData.primary_mobile} </Text>                        
                    </View>

                    <View style={[styles.dtlItem,{marginTop:10}]}>
                        <Text style={{fontSize:14,letterSpacing:1,textTransform:'uppercase'}}><Octicons style={{color:'red',fontSize:15}} name='git-branch'/> {appContext.authdata.UserData.branch_code} [{appContext.authdata.UserData.branch_id}]</Text>                        
                    </View>

                    <View style={[styles.dtlItem,{marginTop:10}]}>
                        <Text style={{fontSize:10,letterSpacing:1,color:'gray'}}>Last Login : {appContext.authdata.loginTime} </Text>                        
                    </View>

                    <View style={[styles.updBtn,{marginTop:30}]}>
                        <TouchableOpacity style={{borderColor:'red',borderStyle:'dashed',borderWidth:1}} 
                        onPress={
                            ()=>{ 
                                    Alert.alert('Restricted','You don’t have rights to perform profile update operation',
                                    [{text:'I Agree'}]);  
                        }}>
                                <Text style={{color:'#F95847',padding:10,alignContent:'center',textAlign:'center'}} ><MaterialCommunityIcons style={{color:'#F95847',fontSize:22}} name='account-edit-outline'/> Update</Text>
                        </TouchableOpacity>              
                    </View>

                    </ScrollView>

                </View>

            </View>
        </View>
    );

}
export default ScrProfile;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    img:{
        marginTop:20
    },
    pfileimg:{
        height:180,
        width:200,
        marginLeft:'auto',
        marginRight:'auto',
        resizeMode:'contain'
    },
    dtl:{        
        marginLeft:'auto',
        marginRight:'auto',
        alignItems:'center',
        textAlign:'center'
    },
    dtlItem:{
        marginTop:5,
        fontWeight:'600',
        fontSize:25
    },
    updBtn:{
        marginTop:5,
        fontWeight:'600',
        fontSize:15,
        color:'blue'
    }

});