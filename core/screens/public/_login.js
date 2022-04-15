import React,{useState,useEffect, useContext} from 'react';
import { StyleSheet,View,Image,useWindowDimensions,ScrollView,Pressable,Text } from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

// Use navigation //
import { useNavigation } from '@react-navigation/native';
// Use Hooks for Validating Input binds //
import {useForm}  from 'react-hook-form';

// Import Library //
import ApiCore from '../../lib/ApiCore';
import config  from '../../config.json';
import Auth from '../../lib/Auth';
import AppContext from '../../context/AppContext';


const ScrLogin = ({...props}) =>{
    const {height,width} = useWindowDimensions();   
    const {control, handleSubmit,formState: {errors}} = useForm();
    const [apiState,setApiState] = useState({loading:false,msg:"",loadingtext:'Logging In ...' , haserror:false,errorobj:null});

    const api = new ApiCore();
    const auth = new Auth();

    const appContext  = useContext(AppContext);

    useEffect(() => {
        auth.setLoggedOut();        
    }, [])

    const onSignInPressed = (data) =>{        
        if(apiState.loading){ return;}

        setApiState({loading:true,status:null,loadingtext:'LOADING ... ',apiResultIcon:'closecircleo',showresult:false,haserror:false,errorobj:null,apiResultIcon:null});

        api.fetch(config.API_URI+'auth', data)
                .then((resp) => resp.json())
                .then((apiRespJSON)=>{
                    api.showApiresult(apiRespJSON);
                    setApiState({
                                    loading:false,
                                    msg:apiRespJSON.msg ,
                                    showresult:true,
                                    haserror:  (apiRespJSON.status==1)? true:false,
                                    errorobj: {message:apiRespJSON.msg},
                                    apiResultIcon : (apiRespJSON.status==1)? 'checkcircleo' :'exclamationcircleo',                                   
                                    resultcolor: (apiRespJSON.status==1) ? 'green':'#F26B40'
                                });

                   
                   auth.setAuth(apiRespJSON).then(r=> {
                        console.log('apiRespJSON',apiRespJSON);
                        console.log('Set Auth',r);
                       
                        if(r==false){  
                            appContext.funcUpdateAppStatus({api:{isApiLoading:false,animation:2,msg:'Authentication Failed'}});
                            appContext.funcUpdateAuthData(null,true);                            
                        }else{
                            // r => is formated data for Async Storage 
                            if(!r.authdata.isLoggedIn){
                                appContext.funcUpdateAuthData(null,true);
                                appContext.funcUpdateAppStatus({api:{isApiLoading:false,animation:2,msg:'Authentication Failed'}});
                            }else{

                                setTimeout(()=>{                                    
                                    appContext.funcUpdateAppStatus({api:{isApiLoading:false,animation:2,msg:apiRespJSON.msg}});
                                    appContext.funcUpdateAuthData(r.authdata,false);
                                },1500);

                            }                            
                        }
                        
                   });

                   return apiRespJSON;

                })
                .catch((error)=>{       
                    error.message = "Api Error : " +  error.message; 
                    setApiState({loading:false,status:0 ,showresult:true,haserror:true,errorobj:error,apiResultIcon:'disconnect',resultcolor:'red'});
                });
       
        //setLoading(false);
    }
    const onForgotPassword=()=>{
        console.warn('Not Implemented');
    }


    return (
        <View showsVerticalScrollIndicator={false} style={styles.container}>
            
            <Pressable onPress={()=>{props.navigation.navigate(config.SCREENS.FLASH)}}>
                <Image source={require('../../assets/logo/com_logo1.png')} style={ [styles.logo, {marginTop: '15%' ,height : height*0.25 , width : width*0.40}]} resizeMode='contain'/>
            </Pressable>
            
            <ScrollView style={styles.inputDiv}>

                <CustomInput control={control} placeholder="User Name" name="username"  iconType={'user'} rules={{required:'User name required'}} />
                <CustomInput control={control} placeholder="Password"  name="password"  iconType={'lock'} rules={{required:'Password required'}} secureTextEntry={true} /> 
    
                <CustomButton text={ apiState.loading? apiState.loadingtext:'LOGIN'} onPress={handleSubmit(onSignInPressed)}/>
                <CustomButton style={styles.forgotPwd} text="Forgot password ?" onPress={onForgotPassword} type='TERTIARY'/>

                <ApiCore  
                          show={apiState.loading} 
                          text="Logging in ..."                           
                          msg= {apiState.msg}
                          textcolor="#0D9CD1"

                          apiResultIcon={apiState.apiResultIcon} 
                          showresult = {apiState.showresult}
                          resultcolor=  {apiState.resultcolor}
                          haserror={apiState.haserror} 
                          errorobj={apiState.errorobj} 
                />

             </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        display: "flex",
        width:'100%',
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign: "center",
        backgroundColor: 'white',
    },
    inputDiv:{
       width:300
    }
});


export default ScrLogin;