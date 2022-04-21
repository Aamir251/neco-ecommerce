import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "../global/ArrowIcon";
import { useEffect, useRef } from "react";
import gsap from 'gsap'
import { showLoader, hideLoader } from "../../helpers/loader";
import { homepageAnimation } from "./animation";


const Homepage = ({loadingComplete , setIsLoading, loader, setloadComplete }) => {
    let page = useRef(null)
    // useEffect(() => {
        
    //     gsap.set(page, { opacity : 0 })  //setting page opacity to 0
            
    // }, [])

   useEffect(() => {
    if(!loader || !page) return

    if (loadingComplete) { 
        //hide loader only if it has completed loading
        hideLoader(loader).then(() => {
            console.log("set page - 1");
            gsap.to(page, { opacity : 1, duration : 0.6, onComplete : () => console.log("anim comp")})
        }).then(() => {
             homepageAnimation(page)
        })
    }

   }, [loader, loadingComplete])
  
  return <section ref={el => page = el } className="home" >
    <div className="home_wrapper">
        <div className="home_row_layout">
            <div className="home_figure home_figure_primary">
                <div className="figure_collection">
                    <h5 className="figure_collection_name">triv</h5>
                    <h6 className="figure_collection_label">collection</h6>
                </div>
                <div>
                    <div className="home_figure_primary_image" >
                        <div style={{backgroundImage : `url('/images/primary.jpg')`}} >
                    </div>

                    </div>
                    <div className="home_button_wrapper">
                        <Link href="/collections" passHref>
                            <div className="button_primary">
                                <a><span>Shop Now </span></a>
                            <ArrowIcon />
                            </div>
                        </Link>
                    </div>
                </div>
                
            </div>
            <h1 className="home_title">Luxury Men <br/> Fashion</h1>
        </div>
        <div className="home_column_layout">
            {/* description */}
            <p className="home_description">Get amazing dress that embrace latest fashion trends & take your fashion game to next level</p>
            <div className="home_figure home_figure_secondary">
                {/* img goes here */}
                <div className="home_figure_secondary_image">
                    <div  style={{height : "50vh", backgroundImage : `url('/images/secondary.jpg')`}}>

                </div>

                </div>
                <div className="figure_collection">
                    <h6 className="figure_collection_label">collection</h6>
                    <h5 className="figure_collection_name">mask</h5>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Homepage;