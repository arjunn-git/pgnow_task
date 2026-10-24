import { asset } from '../utils/asset';

// Mock database for PG accommodation properties near Amity University, Noida
export const properties = [
  {
    id: 'PN001',
    title: 'PN001-Sunshine Homes',
    href: '#house-1',
    image: asset('images/gallery2.jpg'),
    target: 'For Student',
    gender: 'Boys',
    genderIcon: asset('images/man.png'),
    status: 'Booking Open',
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN002',
    title: 'PN002-Sunshine Plus',
    href: '#house-2',
    image: asset('images/pn23.jpg'),
    target: 'For Student',
    gender: 'Boys',
    genderIcon: asset('images/man.png'),
    status: 'Booking Open',
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN003',
    title: 'PN003-The Roof',
    href: '#house-3',
    image: asset('images/pn341.JPG'),
    target: 'For Working professional',
    gender: 'Boys',
    genderIcon: asset('images/man.png'),
    status: '100% Occupied',
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN004',
    title: 'PN004-The Crown Heights',
    href: '#house-4',
    image: asset('images/pn41.jpg'),
    target: 'For Student',
    gender: 'Boys',
    genderIcon: asset('images/man.png'),
    status: 'Booking Open',
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN005',
    title: 'PN005-The Crown Heights',
    href: '#house-5',
    image: asset('images/pn55.jpg'),
    target: 'For Student',
    gender: 'Girls',
    genderIcon: asset('images/woman.png'),
    status: 'Booking Open',
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN006',
    title: 'PN006-Shree PG',
    href: '#house-6',
    image: asset('images/pn65.jpg'),
    target: 'For Working professional',
    gender: 'Unisex',
    genderIcon: asset('images/unisex.png'),
    status: '50% Occupied',
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN007',
    title: 'PN007-Armaan PG',
    href: '#house-7',
    image: asset('images/pn73.jpg'),
    target: 'For Working professional',
    gender: 'Girls',
    genderIcon: asset('images/woman.png'),
    status: '80% Occupied',
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN008',
    title: 'PN008-Arpit PG',
    href: '#house-8',
    image: asset('images/pn89.JPG'),
    target: 'For Working professional',
    gender: 'Boys',
    genderIcon: asset('images/man.png'),
    status: '100% Occupied',
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN009',
    title: 'PN009-The Nest Homes',
    href: '#house-9',
    image: asset('images/pn92.webp'),
    target: 'For Working professional',
    gender: 'Boys',
    genderIcon: asset('images/man.png'),
    status: '90% Occupied',
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  },
  {
    id: 'PN010',
    title: 'PN0010-Coming Soon',
    href: '#house-10',
    image: asset('images/soon.jpg'),
    target: 'Coming Soon',
    gender: 'Fully Ac',
    genderIcon: asset('images/ac.png'),
    status: 'Coming Soon',
    amenities: ['Fully Ac', '24*7 Power', 'Feel Like Home', 'Free WIFI', 'R.O. Water', 'Parking']
  }
];
