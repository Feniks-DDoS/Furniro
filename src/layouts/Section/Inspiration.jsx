import Slider from "@/components/Slider.jsx"

const Inspiration = () => {
  return (
    <section className="section section__inspiration" aria-labelledby="Inspiration-title">
        <div className="section__inner container">
            <div className="inspiration">
                <div className="inspiration__inner">
                    <div className="inspiration__info">
                        <h2 className="inspiration__title" id="Inspiration-title">50+ Beautiful rooms <br />
                            inspiration</h2>
                        <p className="inspiration__subtitle">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                        <a href="#" className="inspiration__button button button--orange">Explore More</a>
                    </div>
                    <div className="inspiration__slider">
                        <Slider/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Inspiration