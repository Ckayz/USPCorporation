export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Passenger Lift & Home Lift",
    description: "Safe and reliable passenger elevators for residential and commercial buildings, designed for smooth operation and energy efficiency.",
    image: "https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Elevators"
  },
  {
    id: 2,
    title: "Dumbwaiter & Document Lift",
    description: "Small service elevators designed for transporting food, documents, and small items between floors efficiently.",
    image: "https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Elevators"
  },
  {
    id: 3,
    title: "Hoist Unit & Goods Hoist",
    description: "Industrial hoisting systems for efficient vertical transportation of heavy goods and materials in warehouses and factories.",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Hoists"
  },
  {
    id: 4,
    title: "Car Lift & Hospital Lift",
    description: "Specialized elevators for vehicles and hospital environments, designed with enhanced safety features and smooth operation.",
    image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Elevators"
  },
  {
    id: 5,
    title: "Cargo Lift",
    description: "Heavy-duty elevators designed for industrial environments to transport large and heavy cargo between floors.",
    image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Hoists"
  },
  {
    id: 6,
    title: "Scissors Lift",
    description: "Versatile lifting platforms that extend vertically for maintenance, construction, and warehouse applications.",
    image: "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Lifts"
  },
  {
    id: 7,
    title: "Lifting & Handling Tools",
    description: "Comprehensive range of tools and equipment for safe and efficient material handling in industrial environments.",
    image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Tools"
  },
  {
    id: 8,
    title: "Renovation Equipment",
    description: "Specialized equipment for construction and renovation projects, designed for efficiency and safety on the job site.",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Equipment"
  }
];

export const productCategories = [
  { id: "all", name: "All Products" },
  { id: "Elevators", name: "Elevators" },
  { id: "Hoists", name: "Hoists" },
  { id: "Lifts", name: "Lifts" },
  { id: "Tools", name: "Tools" },
  { id: "Equipment", name: "Equipment" }
];