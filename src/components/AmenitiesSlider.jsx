import React from 'react';
import Slider from './Slider';
import PropertyCard from './PropertyCard';
import { properties } from '../data/properties';

/**
 * Property Listings Showcase Carousel
 * Responsive multi-card slider showcasing managed PG accommodations.
 */
const AmenitiesSlider = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="amenities_com">
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
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="property_sl">
              <Slider {...sliderSettings}>
                {properties.map((item) => (
                  <PropertyCard key={item.id} {...item} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSlider;
