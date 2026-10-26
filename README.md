# PGNow - Student & Working Professional Accommodation Platform

A modern, responsive React web application for exploring and booking PG accommodations near Amity University, Noida.

## 🚀 Live Demo
**Live Website:** [https://arjunn-git.github.io/pgnow_task/](https://arjunn-git.github.io/pgnow_task/)

---

## ✨ Features

- **Hero Banner & Connected Location Search**: Quick dropdown search with smooth scrolling to matching property listings.
- **Dynamic Category Filtering**: Instant filtering by occupancy type (`All PGs`, `Boys PG`, `Girls PG`, and `Co-Living / Unisex`) with live count badges.
- **Custom React Slider Component**: Touch-friendly, zero-dependency multi-card carousel supporting responsive breakpoints.
- **Property Quick-View & Pricing Modal**: Comprehensive details dialog showing monthly tariffs for Single, Double, and Triple sharing alongside key amenities.
- **Lead Capture & Callback Validation**: Interactive modal with real-time 10-digit mobile number validation and instant confirmation feedback.
- **Frequently Asked Questions (FAQ)**: Semantic mutually exclusive accordion for common student and parent inquiries.
- **Floating Controls**: Quick access WhatsApp inquiry, direct phone call, and smooth Back-to-Top scroll trigger.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile screen sizes.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Modular CSS3 with Flexbox, CSS Grid, and custom design tokens
- **Deployment**: GitHub Pages (via GitHub Actions workflow)

---

## 📁 Project Structure

```
pgnow-clone/
├── public/
│   └── images/              # Optimized brand assets, room photos & icons
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # Navigation bar & contact info
│   │   ├── Banner.jsx       # Hero banner & location search
│   │   ├── ReliableAffordable.jsx
│   │   ├── AmenitiesSlider.jsx   # Carousel with category filters
│   │   ├── PropertyCard.jsx      # Listing card component
│   │   ├── PropertyDetailsModal.jsx # Quick-view pricing dialog
│   │   ├── WhyChoose.jsx    # Feature highlights & amenities
│   │   ├── Testimonials.jsx # Reviews carousel
│   │   ├── TestimonialCard.jsx
│   │   ├── Stats.jsx        # Key metrics counter
│   │   ├── Offers.jsx       # Promo deals
│   │   ├── FAQ.jsx          # Accordion disclosure section
│   │   ├── Footer.jsx       # Site footer & contact links
│   │   ├── EnquiryModal.jsx # Callback lead modal
│   │   ├── BackToTop.jsx    # Floating scroll-to-top button
│   │   └── Slider.jsx       # Custom carousel implementation
│   ├── data/                # Data layer
│   │   ├── properties.js
│   │   ├── testimonials.js
│   │   ├── offers.js
│   │   └── locations.js
│   ├── utils/
│   │   └── asset.js         # Dynamic asset path resolver
│   ├── App.jsx              # Main application root
│   ├── App.css              # Stylesheet
│   └── main.jsx             # React DOM entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arjunn-git/pgnow_task.git
   cd pgnow_task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📄 License
This project was developed for demonstration and assessment purposes.
