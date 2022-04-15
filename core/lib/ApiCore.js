import React,{Component} from 'react';
import { ActivityIndicator,View, Text,StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


class ApiCore extends Component {

    constructor(props){
        super(props);
    }
    
    fetch = async (url,d) => {        
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(d)
        }).then((r)=>{
            console.log('---------- : API LOG : ----------');
            console.log('URL : ' + url);
            console.log('Posted Data : ',d);
            return r;
            });
    }

    showApiresult(d){
        console.log('Api Result : ' ,d);
    }



    render(){         
        // test   dev server
        return (
                <View style={styles.container}>

                    <View style={{ opacity: (this.props.show) ? 1 : 0 , display: (this.props.show)? 'flex':'none'  }}>   
                        <View style={{display: (!this.props.haserror)? 'flex':'none' }}>
                            <ActivityIndicator color= {this.props.textcolor ? this.props.textcolor :  'blue'} size="large"/>
                            <Text style={ [ styles.loadingText, {color:this.props.textcolor ? this.props.textcolor :  'red' }]}>{ (this.props.text)? this.props.text:'Please Wait Working' }</Text>                    
                        </View>                        
                    </View>

                    <View style={{display: (this.props.showresult)? 'flex':'none'  }}>
                        <AntDesign style={styles.contCenter} name={this.props.apiResultIcon} size={25} color={this.props.resultcolor} />
                        <Text style={[styles.contCenter,{color:this.props.resultcolor}]}>{(this.props.haserror)? ((this.props.errorobj)?  this.props.errorobj.message:''):this.props.msg}</Text>
                    </View>
                    
                </View>
        );
    }

}

const styles = StyleSheet.create({
    container : {
        marginTop:'20%',
        minHeight:100,  
        textAlign:'center'
    },
    contCenter:{       
        textAlign:'center'       
    },
    loadingText : {
        //marginTop:15,
        fontFamily:'GeforceLight',
        fontSize:15,
        fontWeight:'600',
        letterSpacing:2,
        textAlign:'center'
    },
    errorIcon : {
        color:'blue'
    },
    successIcon : {
        color:'green'
    },
    errortext : {
        color:'red'
    }

});


export default ApiCore;