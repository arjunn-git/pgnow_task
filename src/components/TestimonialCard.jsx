import React from 'react';

/**
 * Reusable Testimonial Card component
 * Displays tenant profile cutout photo, tenant name, and feedback quote.
 */
const TestimonialCard = ({ name, image, comment }) => {
  return (
    <div className="test-item">
      <img src={image} alt={name} className="w-100" loading="lazy" />
      <div className="desc_testimional">
        <h3>{name}</h3>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
