import React from 'react';

const services = [
  {
    title: "Engineering, Consulting & Advisory",
    desc: "Pollucare is a leading Project Management Consultant in Integrated Environmental & Urban Infrastructure development.",
    image: "https://plus.unsplash.com/premium_photo-1661376741563-56e907c3ec0c?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Environmental Consultancy & Affiliation Services",
    desc: "We offer a wide range of consultancy & affiliation services by obtaining Environmental Clearances, getting consents and approvals from Tamil Nadu Pollution Control Board (CTE, CTO, HWA, BMWA).",
    image: "https://images.unsplash.com/photo-1758518730037-a16581a040e8?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Turnkey Projects",
    desc: "We Design, Manufacture, Supply and do the Erection & Commissioning of STP, ETP, RO, WTP, MEE & ATFD and Air pollution control equipments.",
    image: "https://images.pexels.com/photos/35740313/pexels-photo-35740313.jpeg"
  },
  {
    title: "Operation & Maintenance Services – Water/Waste water",
    desc: "We do the Operation & Maintenance of STP, ETP, RO, WTP, MEE, ATFD & ZLD with Skilled / Semi - Skilled work force in a Professional Manner.",
    image: "https://images.unsplash.com/photo-1740823306245-ebe30b83ad7a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Utility & Facility Management Services",
    desc: "We undertake the O & M of Utilities and provide Production Support Services and Facility Management Services through deploying efficient man power to improve efficiency of the functioning of plants.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
  },
  {
    title: "Environmental & Food Testing Laboratory",
    desc: "Pollucare has a state of the art NABL(National Accreditation Board for Testing and Calibration Laboratories) accredited Testing Laboratory Vide Certificate number TC- 7446.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

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
          setImgSrc('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80');
          setIsLoading(false);
        }}
      />
    </div>
  );
};

export default function Layout2() {
  return (
    <section className="relative w-full px-6 lg:px-12 py-20 bg-white/40">
      <div className="max-w-[1600px] mx-auto">
        <div 
          data-aos="fade-up"
          data-aos-duration="800"
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-[900] text-black mb-4">Our Specialized Services</h2>
          <div className="w-24 h-1.5 bg-[#028326] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={idx * 100}
              className="service-card group relative bg-white/70 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-white/80 shadow-lg flex flex-col h-full"
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="service-image w-full h-full object-cover"
                />
                <div className="image-overlay absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Service Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="service-title text-xl font-[800] text-black mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
