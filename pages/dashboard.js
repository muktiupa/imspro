import { Inter } from "next/font/google";
import { Dashbord } from "@/components/Dashbord";
import {checkifuserexist} from "../components/common/LoginCheck";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import adminapi from "../api/adminapi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await checkifuserexist();
      if (!isAuthenticated) {
        const router = useRouter();
        router.push('/');
      }
    };

    checkAuth();
  }, []);


  return (
    <>
    <Dashbord adminapi={adminapi}/>
    </>
  );
}
