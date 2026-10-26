import React, { useState, useEffect, useRef } from 'react';

/**
 * Animated Stat Counter Item
 * Uses IntersectionObserver and requestAnimationFrame for smooth 60fps counting.
 */
const CounterItem = ({ target, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = target > 500 ? target - 350 : 0;
          const duration = 1600;
          const startTime = performance.now();

          const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease-out
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOut);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <li ref={itemRef} className="stat-counter-item">
      <span>{hasAnimated ? count : target}{suffix}</span>
      <p>{label}</p>
    </li>
  );
};

/**
 * Key Performance Metrics & Stats Section
 */
const Stats = () => {
  const metrics = [
    { target: 10, suffix: '+', label: 'PGNOW Livings' },
    { target: 1500, suffix: '+', label: 'PGNOW Beds' },
    { target: 4500, suffix: '+', label: 'Delighted Customers' },
    { target: 2015, suffix: '', label: 'Since' }
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
              <CounterItem
                key={idx}
                target={item.target}
                suffix={item.suffix}
                label={item.label}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stats;
