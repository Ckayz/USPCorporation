export type Project = {
  id: number;
  title: string;
  client: string;
  location: string;
  category: string;
  image: string;
  industry: string;
  startDate: string;
  endDate: string;
  scope: string[];
  specifications?: {
    loadCapacity?: string;
    safetyFeatures?: string[];
    certifications?: string[];
  };
  challenges?: string[];
  solutions?: string[];
  gallery: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Industrial Goods Hoist Installation",
    client: "Malaysian Manufacturing Co.",
    location: "Penang, Malaysia",
    category: "Hoist Install",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    industry: "Manufacturing",
    startDate: "2023-06-15",
    endDate: "2023-08-30",
    scope: [
      "Site assessment and preparation",
      "3-ton goods hoist installation",
      "Safety system implementation",
      "Operator training",
      "Load testing and certification"
    ],
    specifications: {
      loadCapacity: "3000 kg",
      safetyFeatures: [
        "Emergency stop system",
        "Overload protection",
        "Door interlocking mechanism",
        "Audio-visual warning system"
      ],
      certifications: [
        "DOSH certification",
        "ISO 9001:2015",
        "Load test certification"
      ]
    },
    challenges: [
      "Limited installation space",
      "Need for minimal production disruption",
      "Integration with existing systems"
    ],
    solutions: [
      "Custom hoist design to maximize space efficiency",
      "Weekend installation schedule",
      "Advanced control system for seamless integration"
    ],
    gallery: [
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    testimonial: {
      quote: "USP Corporation delivered exceptional results with their goods hoist installation. Their attention to safety and efficiency has significantly improved our operations.",
      author: "Ahmad Zakaria",
      position: "Operations Director"
    }
  },
  {
    id: 2,
    title: "Factory SHE Compliance Upgrade",
    client: "Electro Solutions Bhd",
    location: "Kuala Lumpur, Malaysia",
    category: "SHE Audit",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    industry: "Electronics Manufacturing",
    startDate: "2023-09-01",
    endDate: "2023-10-15",
    scope: [
      "Comprehensive SHE audit",
      "CHRA and noise assessment",
      "LEV testing and optimization",
      "Safety training program implementation",
      "Documentation and reporting"
    ],
    specifications: {
      certifications: [
        "DOSH compliance certification",
        "ISO 45001:2018",
        "Environmental compliance certification"
      ]
    },
    challenges: [
      "Complex manufacturing processes",
      "Multiple hazard sources",
      "Tight regulatory deadlines"
    ],
    solutions: [
      "Systematic audit approach",
      "Advanced monitoring systems",
      "Comprehensive staff training"
    ],
    gallery: [
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    testimonial: {
      quote: "The SHE compliance upgrade by USP Corporation was thorough and professional. They helped us achieve full compliance while improving our safety standards.",
      author: "Sarah Tan",
      position: "EHS Manager"
    }
  },
  {
    id: 3,
    title: "Hospital Elevator Modernization",
    client: "Selangor Medical Center",
    location: "Selangor, Malaysia",
    category: "Elevator Install",
    image: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    industry: "Healthcare",
    startDate: "2023-03-10",
    endDate: "2023-05-20",
    scope: [
      "Assessment of existing elevator systems",
      "Modernization plan development",
      "Installation of new control systems",
      "Energy efficiency upgrades",
      "Safety feature implementation"
    ],
    specifications: {
      loadCapacity: "1600 kg",
      safetyFeatures: [
        "Advanced door sensors",
        "Emergency communication system",
        "Backup power system",
        "Seismic protection"
      ],
      certifications: [
        "DOSH medical facility certification",
        "EN 81-20 compliance",
        "Energy efficiency certification"
      ]
    },
    challenges: [
      "24/7 hospital operations",
      "Critical patient transport requirements",
      "Complex safety regulations"
    ],
    solutions: [
      "Phased implementation strategy",
      "Temporary patient transport solutions",
      "Advanced safety protocols"
    ],
    gallery: [
      "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/127879/pexels-photo-127879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    testimonial: {
      quote: "USP Corporation's elevator modernization has significantly improved our patient transport efficiency and safety. Their understanding of healthcare facility requirements was impressive.",
      author: "Dr. Lee Wei Ming",
      position: "Facility Director"
    }
  },
  {
    id: 4,
    title: "ISO 9001 Implementation",
    client: "Global Logistics Malaysia",
    location: "Kuala Lumpur, Malaysia",
    category: "Consulting",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    industry: "Logistics",
    startDate: "2023-07-01",
    endDate: "2023-12-15",
    scope: [
      "Gap analysis",
      "Process documentation",
      "Quality management system implementation",
      "Staff training",
      "Internal audit preparation"
    ],
    specifications: {
      certifications: [
        "ISO 9001:2015",
        "Quality Management System certification",
        "Internal Auditor certification"
      ]
    },
    challenges: [
      "Complex operational processes",
      "Multiple locations",
      "Resistance to change"
    ],
    solutions: [
      "Customized implementation approach",
      "Digital documentation system",
      "Change management program"
    ],
    gallery: [
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    testimonial: {
      quote: "The ISO 9001 implementation by USP Corporation has transformed our operations. Their systematic approach and expertise made the certification process smooth and valuable.",
      author: "Tan Sri Kumar",
      position: "CEO"
    }
  },
  {
    id: 5,
    title: "Construction Site Safety Audit",
    client: "Pacific Investments Sdn Bhd",
    location: "Johor Bahru, Malaysia",
    category: "SHE Audit",
    image: "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    industry: "Construction",
    startDate: "2023-11-01",
    endDate: "2023-12-31",
    scope: [
      "Site safety assessment",
      "Risk analysis",
      "Safety procedure development",
      "Equipment inspection",
      "Worker safety training"
    ],
    specifications: {
      certifications: [
        "DOSH construction safety certification",
        "OHSAS 18001 compliance",
        "Site safety audit certification"
      ]
    },
    challenges: [
      "Large construction site",
      "Multiple contractors",
      "High-risk activities"
    ],
    solutions: [
      "Comprehensive safety management system",
      "Digital monitoring tools",
      "Regular safety briefings"
    ],
    gallery: [
      "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    testimonial: {
      quote: "USP Corporation's safety audit has significantly improved our site safety standards. Their recommendations were practical and effective.",
      author: "James Wong",
      position: "Project Manager"
    }
  },
  {
    id: 6,
    title: "Cargo Lift System Installation",
    client: "Malaysian Port Authority",
    location: "Port Klang, Malaysia",
    category: "Hoist Install",
    image: "https://images.pexels.com/photos/1427577/pexels-photo-1427577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    industry: "Maritime",
    startDate: "2023-04-15",
    endDate: "2023-07-30",
    scope: [
      "System design and planning",
      "Foundation preparation",
      "Lift system installation",
      "Control system integration",
      "Testing and commissioning"
    ],
    specifications: {
      loadCapacity: "5000 kg",
      safetyFeatures: [
        "Weather-resistant design",
        "Anti-corrosion coating",
        "Wind speed monitoring",
        "Emergency brake system"
      ],
      certifications: [
        "Maritime safety certification",
        "DOSH heavy machinery certification",
        "Environmental protection compliance"
      ]
    },
    challenges: [
      "Coastal environment",
      "Heavy load requirements",
      "Port operation continuity"
    ],
    solutions: [
      "Specialized marine-grade materials",
      "Modular installation approach",
      "Night shift installation"
    ],
    gallery: [
      "https://images.pexels.com/photos/1427577/pexels-photo-1427577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    testimonial: {
      quote: "The cargo lift system installed by USP Corporation has exceeded our expectations in terms of reliability and performance in our challenging marine environment.",
      author: "Capt. Razak bin Abdullah",
      position: "Port Operations Director"
    }
  }
];

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "Hoist Install", name: "Hoist Installation" },
  { id: "Elevator Install", name: "Elevator Installation" },
  { id: "SHE Audit", name: "SHE Audits" },
  { id: "Construction", name: "Construction" },
  { id: "Consulting", name: "Consulting" }
];