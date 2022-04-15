import { React,Component,useState } from 'react';
import {View,Text,StyleSheet,ActivityIndicator,Modal,Dimensions,TouchableOpacity,Alert} from 'react-native';




class SimpleWaitWindow extends Component{
    constructor(props){
        super(props);        
    }

    render(){
        return(
            <View style={styles.container}>
                <Modal   transparent={true}   animationType={'fade'}   visible={this.props.visible}>
                    <View style={styles.modalBackground}>
                       
                        <View style={styles.activityIndicatorWrapper}>

                                    <TouchableOpacity  onPress={()=>{
                                            Alert.alert('Cancel confirmation ?','Do you want to cencel ?' , [
                                                {
                                                    text:'Yes - cancel'
                                                },
                                                {
                                                    text : 'No'
                                                }
                                            ],
                                            {
                                                cancelable:true                                            
                                            })
                                    }}>
                                    <Text style={{marginLeft:'80%',marginTop:-5,fontSize:9,color:'lightgray'}}>x</Text>

                                </TouchableOpacity>

                                <ActivityIndicator color='green' size={35} style={{marginTop:10}}/>
                                <Text style={{fontSize:10}}>{this.props.text}</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }

}

export default SimpleWaitWindow;


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CCCCCC',
        height: Dimensions.get('window').height,
        padding: 15,
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        paddingTop: 50
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
      },
      activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      }
})