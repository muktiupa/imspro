import { Inter } from "next/font/google";
import { StudentManagement } from "@/components/StudentManagement";


const inter = Inter({ subsets: ["latin"] });

export default function StudentManagementx() {
  return (
    <>
    <StudentManagement/>
    </>
  );
}
