import heroCakeImg from '../assets/images/hero_korean_strawberry_cake_1791044876223.jpg';
import introSpreadImg from '../assets/images/intro_about_bakery_spread_1791044895730.jpg';
import bingsuMangoStrawberryImg from '../assets/images/bingsu_mango_strawberry_1791044911118.jpg';
import bakeryBreadsImg from '../assets/images/bakery_korean_breads_1791044926878.jpg';
import dessertPastryImg from '../assets/images/dessert_editorial_pastry_1791044943170.jpg';
import coffeePairingImg from '../assets/images/coffee_latte_pairing_1791044957882.jpg';
import bingsuChocolateCoffeeImg from '../assets/images/signature_chocolate_coffee_bingsu_1791044972364.jpg';
import ctaFloralSweetImg from '../assets/images/cta_pastel_floral_sweet_1791044987085.jpg';

export interface MenuItem {
  id: string;
  name: string;
  category: 'Bakery' | 'Desserts' | 'Bingsu' | 'Coffee' | 'Drinks';
  categoryLabel: string;
  shortDescription: string;
  detailedNote: string;
  availabilityText: 'Ver en tienda' | 'Consultar disponibilidad';
  image: string;
  imageAlt: string;
  pairingSuggestion?: string;
}

export interface SignatureCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  targetCategory: 'Bakery' | 'Desserts' | 'Bingsu' | 'Coffee';
  image: string;
  imageAlt: string;
}

export interface OpeningHourEntry {
  day: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday, etc.
  hours: string;
  openHour24: number;
  closeHour24: number;
}

export const IMAGES = {
  heroCake: heroCakeImg,
  introSpread: introSpreadImg,
  bingsuMangoStrawberry: bingsuMangoStrawberryImg,
  bakeryBreads: bakeryBreadsImg,
  dessertPastry: dessertPastryImg,
  coffeePairing: coffeePairingImg,
  bingsuChocolateCoffee: bingsuChocolateCoffeeImg,
  ctaFloralSweet: ctaFloralSweetImg,
} as const;

export const BUSINESS_INFO = {
  name: 'Baking Story',
  instagramHandle: '@bakingstory.mx',
  instagramUrl: 'https://www.instagram.com/bakingstory.mx/?hl=en',
  streetAddress: 'Praga 58',
  neighborhood: 'Juárez, Cuauhtémoc',
  postalAndCity: '06600 Ciudad de México, CDMX',
  country: 'Mexico',
  fullAddress: 'Praga 58, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico',
  phoneDisplay: '+52 55 2305 9227',
  phoneTel: 'tel:+525523059227',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Praga+58%2C+Ju%C3%A1rez%2C+Cuauht%C3%A9moc%2C+06600+Ciudad+de+M%C3%A9xico%2C+CDMX%2C+Mexico',
};

export const OPENING_HOURS: OpeningHourEntry[] = [
  { day: 'Monday', dayIndex: 1, hours: '9:00 AM – 8:00 PM', openHour24: 9, closeHour24: 20 },
  { day: 'Tuesday', dayIndex: 2, hours: '9:00 AM – 8:00 PM', openHour24: 9, closeHour24: 20 },
  { day: 'Wednesday', dayIndex: 3, hours: '9:00 AM – 8:00 PM', openHour24: 9, closeHour24: 20 },
  { day: 'Thursday', dayIndex: 4, hours: '9:00 AM – 8:00 PM', openHour24: 9, closeHour24: 20 },
  { day: 'Friday', dayIndex: 5, hours: '9:00 AM – 8:00 PM', openHour24: 9, closeHour24: 20 },
  { day: 'Saturday', dayIndex: 6, hours: '9:00 AM – 9:00 PM', openHour24: 9, closeHour24: 21 },
  { day: 'Sunday', dayIndex: 0, hours: '9:00 AM – 7:00 PM', openHour24: 9, closeHour24: 19 },
];

