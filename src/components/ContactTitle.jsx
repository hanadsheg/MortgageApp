import '../styles/contact.css';
import {Link} from 'react-router-dom'

import ContactPhoto from '../assets/AdobeStock.jpeg';
function ContactTitle() {
  return (
    <div className = "contact-border">
       <div className="contact">
        <div className="contact-desc">
          <h1 className="contact-title">Contact Us</h1>
          <p>We're here to help, this page will give you all the useful telephone numbers you need</p>
        </div>

        

      <img className="contact-photo" src={ContactPhoto} alt="Contact" />

     </div>
    </div>
   
  )
}

export default ContactTitle;