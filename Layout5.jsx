import React from 'react';

export default function Layout5() {
  return (
    <section className="relative flex flex-col w-full items-center justify-center gap-8 px-6 lg:px-16 xl:px-24 text-center py-16 pt-24 bg-gradient-to-b from-green-50 via-green-100/40 to-white shadow-sm">
      {/* Badge */}
      <div className="flex items-center justify-center gap-4 flex-col">
        <div 
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full cursor-pointer font-medium text-sm transition-colors duration-200"
          onClick={() => {
            window.open("https://pollucareindia.com", "_blank");
          }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          India's Leading Environmental Organization
        </div>
      </div>

      {/* Headline and Description */}
      <div className="flex items-center justify-center gap-4 flex-col max-w-6xl mx-auto" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl max-sm:text-4xl font-[900] tracking-tight text-black">
          Explore Our Environmental Solutions
        </h1>
        <p className="text-base md:text-lg max-sm:text-sm text-slate-600 max-w-5xl leading-relaxed">
          Learn about our world-class environmental services, innovative solutions, and commitment to sustainability. 
          From pollution control to waste management — discover how we're building a cleaner future for India.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center justify-center gap-3 flex-wrap" data-aos="fade-up" data-aos-delay="200">
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#028326] hover:bg-[#026621] text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          Contact Us
        </a>
      </div>

      {/* YouTube Video Player - Full Width */}
      <div className="w-full max-w-7xl mx-auto border border-slate-200 shadow-2xl rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="400">
        <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/yJHFgTFaIBg?enablejsapi=1&origin=http://localhost:5173"
            title="Pollucare Engineers India Pvt Ltd - Corporate Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
        
        {/* Fallback: Open in YouTube */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
          <a 
            href="https://www.youtube.com/watch?v=yJHFgTFaIBg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#028326] transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
