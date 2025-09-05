import Button from "./UI/Button.jsx"
import CardActions from "./UI/CardActions.jsx"
import { cardItem } from "@/data/cardItem.js"
import Discount from "./UI/Discount.jsx"
import NewProduct from "./UI/NewProduct.jsx"
import { useState } from "react"
import MatchMedia from "@/utils/MatchMedia.js"
import { useLocation } from "react-router-dom"

const CardItem = () => {

    const [hoveredId , setHoveredId] = useState(null)
    const location = useLocation()


    const isPointerEnter = (id) => setHoveredId(id)
    const isPointerLeave = () => setHoveredId(null)

  return (
    <>  
    {cardItem.map(item => (
        <li
        onPointerEnter={() => {if(!MatchMedia.tablet) {isPointerEnter(item.id)}}}
        onPointerLeave={isPointerLeave} 
        key={item.id} 
        className={`product__card-item ${hoveredId === item.id ? 'hovered' : ''}`}>
            <div className="product__card-header" style={{zIndex: hoveredId === item.id ? -1 : 0}}>
                <picture className="product__card-images" key={location.pathname}>
                    <source srcSet={item.source.srcSet} type={item.source.type} />
                    <img 
                    src={item.img.src} 
                    alt={item.img.alt} 
                    aria-label={item.img.alt}
                    className="product__image"
                    width={285}
                    height={301}
                    loading="lazy"
                    />
                </picture>     
                {item.discountProcent > 0 
                    ? (
                        <Discount discountProcent={item.discountProcent} />
                    ) 
                    : ('')}  
                {item.newProduct === 'New' 
                ? ( <NewProduct newProduct={item.newProduct}/>)
                : ('')}     
            </div>
            <div className="product__card-description">
                <h3 className="product__card-title h4">{item.title}</h3>
                <p className="product__card-subtitle">{item.body}</p>
                {item.discountProcent > 0                 
                ? (<p className="product__card-price">{`Rp ${item.discountPrice}`} 
                   <span className="product__card-total-price">{`Rp ${item.totalPrice}`}</span>
                   </p>)
                : (<p className="product__card-price">{`Rp ${item.totalPrice}`}</p>)
                }
            </div>
            <div className={`product__card-extra ${hoveredId === item.id ? 'is-hovered' : ''}`}>
                <Button />
                <CardActions />
            </div>
        </li>
    ))}
    </>
  )
}

export default CardItem
