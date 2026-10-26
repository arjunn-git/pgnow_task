import React, { useState, useRef, useEffect } from 'react';
import { locations } from '../data/locations';
import { asset } from '../utils/asset';

/**
 * Hero Banner Section
 * Features primary value proposition, quick room finder dropdown, and image collage.
 * Smoothly connects search selection with the property showcase section.
 */
const Banner = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Select your ideal PG room');
  const dropdownRef = useRef(null);

  const quickTags = [
    { label: '👧 Girls PG', filter: 'girls' },
    { label: '👦 Boys PG', filter: 'boys' },
    { label: '🏠 Co-Living', filter: 'unisex' },
    { label: '📍 Near Amity Gate 2', filter: 'all' },
    { label: '⚡ Fully AC Rooms', filter: 'all' }
  ];

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

  const scrollToProperties = () => {
    const el = document.getElementById('properties-showcase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectLocation = (locName) => {
    setSelectedLocation(locName);
    setDropdownOpen(false);
    scrollToProperties();
  };

  const handleTagClick = (tag) => {
    if (tag.filter) {
      window.dispatchEvent(new CustomEvent('select-property-filter', { detail: { filter: tag.filter } }));
    }
    scrollToProperties();
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
                src={asset('images/arrow_bt.webp')}
                alt="Arrow pointer"
              />
              <a href="#properties-showcase" onClick={(e) => { e.preventDefault(); scrollToProperties(); }}>
                <img
                  src={asset('images/view_room_btn.webp')}
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
                  <span className="selected-loc-text">{selectedLocation}</span>
                  <span
                    className="dropsearch"
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToProperties();
                    }}
                  >
                    PG Now 
                  </span>
                </button>
                {dropdownOpen && (
                  <ul className="dropdown-menu show" style={{ display: 'block' }}>
                    {locations.map((loc) => (
                      <li key={loc.id}>
                        <a
                          href="#properties-showcase"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSelectLocation(`${loc.icon} ${loc.name}`);
                          }}
                        >
                          {loc.icon} {loc.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Quick Search Tag Pills */}
              <div className="hero-quick-tags">
                <span className="quick-tags-label">Popular:</span>
                {quickTags.map((tag) => (
                  <button
                    key={tag.label}
                    type="button"
                    className="quick-tag-chip"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid hero-banner-illustration"
              src={asset('images/banner.webp')}
              alt="Comfortable PG room interiors"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
