import React from 'react';

export default function Layout4() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <section className="relative w-full py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-[#f8faf9] via-white to-[#f0f7f4] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#028326]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#02a332]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Section Header */}
        <div 
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-black mb-6 leading-tight">
            Let's Start a Conversation
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-1.5 bg-gradient-to-r from-transparent to-[#028326] rounded-full" />
            <div className="w-3 h-3 bg-[#028326] rounded-full" />
            <div className="w-16 h-1.5 bg-gradient-to-l from-transparent to-[#028326] rounded-full" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
          {/* Left: Company Information Card */}
          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="w-full lg:w-[45%]"
          >
            <div className="h-full p-10 lg:p-14 rounded-[3rem] bg-gradient-to-br from-[#028326] via-[#027a2d] to-[#026621] text-white shadow-[0_20px_60px_rgba(2,131,38,0.3)] relative overflow-hidden">
              {/* Decorative Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full" />
                <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-white rounded-full" />
                <div className="absolute top-1/2 left-1/3 w-16 h-16 border-4 border-white rounded-full" />
              </div>

              <div className="relative z-10">
                {/* Company Logo/Name */}
                <div className="mb-12 lg:mb-16 pb-8 border-b border-white/20">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-[900] leading-tight mb-2">
                    Pollucare Engineers India Pvt. Ltd.
                  </h3>
                  <p className="text-white/70 text-sm font-semibold uppercase tracking-widest">Environmental Solutions Expert</p>
                </div>

                {/* Contact Information */}
                <div className="space-y-12 lg:space-y-16 pb-8">
                  {/* Address */}
                  <div className="group">
                    <div className="flex gap-5 items-start">
                      <div className="size-16 flex-shrink-0 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/15 group-hover:scale-105 transition-all duration-300">
                        <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Our Office</p>
                        <p className="text-lg lg:text-xl font-[800] leading-relaxed">
                          #HIG - 6152, TNHB Phase I & II,<br />
                          Kamarajar Road, Ayapakkam,<br />
                          Chennai – 600077, India
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="group">
                    <div className="flex gap-5 items-start">
                      <div className="size-16 flex-shrink-0 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/15 group-hover:scale-105 transition-all duration-300">
                        <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Call Us</p>
                        <p className="text-xl lg:text-2xl font-[900] mb-2">+91 44 2682 3190</p>
                        <p className="text-xl lg:text-2xl font-[900]">+91 988 487 3190</p>
                      </div>
                    </div>
                  </div>

                  {/* Email Addresses */}
                  <div className="group">
                    <div className="flex gap-5 items-start">
                      <div className="size-16 flex-shrink-0 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/15 group-hover:scale-105 transition-all duration-300">
                        <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Email Us</p>
                        <p className="text-lg lg:text-xl font-[900] mb-2 break-all">info@pollucareindia.com</p>
                        <p className="text-lg lg:text-xl font-[900] break-all">saibabu@pollucareindia.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Gradient Blobs */}
              <div className="absolute -bottom-24 -right-24 size-72 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute top-20 -left-16 size-56 bg-white/5 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div 
            data-aos="fade-left"
            data-aos-duration="800"
            className="w-full lg:w-[55%]"
          >
            <div className="h-full bg-white/80 backdrop-blur-2xl border-2 border-white/60 p-10 lg:p-12 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#028326]/10 to-transparent rounded-bl-[5rem]" />
              
              <div className="relative z-10">
                <div className="mb-10">
                  <h3 className="text-3xl lg:text-4xl font-[900] text-black mb-3">Send Us a Message</h3>
                  <p className="text-slate-600 text-base font-medium">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-slate-800 font-[800] text-sm uppercase tracking-wide flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#028326] rounded-full"></span>
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-white/70 border-2 border-slate-200 focus:border-[#028326] focus:bg-white focus:ring-4 focus:ring-[#028326]/10 outline-none transition-all duration-300 font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-normal hover:border-slate-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-slate-800 font-[800] text-sm uppercase tracking-wide flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#028326] rounded-full"></span>
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-white/70 border-2 border-slate-200 focus:border-[#028326] focus:bg-white focus:ring-4 focus:ring-[#028326]/10 outline-none transition-all duration-300 font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-normal hover:border-slate-300"
                      />
                    </div>
                  </div>

                  {/* Phone and Company Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-slate-800 font-[800] text-sm uppercase tracking-wide flex items-center gap-2">
                        <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        placeholder="+91 98765 43210"
                        className="w-full px-6 py-4 rounded-2xl bg-white/70 border-2 border-slate-200 focus:border-[#028326] focus:bg-white focus:ring-4 focus:ring-[#028326]/10 outline-none transition-all duration-300 font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-normal hover:border-slate-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-slate-800 font-[800] text-sm uppercase tracking-wide flex items-center gap-2">
                        <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                        Company Name
                      </label>
                      <input 
                        type="text" 
                        placeholder="Your Company"
                        className="w-full px-6 py-4 rounded-2xl bg-white/70 border-2 border-slate-200 focus:border-[#028326] focus:bg-white focus:ring-4 focus:ring-[#028326]/10 outline-none transition-all duration-300 font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-normal hover:border-slate-300"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-3">
                    <label className="text-slate-800 font-[800] text-sm uppercase tracking-wide flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#028326] rounded-full"></span>
                      Subject *
                    </label>
                    <input 
                      type="text" 
                      placeholder="How can we help you?"
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-white/70 border-2 border-slate-200 focus:border-[#028326] focus:bg-white focus:ring-4 focus:ring-[#028326]/10 outline-none transition-all duration-300 font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-normal hover:border-slate-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-3">
                    <label className="text-slate-800 font-[800] text-sm uppercase tracking-wide flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#028326] rounded-full"></span>
                      Your Message *
                    </label>
                    <textarea 
                      rows={5}
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-white/70 border-2 border-slate-200 focus:border-[#028326] focus:bg-white focus:ring-4 focus:ring-[#028326]/10 outline-none transition-all duration-300 font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-normal resize-none hover:border-slate-300"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full group relative bg-gradient-to-r from-[#028326] via-[#02a332] to-[#028326] bg-[length:200%_100%] hover:bg-right-bottom text-white font-[900] py-6 px-8 rounded-2xl shadow-lg shadow-[#028326]/30 hover:shadow-2xl hover:shadow-[#028326]/40 transition-all duration-500 transform hover:-translate-y-1 active:scale-[0.98] text-lg overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Send Message
                        <svg className="size-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </button>
                    <p className="text-center text-slate-500 text-sm font-medium mt-4">
                      We'll respond within 24 business hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
