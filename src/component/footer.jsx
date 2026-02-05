import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer (){
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="cta">
          <h2 className="cta-title">Ready to get started?</h2>
          <button className="btn-start">Get started</button>
        </div>
      </div>

      <div className="divider"></div>

      <div className="footer-mid">
        <div className="subscribe">
          <h3>Subscribe to our Website</h3>
          <div className="input-box">
            <input type="email" placeholder="Email address" />
            <button className="btn-arrow">›</button>
          </div>
        </div>

        <div className="nav-menu">
          <div className="nav-col">
            <h4>Services</h4>
            <ul>
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
              <li>Offline</li>
            </ul>
          </div>
          <div className="nav-col">
            <h4>About</h4>
            <ul>
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="nav-col">
            <h4>Help</h4>
            <ul>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="legal-links">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
        <div className="socials">
          <FaFacebookF className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaInstagram className="social-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;