import { ServiceItem, FeatureItem, BUSINESS_INFO } from './types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'airport-transfer',
    title: 'Airport Pickup & Drop',
    shortDescription: 'Punctual and hassle-free transfers to and from Mangalore International Airport (IXE) with luggage assistance.',
    fullDescription: 'Experience stress-free transfers to Mangalore Airport. Punctual arrivals, flight tracking, and courteous assistance to ensure you never miss a flight or wait after landing.',
    iconName: 'PlaneTakeoff',
    popularPlaces: ['Mangalore Airport (IXE)', 'City Hotels', 'Udupi Connection', 'Railway Stations']
  },
  {
    id: 'local-taxi',
    title: 'Local Taxi Service',
    shortDescription: 'Comfortable point-to-point rides, shopping trips, city commutes, and daily errands across Mangalore.',
    fullDescription: 'Smooth local city travel across Mangalore including Hampankatta, Kadri, Bejai, Pandeshwar, Surathkal, and Panambur Beach.',
    iconName: 'Car',
    popularPlaces: ['Panambur Beach', 'Tannirbhavi', 'Kudroli Temple', 'Forum Fiza Mall', 'City Centre']
  },
  {
    id: 'outstation-trips',
    title: 'Outstation Trips',
    shortDescription: 'Reliable long-distance travel to Bangalore, Mysore, Coorg, Wayanad, Goa, Chikmagalur, and beyond.',
    fullDescription: 'Comfortable intercity journeys across Karnataka, Kerala, and Goa with an experienced driver who knows the highway routes inside out.',
    iconName: 'MapPin',
    popularPlaces: ['Bangalore', 'Coorg (Madikeri)', 'Chikmagalur', 'Udupi & Kundapura', 'Goa', 'Mysore']
  },
  {
    id: 'family-tours',
    title: 'Family Tours',
    shortDescription: 'Tailored multi-day sightseeing trips for families, offering maximum comfort, safety, and flexible stops.',
    fullDescription: 'Enjoy quality time with family while we handle driving, navigation, and parking. Custom itineraries built around your family’s pace.',
    iconName: 'Users',
    popularPlaces: ['Coastal Karnataka Circuit', 'Hill Station Retreats', 'Heritage Sites']
  },
  {
    id: 'temple-visits',
    title: 'Temple Visits',
    shortDescription: 'Dedicated pilgrimage travel to coastal Karnataka’s renowned holy shrines with respectful, punctual service.',
    fullDescription: 'Pilgrimage trips covering sacred temples with timely morning/evening darshan schedules and comfortable seating for elders.',
    iconName: 'Building2',
    popularPlaces: ['Kukke Subramanya', 'Dharmasthala', 'Kateel Durgaparameshwari', 'Udupi Sri Krishna Temple', 'Murudeshwar', 'Horanadu & Sringeri']
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel',
    shortDescription: 'Professional, quiet, and punctual travel solutions for executive meetings, business clients, and official visits.',
    fullDescription: 'Impeccable executive transport for business delegates visiting IT parks, industrial zones, or hotel conferences in Mangalore.',
    iconName: 'Briefcase',
    popularPlaces: ['Yeyyady IT Park', 'Special Economic Zone', 'Port Trust Area', 'Business Hotels']
  },
  {
    id: 'weekend-getaways',
    title: 'Weekend Getaways',
    shortDescription: 'Quick weekend escape trips to scenic beaches, waterfalls, tea estates, and Western Ghats viewpoints.',
    fullDescription: 'Unwind on weekends with curated road trips to Malpe, Agumbe sunset point, Bekal Fort, or Sakleshpur lush greenery.',
    iconName: 'Compass',
    popularPlaces: ['Agumbe Ghats', 'Malpe St. Mary’s Island', 'Bekal Fort', 'Charmadi Ghats']
  },
  {
    id: 'tourist-packages',
    title: 'Tourist Packages',
    shortDescription: 'Comprehensive regional tour itineraries covering beaches, backwaters, historic forts, and local seafood spots.',
    fullDescription: 'Discover the rich culture, cuisine, and natural beauty of Tulunadu with a passionate local host and guide at the wheel.',
    iconName: 'Palmtree',
    popularPlaces: ['Mangalore City Sightseeing', 'Udupi Coastal Belt', 'Coorg Nature Trail']
  },
  {
    id: 'custom-travel-plans',
    title: 'Custom Travel Plans',
    shortDescription: 'Personalized routes designed strictly around your schedule, preferred stops, and specific travel desires.',
    fullDescription: 'Have a unique route in mind? Share your itinerary or destination list, and we will tailor a seamless travel plan just for you.',
    iconName: 'Sliders',
    popularPlaces: ['Flexible Route', 'Multi-City Stopovers', 'Event & Wedding Transport']
  }
];

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    id: 'safe-driving',
    title: 'Safe Driving',
    description: 'Experienced, defensive driver focused on highway safety, smooth braking, and passenger security.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'clean-vehicle',
    title: 'Clean Vehicle',
    description: 'Immaculately sanitized, fresh-smelling, well-maintained vehicle for every single journey.',
    iconName: 'Sparkles'
  },
  {
    id: 'affordable-pricing',
    title: 'Affordable Service',
    description: 'Transparent, reasonable travel rates with complete value for money and no hidden charges.',
    iconName: 'Wallet'
  },
  {
    id: 'on-time-pickup',
    title: 'On-Time Pickup',
    description: 'Punctuality guaranteed. We arrive early so you never have to worry about travel delays.',
    iconName: 'Clock'
  },
  {
    id: 'friendly-service',
    title: 'Friendly Service',
    description: 'Courteous, helpful, and respectful demeanor ensuring a pleasant atmosphere throughout.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'comfortable-journey',
    title: 'Comfortable Journey',
    description: 'Relaxed seating, working air conditioning, smooth suspension, and comfortable driving pace.',
    iconName: 'Smile'
  },
  {
    id: 'reliable-travel',
    title: 'Reliable Travel',
    description: 'A dependable local partner in Mangalore you can trust for early morning or late night pickups.',
    iconName: 'Award'
  },
  {
    id: 'direct-support',
    title: 'Direct Booking Support',
    description: 'Reach out directly via Call or WhatsApp for instant ride quotes and route inquiries.',
    iconName: 'PhoneCall'
  }
];

export function getWhatsAppLink(customMessage?: string): string {
  const phone = BUSINESS_INFO.primaryWhatsApp;
  const message = customMessage || `Hello Mahi Travels, I would like to inquire about booking a trip in Mangalore.`;
  return `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
}

export function getCallLink(phone?: string): string {
  const targetPhone = phone || BUSINESS_INFO.phones[0];
  return `tel:${targetPhone}`;
}
