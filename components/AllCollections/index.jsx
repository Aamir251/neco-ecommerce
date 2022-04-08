import { useEffect, useRef, useState } from "react";
import { hideLoader, showLoader } from "../../helpers/loader";
import gsap from "gsap";
import { revealPage } from "../../helpers/page";
import Image from "next/image";
import HorizontalScroller from 'react-horizontal-scroll-container';
import { useInView } from 'react-intersection-observer';


const AllCollections = ({ loader, allCollections, loadingComplete }) => {

    const [allLoaded, setAllLoaded ] = useState(false);
    let container = useRef(null)

    let page = useRef(null)
    // loading all images
    let count = 0;
    const increaseCount = () => {
        console.log("count increaseing");
        count++;
        if(count === allCollections.length - 1 ) {
            setAllLoaded(true)
        } 
    }
    useEffect(() => {
    
        gsap.set(page, { opacity : 0 })
        if(!loader) return

        return () => {
            gsap.set(page, { opacity : 0 })
        }
        
    },[loader])

    

    useEffect(() => {
        if(allLoaded && loadingComplete) {
            hideLoader(loader)
                .then(revealPage(page))
        }
    }, [allLoaded, loadingComplete ])
    
    let imgRefs = useRef([])
    let addToImgRef = (el) => {
        if(el !== null) {
            imgRefs.current.push(el)
            increaseCount()
        }

    }
    

    return <>
        <section ref={el => page = el}>
            <div className="allcollections_wrapper">
            <h1>NECO FASHION</h1>

            {/* </div> */}
            <HorizontalScroller invert>
                    {allCollections?.map((collection) => {
                        if(collection?.image?.url) return <EachCollection container={container} addToImgRef={addToImgRef}  key={collection.image.url} collection={collection} />
                    })}
            </HorizontalScroller>
            </div>
        </section>
    </>
}

export default AllCollections;

const EachCollection = ({collection, addToImgRef, container}) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        // root : container.current,
        rootMargin : "-10%",
    });
    useEffect(() => {
        if(entry) {
            if(inView) {
                entry.target.classList.add("active")
            } else {
                entry.target.classList.remove("active")
   
            }
        }
    } , [inView, entry])
    return <figure ref={ref} >
            <h2>{collection.name}</h2>
            <img  ref={addToImgRef } alt=""  src={collection.image.url} />
        </figure>
}