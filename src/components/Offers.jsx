import React from 'react';
import Slider from './Slider';
import { offers } from '../data/offers';

/**
 * Exclusive Deals & Promotional Offers Carousel
 */
const Offers = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <section className="offerings">
      <div className="container containerxl">
        <div className="row">
          <div className="col-md-12">
            <div className="head_testimional">
              <h3 title="Best Pg near amity university Noida">
                <span className="blu">Exclusive </span>
                <br />
                <span className="org">Deals &amp; Offers</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="test_sl">
              <Slider {...sliderSettings}>
                {offers.map((item) => (
                  <div className="test-item" key={item.id}>
                    <img src={item.image} alt={item.title} className="w-100" loading="lazy" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
