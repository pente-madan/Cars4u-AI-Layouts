import React from 'react';

const ImageWithFallback = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&q=80');
          setIsLoading(false);
        }}
      />
    </div>
  );
};

export default function Layout3() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row items-stretch min-h-[600px] overflow-hidden bg-white">
      {/* Left: Image (Full Bleed) */}
      <div 
        data-aos="fade-right"
        data-aos-duration="800"
        className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80"
          alt="Environmental consulting and sustainability"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#028326]/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#f2f6f2] hidden lg:block" />
        
        {/* Stats Overlay - Right Aligned */}
        <div className="absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8">
          {[
            { value: "25+", label: "Years of Expertise" },
            { value: "1000+", label: "Employees" },
            { value: "550+", label: "Projects Completed" },
            { value: "500+", label: "Happy Clients" }
          ].map((stat, idx) => (
            <div 
              key={stat.label}
              className="text-right p-6 min-w-[200px]"
            >
              <div className="text-4xl xl:text-5xl font-[900] text-[#028326] mb-2 leading-none">
                {stat.value}
              </div>
              <div className="text-sm xl:text-base font-semibold text-slate-700 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Content Section */}
      <div 
        data-aos="fade-left"
        data-aos-duration="800"
        className="w-full lg:w-1/2 flex items-center justify-center py-20 px-6 lg:px-20 bg-[#f2f6f2]"
      >
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-[900] text-black mb-8 leading-[1.1]">
            Why Pollucare?
          </h2>
          
          <div className="p-8 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-xl mb-10">
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              At Pollucare, we believe that environmental responsibility is the cornerstone of a thriving future. Our team of experts works tirelessly to deliver cutting-edge solutions that reduce carbon footprints and promote ecological balance.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Innovative Technology",
                desc: "Using the latest advancements in pollution control and waste management.",
                icon: (
                  <svg className="size-6 text-[#028326]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Sustainable Practices",
                desc: "Integrating eco-friendly methods into industrial and urban development.",
                icon: (
                  <svg className="size-6 text-[#028326]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )
              },
              {
                title: "Global Impact",
                desc: "Contributing to a worldwide effort to preserve biodiversity and climate.",
                icon: (
                  <svg className="size-6 text-[#028326]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              }
            ].map((item, i) => (
              <div 
                key={item.title}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={200 + (i * 100)}
                className="feature-item flex gap-5 group"
              >
                <div className="feature-icon shrink-0 size-12 rounded-2xl bg-[#028326]/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-[800] text-black mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
