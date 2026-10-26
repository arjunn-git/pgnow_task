import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ReliableAffordable from './components/ReliableAffordable';
import AmenitiesSlider from './components/AmenitiesSlider';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Offers from './components/Offers';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import BackToTop from './components/BackToTop';
import './App.css';

/**
 * PGNow Main Application
 * Componentized Architecture with Enhanced Interactivity & Modern Web APIs
 */
function App() {
  return (
    <div className="App">
      {/* Top Header & Navigation */}
      <Header />

      {/* Main Page Flow */}
      <main>
        {/* Hero Banner with Location Dropdown Search */}
        <Banner />

        {/* Introduction & Highlights */}
        <ReliableAffordable />

        {/* Featured Property Listings Slider with Category Filters */}
        <AmenitiesSlider />

        {/* Value Proposition & Feature Badges */}
        <WhyChoose />

        {/* Student & Tenant Testimonials Carousel */}
        <Testimonials />

        {/* Metric Counters */}
        <Stats />

        {/* Exclusive Promotional Offers */}
        <Offers />

        {/* Frequently Asked Questions Disclosure Section */}
        <FAQ />
      </main>

      {/* Footer with Quick Links, Contact, and WhatsApp/Call Widgets */}
      <Footer />

      {/* Callback Lead Capture Native Dialog Modal */}
      <EnquiryModal />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
