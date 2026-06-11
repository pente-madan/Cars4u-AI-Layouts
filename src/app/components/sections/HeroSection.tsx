import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";

export function HeroSection() {
  return (
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
              {[['500+', 'Cars'], ['120pt', 'Inspection'], ['4.8★', 'Rating']].map(([a, b]) => (
                <div key={b} className="text-center">
                  <div className="text-2xl font-bold">{a}</div>
                  <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}