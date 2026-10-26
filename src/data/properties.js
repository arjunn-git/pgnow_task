import { asset } from '../utils/asset';

// PG accommodation listings near Amity University, Noida
export const properties = [
  {
    id: 'PN001',
    title: 'PN001-Sunshine Homes',
    href: '#house-1',
    image: asset('images/gallery2.jpg'),
    gallery: [
      { label: 'Bedroom', url: asset('images/gallery2.jpg') },
      { label: 'Washroom', url: asset('images/pn21.jpg') },
      { label: 'Study Area', url: asset('images/pn22.jpg') }
    ],
    target: 'For Student',
    gender: 'Boys',
    genderIcon: asset('images/man.png'),
    status: 'Booking Open',
    badge: '🔥 Only 2 Beds Left',
    price: '₹8,500',
    distance: '2 min walk from Amity Gate 2',
    sharing: {
      single: '₹15,000/mo',
      double: '₹10,500/mo',
      triple: '₹8,500/mo'
    },
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN002',
    title: 'PN002-Sunshine Plus',
    href: '#house-2',
    image: asset('images/pn23.jpg'),
    gallery: [
      { label: 'Bedroom', url: asset('images/pn23.jpg') },
      { label: 'Washroom', url: asset('images/pn24.jpg') },
      { label: 'Balcony', url: asset('images/pn25.jpg') }
    ],
    target: 'For Student',
    gender: 'Boys',
    genderIcon: asset('images/man.png'),
    status: 'Booking Open',
    badge: '⚡ Most Popular',
    price: '₹9,000',
    distance: '3 min walk from Amity Gate 3',
    sharing: {
      single: '₹16,000/mo',
      double: '₹11,000/mo',
      triple: '₹9,000/mo'
    },
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN003',
    title: 'PN003-The Roof',
    href: '#house-3',
    image: asset('images/pn341.JPG'),
    gallery: [
      { label: 'Bedroom', url: asset('images/pn341.JPG') },
      { label: 'Washroom', url: asset('images/pn31.JPG') },
      { label: 'Lounge', url: asset('images/pn32.JPG') }
    ],
    target: 'For Working professional',
    gender: 'Boys',
    genderIcon: asset('images/man.png'),
    status: '100% Occupied',
    badge: '🔒 Fully Booked',
    price: '₹10,000',
    distance: 'Sector 125, Near Advant Navis',
    sharing: {
      single: '₹17,000/mo',
      double: '₹12,000/mo',
      triple: '₹10,000/mo'
    },
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN004',
    title: 'PN004-The Crown Heights',
    href: '#house-4',
    image: asset('images/pn41.jpg'),
    gallery: [
      { label: 'Bedroom', url: asset('images/pn41.jpg') },
      { label: 'Washroom', url: asset('images/pn42.jpg') },
      { label: 'Terrace', url: asset('images/pn43.jpg') }
    ],
    target: 'For Student',
    gender: 'Boys',
    genderIcon: asset('images/man.png'),
    status: 'Booking Open',
    badge: '🔥 Fast Filling',
    price: '₹9,500',
    distance: 'Near Amity University Noida',
    sharing: {
      single: '₹16,500/mo',
      double: '₹11,500/mo',
      triple: '₹9,500/mo'
    },
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN005',
    title: 'PN005-The Crown Heights',
    href: '#house-5',
    image: asset('images/pn55.jpg'),
    gallery: [
      { label: 'Bedroom', url: asset('images/pn55.jpg') },
      { label: 'Washroom', url: asset('images/pn51.jpg') },
      { label: 'Study Desk', url: asset('images/pn52.jpg') }
    ],
    target: 'For Student',
    gender: 'Girls',
    genderIcon: asset('images/woman.png'),
    status: 'Booking Open',
    badge: '🛡️ 24x7 Female Warden',
    price: '₹9,500',
    distance: 'Gated Society, 4 min from Gate 2',
    sharing: {
      single: '₹16,500/mo',
      double: '₹11,500/mo',
      triple: '₹9,500/mo'
    },
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN006',
    title: 'PN006-Shree PG',
    href: '#house-6',
    image: asset('images/pn65.jpg'),
    gallery: [
      { label: 'Bedroom', url: asset('images/pn65.jpg') },
      { label: 'Washroom', url: asset('images/pn61.jpg') },
      { label: 'Dining Area', url: asset('images/pn62.jpg') }
    ],
    target: 'For Working professional',
    gender: 'Unisex',
    genderIcon: asset('images/unisex.png'),
    status: '50% Occupied',
    badge: '🏢 Co-Living',
    price: '₹8,000',
    distance: 'Sector 126, Near HCL',
    sharing: {
      single: '₹14,500/mo',
      double: '₹10,000/mo',
      triple: '₹8,000/mo'
    },
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN007',
    title: 'PN007-Armaan PG',
    href: '#house-7',
    image: asset('images/pn73.jpg'),
    gallery: [
      { label: 'Bedroom', url: asset('images/pn73.jpg') },
      { label: 'Washroom', url: asset('images/pn71.jpg') },
      { label: 'Living Room', url: asset('images/pn72.jpg') }
    ],
    target: 'For Working professional',
    gender: 'Girls',
    genderIcon: asset('images/woman.png'),
    status: '80% Occupied',
    badge: '⭐ Top Rated Girls PG',
    price: '₹9,000',
    distance: 'Sector 125, 24x7 Female Warden',
    sharing: {
      single: '₹15,500/mo',
      double: '₹11,000/mo',
      triple: '₹9,000/mo'
    },
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN008',
    title: 'PN008-Arpit PG',
    href: '#house-8',
    image: asset('images/pn89.JPG'),
    gallery: [
      { label: 'Bedroom', url: asset('images/pn89.JPG') },
      { label: 'Washroom', url: asset('images/pn82.JPG') },
      { label: 'Corridor', url: asset('images/pn83.JPG') }
    ],
    target: 'For Working professional',
    gender: 'Boys',
    genderIcon: asset('images/man.png'),
    status: '100% Occupied',
    badge: '🔒 Fully Booked',
    price: '₹8,500',
    distance: 'Near Raipur Khadar, Sector 126',
    sharing: {
      single: '₹15,000/mo',
      double: '₹10,500/mo',
      triple: '₹8,500/mo'
    },
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN009',
    title: 'PN009-The Nest Homes',
    href: '#house-9',
    image: asset('images/pn92.webp'),
    gallery: [
      { label: 'Bedroom', url: asset('images/pn92.webp') },
      { label: 'Washroom', url: asset('images/pn91.webp') },
      { label: 'Common Area', url: asset('images/gallery2.jpg') }
    ],
    target: 'For Working professional',
    gender: 'Boys',
    genderIcon: asset('images/man.png'),
    status: '90% Occupied',
    badge: '🔥 Only 1 Bed Left',
    price: '₹9,000',
    distance: '5 min walk from Metro Sector 125',
    sharing: {
      single: '₹16,000/mo',
      double: '₹11,000/mo',
      triple: '₹9,000/mo'
    },
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN010',
    title: 'PN0010-Coming Soon',
    href: '#house-10',
    image: asset('images/soon.jpg'),
    gallery: [
      { label: 'Preview', url: asset('images/soon.jpg') }
    ],
    target: 'Coming Soon',
    gender: 'Fully Ac',
    genderIcon: asset('images/ac.png'),
    status: 'Coming Soon',
    badge: '🚀 Upcoming 2026',
    price: 'TBD',
    distance: 'Upcoming Project Sector 128',
    sharing: {
      single: 'Call for info',
      double: 'Call for info',
      triple: 'Call for info'
    },
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  }
];
