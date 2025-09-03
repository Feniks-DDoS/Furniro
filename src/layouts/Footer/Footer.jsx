const Footer = () => {
  return (
    <footer className="footer" aria-labelledby="footer-title">
        <div className="footer__inner container">
            <div className="footer__header">
                <h2 className="footer__title visually-hidden" id="footer-title">Footer</h2>
                <nav className="footer__navigation">
                    <div className="footer__header-start">
                        <span className="footer__logo">Funiro.</span>
                        <address className="footer__address address">
                            400 University Drive Suite 200 Coral Gables,
                            FL 33134 USA
                        </address>
                    </div>
                    <div className="footer__header-end">
                        <div className="footer__navigation-wrapper">
                            <h3 className="footer__navigation-title">Links</h3>
                                <ul className="footer__navigation-list">
                                    <li className="footer__navigation-item">
                                        <a href="#" className="footer__navigation-link">Home</a>
                                    </li>
                                    <li className="footer__navigation-item">
                                        <a href="#" className="footer__navigation-link">Shop</a>
                                    </li>
                                    <li className="footer__navigation-item">
                                        <a href="#" className="footer__navigation-link">About</a>
                                    </li>
                                    <li className="footer__navigation-item">
                                        <a href="#" className="footer__navigation-link">Contact</a>
                                    </li>
                                </ul>
                        </div>
                        <div className="footer__navigation-wrapper">
                            <h3 className="footer__navigation-title">Help</h3>
                                <ul className="footer__navigation-list">
                                    <li className="footer__navigation-item">
                                        <a href="#" className="footer__navigation-link">Payment Options</a>
                                    </li>
                                    <li className="footer__navigation-item">
                                        <a href="#" className="footer__navigation-link">Returns</a>
                                    </li>
                                    <li className="footer__navigation-item">
                                        <a href="#" className="footer__navigation-link">Privacy Policies</a>
                                    </li>
                                </ul>
                        </div>
                        <div className="footer__navigation-wrapper">
                            <h3 className="footer__navigation-title">Newsletter</h3>
                                <form className="field field__footer" noValidate>
                                    <div className="field__footer-wrapper">
                                        <label htmlFor="user-email" className="field__footer-label visually-hidden">Subscribe</label>
                                        <input 
                                        type="email"
                                        inputMode="email"
                                        id="user-email" 
                                        required
                                        className="field__footer-control" 
                                        aria-errormessage="email-errors"
                                        placeholder="zakirsoft@gmail.com"
                                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                        title="
                                            Incorrect value: 
                                            Example: zakirsoft@gmail.com"   
                                        />
                                        
                                        <span className="field__footer-errors" id="email-errors"></span> 
                                    </div>
                                    <button className="field__footer-button button button--field">SUBSCRIBE</button>
                                </form>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="footer__extra">
                <div className="footer__copyrihgt">
                    <p>2023 furino. All rights reverved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer