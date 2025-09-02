import { useState } from "react"
import SliderSlide from "./SliderSlide.jsx"
import { sliderImage } from "@/data/sliderImage.js"

const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prev) => 
        prev === sliderImage.length - 1 ? 0 : prev + 1)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => 
        prev === 0 ? sliderImage.length - 1 : prev - 1)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

  return (
    <>
        <div className="slider">
            <div className="slider__wrapper">
                <ul 
                className="slider__list" 
                 style={{
                        transform: `translateX(-${currentIndex * 396}px)`, // 372px + 24px gap
                        transition: "transform 0.5s ease",
                    }}>
                    {sliderImage.map((item , index) => (                        
                    <SliderSlide      
                    key={item.id}
                    item={item}
                    index={index}
                    currentIndex={currentIndex}                             
                    />
                    ))}
                </ul>
            </div>

            <button onClick={prevSlide} className={`slider__button button button--prev ${currentIndex > 0 ? 'show' : 'hide'}`}>
                <svg className="slider__button-prev-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00006 5L16.0001 12L9.00006 19" stroke="#B88E2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button onClick={nextSlide} className="slider__button button button--next">
                <svg className="slider__button-next-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00006 5L16.0001 12L9.00006 19" stroke="#B88E2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="slider__paginations">
                {sliderImage.map((item ,index) => (
                    <div key={item.title} onClick={() => goToSlide(index)} 
                    className={`slider__paginations-wrapper ${index === currentIndex ? 'active' : ''}`}>
                        <span className={`slider__pagination ${index === currentIndex ? 'active' : ''}`}></span>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Slider