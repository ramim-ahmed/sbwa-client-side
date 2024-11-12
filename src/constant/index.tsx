import { IEvents, IFeature, INavItems } from "@/types";
import {
  Users, Heart, GraduationCap, Handshake,
  Music, Globe, Home, Activity,
} from 'lucide-react';



export const navItems: INavItems[] = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "About",
    path: "/about"
  },
  {
    label: "News",
    path: "/news"
  },
  {
    label: "Features",
    path: "/features"
  },
  {
    label: "Gallery",
    path: "/gallery"
  },
  {
    label: "Events",
    path: "/events"
  },
  {
    label: "Contact",
    path: "/contact"
  }
]



export const newsData = [
  {
    id: 1,
    title: "Annual Bengali New Year Festival 2024",
    date: "April 14, 2024",
    category: "Cultural Event",
    location: "Edinburgh City Center",
    description: "Join us for Pohela Boishakh celebrations featuring traditional Bengali music, dance performances, and authentic cuisine. Special performances by local artists and community members.",
    image: "/images/n_1.jpg",
    tags: ["Cultural", "Festival", "Community"]
  },
  {
    id: 2,
    title: "Emergency Support Fund for Recent Immigrants",
    date: "March 25, 2024",
    category: "Welfare",
    location: "SBWA Office, Glasgow",
    description: "SBWA launches new support fund to assist recent Bangladesh immigrants with housing and essential needs. Applications now open for eligible families.",
    image: "/images/n_2.jpg",
    tags: ["Welfare", "Support", "Immigration"]
  },
  {
    id: 3,
    title: "Free Health Check-up Camp",
    date: "May 5, 2024",
    category: "Healthcare",
    location: "Community Center, Aberdeen",
    description: "SBWA is organizing a free health check-up camp in collaboration with NHS Scotland. Services include basic health screening, dental check-ups, and mental health consultations.",
    image: "/images/n_3.jpg",
    tags: ["Healthcare", "Community", "Wellbeing"]
  },
  {
    id: 4,
    title: "Scottish-Bengali Cultural Exchange Program",
    date: "June 15, 2024",
    category: "Education",
    location: "University of Edinburgh",
    description: "A month-long program showcasing the rich cultural heritage of both Scotland and Bangladesh. Features workshops, exhibitions, and interactive sessions.",
    image: "/images/leadership-bg.jpg",
    tags: ["Education", "Cultural", "Exchange"]
  }
];



export const features: IFeature[] = [
  {
    id: 1,
    title: "Community Integration Support",
    description: "Helping Bengali immigrants seamlessly integrate into Scottish society while preserving their cultural identity.",
    icon: <Users className="w-10 h-10 text-red-600" />,
    category: 'community',
    benefits: [
      "Welcome packages for new arrivals",
      "Cultural orientation programs",
      "Language support services",
      "Local system navigation assistance"
    ]
  },
  {
    id: 2,
    title: "Health & Wellbeing Services",
    description: "Comprehensive health support services in partnership with NHS Scotland and local healthcare providers.",
    icon: <Heart className="w-10 h-10 text-red-600" />,
    category: 'welfare',
    benefits: [
      "Regular health camps",
      "Mental health support",
      "Elder care services",
      "Health awareness workshops"
    ]
  },
  {
    id: 3,
    title: "Educational Support",
    description: "Empowering community members through education and skill development programs.",
    icon: <GraduationCap className="w-10 h-10 text-red-600" />,
    category: 'education',
    benefits: [
      "Scholarship programs",
      "After-school tutoring",
      "Career guidance",
      "Professional development workshops"
    ]
  },
  {
    id: 4,
    title: "Cultural Programs",
    description: "Celebrating and preserving Bengali culture while embracing Scottish traditions.",
    icon: <Music className="w-10 h-10 text-red-600" />,
    category: 'cultural',
    benefits: [
      "Festival celebrations",
      "Cultural exchange events",
      "Art & music workshops",
      "Traditional dance classes"
    ]
  },
  {
    id: 5,
    title: "Immigration Advisory",
    description: "Professional guidance on immigration matters and settlement services.",
    icon: <Globe className="w-10 h-10 text-red-600" />,
    category: 'welfare',
    benefits: [
      "Visa application support",
      "Legal consultation referrals",
      "Document verification assistance",
      "Settlement guidance"
    ]
  },
  {
    id: 6,
    title: "Housing Support",
    description: "Assistance with housing matters and accommodation guidance for community members.",
    icon: <Home className="w-10 h-10 text-red-600" />,
    category: 'welfare',
    benefits: [
      "Housing search assistance",
      "Tenant rights education",
      "Emergency accommodation support",
      "Rental guidance"
    ]
  },
  {
    id: 7,
    title: "Youth Development",
    description: "Programs focused on nurturing and developing young community members.",
    icon: <Activity className="w-10 h-10 text-red-600" />,
    category: 'education',
    benefits: [
      "Sports activities",
      "Leadership programs",
      "Cultural workshops",
      "Academic support"
    ]
  },
  {
    id: 8,
    title: "Business Network",
    description: "Supporting and connecting Bengali-Scottish businesses and entrepreneurs.",
    icon: <Handshake className="w-10 h-10 text-red-600" />,
    category: 'community',
    benefits: [
      "Networking events",
      "Business mentorship",
      "Start-up guidance",
      "Trade connections"
    ]
  }
];


export const events: IEvents[] = [
  {
    title: 'Annual Charity Gala',
    date: '2023-11-05',
    location: 'Glasgow, Scotland',
    description: 'Join us for our annual fundraising gala to support the Scottish Bangladesh community.',
    image: '/images/charity.jpg'
  },
  {
    title: 'Cultural Food Festival',
    date: '2023-10-12',
    location: 'Edinburgh, Scotland',
    description: 'Experience the flavors of Bangladesh at our vibrant food festival.',
    image: '/images/e_1.jpg'
  },
  {
    title: 'Youth Empowerment Workshop',
    date: '2023-09-20',
    location: 'Dundee, Scotland',
    description: 'A workshop to inspire and empower the next generation of Scottish Bangladeshi leaders.',
    image: '/images/e_2.jpg'
  }
];



export const upcomingEvents: IEvents[] = [
  {
    title: 'Bangladeshi New Year Celebration',
    date: '2024-11-14',
    location: 'Aberdeen, Scotland',
    description: 'Join us as we welcome the Bangladeshi New Year with music, dance, and traditional festivities.',
    image: '/images/e_3.jpg'
  },
  {
    title: 'Educational Scholarship Program',
    date: '2024-11-28',
    location: 'Glasgow, Scotland',
    description: 'Apply now for our annual educational scholarship program to support Bangladeshi students in Scotland.',
    image: '/images/e_4.jpg'
  },
  {
    title: 'Community Health Fair',
    date: '2024-12-25',
    location: 'Edinburgh, Scotland',
    description: 'Free health screenings, workshops, and consultations for the Scottish Bangladeshi community.',
    image: '/images/g_1.jpg'
  }
];
