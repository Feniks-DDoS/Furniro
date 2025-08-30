
const HeaderUserMenu = ({className}) => {
  return (
    <div className={`header__end ${className}`}>
        <ul className="header__end-list">
        <li className="header__end-item">
            <a href="/" className="header__end-link">
            <img src="/icons/header/user-dashbord.svg" 
            aria-label="dashboard" 
            title="dashboard" width={28} height={28} 
            alt="dashboard"
            className="header__user-dashboard" />
            </a>
        </li>
        <li className="header__end-item">
            <a href="/" className="header__end-link">
            <img src="/icons/header/favorite.svg" 
            aria-label="wishlist" 
            title="wishlist" width={28} height={28} 
            alt="wishlist"
            className="header__user-wishlist" />
            </a>
        </li>
        <li className="header__end-item">
            <a href="/" className="header__end-link">
            <img src="/icons/header/user-bag.svg" 
            aria-label="cart" 
            title="cart" 
            width={28} height={28} 
            alt="cart"
            className="header__user-cart" />
            </a>
        </li>
        </ul>
    </div>
  )
}

export default HeaderUserMenu