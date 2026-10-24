import React, { useState, useRef, useEffect } from 'react';
import { locations } from '../data/locations';

/**
 * Hero Banner Section
 * Features primary value proposition, quick room finder dropdown, and image collage.
 */
const Banner = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Select your ideal PG room');
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

  const handleSelectLocation = (locName) => {
    setSelectedLocation(locName);
    setDropdownOpen(false);
  };

  return (
    <section className="banner_main">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="banner_left">
              <h3 title="Best Pg near amity university Noida">Comfortable &amp; Affordable</h3>
              <h4 title="Best Pg near amity university Noida">
                PG Rooms Just for <span>YOU!</span>
              </h4>
              <img
                className="arrow_bt"
                src="/images/arrow_bt.webp"
                alt="Arrow pointer"
              />
              <a href="#house-1">
                <img
                  src="/images/view_room_btn.webp"
                  className="view_bnt"
                  alt="View Rooms"
                />
              </a>
              <div className="search_banner" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="dropdown-btn"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  {selectedLocation}
                  <span className="dropsearch">PG Now </span>
                </button>
                {dropdownOpen && (
                  <ul className="dropdown-menu show" style={{ display: 'block' }}>
                    {locations.map((loc) => (
                      <li key={loc.id}>
                        <a
                          href={loc.href}
                          onClick={() => handleSelectLocation(`${loc.icon} ${loc.name}`)}
                        >
                          {loc.icon} {loc.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="/images/banner.webp"
              alt="Comfortable PG room interiors"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
