import FooterLinks from './FooterLinks.jsx'
import FooterHelp from './FooterHelp.jsx'
import FooterNewsletter from './FooterNewsletter.jsx'

const FooterNavigate = () => {
  return (
        <nav className="footer__navigation">
            <div className="footer__header-start">
                <span className="footer__logo">Furniro.</span>
                <address className="footer__address address">
                    400 University Drive Suite 200 Coral Gables,
                    FL 33134 USA
                </address>
            </div>
            <div className="footer__header-end">
                <FooterLinks/>
                <FooterHelp/>
                <FooterNewsletter/>
            </div>
        </nav>
  )
}

export default FooterNavigate