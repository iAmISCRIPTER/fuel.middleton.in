import { React,Component,useState } from 'react';
import { View,Text,StyleSheet,Dimensions } from 'react-native';
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
                <DataTable 
                            data={[ 
                                    { name: 'Muhammad Rafeh', age: 21, gender: 'male' },
                                    { name: 'Muhammad Akif', age: 22, gender: 'male' },
                                    { name: 'Muhammad Umar', age: 21, gender: 'male' },
                                    { name: 'Amna Shakeel', age: 22, gender: 'female' },
                                    { name: 'Muhammad Ammar', age: 20, gender: 'male' },
                                    { name: 'Muhammad Moiz', age: 13, gender: 'male' }
                                ]} // list of objects
            colNames={['name', 'age', 'gender']} //List of Strings
            colSettings={[
                { name: 'name', type: COL_TYPES.STRING }, 
                { name: 'age', type: COL_TYPES.INT }, 
                {name: 'gender', type: COL_TYPES.STRING}
            ]}//List of Objects
            noOfPages={2} //number
            backgroundColor={'rgba(23,2,4,0.2)'} //Table Background Color
        />
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
        alignSelf: 'center'
    }
});