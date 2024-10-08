import { EnquiryManagement } from '@/components/EnquiryManagement';
import {checkifuserexist} from "../components/common/LoginCheck";
import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import adminapi from "../api/adminapi";

function enquirymanagement() {
const [isAuthenticated,setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await checkifuserexist();
      if (!isAuth) {
        const router = useRouter();
        router.push('/');
      }
      console.log("asasasasas",isAuth);
      adminapi.defaults.headers.common={'Authorization': 'Bearer ' + isAuth};
      setIsAuthenticated(true);
     };
    checkAuth();
  }, []);


  return (
    <EnquiryManagement adminapi={adminapi} isAuthenticated={isAuthenticated}/>
  )
}

export default enquirymanagement