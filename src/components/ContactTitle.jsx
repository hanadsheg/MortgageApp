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

        <div className = "contact-info">
            <a href = "https://x.com/LloydsBank?WT.ac=NavBarBottom/Navigation/Asklloyd?url=https%3A%2F%2Fprod-lloyds.adobecqms.net%2F.html&text=Personal&description=Wherever%20you%20want%20to%20get%20to%20in%20life%2C%20Lloyds%20Bank%20has%20a%20range%20of%20bank%20accounts%20and%20personal%20banking%20services%20to%20suit%20you.%20Visit%20us%20today%20to%20find%20out%20more">
              <img className = "contact-icon" src = "../assets/xphoto.png" alt="Contact Icon"/>
            </a>
        </div>

      <img className="contact-photo" src={ContactPhoto} alt="Contact" />

     </div>
    </div>
   
  )
}

export default ContactTitle;