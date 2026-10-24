import React, { useState } from 'react';
import { asset } from '../utils/asset';

/**
 * "Why Choose PGNOW?" Section
 * Highlights value propositions, expanding feature list, and icon-based amenities.
 */
const WhyChoose = () => {
  const [readMore, setReadMore] = useState(false);

  const featureList = [
    'Air-conditioned rooms for maximum comfort',
    'Unlimited high-speed Wi-Fi to stay connected',
    'Purified R.O. water for safe drinking',
    "24x7 power backup so you're never in the dark",
    'Professional maintenance for a hassle-free stay',
    'Round-the-clock security with CCTV and trained guards',
    'Delicious homely meals to keep you energized',
    'Recreational facilities for relaxation and fun'
  ];

  return (
    <section className="why_ch" id="about">
      <div className="container containerxl">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="choose_head">
              <h3 title="Best Pg near amity university Noida">
                Why Choose <span className="bg_bnt">PGNOW?</span>
              </h3>
              <p>
                At PGNOW, we go beyond just accommodation—we offer a home away from home! Our secure, fully furnished rooms come with top-notch amenities, including:
              </p>
              <div className={`read-more-content ${readMore ? 'show' : ''}`}>
                <ul>
                  {featureList.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fa fa-check-square"></i> {feature}
                    </li>
                  ))}
                </ul>
                <p>
                  Enjoy a safe, comfortable, and budget-friendly living experience with PGNOW—because you deserve the best!
                </p>
              </div>
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="facilities_icon">
              <div className="fst_left_wh">
                <ul>
                  <li>
                    <img src={asset('images/air_condition.webp')} alt="Air Conditioner" />
                    <div className="clearfix"></div>
                    <span>Air Conditioner</span>
                  </li>
                  <li>
                    <img src={asset('images/air_condition.webp')} alt="Balcony" />
                    <div className="clearfix"></div>
                    <span>Balcony</span>
                  </li>
                </ul>
              </div>
              <div className="center_wh">
                <ul>
                  <li>
                    <img src={asset('images/bed.webp')} alt="Extra Bed" />
                    <div className="clearfix"></div>
                    <span>Extra Bed</span>
                  </li>
                  <li>
                    <img src={asset('images/flat_tv.webp')} alt="Flat TV" />
                    <div className="clearfix"></div>
                    <span>Flat TV</span>
                  </li>
                  <li>
                    <img src={asset('images/innercon.webp')} alt="Hot & Cold Water" />
                    <div className="clearfix"></div>
                    <span>Hot &amp; Cold Water</span>
                  </li>
                </ul>
              </div>
              <div className="right_wh">
                <ul>
                  <li>
                    <img src={asset('images/com.webp')} alt="InterCom" />
                    <div className="clearfix"></div>
                    <span>InterCom</span>
                  </li>
                  <li>
                    <img src={asset('images/free_wifi.webp')} alt="Free Wifi" />
                    <div className="clearfix"></div>
                    <span>Free Wifi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
