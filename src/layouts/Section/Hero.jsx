const Hero = () => {
  return (
    <section className="section">
        <div className="section__inner">
    <div className="hero" aria-labelledby="card-title">
        <div className="hero__inner">
            <div className="hero__main hidden-mobile">
                <picture className="hero__images">
                    <source srcSet="./images/hero/avif/hero.avif" type="image/avif"/>
                    <img 
                    src="./images/hero/jpg/hero.jpg" 
                    alt="" 
                    width={1440} height={716} 
                    loading="lazy" 
                    className="hero__image" />
                </picture>
            </div>
            <div className="hero__extra">
                <div className="hero__extra-card card">
                    <div className="card__inner">
                        <div className="card__header">
                            <p className="card__subtitle">New Arrival</p>
                            <h1 className="card__title" id="card-title">Discover Our <br /> New Collection</h1>
                            <div className="card__description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            </div>
                        </div>
                        <div className="card__extra">
                            <a href="/" className="card__button button">BUY Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Hero