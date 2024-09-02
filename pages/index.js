import { Inter } from "next/font/google";
import { Dashbord } from "@/components/Dashbord";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Dashbord/>
    </>
  );
}
