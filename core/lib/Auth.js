import React,{Component, useContext} from 'react';
import ApiConfig from '../config.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Auth extends Component {
    constructor(props){
        super(props);
    }

    getStoredData  = async() => {
        try {
            const storedData = await AsyncStorage.getItem(ApiConfig.STORAGE_KEY);            
            return storedData!=null ? JSON.parse(storedData) : null;            
        } catch (error) {
            console.error('Async Storage : Auth Error',error);
        }
    }


    isLoggedIn = async() => {
        return this.getStoredData().then(r=>{
            
            if(r==null){
                return false;
            }else{                
                if(!r.authdata.isLoggedIn){
                    return false;
                }else{                    
                    return r.authdata; // Logged In 
                }                
            }
        });
    }

    setLoggedOut(){
        AsyncStorage.removeItem(ApiConfig.STORAGE_KEY);
        return true;
    }

    getSampleAuthDataStracture(){
        return { 
                isLoggedIn :  false , 
                loginTime : null,
                UserData : null,
                msg : 'Not Initilized'
            };
    }

    setAuth = async(apiresult)=>{
        if(apiresult.status==1){
            const Ltime = new Date();
            const jsonValue = { authdata : { 
                                                isLoggedIn :  true , 
                                                loginTime  : Ltime.getDate() + "/" + (Ltime.getMonth()+1) + "/" + Ltime.getFullYear() + " " + Ltime.getHours() + ":" + Ltime.getMinutes()+ ":" +Ltime.getSeconds() ,
                                                UserData   : apiresult.data,
                                                msg        : 'Formated AuthData from Api for AsyncStorage'
                                            }
                              };

            try {
                AsyncStorage.setItem(ApiConfig.STORAGE_KEY, JSON.stringify(jsonValue));
                return jsonValue;
            } catch (error) {
                return false;
            }  
        }else{
            return false;
        }
    }




}

export default Auth;