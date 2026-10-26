import React, { useState, useEffect, useRef } from 'react';
import { asset } from '../utils/asset';

/**
 * EnquiryModal
 * Handles lead callback requests with phone number validation and success feedback.
 */
const EnquiryModal = () => {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [propertyTitle, setPropertyTitle] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    // Show modal after 4 seconds on initial visit
    const timer = setTimeout(() => {
      setShow(true);
    }, 4000);

    // Event listener to trigger enquiry modal from property cards
    const handleOpenModal = (e) => {
      if (e.detail?.propertyTitle) {
        setPropertyTitle(e.detail.propertyTitle);
      }
      setIsSubmitted(false);
      setShow(true);
    };

    window.addEventListener('open-enquiry-modal', handleOpenModal);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('open-enquiry-modal', handleOpenModal);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (show) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }

    // Fallback click outside handler for older browser compatibility
    const handleBackdropClick = (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isDialogContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isDialogContent) {
        handleClose();
      }
    };

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', handleBackdropClick);
    }

    const handleCancel = (e) => {
      e.preventDefault();
      handleClose();
    };
    dialog.addEventListener('cancel', handleCancel);

    return () => {
      if (!('closedBy' in HTMLDialogElement.prototype)) {
        dialog.removeEventListener('click', handleBackdropClick);
      }
      dialog.removeEventListener('cancel', handleCancel);
    };
  }, [show]);

  const handleClose = () => {
    setShow(false);
    setIsSubmitted(false);
    setPhone('');
    setName('');
    setPropertyTitle('');
  };

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
    setIsSubmitted(true);
  };

  return (
    <dialog
      ref={dialogRef}
      className="enquiry-native-dialog"
      closedby="any"
      aria-labelledby="enquiry-modal-title"
    >
      <div className="enquiry-dialog-content">
        <div className="modal-header mainpagemodal">
          <h5 id="enquiry-modal-title" className="modal-title">
            {isSubmitted ? 'Callback Scheduled!' : (propertyTitle ? `Enquire for ${propertyTitle}` : 'Request a Callback')}
          </h5>
          <button
            type="button"
            className="close-button"
            onClick={handleClose}
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        <div className="modal-body">
          {isSubmitted ? (
            <div className="submission-success-card text-center py-4">
              <div className="success-icon-badge mb-3">✓</div>
              <h4 className="text-success mb-2">Thank you! Request Received</h4>
              <p className="mb-3 text-muted">
                Our property advisor for <strong>{propertyTitle || 'Amity University Noida Area'}</strong> will call you shortly on:
              </p>
              <div className="confirmed-phone-pill mb-4">
                +91 {phone}
              </div>
              <button
                type="button"
                className="submit-button w-100"
                onClick={handleClose}
              >
                Done
              </button>
            </div>
          ) : (
            <form className="Enquiry" onSubmit={handleSubmit}>
              <p className="enquiry-subtitle text-muted mb-3">
                Leave your number and get verified room rates, sharing options, and a free guided visit.
              </p>

              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  className="input-field w-100 name-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="phone_num">
                <span className="flagind">
                  <img src={asset('images/country-flag.png')} alt="India flag" />
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="10-Digit Mobile Number"
                  name="home_phone"
                  className={`input-field ${isValid ? '' : 'invalid'}`}
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength="10"
                  required
                  aria-invalid={!isValid}
                />
              </div>
              {!isValid && (
                <p className="error-message" style={{ color: '#dc3545', fontSize: '0.85rem', marginTop: '6px' }}>
                  Please enter a valid 10-digit mobile number.
                </p>
              )}

              <button className="submit-button mt-3" type="submit">
                Request Free Callback
              </button>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default EnquiryModal;
