import React, { useEffect,useState } from 'react';

import {useFonts}  from 'expo-font';
import FUELAPP from './core/fuel.middleton.in';

import AppLoading from 'expo-app-loading';

import 'react-native-gesture-handler';

import AppContextProvider from './core/context/AppContextProvider';




export default function App() {


  let [fontLoaded] = useFonts({
    'GeForceBoldAlt':     require('./core/assets/fonts/GeForce-Bold-Alt.ttf'),
    'GeForceBold':        require('./core/assets/fonts/GeForce-Bold.ttf'),
    'GeForceLightAlt':    require('./core/assets/fonts/GeForce-Light-Alt.ttf'),
    'GeForceLight':       require('./core/assets/fonts/GeForce-Light.ttf'),
    'Roboto-Black':       require('./core/assets/fonts/Roboto-Black.ttf'),
    'Roboto-BlackItalic': require('./core/assets/fonts/Roboto-BlackItalic.ttf'),
    'Roboto-Bold':        require('./core/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-BoldItalic':  require('./core/assets/fonts/Roboto-BoldItalic.ttf'),
    'Roboto-Italic':      require('./core/assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light':       require('./core/assets/fonts/Roboto-Light.ttf'),
    'Roboto-LightItalic': require('./core/assets/fonts/Roboto-LightItalic.ttf'),
    'Roboto-Medium':      require('./core/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-MediumItalic':require('./core/assets/fonts/Roboto-MediumItalic.ttf'),
    'Roboto-Regular':     require('./core/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Thin':        require('./core/assets/fonts/Roboto-Thin.ttf'),
    'Roboto-ThinItalic':  require('./core/assets/fonts/Roboto-ThinItalic.ttf'),
  });

  if(!fontLoaded){
    return <AppLoading/>
  }

  return (    
    <AppContextProvider>
        <FUELAPP/>
    </AppContextProvider>
      
  );
}