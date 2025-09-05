import { useLocation } from "react-router-dom"

const Furniture = () => {

    const location = useLocation()

  return (
    <section className="section section__furniture" aria-labelledby='furniture-title'>
        <div className="section__inner">
            <div className="furniture">
                <div className="furniture__header">
                    <h2 className="furniture__title" id="furniture-title">#FuniroFurniture</h2>
                    <p className="furniture__subtitle">Share your setup with</p>
                </div>
                <div className="furniture__body">
                    <div className="furniture__body-inner">
                        <img 
                        key={location.pathname}
                        src="./images/furnitur/1.png" 
                        alt=""
                        width={1900}
                        height={721}
                        loading="lazy" 
                        className="furniture__image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Furniture