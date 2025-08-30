import { useState , useEffect } from "react"
import HeaderMenu from "./header/HeaderMenu"
import HeaderUserMenu from "./header/HeaderUserMenu"

const BurgerButton = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if(isOpen) {
            document.documentElement.classList.add('is-lock') 
            document.querySelectorAll('overlay').forEach((element) => {
                element.classList.add('is-show')
            })  
        }else {
            document.documentElement.classList.remove('is-lock')
            document.querySelectorAll('overlay').forEach((element) => {
                element.classList.remove('is-show')
            }) 
        }
    }, [isOpen])
  return (
    <>
    <button onClick={toggleMenu} type="button" 
    aria-label={`${isOpen ? 'close menu' : 'open menu'}`} 
    className={`burger-button visible-tablet ${isOpen ? 'is-open' : ""}`}>
        <span className="burger-button__line"></span>
        <span className="burger-button__line"></span>
        <span className="burger-button__line"></span>
    </button>

    {isOpen && (
        <div className="tablet-overlay">
            <HeaderMenu className="overlay"/>
            <HeaderUserMenu  className="overlay"/>
        </div>
    )}
    </>
  )
}

export default BurgerButton