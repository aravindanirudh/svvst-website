import React from 'react'
import './styles/index.css';
import president from './assets/founders/AnandakumarT.avif';
import secretary from './assets/founders/DrJayachandraKamath.avif';
import { FaPhone } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="contact-us-main-div" id="contact-us">
        <h1>Contact Us</h1>
        <div className="contact-us-internal-div">
            <div className="contact-us-text-div">
                <img loading="lazy" src={president} alt="Potrait image of President, Anand Kumar" />
                <h3 className="contact-us-name">Anandakumar T</h3>
                <p className="contact-us-title">President</p>
                <a className="phone-link" href="tel:+919446482768">
                  <div className="phone-number-container">
                    <FaPhone className="phone-icon"/>
                    <p className="contact-us-number">+91 9446482768</p>
                  </div>
                </a>
            </div>
            <div className="contact-us-text-div">
                <img loading="lazy" src={secretary} alt="Potrait image of President, Anand Kumar" />
                <h3 className="contact-us-name">Dr. Jayachandra Kamath</h3>
                <p className="contact-us-title">Secretary</p>
                <a className="phone-link" href="tel:+919447484009">
                  <div className="phone-number-container">
                    <FaPhone className="phone-icon"/>
                    <p className="contact-us-number">+91 9447484009</p>
                  </div>
                </a>
            </div>
        </div>
        <div className="address-div">
          <h1 className="address-h1">Registered Address</h1>
          <p>Cherthala Municipality, Ward No. 29<br/>Cherthala North Village, Cherthala Taluk<br/>Alappuzha - 688524<br/>Kerala, India</p>
        </div>
    </div>
  )
}

export default ContactUs