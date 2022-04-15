import React, { useContext } from 'react';
import { StyleSheet,View,Text,ImageBackground,Image,TouchableOpacity, Pressable } from 'react-native';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import config from '../../../config.json';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { setLoggedOut } from '../../../lib/helper/AuthHelper';

import AppContext from '../../../context/AppContext';

import { DefaultMenu } from './user_menus';


const CustomDrawer = ({...props}) => {  
    
    const appContext= useContext(AppContext);

    const callsetLoggedOut =()=>{
        appContext.funcUpdateAppStatus({api:{isApiLoading:true,msg:'Logging Out'}});
        setTimeout(()=>{
            setLoggedOut();
            appContext.funcUpdateAuthData(null,true);
            appContext.funcUpdateAppStatus({api:{isApiLoading:false,animation:1,msg:'Checking Seassion'}});
        },1500);
        
    }

    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.contentContainer}>
                
                <ImageBackground style={styles.mnuheaderimgbg} source={require('../../../assets/imgs/menubg.png')}>
                    
                    <TouchableOpacity onPress={()=> { console.log(props); props.navigation.navigation.navigate(config.SCREENS.PROFILE)} }>
                        <Image  style={styles.pfileimg} source={ require('../../../assets/logo/user_male.png') } />
                    </TouchableOpacity>
                    <Text style={styles.username}>
                       {appContext.authdata.UserData.user_name} : <Text style={styles.urole}>{appContext.authdata.UserData.access_role_name}</Text>{'\n'}
                        <Text style={styles.email}>
                        {appContext.authdata.UserData.user_email}
                            <Text style={styles.prids}> 
                            {"   "}U{appContext.authdata.UserData.c_id}/B{appContext.authdata.UserData.branch_id}/R{appContext.authdata.UserData.user_access_role}                                 
                            </Text>
                        </Text>
                    </Text>
                    
                </ImageBackground>

               <DefaultMenu {...props} />

                

            </DrawerContentScrollView>

            <View style={styles.footer3}>
                
                <View style={[styles.subfootericon,{borderLeftWidth:1}]}>
                    <TouchableOpacity>
                        <SimpleLineIcons name={'lock'} size={15} style={{color:'red'}} />                    
                    </TouchableOpacity>
                </View>

                <View style={[styles.subfootericon,{borderLeftWidth:1}]}>
                    <TouchableOpacity>
                        <SimpleLineIcons name={'settings'} size={15} style={{color:'#30B2EE'}} />       
                    </TouchableOpacity>
                </View>



            </View>

            <View style={styles.footer2}>
                
                <TouchableOpacity style={styles.signout}  onPress={()=> callsetLoggedOut() }>
                    <Ionicons style={{color:'red'}} name="exit-outline" size={22}>                
                        <Text style={styles.signoutTxt}>Sign Out</Text>
                    </Ionicons>
                </TouchableOpacity>  
                   
                

                <Text  style={styles.verssion}>Ver : {config.APP_VERSION } Build : {config.APP_BUILD} {'\n'}
                    <Text>Login Time : {appContext.authdata.loginTime}</Text>
                </Text>          

                
            </View>
            <View style={styles.footer}></View>
        </View>
    );
}

export default CustomDrawer;

const styles = StyleSheet.create({
    container : {
       flex:1
    },
    contentContainer:{
        backgroundColor: config._STYLES.BAR.headerColor,
    },
    mnuheaderimgbg:{
        paddingBottom:5,resizeMode:'contain'
    },
    pfileimg:{
        padding:10,
        height: 65, 
        width: 65, 
        borderRadius: 40, 
        marginLeft:10,
        marginTop: 10
    },
    username:{
       fontFamily:'GeforceLight',color:'white',paddingTop:5,marginLeft:3,fontSize:17
    },
    urole:{
        color:'white',fontSize:10,letterSpacing:1,textAlign:'right',fontFamily:'sans-serif'
    },
    email:{
        color:'blue',fontSize:12,letterSpacing:0.5,textAlign:'right',fontFamily:'sans-serif'
    },
    footer:{
        padding:2,backgroundColor:config._STYLES.BAR.footerColor
    },
    footer2:{
       height:35,borderTopWidth:1,borderTopColor:'#ccc',flexDirection:'row'
    },
    footer3:{
        height:25,borderTopWidth:1,borderTopColor:'#ccc',flexDirection:'row',alignItems:'center',flexDirection:'row-reverse'
     },
    subfootericon:{
        alignItems:'center',paddingRight:20,paddingLeft:20,height:25,borderTopColor:'#ccc',flexDirection:'row'
    },
    signout:{
       padding:5
    },
    signoutTxt:{
        fontFamily:'GeforceLight',fontSize:15,padding:10,color:'red',fontWeight:'700',letterSpacing:1
     },
    brText:{
        
    },
    prids:{
       color:'white',
       fontSize:8
    },
    verssion:{
        marginLeft:'auto',
        marginTop:'auto',
        padding:5,
        color:'lightgray',
        textAlign:'left',fontSize:9
    },
    logout:{
       flexDirection:'column'
    },
    lgicon:{
       
    }


});