export const FEATURE_HIGHLIGHTS = [
  {
    index: '01',
    title: 'Korean Bakery',
    description: 'Light, soft and beautifully presented bakery favorites.',
    targetSection: '#bakery',
  },
  {
    index: '02',
    title: 'Desserts',
    description: 'Sweet creations made for slow moments and special treats.',
    targetSection: '#desserts',
  },
  {
    index: '03',
    title: 'Bingsu & Coffee',
    description: 'Refreshing desserts and carefully prepared café favorites.',
    targetSection: '#bingsu',
  },
] as const;

export const SIGNATURE_FAVORITES: SignatureCard[] = [
  {
    id: 'sig-korean-bakery',
    title: 'Korean-Style Bakery',
    subtitle: 'Soft Breads & Pan Dulce',
    description:
      'Lighter, less-sweet bakery selections and savory-sweet breads including cheese and corn varieties.',
    targetCategory: 'Bakery',
    image: IMAGES.bakeryBreads,
    imageAlt: 'Selection of soft Korean-style bakery breads on a warm ceramic platter',
  },
  {
    id: 'sig-bingsu',
    title: 'Refreshing Bingsu',
    subtitle: 'Shaved Ice Dessert',
    description:
      'Delicate, fluffy Korean-style shaved ice desserts offered in flavors including mango, strawberry, coffee and chocolate.',
    targetCategory: 'Bingsu',
    image: IMAGES.bingsuMangoStrawberry,
    imageAlt: 'Korean bingsu dessert topped with fresh mango and strawberries in a ceramic bowl',
  },
  {
    id: 'sig-desserts-cakes',
    title: 'Cakes & Sweet Treats',
    subtitle: 'Patisserie & Café',
    description:
      'Cream-topped cakes, individual desserts and pastries prepared to enjoy in our Juárez café or share at home.',
    targetCategory: 'Desserts',
    image: IMAGES.heroCake,
    imageAlt: 'Korean-style cream cake topped with strawberries on a ceramic plate',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'bakery-cheese-corn',
    name: 'Cheese & Corn Bread',
    category: 'Bakery',
    categoryLabel: 'Korean Bakery',
    shortDescription:
      'Soft Korean-style savory-sweet bread balancing mild cheese and sweet corn notes in a light crumb.',
    detailedNote:
      'Part of our Korean-style bakery selection in Juárez. Selection rotates throughout the day; visit us in store to see today’s tray.',
    availabilityText: 'Consultar disponibilidad',
    image: IMAGES.bakeryBreads,
    imageAlt: 'Soft Korean-style cheese and corn bread on a warm ivory plate',
    pairingSuggestion: 'Pairs wonderfully with a hot café beverage.',
  },
  {
    id: 'bakery-soft-buns',
    name: 'Korean-Style Soft Breads',
    category: 'Bakery',
    categoryLabel: 'Korean Bakery',
    shortDescription:
      'Lighter, less-sweet bakery rolls and pan dulce inspired by Korean bakery traditions.',
    detailedNote:
      'A rotating selection of soft bakery loaves, buns and sweet breads available at our Praga 58 counter.',
    availabilityText: 'Ver en tienda',
    image: IMAGES.introSpread,
    imageAlt: 'Assortment of soft Korean-style bakery buns and rolls on a table',
    pairingSuggestion: 'Enjoy warm or alongside an afternoon coffee.',
  },
  {
    id: 'dessert-cream-cake',
    name: 'Fresh Cream & Fruit Cake',
    category: 'Desserts',
    categoryLabel: 'Desserts',
    shortDescription:
      'Delicate sponge layered with light cream and seasonal fruit presentation for celebrations or quiet café moments.',
    detailedNote:
      'Available in individual slices or whole formats depending on daily showcase availability at Baking Story.',
    availabilityText: 'Consultar disponibilidad',
    image: IMAGES.heroCake,
    imageAlt: 'Korean-style cream cake topped with ripe strawberries',
    pairingSuggestion: 'Ideal for sharing or pairing with hot coffee.',
  },
  {
    id: 'dessert-patisserie-selection',
    name: 'Café Pastries & Sweet Slices',
    category: 'Desserts',
    categoryLabel: 'Desserts',
    shortDescription:
      'Individual dessert creations, layered slices and cream pastries from our display case.',
    detailedNote:
      'Explore our dessert showcase in store for current seasonal slices, cookies and sweet bites.',
    availabilityText: 'Ver en tienda',
    image: IMAGES.dessertPastry,
    imageAlt: 'Layered cake slice and cream pastry on a ceramic dessert plate',
    pairingSuggestion: 'Designed for an unhurried pause in Juárez.',
  },
  {
    id: 'dessert-petits-fours',
    name: 'Baked Cookies & Sweet Bites',
    category: 'Desserts',
    categoryLabel: 'Desserts',
    shortDescription:
      'Small-batch baked sweets and delicate cookies to accompany your drink or take home.',
    detailedNote:
      'Please check our counter display at Praga 58 for the day’s baked cookie and pastry varieties.',
    availabilityText: 'Ver en tienda',
    image: IMAGES.ctaFloralSweet,
    imageAlt: 'Delicate baked cookies and petits fours on a ceramic pedestal plate',
  },
  {
    id: 'bingsu-mango',
    name: 'Mango Bingsu',
    category: 'Bingsu',
    categoryLabel: 'Bingsu',
    shortDescription:
      'Fluffy, finely shaved milk ice topped with sweet mango for a cold and refreshing dessert experience.',
    detailedNote:
      'One of the signature Korean-inspired shaved ice flavors at Baking Story, prepared to order for enjoying in the café.',
    availabilityText: 'Consultar disponibilidad',
    image: IMAGES.bingsuMangoStrawberry,
    imageAlt: 'Mango and fruit bingsu shaved ice dessert in a matte ceramic bowl',
    pairingSuggestion: 'Refreshing for warm afternoons in Mexico City.',
  },
  {
    id: 'bingsu-strawberry',
    name: 'Strawberry Bingsu',
    category: 'Bingsu',
    categoryLabel: 'Bingsu',
    shortDescription:
      'Creamy shaved ice dessert served with bright strawberry toppings and delicate sweetness.',
    detailedNote:
      'Prepared fresh in store. Ask our team at the counter about seasonal fruit availability.',
    availabilityText: 'Consultar disponibilidad',
    image: IMAGES.bingsuMangoStrawberry,
    imageAlt: 'Strawberry bingsu shaved ice dessert in a ceramic bowl',
  },
  {
    id: 'bingsu-coffee-chocolate',
    name: 'Chocolate & Coffee Bingsu',
    category: 'Bingsu',
    categoryLabel: 'Bingsu',
    shortDescription:
      'Rich cocoa and coffee notes over finely shaved milk ice for those who love deeper dessert flavors.',
    detailedNote:
      'Available in chocolate or coffee profiles; check in store for current bingsu menu options.',
    availabilityText: 'Ver en tienda',
    image: IMAGES.bingsuChocolateCoffee,
    imageAlt: 'Chocolate and coffee Korean bingsu dessert topped with cocoa and whipped cream',
  },
  {
    id: 'coffee-espresso-bar',
    name: 'Café & Espresso Favorites',
    category: 'Coffee',
    categoryLabel: 'Coffee',
    shortDescription:
      'Carefully prepared hot and iced coffee drinks crafted to complement our breads and desserts.',
    detailedNote:
      'Visit our café bar at Praga 58 to view the full board of hot and iced espresso preparations.',
    availabilityText: 'Ver en tienda',
    image: IMAGES.coffeePairing,
    imageAlt: 'Hot cappuccino and iced latte in ceramic cups alongside a golden pastry',
    pairingSuggestion: 'Balanced to accompany lighter Korean breads and cream cakes.',
  },
  {
    id: 'drinks-iced-refreshers',
    name: 'Cold Café Drinks & Refreshers',
    category: 'Drinks',
    categoryLabel: 'Drinks',
    shortDescription:
      'Chilled café beverages and house drinks served over ice for a relaxing break in Juárez.',
    detailedNote:
      'Full beverage selection and seasonal cold drinks are listed on our in-store menu board.',
    availabilityText: 'Ver en tienda',
    image: IMAGES.coffeePairing,
    imageAlt: 'Iced café beverage served on a warm wooden table',
  },
];
