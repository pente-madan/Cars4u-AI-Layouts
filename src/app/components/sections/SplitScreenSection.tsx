import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";

export function SplitScreenSection() {
  return (
    <section className="relative overflow-hidden" aria-label="Find your perfect car — Split Screen">
      <div className="flex min-h-[800px] flex-col lg:flex-row">
        {/* LEFT PANEL — showroom image + overlay + content */}
        <div className="relative flex w-full flex-1 flex-col justify-center overflow-hidden lg:w-1/2">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1615563868638-98253a7dc33b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1440"
            alt="Luxury car showroom interior — Cars4U.ae"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/80" />

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
  );
}