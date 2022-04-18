import ProductQuantity from "./ProductQuantity";
import ProductSizes from "./ProductSizes";
import { useState } from "react";
import CartButton from "./CartButton";

const ProductDetails = ({product}) => {

    const [ qty, setQty ] = useState(1)
    const [ sizeSelected, setSizeSelected ] = useState("S")

    return <article className="product">
        <figure>
            <img src={product.image.url} />
        </figure>

        {/* product details */}

        <div className="product_details">
            <h1>{product.name}</h1>
            <p className="product_price">{product.price.formatted_with_symbol}</p>
            <img className="product_rating" alt="rating" src="/images/rating.png" />

            <hr />
            
            <p className="product_description" dangerouslySetInnerHTML={{__html : product.description}} />

            <ProductSizes 
                sizeSelected={sizeSelected}
                setSizeSelected={setSizeSelected}
            />

            <hr />

            <ProductQuantity qty={qty} setQty={setQty} />

            <CartButton />

        </div>
    </article>
}

export default ProductDetails;