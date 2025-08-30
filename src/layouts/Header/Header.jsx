import BurgerButton from "@/components/BurgerButton"
import HeaderNavigation from "@/components/header/HeaderNavigation.jsx"

const Header = () => {
  return (
    <header className="header">
        <div className="header__inner container">    
          <HeaderNavigation />          
          <BurgerButton/>
        </div>
    </header>
  )
}

export default Header