const Discount = ({discountProcent}) => {
  return (
    <>  
        <div className="product__card-discount">
            <span className="product__card-discount-title">{`-${discountProcent}%`}</span>
        </div>
    </>
  )
}

export default Discount