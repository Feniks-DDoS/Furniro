import { Link } from "react-router-dom"

const FooterHelp = () => {
  return (
    <>
        <div className="footer__navigation-wrapper">
            <h3 className="footer__navigation-title">Help</h3>
                <ul className="footer__navigation-list">
                    <li className="footer__navigation-item">
                        <Link to="#" className="footer__navigation-link">Payment Options</Link>
                    </li>
                    <li className="footer__navigation-item">
                        <Link to="#" className="footer__navigation-link">Returns</Link>
                    </li>
                    <li className="footer__navigation-item">
                        <Link to="#" className="footer__navigation-link">Privacy Policies</Link>
                    </li>
                </ul>
        </div>
    </>
  )
}

export default FooterHelp