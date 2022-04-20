import { useEffect, useRef } from "react";
import gsap from "gsap";
import { hideLoader } from "../../helpers/loader";
import { revealPage } from "../../helpers/page";
import ProductDetails from "./ProductDetails";

const SingleProduct = ({ loader, product, loadingComplete}) => {
    let page = useRef(null)
    console.log("PRODUCT",product)
    useEffect(() => {
        gsap.set(page, { opacity: 0 })
    }, [])

    useEffect(() => {
        if(loadingComplete) {
            hideLoader(loader)
                .then(() => {
                    revealPage(page)
                })
        }
    }, [loadingComplete])


    return <section ref={el => page = el} className="single_product">
        <ProductDetails product={product} />
    </section>
}

export default SingleProduct;