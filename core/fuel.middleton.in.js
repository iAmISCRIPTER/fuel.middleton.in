import React,{useContext, useEffect,useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AuthNavStack from  './navigation/AuthNavStack'; // Containes Auth Stack Screens 
import AppNavStack from './navigation/AppNavStack';



import WaitWindow from './screens/public/_waitwindow';
import {isLoggedInAsync} from './lib/helper/AuthHelper';

// Context //
import AppContext from './context/AppContext';



const FUELAPP=()=>{
   
   const appContext = useContext(AppContext);
  
   useEffect(()=>{

      appContext.funcUpdateAppStatus({api:{isApiLoading:true,animation:2,msg:'Initializing ...'}});
      appContext.funcUpdateAppStatus({api:{isApiLoading:true,animation:2,msg:'Checking Sessions ...'}});
      // Checking Async Storage for last Logged In Session , If Yes update the context
      
       isLoggedInAsync().then(r=> {
              if(r==false){
                appContext.funcUpdateAppStatus({api:{isApiLoading:false,msg:'No Previous Seassion Detected'}});
              }else{
                
                if(r.isLoggedIn){ // Login Ok
                    appContext.funcUpdateAppStatus({api:{isApiLoading:false,msg:r.msg}})
                    appContext.funcUpdateAuthData(r,false);
                }else{
                    appContext.funcUpdateAppStatus({api:{isApiLoading:false,msg:r.msg}})
                    appContext.funcUpdateAuthData(null,true);
                }
              }
        }); 

      

   },[]);
   
    return (
              <NavigationContainer>                                
                  { appContext.appstatus.api.isApiLoading ? 
                      <WaitWindow show={true} animation={appContext.appstatus.api.animation} isLoading={true} text={appContext.appstatus.api.msg} textcolor="dodgerblue" /> 
                      :
                      (appContext.authdata.isLoggedIn? <AppNavStack/> : <AuthNavStack/>)
                  }
              </NavigationContainer>
              
    );
  }

  export default FUELAPP;
  
  