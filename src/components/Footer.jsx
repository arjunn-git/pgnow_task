import React, { useState } from 'react';
import { asset } from '../utils/asset';

/**
 * Global Site Footer Component
 * Includes newsletter subscription with live toast feedback, company background, quick links,
 * location address, copyright statement, and floating CTA widgets.
 */
const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState({});
  const [readMore, setReadMore] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError({ email: 'Enter a valid email address.' });
      return;
    }
    setError({});
    setToastMessage('🎉 Thank you for subscribing! Verified PG deal alerts will be sent to your inbox.');
    setEmail('');
    setTimeout(() => {
      setToastMessage('');
    }, 4500);
  };

  const importantLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Food Menu', href: '#foodmenu' },
    { label: 'Infrastructure', href: '#infrastructure' },
    { label: 'Our Media', href: '#media' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Refer and Earn', href: '#refer' }
  ];

  const ourLivings = [
    { label: 'PN001-Sunshine Homes', href: '#house-1' },
    { label: 'PN002- Sunshine Plus', href: '#house-2' },
    { label: 'PN003-The Roof', href: '#house-3' },
    { label: 'PN004-TCH ( Boys )', href: '#house-4' },
    { label: 'PN005-TCH ( Girls )', href: '#house-5' },
    { label: 'PN006- Shree PG', href: '#house-6' },
    { label: 'PN007- Armaan PG', href: '#house-7' },
    { label: 'PN008- Arpit PG', href: '#house-8' },
    { label: 'PN009 - The Nest', href: '#house-9' },
    { label: 'PN0010- Coming Soon', href: '#house-10' }
  ];

  return (
    <footer className="footer_main">
      <div className="container containerxl">
        {/* Newsletter Subscription Row */}
        <div className="row justify-content-center">
          <div className="col-md-11">
            <div className="news_latter">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="newsletter-text">
                    <h3>Subscribe Our Newsletter</h3>
                    <p>Stay updated with special discounts &amp; vacant room alerts</p>
                  </div>
                </div>
                <div className="col-md-7">
                  <form onSubmit={handleSubmit} className="d-flex position-relative">
                    <input
                      type="email"
                      name="subscribe_email"
                      id="subscribe_email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="sub_bnt">
                      Subscribe
                    </button>
                    {error.email && (
                      <span className="text-danger position-absolute error-txt">
                        {error.email}
                      </span>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="row pb-4">
          <div className="col-md-4 col-12">
            <div className="footer_item_1">
              <a href="#">
                <img
                  src={asset('images/logo.webp')}
                  className="logo_main"
                  alt="PGNow Brand Logo"
                />
              </a>
              <p>
                Our services are designed to provide a seamless and hassle-free experience, ensuring a home-like environment with secure, well-maintained, and fully furnished accommodations. Choose PGNOW for a reliable, comfortable, and budget-friendly stay-because your comfort is our priority!
              </p>
              {readMore && (
                <p>
                  Whether you are a student or a working professional, our managed living spaces ensure 24*7 security, hygienic homestyle meals, superfast Wi-Fi, and a thriving community near Amity University, Noida.
                </p>
              )}
              <a
                href="#read-more"
                className="red-more"
                onClick={(e) => {
                  e.preventDefault();
                  setReadMore(!readMore);
                }}
              >
                {readMore ? 'Read Less -' : 'Read More +'}
              </a>
            </div>
          </div>

          <div className="col-md-2 col-6">
            <div className="footer_item_2">
              <h4>Important Links</h4>
              <ul>
                {importantLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="footer_item_2">
              <h4>Our Livings</h4>
              <ul>
                {ourLivings.map((living, idx) => (
                  <li key={idx}>
                    <a href={living.href}>{living.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-12">
            <div className="footer_item_2">
              <h4>Contact Us</h4>
              <ul className="contact_icon">
                <li>
                  <span>
                    <img src={asset('images/phn_icon.webp')} alt="Phone" />
                  </span>
                  <div>
                    <a href="tel:8130238788">+91 8130238788</a>,
                    <a href="tel:9871790074">+91 9871790074</a>
                  </div>
                </li>
                <li>
                  <span>
                    <img src={asset('images/mail_ic.webp')} alt="Email" />
                  </span>
                  <a href="mailto:info@pgnow.co.in">info@pgnow.co.in</a>
                </li>
                <li>
                  <span>
                    <img src={asset('images/location.webp')} alt="Location" />
                  </span>
                  <p>Sunshine Homes, Village Raipur, Opp Gate No. 2 Amity University, Sector 126, Noida-201304</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copy_right">
        <div className="container containerxl">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 text-md-start text-center">
              <p>&copy; 2026 PGNOW. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 col-12 text-md-end text-center">
              <p>Comfortable Living Near Amity University Noida</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Call & WhatsApp Buttons */}
      <div className="floating-buttons">
        <a href="tel:918130238788" className="call-btn" aria-label="Call Now">
          <img src={asset('images/call1.webp')} alt="Call Now" />
        </a>
        <a
          href="https://wa.me/918130238788?text=Hello!%20I'm%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          <img src={asset('images/whatsapp1.webp')} alt="WhatsApp" />
        </a>
      </div>

      {/* Interactive Toast Notification Feedback */}
      {toastMessage && (
        <div className="pgnow-floating-toast" role="alert">
          <span className="toast-text">{toastMessage}</span>
          <button
            type="button"
            className="toast-close-btn"
            onClick={() => setToastMessage('')}
            aria-label="Dismiss message"
          >
            ×
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
