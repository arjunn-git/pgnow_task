import React, { useState } from 'react';
import Slider from './Slider';
import PropertyCard from './PropertyCard';
import PropertyDetailsModal from './PropertyDetailsModal';
import { properties } from '../data/properties';

/**
 * Property Listings Showcase Carousel
 * Features interactive gender/occupancy filter tabs, quick view modal, and responsive multi-card carousel.
 */
const AmenitiesSlider = ({ onOpenEnquiry }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filterTabs = [
    { key: 'all', label: 'All PGs', count: properties.length },
    { key: 'boys', label: 'Boys PG', count: properties.filter(p => p.gender.toLowerCase() === 'boys').length },
    { key: 'girls', label: 'Girls PG', count: properties.filter(p => p.gender.toLowerCase() === 'girls').length },
    { key: 'unisex', label: 'Co-Living / Unisex', count: properties.filter(p => p.gender.toLowerCase() === 'unisex').length }
  ];

  const filteredProperties = properties.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.gender.toLowerCase() === activeFilter;
  });

  const sliderSettings = {
    dots: false,
    infinite: filteredProperties.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  const handleBookVisit = (property) => {
    setSelectedProperty(null);
    if (onOpenEnquiry) {
      onOpenEnquiry(property.title);
    } else {
      // Trigger global modal open if available
      window.dispatchEvent(new CustomEvent('open-enquiry-modal', { detail: { propertyTitle: property.title } }));
    }
  };

  return (
    <section className="amenities_com" id="properties-showcase">
      <div className="container containerxl">
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="heading_amenities">
              <h3 title="Best Pg near amity university Noida">
                <span className="blu">Unmatched Amenities for a</span>
                {' '}
                <br />
                <span className="org">Comfortable Stay!</span>
              </h3>
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="property-filter-tabs">
              {filterTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`filter-pill-btn ${activeFilter === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(tab.key)}
                >
                  {tab.label} <span className="filter-pill-count">{tab.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="property_sl">
              <Slider key={activeFilter} {...sliderSettings}>
                {filteredProperties.map((item) => (
                  <PropertyCard
                    key={item.id}
                    {...item}
                    onViewDetails={setSelectedProperty}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Property Quick View & Pricing Modal */}
      <PropertyDetailsModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBookVisit={handleBookVisit}
      />
    </section>
  );
};

export default AmenitiesSlider;
