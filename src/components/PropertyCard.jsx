import React from 'react';

/**
 * Reusable Property Card component
 * Displays PG property image, occupancy target, gender badge, status, title, and key amenities.
 */
const PropertyCard = ({
  href,
  image,
  target,
  gender,
  genderIcon,
  status,
  title,
  amenities = []
}) => {
  return (
    <div className="inner_item">
      <a href={href}>
        <div className="top_img">
          <img
            src={image}
            alt={title}
            className="w-100"
            loading="lazy"
          />
          <span>{target}</span>
          <div className="gend">
            <img src={genderIcon} alt={gender} /> {gender}
          </div>
        </div>
      </a>
      <div className="desc_prop">
        <span>{status}</span>
        <h3>{title}</h3>
        <ul>
          <li>
            <img src="/images/ac.png" alt="Fully AC" /> Fully Ac
          </li>
          <li>
            <img src="/images/light.png" alt="24*7 Power" /> 24*7 Power
          </li>
          <li>
            <img src="/images/home.png" alt="Feel Like Home" /> Feel Like Home
          </li>
          <li>
            <img src="/images/wifi2.png" alt="Free WiFi" /> Free WIFI
          </li>
          <li>
            <img src="/images/drop.png" alt="R.O. Water" /> R.O. Water
          </li>
          <li>
            <img src="/images/parking.png" alt="Parking" /> Parking
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PropertyCard;
