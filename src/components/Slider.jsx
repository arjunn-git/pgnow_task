import React, { useState, useEffect, useRef } from 'react';

const Slider = ({
  children,
  slidesToShow = 3,
  slidesToScroll = 1,
  autoplay = false,
  autoplaySpeed = 3000,
  arrows = true,
  responsive = []
}) => {
  const childrenArray = React.Children.toArray(children);
  const totalSlides = childrenArray.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(slidesToShow);
  const autoplayTimerRef = useRef(null);

  // Responsive calculation
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let matched = slidesToShow;

      if (responsive && responsive.length > 0) {
        // sorted by breakpoint ascending: 480, 768, 1024...
        const sorted = [...responsive].sort((a, b) => a.breakpoint - b.breakpoint);
        for (const item of sorted) {
          if (width <= item.breakpoint) {
            matched = item.settings?.slidesToShow || matched;
            break;
          }
        }
      }
      setCurrentSlidesToShow(matched);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [slidesToShow, responsive]);

  // Maximum valid index so the last visible window is always full (no blank spaces)
  const maxIndex = Math.max(0, totalSlides - currentSlidesToShow);

  // Ensure index is never out of bounds
  const safeIndex = Math.min(currentIndex, maxIndex);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : Math.max(0, prev - slidesToScroll)));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : Math.min(maxIndex, prev + slidesToScroll)));
  };

  useEffect(() => {
    if (!autoplay || maxIndex === 0) return;
    autoplayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, autoplaySpeed);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [autoplay, autoplaySpeed, maxIndex]);

  // Track width is proportional to (totalSlides / currentSlidesToShow)
  const trackWidthPct = currentSlidesToShow > 0 ? (totalSlides / currentSlidesToShow) * 100 : 100;

  // Each slide occupies (100 / totalSlides)% of the track
  // Shifting by safeIndex slides translates by safeIndex * (100 / totalSlides)% of the track
  const translatePct = totalSlides > 0 ? (safeIndex / totalSlides) * 100 : 0;

  return (
    <div className="slick-slider slick-initialized" style={{ position: 'relative' }}>
      {arrows && maxIndex > 0 && (
        <button
          type="button"
          className="slick-arrow slick-prev"
          onClick={handlePrev}
          aria-label="Previous"
          style={{ zIndex: 10, cursor: 'pointer' }}
        >
          &lt;
        </button>
      )}
      <div className="slick-list" style={{ overflow: 'hidden', margin: 0, padding: 0 }}>
        <div
          className="slick-track"
          style={{
            display: 'flex',
            transform: `translate3d(-${translatePct}%, 0px, 0px)`,
            transition: 'transform 500ms ease 0s',
            width: `${trackWidthPct}%`
          }}
        >
          {childrenArray.map((child, index) => (
            <div
              key={index}
              className="slick-slide"
              style={{
                width: `${100 / totalSlides}%`,
                flexShrink: 0,
                boxSizing: 'border-box'
              }}
            >
              <div>{child}</div>
            </div>
          ))}
        </div>
      </div>
      {arrows && maxIndex > 0 && (
        <button
          type="button"
          className="slick-arrow slick-next"
          onClick={handleNext}
          aria-label="Next"
          style={{ zIndex: 10, cursor: 'pointer' }}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default Slider;
