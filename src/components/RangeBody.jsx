import { rangeImages } from "@/data/range.js"
import { useLocation } from "react-router-dom"

const RangeBody = () => {

  const location = useLocation()

  return (
      <div className="range__body">
          <div className="range__body-inner">
            {rangeImages.map(e => (
                <div  key={e.id} className="range__card">
                  <div className="range__card-inner">
                  <picture  className={`range__images ${e.className}`} key={location.pathname}>
                    <source srcSet={e.sources.srcSet} type={e.sources.type}/>                       
                     <img 
                        src={e.img.scr} 
                        alt={e.img.alt} 
                        width={381} height={480} 
                        loading="lazy" 
                        className="range__image" />
                    </picture>
                    <h3 className="range__card-title h4">{e.title}</h3>
                  </div>
                </div>
            ))}
          </div>
      </div>
  )
}

export default RangeBody