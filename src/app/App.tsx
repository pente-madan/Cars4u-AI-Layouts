import carImage1 from "../imports/image-1.png";
import carImage2 from "../imports/image-2.png";
import carImage3 from "../imports/image-3.png";
import carImage5 from "../imports/image-5.png";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, BadgeCheck, CalendarDays, Car, Check, ChevronRight, Compass, Fuel, Gauge, Globe, Heart, MapPin, Palette, Phone, RotateCw, Settings, ShieldCheck, Sparkles, Users, Wand2, Zap } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

const cars = [
  { id: 1, name: "Toyota Land Cruiser", type: "Luxury SUV", price: "AED 285,000", year: "2022", km: "18,400 km", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop&q=80", tag: "Certified" },
  { id: 2, name: "Nissan Patrol Platinum", type: "Family SUV", price: "AED 248,000", year: "2021", km: "31,200 km", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop&q=80", tag: "GCC Specs" },
  { id: 3, name: "BMW 330i M Sport", type: "Sport Sedan", price: "AED 156,000", year: "2023", km: "9,850 km", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop&q=80", tag: "Low KM" },
  { id: 4, name: "Mercedes-Benz C-Class", type: "Executive Sedan", price: "AED 178,000", year: "2022", km: "15,700 km", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=500&fit=crop&q=80", tag: "Warranty" },
  { id: 5, name: "Honda Civic Touring", type: "Compact Sedan", price: "AED 82,000", year: "2020", km: "42,100 km", image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&h=500&fit=crop&q=80", tag: "Best Value" },
  { id: 6, name: "2024 Mitsubishi ASX GLX", type: "Compact SUV", price: "AED 59,700", year: "2024", km: "5,000 km", image: "https://images.unsplash.com/photo-1596429924638-d1f8a252df7d?w=800&h=500&fit=crop&q=80", tag: "New Arrival" },
];

const thumbnails = [
  "https://images.unsplash.com/photo-1559038432-900891341900?w=900&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1767930475236-da6579f23b59?w=900&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1533630217389-3a5e4dff5683?w=900&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1706074740295-d7a79c079562?w=900&h=560&fit=crop&q=80",
];

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FEF2F2] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {eyebrow}
      </div>
      <h2 className="text-4xl font-bold tracking-[-0.04em] text-foreground md:text-5xl">{title}</h2>
      {copy ? <p className="mx-auto mt-4 max-w-2xl text-lg font-light leading-8 text-muted-foreground">{copy}</p> : null}
    </div>
  );
}

function App() {
  const [selectedImage, setSelectedImage] = useState(thumbnails[0]);
  const [intent, setIntent] = useState("Buy a car");
  const featured = useMemo(() => cars[0], []);

  return (
    <main className="min-h-screen bg-background font-['Roboto'] text-foreground selection:bg-primary selection:text-white">
      <section className="relative isolate overflow-hidden px-6 py-20 md:px-12 lg:px-[120px] lg:py-24" aria-label="Layout 1 — Hero">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(190,47,51,0.16),transparent_34%),linear-gradient(135deg,#fff_0%,#fff_48%,#f7f7f7_100%)]" />
        <div className="mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-primary/10 bg-[#FEF2F2] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-[0_12px_32px_rgba(190,47,51,0.10)]">UAE's Trusted Car Marketplace</div>
            <h1 className="max-w-[650px] font-bold leading-[1.1] tracking-[-0.055em] text-black text-[64px]">
              High Quality Pre-Owned<br />
              Vehicles. Complete<br />
              Trust
            </h1>
            <p className="mt-6 max-w-[540px] text-xl font-light leading-9 text-muted-foreground">Explore certified pre-owned vehicles with inspection clarity, transparent pricing, and a premium showroom experience built for the Emirates.</p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#fleet" className="group inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-10 py-4 text-base font-medium text-white shadow-[0_18px_40px_rgba(190,47,51,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#9B2226] focus:outline-none focus:ring-4 focus:ring-primary/20 active:translate-y-0 sm:min-w-[240px]">Explore Cars <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border-2 border-primary bg-white/70 px-10 py-4 text-base font-medium text-primary backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-[#9B2226] hover:text-white hover:border-[#9B2226] focus:outline-none focus:ring-4 focus:ring-primary/20 active:translate-y-0 sm:min-w-[240px]">Sell Your Car</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -bottom-12 -left-10 -z-10 h-[480px] w-[480px] rounded-full bg-[#FEF2F2] blur-[80px]" />
            <div className="overflow-hidden rounded-[24px] bg-secondary shadow-[0_32px_80px_rgba(0,0,0,0.16)] ring-1 ring-black/5">
                                          <ImageWithFallback className="h-[360px] w-full object-cover md:h-[480px]" src="https://images.unsplash.com/photo-1719410829034-e70481c87312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200&h=700" alt="Premium luxury car showroom in Dubai" />
              <div className="grid grid-cols-3 divide-x divide-border bg-white/90 p-5 backdrop-blur">
                {[['500+', 'Cars'], ['120pt', 'Inspection'], ['4.8★', 'Rating']].map(([a,b]) => <div key={b} className="text-center"><div className="text-2xl font-bold">{a}</div><div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{b}</div></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet" className="px-6 py-20 md:px-12 lg:px-[120px] lg:py-24" aria-label="Layout 2 — Car Grid">
        <SectionTitle eyebrow="Explore Our Fleet" title="Curated cars, showroom-grade cards" copy="Every listing is presented with the clarity buyers expect from a premium UAE dealership." />
        <div className="mx-auto mt-12 grid max-w-[1440px] gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car) => (
            <article key={car.id} className="group overflow-hidden rounded-lg border border-border bg-card shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
              <div className="relative h-[220px] overflow-hidden bg-secondary"><ImageWithFallback src={car.image || "https://images.unsplash.com/photo-1559038432-900891341900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"} alt={car.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">{car.tag}</span></div>
              <div className="p-5">
                {(() => {
                  const listing = [
                    { name: "JAC S3 / JS3", year: "2023", price: "24,900 AED", monthly: "362 AED / month", specs: ["Petrol 1.5 - 2.0 L", "Automatic", "65,600 km", "GCC Specs", "Luxury Grade"] },
                    { name: "Nissan Patrol Platinum", year: "2021", price: "248,000 AED", monthly: "3,608 AED / month", specs: ["Petrol 4.0 - 5.6 L", "Automatic", "31,200 km", "GCC Specs", "Luxury Grade"] },
                    { name: "BMW 330i M Sport", year: "2023", price: "156,000 AED", monthly: "2,269 AED / month", specs: ["Petrol 2.0 L turbo", "Automatic", "9,850 km", "GCC Specs", "Sport Grade"] },
                    { name: "Mercedes-Benz C-Class", year: "2022", price: "178,000 AED", monthly: "2,589 AED / month", specs: ["Petrol 2.0 L turbo", "Automatic", "15,700 km", "GCC Specs", "Luxury Grade"] },
                    { name: "Honda Civic Touring", year: "2020", price: "82,000 AED", monthly: "1,193 AED / month", specs: ["Petrol 1.5 L turbo", "Automatic", "42,100 km", "GCC Specs", "Touring Grade"] },
                    { name: "Mitsubishi ASX GLX", year: "2024", price: "59,700 AED", monthly: "868 AED / month", specs: ["Petrol 1.5 - 2.0 L", "Automatic", "5,000 km", "GCC Specs", "Luxury Grade"] },
                  ][car.id - 1];

                  const specIcons = [
                    <svg key="engine" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12h4"/><path d="M14 12h4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m18.5 5.5-1.5 1.5"/><path d="m7 17-1.5 1.5"/><path d="m5.5 5.5 1.5 1.5"/><path d="m17 17 1.5 1.5"/></svg>,
                    <svg key="trans" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M20 12h2"/><path d="M2 12h2"/><path d="m17.66 6.34-1.42 1.42"/><path d="m7.76 16.24-1.42 1.42"/><path d="m6.34 6.34 1.42 1.42"/><path d="m16.24 16.24 1.42 1.42"/></svg>,
                    <Gauge className="h-3.5 w-3.5" />,
                    <ShieldCheck className="h-3.5 w-3.5" />,
                    <BadgeCheck className="h-3.5 w-3.5" />
                  ];

                  return (
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#BE2F33]">{listing.year} Model</span>
                          <div className="flex items-center gap-1 rounded bg-[#F8FAFC] px-1.5 py-0.5 text-[9px] font-bold text-[#8B929C] uppercase border border-border/50">
                            <span className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
                            Verified
                          </div>
                        </div>
                        <h3 className="text-[17px] font-extrabold tracking-tight text-[#26272A] leading-tight group-hover:text-[#BE2F33] transition-colors duration-300">{listing.name}</h3>
                      </div>

                      <div className="flex items-end justify-between border-y border-dashed border-border py-3.5">
                        <div className="flex flex-col">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/80">Selling Price</span>
                          <div className="text-[22px] font-black tracking-[-0.04em] text-[#26272A] flex items-baseline gap-1">
                            <span className="text-[12px] font-bold text-muted-foreground/60">AED</span>
                            {listing.price.split(' ')[0]}
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/80">Installment</span>
                          <div className="flex items-baseline gap-0.5 text-[#BE2F33]">
                            <span className="text-[11px] font-bold">AED</span>
                            <span className="text-[16px] font-black">{listing.monthly.split(' ')[0]}</span>
                            <span className="text-[10px] font-bold opacity-70">/mo</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                        {(() => {
                          const leftColIndices = [0, 2, 4];
                          const rightColIndices = [1, 3];
                          
                          const leftSpecs = leftColIndices.map(idx => ({ spec: listing.specs[idx], icon: specIcons[idx] }));
                          const rightSpecs = rightColIndices.map(idx => ({ spec: listing.specs[idx], icon: specIcons[idx] }));

                          return (
                            <>
                              <div className="flex flex-col gap-3">
                                {leftSpecs.map(({ spec, icon }, i) => (
                                  <div key={`left-${i}`} className="flex items-center gap-2.5 min-w-0">
                                    <div className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded bg-[#F7F7F8] text-[#8B929C] border border-border/30">
                                      {icon}
                                    </div>
                                    <span className="truncate text-[12px] font-semibold text-[#4B5563] tracking-tight">{spec}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="flex flex-col gap-3 items-end">
                                {rightSpecs.map(({ spec, icon }, i) => (
                                  <div key={`right-${i}`} className="flex items-center gap-2.5 min-w-0 flex-row-reverse">
                                    <div className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded bg-[#F7F7F8] text-[#8B929C] border border-border/30">
                                      {icon}
                                    </div>
                                    <span className="truncate text-[12px] font-semibold text-[#4B5563] tracking-tight text-right">{spec}</span>
                                  </div>
                                ))}
                              </div>
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary px-6 py-20 md:px-12 lg:px-[120px] lg:py-24" aria-label="Layout 3 — Car Detail">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {(() => {
              const asxImages = [
                "https://images.unsplash.com/photo-1596429924638-d1f8a252df7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1760713164476-7eb5063b3d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1704932500000-17b8445307d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1599393176410-8a9931530e42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              ];
              const currentImg = asxImages.includes(selectedImage) ? selectedImage : asxImages[0];
              return (
                <div className="flex flex-col gap-6">
                  <div className="relative group overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl ring-1 ring-black/5">
                    <ImageWithFallback 
                      src={currentImg} 
                      alt="Mitsubishi ASX 2024 Showcase" 
                      className="h-[520px] w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
                    />
                    <div className="absolute top-8 left-8 flex gap-3">
                      
                      
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 px-2">
                    {asxImages.map((img, i) => (
                      <button 
                        key={img} 
                        onClick={() => setSelectedImage(img)} 
                        className={`relative h-28 overflow-hidden rounded-2xl border-2 transition-all duration-300 ${currentImg === img ? "border-primary scale-105 shadow-xl" : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"}`}
                      >
                        <ImageWithFallback src={img} alt={`ASX thumbnail ${i + 1}`} className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              );
            })()}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-center"
          >
            <div className="absolute -top-10 -right-10 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-[0_32px_80px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.03]">
              

              <div className="space-y-4">
                <h2 className="text-5xl font-black tracking-[-0.05em] text-black leading-tight">
                  2024 Mitsubishi <span className="text-black">ASX GLX</span>
                </h2>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black tracking-tight text-[#1A1A1A]">AED 59,700</span>
                  
                  
                </div>
              </div>

              

              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-black/5 py-8">
                {[
                  { label: "Performance", items: [
                    { text: "1.5 - 2.0 L", icon: <Fuel className="h-4 w-4" /> },
                    { text: "100 - 199 hp", icon: <Zap className="h-4 w-4" /> },
                    { text: "Automatic", icon: <RotateCw className="h-4 w-4" /> }
                  ]},
                  { label: "Configuration", items: [
                    { text: "GCC Specs", icon: <Globe className="h-4 w-4" /> },
                    { text: "SUV 4-doors", icon: <Car className="h-4 w-4" /> },
                    { text: "5 Seats", icon: <Users className="h-4 w-4" /> }
                  ]}
                ].map((group) => (group && group.label && (
                  <div key={group.label} className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{group.label}</h4>
                    <div className="space-y-3">
                      {group.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F8FAFC] text-primary shadow-sm ring-1 ring-black/[0.03]">
                            {item.icon}
                          </div>
                          <span className="text-sm font-bold text-[#2D3748]">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )))}
              </div>

              <div className="mt-8 flex items-center justify-between px-2">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">Mileage</span>
                  <span className="text-lg font-black text-[#1A1A1A]">59,700 <span className="text-xs font-bold text-muted-foreground">KM</span></span>
                </div>
                <div className="h-8 w-px bg-black/5" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">Condition</span>
                  <span className="text-lg font-black text-[#1A1A1A]">Excellent</span>
                </div>
                <div className="h-8 w-px bg-black/5" />
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">Exterior</span>
                  <span className="text-lg font-black text-[#1A1A1A]">Metallic Grey</span>
                </div>
              </div>

              <button className="group mt-auto relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 py-5 text-base font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_40px_rgba(0,0,0,0.15)] bg-[#be2f33]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#9B2226] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2">Book Test Drive<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /></span>
              </button>

              
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 md:px-12 lg:px-[120px] lg:py-24" aria-label="Sell Your Car Form">
        <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[32px] border border-black/10 bg-[#0B0B0D] text-white shadow-[0_36px_90px_rgba(0,0,0,0.24)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative flex min-h-[620px] flex-col justify-between overflow-hidden p-8 md:p-12">
            <ImageWithFallback src="https://images.unsplash.com/photo-1760713164476-7eb5063b3d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Premium SUV on reflective surface — Cars4U sell your car" className="absolute inset-0 h-full w-full object-cover opacity-45" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.84)_58%,rgba(0,0,0,0.96)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(190,47,51,0.72),transparent_32%)]" />
            <div className="relative">
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">Sell Your Car</p>
              <h2 className="mt-6 max-w-[430px] text-4xl font-bold leading-[1.05] tracking-[-0.045em] md:text-5xl">Get a showroom-grade valuation for your car.</h2>
              <p className="mt-5 max-w-[410px] font-light leading-7 text-white/70">Share your vehicle details and our Cars4U.ae specialists will prepare a secure UAE market offer with inspection guidance and fast payout options.</p>
            </div>
            <div className="relative mt-10 rounded-[24px] border border-white/12 bg-white/[0.08] p-5 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/48">Valuation path</p>
                  <p className="mt-1 text-xl font-bold">Verified seller intake</p>
                </div>
                <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-white">24h Review</span>
              </div>
              <div className="grid gap-3 text-sm text-white/80">
                {[[ShieldCheck, "RTA-ready ownership check"], [Gauge, "Mileage and condition review"], [MapPin, "Dubai showroom inspection slot"]].map(([Icon, label]) => { const I = Icon as typeof ShieldCheck; return <div key={label as string} className="flex items-center gap-3"><span className="rounded-full bg-white/10 p-2"><I className="h-4 w-4 text-white" /></span><span>{label as string}</span></div> })}
              </div>
            </div>
          </div>
          <form className="bg-white p-8 text-black md:p-12">
            <div className="mb-8 flex items-start justify-between gap-6 border-b border-border pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Car sell form</p>
                <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-black">Tell us about the car.</h3>
              </div>
              <div className="hidden rounded-2xl bg-[#FEF2F2] p-3 text-primary sm:block"><BadgeCheck className="h-6 w-6" /></div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-border bg-white px-4 py-4 outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Full name" />
              <input className="rounded-xl border border-border bg-white px-4 py-4 outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Mobile number" />
              <input className="rounded-xl border border-border bg-white px-4 py-4 outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Make and model" />
              <input className="rounded-xl border border-border bg-white px-4 py-4 outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Model year" />
              <input className="rounded-xl border border-border bg-white px-4 py-4 outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Mileage (km)" />
              <input className="rounded-xl border border-border bg-white px-4 py-4 outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Expected selling price" />
              <select className="rounded-xl border border-border bg-white px-4 py-4 text-muted-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">
                <option>Vehicle condition</option>
                <option>Excellent — showroom clean</option>
                <option>Very good — minor wear</option>
                <option>Good — needs small work</option>
              </select>
              <select className="rounded-xl border border-border bg-white px-4 py-4 text-muted-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">
                <option>Preferred inspection location</option>
                <option>Cars4U Dubai showroom</option>
                <option>At my location</option>
                <option>Video pre-check first</option>
              </select>
              <textarea className="min-h-32 rounded-xl border border-border bg-white px-4 py-4 outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10 md:col-span-2" placeholder="Service history, accident notes, warranty, or finance status" />
            </div>
            <button type="button" className="mt-6 w-full rounded-xl bg-primary px-8 py-4 font-medium text-white shadow-[0_18px_38px_rgba(190,47,51,0.25)] transition hover:-translate-y-0.5 hover:bg-[#9B2226] focus:outline-none focus:ring-4 focus:ring-primary/20">Request Car Valuation</button>
          </form>
        </div>
      </section>

      

      <section className="relative overflow-hidden" aria-label="Find your perfect car — Split Screen">
        <div className="flex min-h-[800px] flex-col lg:flex-row">

          {/* LEFT PANEL — showroom image + overlay + content */}
          <div className="relative flex w-full flex-1 flex-col justify-center overflow-hidden lg:w-1/2">
            {/* Background image */}
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1615563868638-98253a7dc33b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1440"
              alt="Luxury car showroom interior — Cars4U.ae"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {/* Dark overlay 60% */}
            <div className="absolute inset-0 bg-black/80" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 p-[80px] text-center">
              <h2
                className="font-bold text-white"
                style={{ fontSize: 52, lineHeight: 1.15, maxWidth: 440 }}
              >
                Find Your Perfect Premium Cars
              </h2>
              <p
                className="font-light text-white/75"
                style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 380 }}
              >
              Browse hundreds of certified pre-owned vehicles — inspected, verified, and priced fairly for the UAE market.
              </p>
              <div>
                <a
                  href="#fleet"
                  className="group inline-flex items-center gap-3 rounded-lg border-2 border-white px-10 py-4 font-['Roboto'] text-base font-medium text-white transition-all duration-200 hover:bg-white hover:text-black"
                >
                  Explore Cars <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          
          {/* RIGHT PANEL — red background + decorative circle + content */}
          <div className="relative flex w-full flex-1 flex-col justify-center overflow-hidden bg-[#BE2F33] lg:w-1/2">
            {/* Decorative circle — bottom-right overflow */}
            <div
              className="pointer-events-none absolute"
              style={{
                width: 480,
                height: 480,
                borderRadius: "50%",
                background: "#9B2226",
                opacity: 0.4,
                bottom: -80,
                right: -80,
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 p-[80px] text-center">
              <h2
                className="font-bold text-white"
                style={{ fontSize: 52, lineHeight: 1.15, maxWidth: 440 }}
              >
                Get the Best Price for Your Car
              </h2>
              <p
                className="font-light text-white/75"
                style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 380 }}
              >
                Get a transparent, showroom-grade valuation from Cars4U.ae specialists — fast payout, zero hassle, Dubai-based.
              </p>
              <div>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-lg border-2 border-white px-10 py-4 font-['Roboto'] text-base font-medium text-white transition-all duration-200 hover:bg-white hover:text-[#BE2F33]"
                >
                  Sell My Car <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
