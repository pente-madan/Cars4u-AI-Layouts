import React from 'react';

const featuredCars = [
  {
    id: 1,
    name: "Toyota Land Cruiser",
    year: 2024,
    price: "AED 285,000",
    mileage: "12,000 km",
    engine: "3.5L V6",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80"
  },
  {
    id: 2,
    name: "Mercedes G-Wagon",
    year: 2023,
    price: "AED 450,000",
    mileage: "8,500 km",
    engine: "4.0L V8",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80"
  },
  {
    id: 3,
    name: "BMW X7 M50i",
    year: 2024,
    price: "AED 320,000",
    mileage: "5,200 km",
    engine: "4.4L V8",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80"
  },
  {
    id: 4,
    name: "Porsche Cayenne",
    year: 2023,
    price: "AED 275,000",
    mileage: "15,800 km",
    engine: "3.0L V6",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80"
  },
  {
    id: 5,
    name: "Audi RS7 Sportback",
    year: 2024,
    price: "AED 395,000",
    mileage: "3,100 km",
    engine: "4.0L V8",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80"
  },
  {
    id: 6,
    name: "Lexus LX 570",
    year: 2023,
    price: "AED 265,000",
    mileage: "22,000 km",
    engine: "5.7L V8",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80"
  }
];

export default function Layout3() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-2">Featured Vehicles</h2>
          <p className="text-gray-500">Handpicked cars for you</p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.map((car, index) => (
            <div
              key={car.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#be2f33]/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Car Image */}
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Car Content */}
              <div className="p-5">
                <h3 className="text-[#1a1a1a] font-bold text-lg mb-2 group-hover:text-[#be2f33] transition-colors">
                  {car.name}
                </h3>
                <div className="text-[#be2f33] text-xl font-bold mb-4">{car.price}</div>

                {/* Car Specs */}
                <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {car.year}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {car.engine}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {car.mileage}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}