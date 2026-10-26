import React from 'react';

/**
 * FAQ (Frequently Asked Questions) Section
 * Implements modern semantic mutually exclusive disclosure using native <details name="pgnow-faq">
 * as recommended by Modern Web Guidance.
 */
const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: 'What amenities are included in the PG monthly rent?',
      answer:
        'All our PG packages include 3 homestyle fresh meals daily, high-speed 100 Mbps Wi-Fi, 24*7 power backup, air conditioning, RO purified water, daily room housekeeping, and biometric & CCTV security surveillance. There are no hidden utility costs for standard usage.'
    },
    {
      id: 2,
      question: 'How close are the PG properties to Amity University, Noida?',
      answer:
        'All PGNow properties are strategically located within 2 to 5 minutes walking distance from Amity University Noida gates (Gate 2, Gate 3, Sector 125 & 126). Students can easily walk to their campus within minutes without needing daily auto or cab rides.'
    },
    {
      id: 3,
      question: 'What room sharing options and price ranges are available?',
      answer:
        'We offer flexible occupancy models: Single Sharing (private room with attached washroom starting from ₹15,000/mo), Double Sharing (twin occupancy starting from ₹10,500/mo), and Triple Sharing (budget-friendly starting from ₹8,500/mo). All rooms come fully furnished with beds, mattresses, study tables, and wardrobes.'
    },
    {
      id: 4,
      question: 'What is the booking process and security deposit policy?',
      answer:
        'You can schedule a free in-person room visit or virtual video tour. To reserve a room, a minimal booking token is required. The security deposit is equivalent to one month rent and is 100% refundable at the end of your tenure as per the agreement terms.'
    },
    {
      id: 5,
      question: 'Are there wardens, security guards, and guest policies?',
      answer:
        'Yes, safety is our top priority. We have dedicated 24*7 on-site wardens (female wardens for Girls PGs), biometric entry gates, and round-the-clock CCTV monitoring. Parents are welcome to visit during visitor hours upon registration at the front desk.'
    }
  ];

  return (
    <section className="faq-section" id="faq-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="text-center mb-5">
              <span className="faq-section-subtitle">Got Questions?</span>
              <h2 className="faq-section-title">
                Frequently Asked <span className="highlight-text">Questions</span>
              </h2>
              <p className="faq-section-lead text-muted">
                Everything you need to know about accommodations, food, and facilities near Amity University.
              </p>
            </div>

            <div className="faq-accordion-group">
              {faqs.map((faq, index) => (
                <details
                  key={faq.id}
                  className="faq-item"
                  name="pgnow-faq"
                  open={index === 0}
                >
                  <summary className="faq-summary">
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-chevron" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
