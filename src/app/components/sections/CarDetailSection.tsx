import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, BadgeCheck, Car, Fuel, Globe, RotateCw, Users, Zap } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { asxImages } from "../data/cars";

export function CarDetailSection() {
  const [selectedImage, setSelectedImage] = useState(asxImages[0]);
  const currentImg = asxImages.includes(selectedImage) ? selectedImage : asxImages[0];

  return (
    <section className="bg-secondary px-6 py-20 md:px-12 lg:px-[120px] lg:py-24" aria-label="Layout 3 — Car Detail">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex flex-col gap-6">
            <div className="relative group overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl ring-1 ring-black/5">
              <ImageWithFallback
                src={currentImg}
                alt="Mitsubishi ASX 2024 Showcase"
                className="h-[520px] w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
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
                {
                  label: "Performance",
                  items: [
                    { text: "1.5 - 2.0 L", icon: <Fuel className="h-4 w-4" /> },
                    { text: "100 - 199 hp", icon: <Zap className="h-4 w-4" /> },
                    { text: "Automatic", icon: <RotateCw className="h-4 w-4" /> }
                  ]
                },
                {
                  label: "Configuration",
                  items: [
                    { text: "GCC Specs", icon: <Globe className="h-4 w-4" /> },
                    { text: "SUV 4-doors", icon: <Car className="h-4 w-4" /> },
                    { text: "5 Seats", icon: <Users className="h-4 w-4" /> }
                  ]
                }
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
  );
}