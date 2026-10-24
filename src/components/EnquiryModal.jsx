import React, { useState, useEffect } from 'react';

/**
 * Lead Capture Callback Request Modal
 * Pops up automatically after initial page interaction to capture interested leads.
 */
const EnquiryModal = () => {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    // Show modal after 3 seconds on initial visit
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      setPhone(val);
      setIsValid(val.length === 0 || /^\d{10}$/.test(val));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid || phone.length !== 10) {
      setIsValid(false);
      return;
    }
    alert('Thank you! Our representative will call you shortly.');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)', zIndex: 1050 }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header mainpagemodal">
            <h5 className="modal-title">Request a Callback</h5>
            <button
              type="button"
              className="close-button"
              onClick={() => setShow(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
              aria-label="Close"
            >
              X
            </button>
          </div>
          <div className="modal-body">
            <form className="Enquiry" onSubmit={handleSubmit}>
              <div className="phone_num">
                <span className="flagind">
                  <img src="/images/country-flag.png" alt="India flag" />
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  name="home_phone"
                  className={`input-field ${isValid ? '' : 'invalid'}`}
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength="10"
                  required
                />
                {!isValid && phone && (
                  <p className="error-message" style={{ color: 'red', fontSize: '0.8rem', marginTop: '4px' }}>
                    Please enter a valid 10-digit phone number.
                  </p>
                )}
              </div>
              <button className="submit-button" type="submit">
                Call Back
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
