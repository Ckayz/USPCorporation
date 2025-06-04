export type Service = {
  id: number;
  title: string;
  description: string;
  items: string[];
  category: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "DOSH @ JKKP SHE Services",
    description: "Comprehensive safety, health, and environmental consulting services to ensure compliance with Malaysian regulations.",
    items: [
      "SHE consulting and risk assessments (CHRA, PMA, PMD)",
      "Noise monitoring and assessment",
      "Local Exhaust Ventilation (LEV) testing",
      "ISO and first-aid training programs",
      "Non-destructive testing (ultrasound, dye test)",
      "DOE reporting and environmental monitoring"
    ],
    category: "SHE"
  },
  {
    id: 2,
    title: "Industrial Equipment Supply",
    description: "High-quality industrial equipment solutions with integrated safety support and consulting.",
    items: [
      "Elevators and goods hoists installation",
      "Crane systems and dumbwaiters",
      "Forklift supply and maintenance",
      "Compressor systems",
      "Integrated SHE support and consulting",
      "Equipment safety certification"
    ],
    category: "Equipment"
  },
  {
    id: 3,
    title: "Construction & Renovation Works",
    description: "Professional construction and renovation services for industrial, commercial, and residential properties.",
    items: [
      "Factory construction and renovation",
      "Office space renovation",
      "Kitchen facilities construction",
      "Home renovation services",
      "Earthworks and reservoir construction",
      "Landscaping and electrical wiring"
    ],
    category: "Construction"
  },
  {
    id: 4,
    title: "ISO, MS, OHSAS Consulting",
    description: "Expert consulting services to help organizations achieve and maintain international standards compliance.",
    items: [
      "ISO 9001 Quality Management Systems",
      "ISO 14001 Environmental Management",
      "ISO 22000 Food Safety Management",
      "MS 1722 Occupational Safety and Health",
      "OHSAS 18001 compliance",
      "Productivity and safety system improvement"
    ],
    category: "Consulting"
  },
  {
    id: 5,
    title: "Due Diligence & M&A Support",
    description: "Comprehensive due diligence services to support mergers, acquisitions, and partnerships.",
    items: [
      "Risk analysis and assessment",
      "Financial normalization",
      "Hidden cost identification",
      "Support for acquisitions",
      "Partnership development",
      "Buyout facilitation and advisory"
    ],
    category: "Consulting"
  }
];

export const serviceCategories = [
  { id: "all", name: "All Services" },
  { id: "SHE", name: "SHE Services" },
  { id: "Equipment", name: "Equipment" },
  { id: "Construction", name: "Construction" },
  { id: "Consulting", name: "Consulting" }
];