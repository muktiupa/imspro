import adminapi from "../../api/adminapi";
import { isJwtExpired } from 'jwt-check-expiration';


export const logincheck=async(usr,pwd)=>{
    try{
    const response = await adminapi.post("/login",JSON.stringify({email:usr,password:pwd}));
    
    if(response.data.sucess){
        let tokenset =await localStorage.setItem("user",response.data.token);
        let nameset = await localStorage.setItem("name",response.data.user.name);
        let roleset = await localStorage.setItem("role",response.data.user.role);
        let emailset = await localStorage.setItem("email",response.data.user.email);
        adminapi.defaults.headers.common={'Authorization': 'Bearer ' + response.data.token};
        return true;
    }else{
        return false;
    }
    }catch(e){
        alert(e);
        return false;
    }
          
    }
export const checkifuserexist=async()=>{
    let tokentocheck = await localStorage.getItem("user");
    if(!tokentocheck){
    return false;
    }else if(tokentocheck && isJwtExpired(tokentocheck)){
    return false;
    }else{
    return tokentocheck;
    }


}