import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://squarespace.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet',
    title: 'Saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    icon: 'fas fa-tree',
    title: 'Endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    icon: 'fas fa-socks',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

export const tours = [
  {
    id: 1,
    title: 'Tibet Adventure',
    img: tour1,
    date: 'August 26th, 2020',
    location: 'China',
    duration: '6 days',
    price: '$2100',
  },
  {
    id: 2,
    title: 'Best of Java',
    img: tour2,
    date: 'October 1st, 2020',
    location: 'Indonesia',
    duration: '5 days',
    price: '$1800',
  },
  {
    id: 3,
    title: 'Explore Hong Kong',
    img: tour3,
    date: 'September 15th, 2020',
    location: 'China',
    duration: '4 days',
    price: '$1500',
  },
  {
    id: 4,
    title: 'Kenya Highlights',
    img: tour4,
    date: 'December 5th, 2019',
    location: 'Kenya',
    duration: '3 days',
    price: '$1200',
  },
  {
    id: 5,
    title: 'Hawaii Trekking',
    img: tour5,
    date: 'July 10th, 2020',
    location: 'Hawaii',
    duration: '2 days',
    price: '$1000',
  },
  {
    id: 6,
    title: 'Cultural Immersion',
    img: tour6,
    date: 'January 20th, 2021',
    location: 'India',
    duration: '7 days',
    price: '$8000',
  },
];
