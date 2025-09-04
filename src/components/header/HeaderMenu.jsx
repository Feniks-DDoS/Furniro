import { useState , useEffect } from "react"
import { NavLink } from "react-router-dom"

const HeaderMenu = ({className}) => {


  return (
    <div  className={`header__center ${className}`}>
        <ul className="header__list">
            <li  className="header__item">
                <NavLink to="/" className={({isActive}) => `header__link ${isActive ? 'is-active' : ''}`}>Home</NavLink>
            </li>
            <li className="header__item">
                <NavLink to="/shop" className={({isActive}) => `header__link ${isActive ? 'is-active' : ''}`}>Shop</NavLink>
            </li>
            <li className="header__item">
                <NavLink to="/blog" className={({isActive}) => `header__link ${isActive ? 'is-active' : ''}`}>Blog</NavLink>
            </li>
            <li className="header__item">
                <NavLink to="/contact" className={({isActive}) => `header__link ${isActive ? 'is-active' : ''}`}>Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default HeaderMenu