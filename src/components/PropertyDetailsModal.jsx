import React, { useEffect, useRef } from 'react';
import { asset } from '../utils/asset';

/**
 * PropertyDetailsModal
 * Quick-view dialog displaying room tariffs, sharing options, and amenities.
 */
const PropertyDetailsModal = ({ property, onClose, onBookVisit }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (property) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }

    // Fallback backdrop click handler for older browsers
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
        onClose();
      }
    };

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', handleBackdropClick);
    }

    const handleCancel = (e) => {
      e.preventDefault();
      onClose();
    };
    dialog.addEventListener('cancel', handleCancel);

    return () => {
      if (!('closedBy' in HTMLDialogElement.prototype)) {
        dialog.removeEventListener('click', handleBackdropClick);
      }
      dialog.removeEventListener('cancel', handleCancel);
    };
  }, [property, onClose]);

  if (!property) return null;

  return (
    <dialog
      ref={dialogRef}
      className="property-quick-modal"
      closedby="any"
      aria-labelledby="property-modal-title"
    >
      <div className="property-modal-wrapper">
        {/* Modal Header */}
        <div className="modal-header-custom">
          <div>
            <span className="badge-target">{property.target}</span>
            <span className="badge-status">{property.status}</span>
          </div>
          <button
            type="button"
            className="btn-modal-close"
            onClick={onClose}
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="property-modal-body">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="modal-img-container">
                <img
                  src={property.image}
                  alt={property.title}
                  className="modal-property-img"
                />
                <div className="modal-gender-tag">
                  <img src={property.genderIcon} alt={property.gender} />
                  <span>{property.gender} PG</span>
                </div>
              </div>
              <div className="distance-info">
                📍 <strong>Location:</strong> {property.distance || 'Sector 125, Noida (Near Amity University)'}
              </div>
            </div>

            <div className="col-md-6">
              <h2 id="property-modal-title" className="modal-property-title">
                {property.title}
              </h2>
              <p className="modal-price-lead">
                Starting from <span className="highlight-price">{property.price}</span> / month
              </p>

              {/* Monthly Sharing Tariffs */}
              <div className="sharing-plans">
                <h4>Occupancy &amp; Monthly Rent</h4>
                <div className="plan-item">
                  <div className="plan-name">
                    <strong>Single Sharing Room</strong>
                    <small>Private Room • Attached Bathroom</small>
                  </div>
                  <div className="plan-price">{property.sharing?.single || '₹15,000/mo'}</div>
                </div>
                <div className="plan-item popular-plan">
                  <span className="popular-badge">Most Popular</span>
                  <div className="plan-name">
                    <strong>Double Sharing Room</strong>
                    <small>Twin Bed • Spacious Balcony</small>
                  </div>
                  <div className="plan-price">{property.sharing?.double || '₹10,500/mo'}</div>
                </div>
                <div className="plan-item">
                  <div className="plan-name">
                    <strong>Triple Sharing Room</strong>
                    <small>Budget Friendly • Study Desk</small>
                  </div>
                  <div className="plan-price">{property.sharing?.triple || '₹8,500/mo'}</div>
                </div>
              </div>

              {/* Key Amenities */}
              <div className="modal-amenities">
                <h4>All-Inclusive Amenities</h4>
                <div className="amenities-grid">
                  <span>⚡ 24*7 Power Backup</span>
                  <span>❄️ Inverter AC</span>
                  <span>📶 100 Mbps Wi-Fi</span>
                  <span>🍱 3 Fresh Meals Daily</span>
                  <span>🧹 Daily Housekeeping</span>
                  <span>🛡️ 24*7 CCTV &amp; Guard</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="modal-actions">
                <button
                  type="button"
                  className="btn-book-visit"
                  onClick={() => onBookVisit(property)}
                >
                  Schedule Free Room Visit
                </button>
                <a
                  href={`https://api.whatsapp.com/send?phone=919871790074&text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-direct"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default PropertyDetailsModal;
