import { Link , useLocation} from "react-router-dom"

const Hero = () => {

    const location = useLocation()

  return (
    <section className="section" aria-labelledby="hero-title">
        <div className="section__inner">
    <div className="hero" aria-labelledby="card-title">
        <div className="hero__inner">
            <div className="hero__main hidden-mobile">
                <picture className="hero__images" key={location.pathname}>
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
                            <h1 className="card__title" id="hero-title">Discover Our <br /> New Collection</h1>
                            <div className="card__description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            </div>
                        </div>
                        <div className="card__extra">
                            <Link to="/shop" className="card__button button button--orange">BUY Now</Link>
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