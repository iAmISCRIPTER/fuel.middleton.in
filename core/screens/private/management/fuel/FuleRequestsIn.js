import {React,useState,useEffect} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView,SafeAreaView,Alert,RefreshControl,Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SimpleWaitWindow} from '../../../index';

import ApiCore from '../../../../lib/ApiCore';
import config from '../../../../config.json';

import MyDataTables from '../../../public/_datatables';
import MuiDataTables from '../../../public/_muidatatables';

const FuleRequestsIn =()=>{    
    const [apiState,setApiState] = useState({loading:false,msg:"",loadingtext:'Logging In ...' , haserror:false,errorobj:null});
    const [isLoading,setLoading] = useState({visible:false,text:'Loading fuel request'});

    const [pageData,setPagedata] = useState(
        { 
            filters : { date: {str:'NA',value:null,dbvalue:null}},
            data :{ msg:null,data:null,header:null },
            datatable:{visible:false}
        });

    useEffect(()=>{
        var dt  = new Date();

        var _filter = {
            date:{
                    //str:'Today',
                    //value: dt.getDate()+'/'+(dt.getMonth()+1)+'/'+ dt.getFullYear(),
                    //dbvalue: dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+ dt.getDate()
                    str:'Few Days Back',
                    value : '01/04/2022',
                    dbvalue : '2022-04-01'
                }
            };

        setPagedata({
            filters:_filter,
            data :{ msg:null,data:null,header:null }
        });
        applyFilter(_filter);

    },[]);

    const api = new ApiCore();

    const applyFilter = function (filters){
        setLoading({visible:true,text:'Loading fuel request'});

        setTimeout(() => {
            setLoading({visible:false,text:'Loading fuel request'});
        }, 2500);

        
        var data = {'date': filters.date.dbvalue }


        api.fetch(config.API_URI+'requests', data)
                .then((resp) => resp.json())
                .then((apiRespJSON)=>{
                    setLoading({visible:false,text:'Loading fuel request'});
                    if(apiRespJSON.status==undefined){
                        setApiState({loading:false,status:0 ,showresult:true,haserror:false,errorobj:null,msg:'Invalid fuel response , Try again after some time ',apiResultIcon:'warning',resultcolor:'red'});
                        return;
                    }
                    
                    setApiState({loading:false,status:1 ,showresult:false,haserror:false,errorobj:null,msg:'Data exists',apiResultIcon:'warning',resultcolor:'red'});
                    //--- process data ---//                    
                    //Preaper Data for Datatable //
                        setPagedata( {
                                        filters:filters,
                                        data:{
                                            colNames:['fuel_reqid','chno','cnnumbers'],
                                            data:apiRespJSON.data,                                           
                                            msg : apiRespJSON.msg
                                         }

                                    });                                         
                    // ---- //
                    return;
                })
                .catch((error)=>{       
                    setLoading({visible:false,text:'Loading fuel request'});                    
                    error.message = "Api Error : " +  error.message; 
                    setApiState({loading:false,status:0 ,showresult:true,haserror:true,errorobj:error,msg:'Api Error',apiResultIcon:'disconnect',resultcolor:'red'});
                });

   
        
    }

    

    
        return (
            <View style={styles.container}>
                <SafeAreaView>
                <View style={styles.header}>
                    <View style={{flexDirection:'row'}}>

                        <Text style={{width:'83%',letterSpacing:1,fontSize:10,marginLeft:5,marginTop:2,textTransform:'capitalize'}}>
                            <AntDesign style={{color:'black'}} name='flag'></AntDesign> {pageData.filters.date.str} : {pageData.filters.date.value}
                        </Text>

                        <TouchableOpacity style={styles.filter} onPress={()=>{ Alert.alert('Not Implemented','Filter Options not implemented',[{Text:'Yes'}]) }}>
                            <AntDesign style={{color:'#2FB0F5'}} name='filter'> <Text style={{letterSpacing:1}}>Filter</Text></AntDesign>
                        </TouchableOpacity>

                    </View>                    
                </View>

                <ScrollView contentContainerStyle={styles.datacontainer} refreshControl={ <RefreshControl refreshing={false} onRefresh={()=>{ applyFilter(pageData.filters); }} /> }>
                        <Text style={{fontSize:11}}>{pageData.data.msg}</Text>
 
                        <MyDataTables style={styles.datatable}
                         data={pageData.data.data}
                         colNames={pageData.data.colNames}
                         colSettings={pageData.data.colSettings} 
                         noOfPages={2} backgroundColor ={'white'} />

                         <MuiDataTables/>



                        <ApiCore  
                          show={apiState.loading} 
                          text="Logging in ..."                           
                          msg= {apiState.msg}
                          textcolor="#0D9CD1"
                          apiResultIcon={apiState.apiResultIcon} 
                          showresult = {apiState.showresult}
                          resultcolor=  {apiState.resultcolor}
                          haserror={apiState.haserror} 
                          errorobj={apiState.errorobj}/>

                </ScrollView>

                <SimpleWaitWindow visible={isLoading.visible} text={isLoading.text}/>

                </SafeAreaView>
            </View>
        );
    
}

export default FuleRequestsIn;

const styles = StyleSheet.create({
    container:{
        
    },
    header:{       
        textAlign:'right',                 
        flexDirection:'row',        
        backgroundColor:'#E4E3E2',
        paddingBottom:3
    },filter:{
        flexDirection:'column',        
        marginRight:5,
        justifyContent:'flex-end',
        alignContent:'center',
        textAlign:'right'
    },
    datacontainer:{
        padding:5, 
        minHeight: Dimensions.get('window').height-114,        
    },
    datatable:{
        
    }


})