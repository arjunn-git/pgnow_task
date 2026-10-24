import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ReliableAffordable from './components/ReliableAffordable';
import AmenitiesSlider from './components/AmenitiesSlider';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Offers from './components/Offers';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import './App.css';

/**
 * PGNow Main Application
 * 1:1 Pixel-Perfect Componentized Architecture
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

        {/* Featured Property Listings Slider */}
        <AmenitiesSlider />

        {/* Value Proposition & Feature Badges */}
        <WhyChoose />

        {/* Student & Tenant Testimonials Carousel */}
        <Testimonials />

        {/* Metric Counters */}
        <Stats />

        {/* Exclusive Promotional Offers */}
        <Offers />
      </main>

      {/* Footer with Quick Links, Contact, and WhatsApp/Call Widgets */}
      <Footer />

      {/* Callback Lead Capture Modal */}
      <EnquiryModal />
    </div>
  );
}

export default App;
