import {useState,useEffect} from "react";
import adminapi from "../api/adminapi";
import Router from 'next/router';
import {checkifuserexist} from "../components/common/LoginCheck";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminLogin() {
  const [loginData,setLoginData]=useState({emailid:"",passwordid:"",passwordsaveid:""});
  const [loginDataerr,setLoginDataerr]=useState({emailid:"",passwordid:"",passwordsaveid:"",servererror:""});
  const [loading,setLoading] = useState(false);

  

  const onChangeHandler=(e)=>{
    let id = e.target.id;
    let value=e.target.value;
   switch(id){
    case "emailid":
        if(value !=="" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
         setLoginData({...loginData,[id]:value});
         setLoginDataerr({...loginDataerr,[id]:""});
        }else{
          setLoginDataerr({...loginDataerr,[id]:"Emailid Invalid"});
        }
        break;
      case "passwordid":
        if(value !==""){
         setLoginData({...loginData,[id]:value});
          setLoginDataerr({...loginDataerr,[id]:""});
        }else{
          setLoginDataerr({...loginDataerr,[id]:"Enter Password"});
        }

        break;

    default:
       return loginData;

   }
  
  }

  const logInAll=async(e)=>{
    e.preventDefault();
    let id = loginData.emailid;
    let value=loginData.passwordid;
    let errorq= false;
   if(id !="" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(id)){
    setLoginDataerr({...loginDataerr,[id]:""});
    errorq = false;
   }else{
    setLoginDataerr({...loginDataerr,[id]:"Emailid Invalid"});
    errorq = true;
   }
   if(value !==""){
          setLoginDataerr({...loginDataerr,[id]:""});
          errorq = false;
        }else{
          setLoginDataerr({...loginDataerr,[id]:"Enter Password"});
          errorq = true;
        }
if(!errorq){
  setLoading(true);
  try{
    const response = await adminapi.post("/login",JSON.stringify({email:id,password:value}));
    
    if(response.data.sucess){
      let role = response?.data?.user?.role ?? null;
      if(role === "admin" || role === "superadmin"){
        let cdd = response.data.user && response.data.user.photo && response.data.user.photo.secure_url ? response.data.user.photo.secure_url : null;
        let tokenset =await localStorage.setItem("user",response.data.token);
        let nameset = await localStorage.setItem("name",response.data.user.name);
        let roleset = await localStorage.setItem("role",response.data.user.role);
        let emailset = await localStorage.setItem("email",response.data.user.email);
        let profilephoto = await localStorage.setItem("profilephoto",cdd);
        adminapi.defaults.headers.common={'Authorization': 'Bearer ' + response.data.token}
        setLoading(false);
        Router.push('/dashboard');
      }else{
        alert("You are not Admin");
        return;
      } 

    }
  }
catch(error){
     console.log(error);
     setLoading(false);
    }
    

}


  }

useEffect(()=>{
const checkingauth=async()=>{
let isauth = await checkifuserexist();
if(isauth){
  Router.push('/dashboard');
}else{
  Router.push('/');
}

}
checkingauth();
},[]);
  

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <Input
                type="text"
                value={loginData?.emailid ?? ''}
                id="emailid" placeholder="Username" onChange={(e)=>onChangeHandler(e)}
                className="mt-1 block w-full"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                type="password"
                value={loginData?.passwordid ?? ''}
                id="passwordid" placeholder="Password" onChange={(e)=>onChangeHandler(e)}
                className="mt-1 block w-full"
                required
              />
            </div>
                <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={(e)=>logInAll(e)}
            disabled={loading}>
               {!loading ? 'Sign in with email' :
                                 <>
                                 <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                                   <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                                   </svg>
                                   Loading...
                                   </>}
              </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

