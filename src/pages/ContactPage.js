import React from "react";
import "./ContactPage.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const ContactPage = () => (
  <div className="footer section__padding">
    <div className="footer-links">
      <div className="footer-links_contact">
        <h1 className="footer-headtext">Contact Us</h1>
        <p className="footer-links-text">New York, NY 10019, USA</p>
        <p className="footer-links-text">+1 212-344-1230</p>
        <p className="footer-links-text">+1 212-555-1230</p>
      </div>

      <div className="footer-links_logo">
        <p className="footer-headtext">Reach Us at</p>
        <div>
          <p className="email">support@kickup.com</p>
          <p className="email-description">for any technical support</p>
        </div>
        <div>
          <p className="email">info@kickup.com</p>
          <p className="email-description">for more information</p>
        </div>
        <div>
          <p className="email">feedback@kickup.com</p>
          <p className="email-description">to send your feedback</p>
        </div>
        <div>
          <p className="email">jobs@kickup.com</p>
          <p className="email-description">to work with us</p>
        </div>
        <div className="footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="footer-links_work">
        <h1 className="footer-headtext">Working Hours</h1>
        <p className="footer-links-text">Monday-Friday:</p>
        <p className="footer-links-text">08:00 am - 12:00 am</p>
        <p className="footer-links-text">Saturday-Sunday:</p>
        <p className="footer-links-text">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Stay in Touch</p>
    </div>
  </div>
);

export default ContactPage;
