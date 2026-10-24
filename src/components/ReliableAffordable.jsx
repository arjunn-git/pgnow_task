import React from 'react';
import Slider from './Slider';
import { asset } from '../utils/asset';

/**
 * "Reliable, Affordable, and Packed with Amenities" Section
 * Introduces company history (since 2015), arch collage image, and quick facility slider.
 */
const ReliableAffordable = () => {
  const facilityItems = [
    { label: 'Fully Ac', icon: asset('images/ac.png') },
    { label: 'Free WIFI', icon: asset('images/wifi2.png') },
    { label: 'R.O. Water', icon: asset('images/drop.png') },
    { label: 'Feel Like Home', icon: asset('images/home.png') },
    { label: '24*7 Power', icon: asset('images/light.png') },
    { label: 'Parking', icon: asset('images/parking.png') }
  ];

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
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };

  return (
    <section className="about_reliable" id="infrastructure">
      <div className="container containerxl">
        <div className="row align-items-center">
          <div className="col-md-4 col-12">
            <div className="p_ab_reliable">
              <h3 title="Best Pg near amity university Noida">
                <span className="blu">Reliable, Affordable,</span>
                <br />
                and Packed <span className="org">with Amenities!</span>
              </h3>
              <p className="mb-0">
                Looking for the perfect place to stay? We've been providing top-notch accommodation services since 2015! As one of the leading providers of Paying Guest (PG) services, we are committed to offering a comfortable, secure, and affordable
                <span className="highlight-text"> living experience.</span>
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center abotimagewrap">
            <div className="imgWrapper">
              <img className="abt1" src={asset('images/pn27.jpg')} alt="PG Room Interior" />
              <img className="abt2" src={asset('images/pn233-min.webp')} alt="PG Facility" />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="data p_ab_reliable">
              <h1 title="Best Pg near amity university Noida">
                <b>Enjoy a hassle-free stay with our premium facilities, including:</b>
              </h1>
              <ul className="aboulist2">
                <Slider {...sliderSettings}>
                  {facilityItems.map((item, idx) => (
                    <div className="inr_it" key={idx}>
                      <li>
                        <img src={item.icon} alt={item.label} /> {item.label}
                      </li>
                    </div>
                  ))}
                </Slider>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliableAffordable;
