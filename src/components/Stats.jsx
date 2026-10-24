import React from 'react';

/**
 * Key Performance Metrics & Stats Section
 */
const Stats = () => {
  const metrics = [
    { value: '10+', label: 'PGNOW Livings' },
    { value: '1500+', label: 'PGNOW Beds' },
    { value: '4500+', label: 'Delighted Customers' },
    { value: '2015', label: 'Since' }
  ];

  return (
    <section className="top_releated">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="top_head_re">
              <h3 title="Best Pg near amity university Noida Pgnow">
                Noida's Top-Rated <span>PGNOW</span> Spaces for You
              </h3>
            </div>
          </div>
        </div>
        <div className="action_blb">
          <ul>
            {metrics.map((item, idx) => (
              <li key={idx}>
                <span>{item.value}</span>
                <p> {item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stats;
