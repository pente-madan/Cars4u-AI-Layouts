export interface Car {
  id: number;
  name: string;
  type: string;
  price: string;
  year: string;
  km: string;
  image: string;
  tag: string;
}

export interface CarListing {
  name: string;
  year: string;
  price: string;
  monthly: string;
  specs: string[];
}

export const cars: Car[] = [
  { id: 1, name: "Toyota Land Cruiser", type: "Luxury SUV", price: "AED 285,000", year: "2022", km: "18,400 km", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop&q=80", tag: "Certified" },
  { id: 2, name: "Nissan Patrol Platinum", type: "Family SUV", price: "AED 248,000", year: "2021", km: "31,200 km", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop&q=80", tag: "GCC Specs" },
  { id: 3, name: "BMW 330i M Sport", type: "Sport Sedan", price: "AED 156,000", year: "2023", km: "9,850 km", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop&q=80", tag: "Low KM" },
  { id: 4, name: "Mercedes-Benz C-Class", type: "Executive Sedan", price: "AED 178,000", year: "2022", km: "15,700 km", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=500&fit=crop&q=80", tag: "Warranty" },
  { id: 5, name: "Honda Civic Touring", type: "Compact Sedan", price: "AED 82,000", year: "2020", km: "42,100 km", image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&h=500&fit=crop&q=80", tag: "Best Value" },
  { id: 6, name: "2024 Mitsubishi ASX GLX", type: "Compact SUV", price: "AED 59,700", year: "2024", km: "5,000 km", image: "https://images.unsplash.com/photo-1596429924638-d1f8a252df7d?w=800&h=500&fit=crop&q=80", tag: "New Arrival" },
];

export const carListings: CarListing[] = [
  { name: "JAC S3 / JS3", year: "2023", price: "24,900 AED", monthly: "362 AED / month", specs: ["Petrol 1.5 - 2.0 L", "Automatic", "65,600 km", "GCC Specs", "Luxury Grade"] },
  { name: "Nissan Patrol Platinum", year: "2021", price: "248,000 AED", monthly: "3,608 AED / month", specs: ["Petrol 4.0 - 5.6 L", "Automatic", "31,200 km", "GCC Specs", "Luxury Grade"] },
  { name: "BMW 330i M Sport", year: "2023", price: "156,000 AED", monthly: "2,269 AED / month", specs: ["Petrol 2.0 L turbo", "Automatic", "9,850 km", "GCC Specs", "Sport Grade"] },
  { name: "Mercedes-Benz C-Class", year: "2022", price: "178,000 AED", monthly: "2,589 AED / month", specs: ["Petrol 2.0 L turbo", "Automatic", "15,700 km", "GCC Specs", "Luxury Grade"] },
  { name: "Honda Civic Touring", year: "2020", price: "82,000 AED", monthly: "1,193 AED / month", specs: ["Petrol 1.5 L turbo", "Automatic", "42,100 km", "GCC Specs", "Touring Grade"] },
  { name: "Mitsubishi ASX GLX", year: "2024", price: "59,700 AED", monthly: "868 AED / month", specs: ["Petrol 1.5 - 2.0 L", "Automatic", "5,000 km", "GCC Specs", "Luxury Grade"] },
];

export const asxImages = [
  "https://images.unsplash.com/photo-1596429924638-d1f8a252df7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1760713164476-7eb5063b3d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1704932500000-17b8445307d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1599393176410-8a9931530e42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
];

export const thumbnails = [
  "https://images.unsplash.com/photo-1559038432-900891341900?w=900&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1767930475236-da6579f23b59?w=900&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1533630217389-3a5e4dff5683?w=900&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1706074740295-d7a79c079562?w=900&h=560&fit=crop&q=80",
];