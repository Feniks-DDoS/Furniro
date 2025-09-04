import FooterNavigate from "@/components/footer/FooterNavigate.jsx"

const Footer = () => {
  return (
    <footer className="footer" aria-labelledby="footer-title">
        <div className="footer__inner container">
            <div className="footer__header">
                <h2 className="footer__title visually-hidden" id="footer-title">Footer</h2>
                <FooterNavigate/>
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