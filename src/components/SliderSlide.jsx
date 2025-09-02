const SliderSlide = ({ item , index , currentIndex}) => {

  return (
    <>
        <li 
        className={`slider__slides ${index === currentIndex ? 'active' : ''}`}>
            <picture className="slider__images">
                <source srcSet={item.source.srcSet} type={item.source.type} />
                <img 
                src={item.img.src} 
                alt={item.img.alt} 
                width={372}
                height={486}
                loading="lazy"
                className={`slider__slide ${index === currentIndex ? 'active' : ''}`} />
            </picture>
            {index === currentIndex && (
                <>
                    <div className="slider__images-info">
                        <h3 className="slider__images-title">{item.body}</h3>
                        <p className="slider__images-subtitle">{`0${item.slideNumber} - ${item.title}`}</p>
                    </div>
                    <div className="slider__images-action">                                            
                        <a href="#" className="slider__images-button button button--orange">
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 7H1M19 7L13 1M19 7L13 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </>
            )}
        </li>
    </>
  )
}

export default SliderSlide