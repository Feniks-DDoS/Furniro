import HeaderMenu from "./HeaderMenu.jsx"
import HeaderUserMenu from "./HeaderUserMenu.jsx"

const HeaderNavigation = () => {


  return (
    <>
    <nav className="header__menu">
      <div className="header__start">     
          <a href="/" className="header__link">
          <img src="./icons/logo/logo.svg" 
          alt="Home" 
          className="header__logo logo" 
          width={185} height={41}
          aria-label="Home"
          title="Home"
          />
          </a>
      </div>
    <HeaderMenu />
    <HeaderUserMenu />
    </nav>
    </>
  )
}

export default HeaderNavigation