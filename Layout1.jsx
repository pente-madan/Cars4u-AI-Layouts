import React from 'react';

const carImage = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80";

export default function Layout1() {

  return (
    <div className="bg-white min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-1 sm:px-1 py-8 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 min-h-[500px] lg:min-h-[600px]">

          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="max-w-xl">
              {/* Red accent bar */}
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#be2f33] to-[#e84a4a] rounded-full mb-8" />

              {/* Heading */}
              <h1 className="font-extrabold text-[#1a1a1a] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-left mb-1 leading-tight whitespace-nowrap">
                High Quality Pre-Owned
              </h1>
              <h2 className="font-extrabold text-[#1a1a1a] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-left mb-1 leading-tight">
                Vehicles. Complete
              </h2>
              <h3 className="font-extrabold text-[#1a1a1a] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-left leading-tight">
                Trust.
              </h3>

              {/* Sub-heading */}
              <p className="font-normal leading-8 text-[#4a4a4a] text-lg lg:text-xl text-left mb-10 mt-8">
                Delivering affordable, high-quality cars in the UAE with transparency, trust, and excellent value—guaranteeing a smooth and informed experience.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="group relative px-10 py-4 bg-[#be2f33] text-white font-bold text-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#be2f33]/30 hover:-translate-y-1">
                  <span className="relative z-10">Find Your Car</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d63a3a] to-[#be2f33] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <button className="group relative px-10 py-4 bg-white text-[#be2f33] font-bold text-xl rounded-xl border-2 border-[#be2f33] overflow-hidden transition-all duration-300 hover:bg-[#be2f33] hover:text-white hover:shadow-xl hover:shadow-[#be2f33]/20 hover:-translate-y-1">
                  <span className="relative z-10">Sell Your Car</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-[60%] order-1 lg:order-2">
            <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[480px] xl:h-[580px] rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
              <img
                alt="Luxury Car"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={carImage}
              />
              {/* Red gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#be2f33]/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}