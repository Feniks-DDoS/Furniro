const HeaderMenu = ({className}) => {

  return (
    <div  className={`header__center ${className}`}>
        <ul className="header__list">
        <li className="header__item">
            <a href="/" className="header__link is-active">Home</a>
        </li>
        <li className="header__item">
            <a href="/" className="header__link ">Shop</a>
        </li>
        <li className="header__item">
            <a href="/" className="header__link ">About</a>
        </li>
        <li className="header__item">
            <a href="/" className="header__link ">Contact</a>
        </li>
        </ul>
    </div>
  )
}

export default HeaderMenu