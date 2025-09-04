

const FooterNewsletter = () => {
  return (
    <>
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
    </>
  )
}

export default FooterNewsletter