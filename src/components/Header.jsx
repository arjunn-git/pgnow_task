import React, { useState, useRef, useEffect } from 'react';
import { asset } from '../utils/asset';

/**
 * Global Header Component
 * Contains top announcement bar, contact info, brand logo, and responsive navigation links with dropdown.
 */
const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const closeDropdown = () => setDropdownOpen(false);

  const handleClaimOffer = () => {
    window.dispatchEvent(
      new CustomEvent('open-enquiry-modal', {
        detail: { propertyTitle: 'Admissions 2026 Offer (₹1000 Off)' }
      })
    );
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-announcement-strip">
        <div className="container">
          <div className="announcement-content">
            <div className="announcement-badge-group">
              <span className="announcement-pill">🎓 Amity Admissions 2026</span>
              <span className="announcement-text">
                Zero Brokerage • 3 Meals Included • <strong>Flat ₹1,000 OFF</strong> on First Month Rent!
              </span>
            </div>
            <button
              type="button"
              className="btn-claim-offer-top"
              onClick={handleClaimOffer}
            >
              Claim Offer ⚡
            </button>
          </div>
        </div>
      </div>

      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="logo">
                <a href="/">
                  <img className="img-fluid" src={asset('images/logo.webp')} alt="PGNow Logo" />
                </a>
              </div>
            </div>
            <div className="offset-md-6 col-md-4">
              <div className="top_head text-end">
                <ul>
                  <li>
                    <img src={asset('images/phn_icon.webp')} alt="Phone" />{' '}
                    <a href="tel:+918130238788" target="_blank" rel="noreferrer">
                      +91-8130238788
                    </a>
                  </li>
                  <li>
                    <img src={asset('images/email_icn.webp')} alt="Email" />{' '}
                    <a href="mailto:info@pgnow.co.in" target="_blank" rel="noreferrer">
                      info@pgnow.co.in
                    </a>
                  </li>
                </ul>
              </div>
              <div className="main_top_navigation">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#properties-showcase">Our Livings</a>
                  </li>
                  <li className="dropdown" ref={dropdownRef}>
                    <span onClick={toggleDropdown} className="dropdown-btn">
                      Know More <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                    {dropdownOpen && (
                      <ul className="dropdown-menu show" style={{ display: 'block' }}>
                        <li>
                          <a href="#about" onClick={closeDropdown}>About Us</a>
                        </li>
                        <li>
                          <a href="#foodmenu" onClick={closeDropdown}>Food Menu</a>
                        </li>
                        <li>
                          <a href="#infrastructure" onClick={closeDropdown}>Infrastructure</a>
                        </li>
                        <li>
                          <a href="#media" onClick={closeDropdown}>Our Media</a>
                        </li>
                        <li>
                          <a href="#contact" onClick={closeDropdown}>Contact Us</a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
