import HeaderMenu from "./HeaderMenu.jsx"
import HeaderUserMenu from "./HeaderUserMenu.jsx"
import { Link } from "react-router-dom"

const HeaderNavigation = () => {


  return (
    <>
    <nav className="header__menu">
      <div className="header__start">     
          <Link to="/" className="header__link">
          <img src="./icons/logo/logo.svg" 
          alt="Home" 
          className="header__logo logo" 
          width={185} height={41}
          aria-label="Home"
          title="Home"
          />
          </Link>
      </div>
    <HeaderMenu />
    <HeaderUserMenu />
    </nav>
    </>
  )
}

export default HeaderNavigation