import React from 'react';

const carImage = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80";
const checkIcon = "https://www.figma.com/api/mcp/asset/f92090fe-f386-4eca-8129-c798dd37bedc";

const features = [];

export default function Layout1() {

  return (
    <div className="bg-white min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Container */}
      <div className="relative w-full">
        {/* Mobile & Tablet: Stacked Layout */}
        <div className="lg:hidden">
          {/* Background Image Section */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[450px] w-full overflow-hidden group">
            <img
              alt="Luxury Car"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={carImage}
            />
            {/* Red gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#be2f33]/80 via-[#be2f33]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 -mt-20 relative z-10">
            <div className="max-w-3xl mx-auto">
              {/* Main Card */}
              <div className="backdrop-blur-xl bg-white/95 rounded-3xl p-6 sm:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.25)] border border-white/50">
                {/* Red accent bar */}
                <div className="w-16 h-1 bg-gradient-to-r from-[#be2f33] to-[#e84a4a] rounded-full mb-6" />

                {/* Heading */}
                <h1 className="font-extrabold text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl text-left mb-4 leading-tight">
                  High-Quality Pre-Owned Vehicles.{' '}
                  <span className="text-[#be2f33]">Complete Trust.</span>
                </h1>

                {/* Sub-heading */}
                <p className="font-normal leading-7 sm:leading-8 text-[#4a4a4a] text-base sm:text-lg text-left mb-8">
                  Delivering affordable, high-quality cars in the UAE with transparency, trust, and excellent value—guaranteeing a smooth and informed experience.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="group relative px-8 py-4 bg-[#be2f33] text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#be2f33]/30 hover:-translate-y-0.5">
                    <span className="relative z-10">Find Your Car</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d63a3a] to-[#be2f33] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  <button className="group relative px-8 py-4 bg-white text-[#be2f33] font-bold text-lg rounded-xl border-2 border-[#be2f33] overflow-hidden transition-all duration-300 hover:bg-[#be2f33] hover:text-white hover:shadow-lg hover:shadow-[#be2f33]/20 hover:-translate-y-0.5">
                    <span className="relative z-10">Sell Your Car</span>
                  </button>
                </div>

                </div>
            </div>
          </div>
        </div>

        {/* Desktop: Side-by-side Layout */}
        <div className="hidden lg:block relative h-[650px] xl:h-[750px]">
          {/* Background Image - Left Side */}
          <div className="absolute left-0 top-0 w-[55%] h-full overflow-hidden group">
            <img
              alt="Luxury Car"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={carImage}
            />
            {/* Red gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#be2f33]/60 via-[#be2f33]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
          </div>

          {/* Content Section - Right Side */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] px-8 xl:px-16">
            <div className="backdrop-blur-xl bg-white/95 rounded-3xl p-8 xl:p-10 shadow-[0_8px_50px_rgba(0,0,0,0.2)] border border-white/50 relative overflow-hidden group">
              {/* Subtle red gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#be2f33]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

              <div className="relative z-10 max-w-2xl">
                {/* Red accent bar */}
                <div className="w-20 h-1.5 bg-gradient-to-r from-[#be2f33] to-[#e84a4a] rounded-full mb-8" />

                {/* Heading */}
                <h1 className="font-extrabold text-[#1a1a1a] text-4xl xl:text-5xl 2xl:text-6xl text-left mb-6 leading-tight">
                  High-Quality Pre-Owned Vehicles.{' '}
                  <span className="text-[#be2f33]">Complete Trust.</span>
                </h1>

                {/* Sub-heading */}
                <p className="font-normal leading-8 text-[#4a4a4a] text-lg xl:text-xl text-left mb-10">
                  Delivering affordable, high-quality cars in the UAE with transparency, trust, and excellent value—guaranteeing a smooth and informed experience.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-5 mb-10">
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
          </div>
        </div>
      </div>
    </div>
  );
}