import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        
        {/* Left Section */}
        <div className='footer-content-left'>
          <img src={assets.logo} alt='Snackify Logo' />
          <p>
           Snackify brings you fresh, tasty, and wholesome bites anytime, anywhere.  
Because every moment deserves the perfect snack.  

Designed & Developed by Vishal Kumar Godia
Aspiring Software Engineer | Full Stack Developer | Gwalior, Madhya Pradesh, India  
📞 +91 8827670277 
          </p>
          <div className='footer-social-icon'>
            <img   src={assets.facebook_icon} alt="Facebook"  onClick={() => window.open("mailto:vishalkumargodia@gmail.com", "_blank")}   />
            <img src={assets.twitter_icon} alt="Twitter" onClick={() => window.open("https://x.com/Vishal_Kext", "_blank")}
    style={{ cursor: "pointer" }} />
            <img src={assets.linkedin_icon} alt="LinkedIn"  onClick={() => window.open("https://www.linkedin.com/in/vishal-kumar-godia/", "_blank")} />
          </div>
        </div>

        {/* Center Section */}
        <div className='footer-content-center'>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className='footer-content-right'>
          <h2>Get in Touch</h2>
          <ul>
            <li>+91 8827670277</li>
            <li>vishalkumargodia@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        © 2024 Snackify.com – All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
