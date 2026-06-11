import { BadgeCheck, Gauge, MapPin, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";

export function SellCarFormSection() {
  return (
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
              {[[ShieldCheck, "RTA-ready ownership check"], [Gauge, "Mileage and condition review"], [MapPin, "Dubai showroom inspection slot"]].map(([Icon, label]) => {
                const I = Icon as typeof ShieldCheck;
                return (
                  <div key={label as string} className="flex items-center gap-3">
                    <span className="rounded-full bg-white/10 p-2"><I className="h-4 w-4 text-white" /></span>
                    <span>{label as string}</span>
                  </div>
                );
              })}
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
  );
}