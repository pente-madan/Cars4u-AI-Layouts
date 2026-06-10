import React, { useState } from 'react';

const carMakes = ["Toyota", "Mercedes-Benz", "BMW", "Audi", "Porsche", "Lexus", "Land Rover", "Jaguar", "Honda", "Nissan", "Ford", "Chevrolet"];
const years = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"];
const mileageUnits = ["km", "miles"];
const regionalSpecs = ["GCC Specs", "US Specs", "European Specs", "Japanese Specs", "Other"];
const colors = ["Black", "White", "Silver", "Gray", "Red", "Blue", "Green", "Brown", "Beige", "Gold", "Orange"];

export default function Layout2() {
  const [step, setStep] = useState(1);
  const [selectedMake, setSelectedMake] = useState("Toyota");
  const [formData, setFormData] = useState({
    year: '2024',
    brand: 'Toyota',
    model: '',
    mileage: '',
    mileageUnit: 'km',
    regionalSpecs: '',
    color: '',
    expectedPrice: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />

        {/* Background car image - reversed gradient */}
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80"
            alt="Luxury Car"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.95) 40%, transparent 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left pl-0 lg:pl-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#be2f33]/10 border border-[#be2f33]/20 rounded-full mb-8">
                <span className="w-2 h-2 bg-[#be2f33] rounded-full animate-pulse" />
                <span className="text-[#be2f33] text-sm font-medium">Sell Your Car Fast</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a1a] mb-8 leading-tight">
                Ready to Sell Your Car?
              </h1>

              <p className="text-gray-500 text-lg lg:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Get the best value for your vehicle. Sell directly to verified dealers across the UAE.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-10 lg:gap-16">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#be2f33] mb-2">10K+</div>
                  <div className="text-gray-400 text-sm">Cars Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#be2f33] mb-2">24hr</div>
                  <div className="text-gray-400 text-sm">Quick Sale</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#be2f33] mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Secure Payment</div>
                </div>
              </div>
            </div>

            {/* Right - Multi-step Form */}
            <div className="w-full lg:w-[50%]">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-gray-200 shadow-xl shadow-gray-200/50">
                {/* Step Indicator */}
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-[#be2f33] text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
                    <div className={`w-12 h-1 rounded ${step >= 2 ? 'bg-[#be2f33]' : 'bg-gray-200'}`} />
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? 'bg-[#be2f33] text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                  </div>
                </div>

                <h2 className="text-[#1a1a1a] text-xl lg:text-2xl font-bold mb-6 text-center">
                  {step === 1 ? 'Car Details' : 'Your Contact Information'}
                </h2>

                {/* Step 1: Car Details */}
                {step === 1 && (
                  <div className="space-y-4">
                    {/* Year and Brand */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-500 text-sm mb-2 block">Year <span className="text-[#be2f33]">*</span></label>
                        <select
                          value={formData.year}
                          onChange={(e) => handleInputChange('year', e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] focus:border-[#be2f33] focus:outline-none transition-colors"
                        >
                          {years.map((year) => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-gray-500 text-sm mb-2 block">Brand <span className="text-[#be2f33]">*</span></label>
                        <select
                          value={formData.brand}
                          onChange={(e) => handleInputChange('brand', e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] focus:border-[#be2f33] focus:outline-none transition-colors"
                        >
                          {carMakes.map((make) => (
                            <option key={make} value={make}>{make}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Model */}
                    <div>
                      <label className="text-gray-500 text-sm mb-2 block">Model <span className="text-[#be2f33]">*</span></label>
                      <input
                        type="text"
                        placeholder="Enter car model"
                        value={formData.model}
                        onChange={(e) => handleInputChange('model', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] focus:border-[#be2f33] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Mileage and Unit */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <label className="text-gray-500 text-sm mb-2 block">Mileage <span className="text-[#be2f33]">*</span></label>
                        <input
                          type="number"
                          placeholder="Enter mileage"
                          value={formData.mileage}
                          onChange={(e) => handleInputChange('mileage', e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] focus:border-[#be2f33] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-gray-500 text-sm mb-2 block">Unit</label>
                        <select
                          value={formData.mileageUnit}
                          onChange={(e) => handleInputChange('mileageUnit', e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] focus:border-[#be2f33] focus:outline-none transition-colors"
                        >
                          {mileageUnits.map((unit) => (
                            <option key={unit} value={unit}>{unit}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Regional Specs */}
                    <div>
                      <label className="text-gray-500 text-sm mb-2 block">Regional Specs <span className="text-[#be2f33]">*</span></label>
                      <select
                        value={formData.regionalSpecs}
                        onChange={(e) => handleInputChange('regionalSpecs', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] focus:border-[#be2f33] focus:outline-none transition-colors"
                      >
                        <option value="">Select specs</option>
                        {regionalSpecs.map((spec) => (
                          <option key={spec} value={spec}>{spec}</option>
                        ))}
                      </select>
                    </div>

                    {/* Color */}
                    <div>
                      <label className="text-gray-500 text-sm mb-2 block">Color</label>
                      <select
                        value={formData.color}
                        onChange={(e) => handleInputChange('color', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] focus:border-[#be2f33] focus:outline-none transition-colors"
                      >
                        <option value="">Select color</option>
                        {colors.map((color) => (
                          <option key={color} value={color}>{color}</option>
                        ))}
                      </select>
                    </div>

                    {/* Expected Price */}
                    <div>
                      <label className="text-gray-500 text-sm mb-2 block">Expected Price (AED) <span className="text-[#be2f33]">*</span></label>
                      <input
                        type="number"
                        placeholder="Enter expected price"
                        value={formData.expectedPrice}
                        onChange={(e) => handleInputChange('expectedPrice', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] focus:border-[#be2f33] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {step === 2 && (
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="text-gray-500 text-sm mb-2 block">Name <span className="text-[#be2f33]">*</span></label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] focus:border-[#be2f33] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-gray-500 text-sm mb-2 block">Email <span className="text-[#be2f33]">*</span></label>
                      <input
                        type="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] focus:border-[#be2f33] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="text-gray-500 text-sm mb-2 block">Phone Number <span className="text-[#be2f33]">*</span></label>
                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] focus:border-[#be2f33] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8">
                  {step > 1 && (
                    <button
                      onClick={prevStep}
                      className="flex-1 py-4 bg-gray-100 text-[#1a1a1a] font-bold text-lg rounded-xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                  )}
                  {step === 1 ? (
                    <button
                      onClick={nextStep}
                      className="flex-1 py-4 bg-[#be2f33] text-white font-bold text-lg rounded-xl hover:bg-[#a82629] transition-all duration-300 hover:shadow-xl hover:shadow-[#be2f33]/30 hover:-translate-y-0.5 flex items-center justify-center gap-3"
                    >
                      Next
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => alert('Form submitted!')}
                      className="flex-1 py-4 bg-[#be2f33] text-white font-bold text-lg rounded-xl hover:bg-[#a82629] transition-all duration-300 hover:shadow-xl hover:shadow-[#be2f33]/30 hover:-translate-y-0.5 flex items-center justify-center gap-3"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}