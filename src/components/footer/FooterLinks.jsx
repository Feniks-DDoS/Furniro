import { Link } from "react-router-dom"

const FooterLinks = () => {
  return (
    <>  
        <div className="footer__navigation-wrapper">
            <h3 className="footer__navigation-title">Links</h3>
                <ul className="footer__navigation-list">
                    <li className="footer__navigation-item">
                        <Link to="/" className="footer__navigation-link">Home</Link>
                    </li>
                    <li className="footer__navigation-item">
                        <Link to="/shop" className="footer__navigation-link">Shop</Link>
                    </li>
                    <li className="footer__navigation-item">
                        <Link to="/blog" className="footer__navigation-link">Blog</Link>
                    </li>
                    <li className="footer__navigation-item">
                        <Link to="/contact" className="footer__navigation-link">Contact</Link>
                    </li>
                </ul>
        </div>
    </>
  )
}

export default FooterLinks