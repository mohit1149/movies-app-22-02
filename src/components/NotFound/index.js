import './index.css'
import {Link} from 'react-router-dom'

const NotFound = () => (
  <div className="not-found-container">
    <h1 className="lost-heading">Lost Your Way ?</h1>
    <p>
      we are sorry, the page you requested could not be found Please go back to
      the homepage.
    </p>
    <Link to="/">
      <button type="button" className="go-to-home-button">
        Go to Home
      </button>
    </Link>
  </div>
)

export default NotFound
