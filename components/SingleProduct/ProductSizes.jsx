
const ProductSizes = ({sizeSelected, setSizeSelected}) => {
   
    const sizes = ["XS","S","M","L"]
    return (
        <div className="product_sizes">
            {
                sizes.map((size) => (
                    <div className={`product_size ${sizeSelected === size && "selected"}`} onClick={() => setSizeSelected(size)} key={size} >
                        <span>{size}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductSizes;

