import Icon from "./Icon.jsx"

const CardActions = () => {

      const shareItem = () => {
        if(navigator.share) {
            navigator.share({
                title: document.title,
                text: 'Look at what product',
                url: window.location.url,
            })
            .then(() => alert('Shared successfully'))
            .catch((error) => alert('Error when trying to share:', error))
        }else {
            alert('The "Share" function is not supported in this browser')
        }
    }

  return (
  <>
        <ul className="product__card-extra-list">
            <li className="product__card-extra-item">
                <div onClick={shareItem} role="link" className="product__card-link">
                    <Icon className="product__card-svg" name="icon-share" width={15} height={15} />
                    <span>Share</span>
                </div>
            </li>
            <li className="product__card-extra-item">
                <div role="link" className="product__card-link">
                    <Icon className="product__card-svg" name="icon-compare" width={15} height={15} />
                    <span>Compare</span>
                </div>
            </li>
            <li className="product__card-extra-item">
                <div role="button" className="product__card-link">
                    <Icon className="product__card-svg" name="icon-like" width={15} height={15} />
                    <span>Like</span>
                </div>
            </li>
        </ul>
    
    </>
  )
}

export default CardActions