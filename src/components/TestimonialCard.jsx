import React from 'react';

/**
 * Reusable Testimonial Card component
 * Displays tenant profile photo, star rating, verified resident tag, and feedback quote.
 */
const TestimonialCard = ({ name, role, rating = 5, verified = true, image, comment }) => {
  return (
    <div className="test-item enhanced-test-item">
      <img src={image} alt={name} className="w-100 testimonial-avatar" loading="lazy" />
      <div className="desc_testimional">
        <div className="testimonial-rating-stars" aria-label={`${rating} out of 5 stars`}>
          {'★'.repeat(rating)}
        </div>
        <h3>{name}</h3>
        {role && (
          <div className="testimonial-resident-tag">
            <span>{role}</span>
            {verified && <span className="verified-check">✓ Verified</span>}
          </div>
        )}
        <p className="testimonial-quote">"{comment}"</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
