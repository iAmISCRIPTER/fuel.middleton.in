import Auth from '../Auth';

const isLoggedInAsync = async =>{
    const auth = new Auth();   
    
    return auth.isLoggedIn().then(r=> { 
        return r;
    });    
}

const setLoggedOut = () => {
    const auth = new Auth();
    auth.setLoggedOut();
}

export {isLoggedInAsync,setLoggedOut};