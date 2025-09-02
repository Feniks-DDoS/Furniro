import CardList from "@/components/CardList.jsx"


const Product = () => {
  return (
    <section className="section section__product" aria-labelledby="Our-Product">
        <div className="section__inner container">
            <div className="product">
                <div className="product__inner">
                    <div className="product__header">
                        <h2 className="product__title" id="Our-Product">Our Products</h2>
                    </div>
                    <div className="product__body">
                        <div className="product__body-inner">
                            <div className="product__card">
                                <div className="product__card-inner">
                                    <CardList />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product__extra">
                        <a href="/" className="product__button button">Show More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product