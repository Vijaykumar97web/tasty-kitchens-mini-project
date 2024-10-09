import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-complete-page">
    <img
      className="not-found-route-main-image"
      src="https://res.cloudinary.com/dxvg2pjg9/image/upload/v1728368023/NotFoundImg_yboi4p.png"
      alt="not found"
    />
    <h1 className="not-found-route-main-heading">Page Not Found</h1>
    <p className="not-found-route-main-paragraph">
      We are sorry, the page you requested could not be found. Please go back to
      the homepage
    </p>
    <Link to="/">
      <button className="not-found-route-redirect-home-button" type="button">
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
