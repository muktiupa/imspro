import '@/styles/globals.css';
import Loadings from "@/components/common/Loadings";

export default function App({ Component, pageProps }) {

  return(
    <>
    <Loadings/>
   <Component {...pageProps} />
   </>
  )
}
