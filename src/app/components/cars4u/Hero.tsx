import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { colors, font } from "./tokens";

const HERO_IMG =
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=700&fit=crop&q=80";

export function Hero() {
  const [exploreHover, setExploreHover] = useState(false);
  const [sellHover, setSellHover] = useState(false);

  return (
    <section
      aria-label="Layout 1 — Hero"
      style={{ background: colors.white, fontFamily: font }}
      className="w-full flex flex-col lg:flex-row items-center gap-20 px-8 md:px-16 lg:px-[120px] py-16 lg:py-24"
    >
      {/* Left column */}
      <div className="flex-1 flex flex-col gap-6">
        <span
          className="self-start uppercase"
          style={{
            background: colors.pillBg,
            color: colors.primary,
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: "1.5px",
            padding: "6px 16px",
            borderRadius: 100,
          }}
        >
          UAE's Trusted Car Marketplace
        </span>
        <h1
          style={{
            color: colors.black,
            fontWeight: 700,
            fontSize: 64,
            lineHeight: 1.15,
            maxWidth: 580,
          }}
        >
          Drive Your Dream Car in the UAE
        </h1>
        <p
          style={{
            color: colors.textMuted,
            fontWeight: 300,
            fontSize: 20,
            lineHeight: 1.6,
            maxWidth: 500,
          }}
        >
          Explore hundreds of certified pre-owned vehicles — inspected, verified,
          and ready to drive.
        </p>
        <div className="flex flex-row gap-4 mt-2">
          <button
            onMouseEnter={() => setExploreHover(true)}
            onMouseLeave={() => setExploreHover(false)}
            style={{
              background: exploreHover ? colors.primaryHover : colors.primary,
              color: colors.white,
              fontWeight: 500,
              fontSize: 16,
              padding: "16px 40px",
              borderRadius: 8,
              transition: "all 0.2s",
            }}
          >
            Explore Cars
          </button>
          <button
            onMouseEnter={() => setSellHover(true)}
            onMouseLeave={() => setSellHover(false)}
            style={{
              background: sellHover ? colors.black : "transparent",
              border: `2px solid ${colors.black}`,
              color: sellHover ? colors.white : colors.black,
              fontWeight: 500,
              fontSize: 16,
              padding: "16px 40px",
              borderRadius: 8,
              transition: "all 0.2s",
            }}
          >
            Sell My Car
          </button>
        </div>
      </div>

      {/* Right column */}
      <div className="flex-1 relative flex justify-center">
        <div
          className="absolute"
          style={{
            width: 480,
            height: 480,
            background: colors.pillBg,
            filter: "blur(80px)",
            opacity: 0.5,
            left: -40,
            bottom: -40,
            zIndex: 0,
            borderRadius: "50%",
          }}
        />
        <div
          className="relative overflow-hidden"
          style={{
            width: 600,
            maxWidth: "100%",
            height: 420,
            borderRadius: 16,
            boxShadow: "0px 24px 48px rgba(0,0,0,0.12)",
            zIndex: 1,
          }}
        >
          <ImageWithFallback
            src={HERO_IMG}
            alt="Featured car"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
