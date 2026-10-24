import React from 'react';
import Slider from './Slider';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonials';

/**
 * Tenant Reviews & Feedback Carousel
 */
const Testimonials = () => {
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
    <section className="testimional_sec">
      <div className="container containerxl">
        <div className="row">
          <div className="col-md-12">
            <div className="head_testimional">
              <h3 title="Best Pg near amity university Noida | Pgnow">
                <span className="blu">Hear from</span>
                <br />
                <span className="org">Our Happy Tenants!</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="test_sl">
              <Slider {...sliderSettings}>
                {testimonials.map((item) => (
                  <TestimonialCard key={item.id} {...item} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
