import AppContext from "./AppContext";
import Auth from "../lib/Auth";
import { useState } from "react";

const AppContextProvider = (props) =>{
    const auth = new Auth();

    const [authdata,setAuthData] = useState(auth.getSampleAuthDataStracture);
    const [AppData,setAppData] = useState(null);
    const [AppStatus,setAppStatus] = useState({
        api:{isApiLoading:false,msg:null,data:null,status:null}
    });

    const funcUpdateAuthdata=(_authdata,reset=false)=>{
        if(reset){
            setAuthData(auth.getSampleAuthDataStracture);
        }else{
            setAuthData(_authdata);
        }
    }

    const funcUpdateappdata = (appdata)=>{
        setAppData(appdata);
    }

    const funcUpdateappstatus=(appstatus)=>{
        setAppStatus(appstatus);
    }

    return (
        <AppContext.Provider value={{authdata,
            funcUpdateAuthData:funcUpdateAuthdata,
            appdata:AppData,
            funcUpdateAppData:funcUpdateappdata,
            appstatus : AppStatus,
            funcUpdateAppStatus:funcUpdateappstatus
        }}>

            {props.children}

        </AppContext.Provider>
    )
}

export default AppContextProvider;