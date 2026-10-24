# PGNow - Modern Accommodation Platform UI (React)

A responsive, pixel-perfect frontend implementation of the [PGNow](https://pgnow.co.in/) accommodation platform built using **React** and **Vite**.

---

## 🚀 Key Highlights & Features

- **Component-Driven Architecture**: Modular, reusable components (`PropertyCard`, `TestimonialCard`, `Slider`, `Header`, `Footer`).
- **Separated Data Layer**: Dynamic properties, locations, testimonials, and promotional offers decoupled into `src/data/` for easy maintainability.
- **Native Lightweight Carousel**: Custom React slider built from scratch using React hooks (`useState`, `useEffect`) and CSS transform transitions — zero third-party library bloat, bounded slide transitions, and full responsive support.
- **Interactive UI Elements**:
  - Interactive room location search dropdown with outside-click detection (`useRef`).
  - Expanding content toggles ("Read More / Read Less").
  - Lead capture callback modal with 10-digit mobile number validation.
  - Floating direct-action widgets for instant WhatsApp chat and phone calling.
- **100% Mobile Responsive**: Tested across mobile (360px+), tablet (768px), and modern desktop screens.

---

## 📁 Project Structure

```
pgnow-clone/
├── public/
│   └── images/              # Optimized brand assets, room photos & icons
├── src/
│   ├── data/                # Data layer (properties, testimonials, offers, locations)
│   │   ├── properties.js
│   │   ├── testimonials.js
│   │   ├── offers.js
│   │   └── locations.js
│   ├── components/          # Reusable React UI components
│   │   ├── Header.jsx
│   │   ├── Banner.jsx
│   │   ├── ReliableAffordable.jsx
│   │   ├── AmenitiesSlider.jsx
│   │   ├── PropertyCard.jsx
│   │   ├── WhyChoose.jsx
│   │   ├── Testimonials.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── Stats.jsx
│   │   ├── Offers.jsx
│   │   ├── Footer.jsx
│   │   ├── EnquiryModal.jsx
│   │   └── Slider.jsx       # Custom native React slider
│   ├── App.jsx              # Main application root
│   ├── App.css              # Global styling & layout rules
│   └── main.jsx
├── index.html
└── package.json
```

---

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) installed.

### Installation
1. Clone or extract the project repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the development server:
```bash
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### Production Build
To create an optimized production build:
```bash
npm run build
```
Preview the production build:
```bash
npm run preview
```
