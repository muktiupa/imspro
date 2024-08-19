import Image from "next/image";
import { Inter } from "next/font/google";
import { Dashbord } from "@/components/Dashbord";
// import { Studentdashbord } from "@/components/studentdashbord";
// import { CoursesManagement } from "@/components/CoursesManagement";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Dashbord/>
    {/* <Studentdashbord/> */}
    {/* <CoursesManagement/> */}
    </>
  );
}
