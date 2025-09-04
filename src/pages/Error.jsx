import { Link } from "react-router-dom"

const Error = () => {
  return (
    <section className="section section__error" aria-labelledby="error-title">
      <div className="section__inner container">
        <div className="error">
          <div className="error__inner">
            <div className="error__header">
              <h1 className="error__title">
                <span className="error__title-span" id="error-title">Oops...</span> <br />
                Page not found
              </h1>
              <p className="error__subtitle">The page you're looking for doesn't exist or an
              other error occurred, go back to homepage
              </p>
              <Link to="/" aria-label="go home" className="error__button button button--orange">Go Home</Link>
            </div>
            <div className="error__body">
                <img 
                src="./images/error/1.png" 
                alt="Error 404 image" 
                width={505}
                height={524}
                className="error__image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Error