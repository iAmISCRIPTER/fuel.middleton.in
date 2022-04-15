import { React,Component,useState } from 'react';
import { View,Text,StyleSheet,Dimensions,ScrollView } from 'react-native';
import DataTable, { COL_TYPES } from 'react-native-datatable-component'

class  MyDataTables extends Component{ 
    constructor(props){
        super(props);  
    }

    /* 
        {
            header:{'Header 1','header 2','Header 3'}
            data : [
                {'HD-1','HD-2',{HD-3},
                {'HD2-1','HD2-2',{HD2-3}
            ]
        }
    */

    render(){      
        return(
            <View style={styles.container}>   
                <ScrollView style={styles.scrollview}>
                    <DataTable {...this.props}/>
                </ScrollView>
            </View>
        );
    }
    
}

export default MyDataTables;

const styles = StyleSheet.create({
    container:{                
        color:'white',
        alignContent:'flex-start',
        width: '100%', 
        alignSelf: 'center',
        height:Dimensions.get('window').height-150
    }
});