

const ProductQuantity = ({qty, setQty}) => {


  const decreaseQuantity = () => {
    setQty((prev) => {
      if(prev === 1 ) return 1

      return prev - 1
    })
  }
  const increaseQuantity = () => {
    setQty((prev) => {
      if(prev === 5 ) return 5

      return prev + 1
    })
  }

  return (
    <div className="product_quantity">
        <h5>QTY</h5>
        <div className="product_quantity_selector">
            <button onClick={decreaseQuantity}>-</button>
            <span>{qty}</span>
            <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
  )
}

export default ProductQuantity