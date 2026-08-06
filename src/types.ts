export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  popularPlaces?: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BusinessContact {
  name: string;
  tagline: string;
  ownerTitle: string;
  address: {
    street: string;
    area: string;
    city: string;
    pincode: string;
    full: string;
  };
  phones: string[];
  primaryWhatsApp: string;
  instagramUrl: string;
  facebookUrl: string;
  googleMapsDirectionsUrl: string;
}

export const BUSINESS_INFO: BusinessContact = {
  name: "Mahi Travels Mangalore",
  tagline: "Travel Comfortably, Travel Safely with Mahi Travels",
  ownerTitle: "Independent Luxury Travel Partner",
  address: {
    street: "D Andakkeri Road",
    area: "Yeyyady",
    city: "Mangalore",
    pincode: "575008",
    full: "D Andakkeri Road, Yeyyady, Mangalore – 575008"
  },
  phones: ["7892102346", "8050307382"],
  primaryWhatsApp: "7892102346",
  instagramUrl: "https://www.instagram.com/mahitravelsmangalore",
  facebookUrl: "https://www.facebook.com/share/1F1gqcwbbV/",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=D+Andakkeri+Road+Yeyyady+Mangalore+575008"
};
