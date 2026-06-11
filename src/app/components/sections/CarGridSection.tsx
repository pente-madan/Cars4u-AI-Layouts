import { ArrowRight, BadgeCheck, Fuel, Gauge, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { cars, carListings } from "../data/cars";
import { SectionTitle } from "../shared/SectionTitle";

const specIcons = [
  <svg key="engine" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12h4"/><path d="M14 12h4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m18.5 5.5-1.5 1.5"/><path d="m7 17-1.5 1.5"/><path d="m5.5 5.5 1.5 1.5"/><path d="m17 17 1.5 1.5"/></svg>,
  <svg key="trans" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M20 12h2"/><path d="M2 12h2"/><path d="m17.66 6.34-1.42 1.42"/><path d="m7.76 16.24-1.42 1.42"/><path d="m6.34 6.34 1.42 1.42"/><path d="m16.24 16.24 1.42 1.42"/></svg>,
  <Gauge className="h-3.5 w-3.5" key="gauge" />,
  <ShieldCheck className="h-3.5 w-3.5" key="shield" />,
  <BadgeCheck className="h-3.5 w-3.5" key="badge" />
];

export function CarGridSection() {
  return (
    <section id="fleet" className="px-6 py-20 md:px-12 lg:px-[120px] lg:py-24" aria-label="Layout 2 — Car Grid">
      <SectionTitle eyebrow="Explore Our Fleet" title="Curated cars, showroom-grade cards" copy="Every listing is presented with the clarity buyers expect from a premium UAE dealership." />
      <div className="mx-auto mt-12 grid max-w-[1440px] gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cars.map((car) => {
          const listing = carListings[car.id - 1];
          return (
            <article key={car.id} className="group overflow-hidden rounded-lg border border-border bg-card shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
              <div className="relative h-[220px] overflow-hidden bg-secondary">
                <ImageWithFallback src={car.image || "https://images.unsplash.com/photo-1559038432-900891341900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"} alt={car.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">{car.tag}</span>
              </div>
              <div className="p-5">
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
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}