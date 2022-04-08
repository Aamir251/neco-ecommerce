import Layout from "../components/global/Layout"
import "../styles/index.scss"
import Router from "next/router"
import LoadingScreen from "../components/global/LoadingScreen"
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { hideLoader, showLoader } from "../helpers/loader";

function MyApp({ Component, pageProps }) {
  let loadingScreen = useRef(null);
  const [ loader, setLoader ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isNavOpen, setIsNavOpen ] = useState(false);
  const [ loadingComplete, setLoadingComplete ] = useState(false)

  // Function to clear complete cache data
  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
  };

  Router.onRouteChangeStart = () => {
    clearCacheData()
    showLoader(loader)
  }
  
  useEffect(() => {
    clearCacheData()
    setLoader(loadingScreen)
    return () => setLoadingComplete(false)
  },[])
  
  useEffect(() => {
    setLoadingComplete(false)
    // to show loader even on page refresh
    loader && showLoader(loader).then(() => setLoadingComplete(true))

  },[loader])
  const props = { loader, isLoading, setIsLoading, isNavOpen, setIsNavOpen, loadingComplete, setLoadingComplete }
  const navProps = { isNavOpen, setIsNavOpen }

  return <Layout {...navProps} >
    <section ref={el => loadingScreen = el } className="loading_screen">
        <div className="loading_screen_wrapper">
            <img src="/logo.svg" className="logo" />

            <div className="background_green">

            </div>
        </div>
    </section>
     <Component {...pageProps} {...props} />
  
  </Layout>
}

export default MyApp
