import React,{ Component } from 'react';
import {Text, View,Image,useWindowDimensions,StyleSheet,ActivityIndicator} from 'react-native';
import LottieView from 'lottie-react-native';

class WaitWindow extends  Component{

    constructor(props){
        super(props);        
        this.state = { 
            height : 25,
            width : 10
        };
    }
    
    

    render(){
            
        return (
            <View style={[styles.container,{opacity: (this.props.show) ? 1 : 0 , display: (this.props.show)? 'flex':'none'}]}>            
                <Image source={require('../../assets/logo/com_logo1.png')} style={ [styles.logo,{height:200,marginLeft:'0%',marginTop:'10%'}]} resizeMode='contain'/>
                <View style={{ opacity: (this.props.isLoading) ? 1 : 0 , display: (this.props.isLoading)? 'flex':'none'  }}>                        
                    <Text style={ [ styles.loadingText, {color:this.props.textcolor ? this.props.textcolor :  'red' }]}>{ (this.props.text)? this.props.text:'Please Wait Working' }</Text>
                    {/* <ActivityIndicator style={styles.waitIndecator} color= {this.props.textcolor ? this.props.textcolor :  'blue'} size="large"/> */}
                    
                    
                    <View style={{maxWidth:280,minHeight:250,margin:'auto'}}>
                    {this.props.animation==1 ? 
                            <LottieView source={require('../../project_files/lottie_animations/animation-session_01.json')}  autoPlay={true} loop={true} /> 
                    :
                        <LottieView source={require('../../project_files/lottie_animations/animation01.json')}  autoPlay={true} loop={true} /> 
                    }
                    </View>

                    
                </View>
            </View>
        )
    };
}
export default WaitWindow;

const styles = StyleSheet.create({
    container : {
        flex:1,
        padding:20,
        minHeight:100,  
        textAlign:'center'
    },
    loadingText:{
        fontFamily:'GeForceLight',
        fontSize:22,
        fontWeight:'500',
        textAlign:'center', 
        padding:20
    },
    waitIndecator:{
        padding:20
    }
});