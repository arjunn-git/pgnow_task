import React, { useState } from 'react';

/**
 * Global Site Footer Component
 * Includes newsletter subscription, company background, quick links,
 * location address, copyright statement, and floating CTA widgets.
 */
const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState({});
  const [readMore, setReadMore] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError({ email: 'Enter a valid email address.' });
      return;
    }
    setError({});
    alert('Thank you for subscribing!');
    setEmail('');
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
    <footer id="contact">
      <div className="container containerxl">
        {/* Top Newsletter Bar */}
        <div id="bt_top" className="row align-items-center">
          <div className="col-md-2">
            <a href="/">
              <img src="/images/logo.webp" className="img-fluid" alt="PGNow Logo" />
            </a>
          </div>
          <div className="col-md-8 offset-md-2">
            <div className="subscribe_ft">
              <div className="left_line">
                <p>For more information About Rooms</p>
              </div>
              <div className="form_subs">
                <form className="Enquiry1" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="subscribe_email"
                    id="subscribe_email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error.email && (
                    <p className="error-message" style={{ color: 'red' }}>
                      {error.email}
                    </p>
                  )}
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="row mt-4 footerman">
          <div className="col-md-4">
            <div className="about_ft">
              <h3 title="Best Pg near amity university Noida | PGNow">About Us</h3>
              <p>
                At PGNOW, we take pride in being one of the leading providers of premium Paying Guest (PG) accommodations. Since our inception, we have been committed to offering safe, comfortable, and affordable living spaces with top-tier facilities.
              </p>
              <p className={`read-more-content ${readMore ? 'show' : ''}`}>
                Our services are designed to provide a seamless and hassle-free experience, ensuring a home-like environment with secure, well-maintained, and fully furnished accommodations. Choose PGNOW for a reliable, comfortable, and budget-friendly stay—because your comfort is our priority!
              </p>
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          <div className="col-md-3 col-12">
            <div className="imp_link">
              <h3>Important Links</h3>
              <ul>
                {importantLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-5 col-12">
            <div className="imp_link imp_link2">
              <h3>Our Livings</h3>
              <ul>
                {ourLivings.map((prop, idx) => (
                  <li key={idx}>
                    <a href={prop.href}>{prop.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="social_icn">
              <ul>
                <li>
                  <a href="https://www.facebook.com/share/1HhFFg3bCB/" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#!" aria-label="Twitter">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/pgnow.in" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/in/proximate-homes-231a01273" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Row */}
          <div className="row">
            <div className="ft_address">
              <ul>
                <li>
                  <span className="img_icn">
                    <img src="/images/mb_icn.webp" alt="Phone" />
                  </span>
                  <a href="tel:+918130238788">+91-8130238788</a>
                </li>
                <li>
                  <span className="img_icn">
                    <img src="/images/mail_ic.webp" alt="Email" />
                  </span>
                  <a href="mailto:info@pgnow.co.in">info@pgnow.co.in</a>
                </li>
                <li>
                  <span className="img_icn">
                    <img src="/images/add_ic.webp" alt="Address" />
                  </span>
                  <p>Sunshine Homes, Village Raipur, Opp Gate No. 2 Amity University, Sector 126, Noida-201304</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright">
        <div className="container containerxl">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>Copyright 2025. PG Now. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-end">
              <p>
                Designed By{' '}
                <a href="https://omsoftsolution.com/" target="_blank" rel="noreferrer">
                  <img src="/images/designer_by.webp" alt="Om Soft Solution" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Call & WhatsApp Buttons */}
      <div className="floating-buttons">
        <a href="tel:918130238788" className="call-btn" aria-label="Call Now">
          <img src="/images/call1.webp" alt="Call Now" />
        </a>
        <a
          href="https://wa.me/918130238788?text=Hello!%20I'm%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          <img src="/images/whatsapp1.webp" alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
