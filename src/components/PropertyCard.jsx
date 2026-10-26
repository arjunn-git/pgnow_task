import React from 'react';
import { asset } from '../utils/asset';

/**
 * Reusable Property Card component
 * Displays PG property image, occupancy target, gender badge, status, title, price, and key amenities.
 * Supports quick-view modal trigger for detailed room specifications.
 */
const PropertyCard = (props) => {
  const {
    href,
    image,
    target,
    gender,
    genderIcon,
    status,
    badge,
    title,
    price,
    distance,
    onViewDetails
  } = props;

  const handleCardClick = (e) => {
    if (onViewDetails) {
      e.preventDefault();
      onViewDetails(props);
    }
  };

  return (
    <div className="inner_item enhanced-property-card">
      <a href={href} onClick={handleCardClick} title={`View details for ${title}`}>
        <div className="top_img">
          <img
            src={image}
            alt={title}
            className="w-100 property-card-img"
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
        <div className="property-card-subinfo">
          {price && (
            <div className="property-price-text">
              From <strong>{price}</strong>/mo
            </div>
          )}
          {distance && (
            <div className="property-distance-text">
              📍 {distance}
            </div>
          )}
        </div>
        {badge && (
          <div className="property-demand-badge">
            {badge}
          </div>
        )}
        <ul>
          <li>
            <img src={asset('images/ac.png')} alt="Fully AC" /> Fully Ac
          </li>
          <li>
            <img src={asset('images/light.png')} alt="24*7 Power" /> 24*7 Power
          </li>
          <li>
            <img src={asset('images/home.png')} alt="Feel Like Home" /> Feel Like Home
          </li>
          <li>
            <img src={asset('images/wifi2.png')} alt="Free WIFI" /> Free WIFI
          </li>
          <li>
            <img src={asset('images/drop.png')} alt="R.O. Water" /> R.O. Water
          </li>
          <li>
            <img src={asset('images/parking.png')} alt="Parking" /> Parking
          </li>
        </ul>
        <div className="property-card-action-bar">
          <button
            type="button"
            className="btn-quick-view"
            onClick={handleCardClick}
          >
            Quick View &amp; Pricing →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
