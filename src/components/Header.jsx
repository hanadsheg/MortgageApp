import LloydsLogo from '../assets/Lloyds-Bank-Logo.png';
import '../index.css'
import {Link} from 'react-router-dom'

function Header(){
  return (
    <div className = "header">
      <Link to="/">
        <img className = "logo"src={LloydsLogo} alt="Lloyds Bank Logo" />
      </Link>
      <div className = "pages">
        <button>
          <Link to="/feedback">Feedback</Link>
        </button>
        <button>
          <Link to="/reviews">Reviews</Link>
        </button>
        <button>
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </div>
  )
}


export default Header;