import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { colors, font } from "./tokens";

const SHOWROOM =
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=900&fit=crop&q=80";

export function SplitScreen() {
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  return (
    <section
      aria-label="Layout 6 — Split Screen"
      style={{ fontFamily: font }}
      className="relative w-full flex flex-col md:flex-row"
    >
      {/* Left panel */}
      <div className="relative w-full md:w-1/2 overflow-hidden" style={{ minHeight: 400 }}>
        <ImageWithFallback
          src={SHOWROOM}
          alt="Cars4U showroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: colors.black, opacity: 0.6 }}
        />
        <div
          className="relative flex flex-col justify-center items-center gap-6 h-full"
          style={{ padding: 80, minHeight: 400 }}
        >
          <h2
            className="text-center"
            style={{
              color: colors.white,
              fontWeight: 700,
              fontSize: 52,
              lineHeight: 1.15,
              maxWidth: 440,
            }}
          >
            Find Your Perfect Premium Car
          </h2>
          <p
            className="text-center"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontWeight: 300,
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 380,
            }}
          >
            Browse our certified collection of inspected, verified vehicles ready to
            drive home today.
          </p>
          <button
            onMouseEnter={() => setLeftHover(true)}
            onMouseLeave={() => setLeftHover(false)}
            style={{
              border: `2px solid ${colors.white}`,
              background: leftHover ? colors.white : "transparent",
              color: leftHover ? colors.black : colors.white,
              fontWeight: 500,
              fontSize: 16,
              padding: "16px 40px",
              borderRadius: 8,
              transition: "all 0.2s",
            }}
          >
            Explore Cars →
          </button>
        </div>
      </div>

      {/* Right panel */}
      <div
        className="relative w-full md:w-1/2 overflow-hidden"
        style={{ background: colors.primary, minHeight: 400 }}
      >
        <div
          className="absolute"
          style={{
            width: 480,
            height: 480,
            background: colors.primaryHover,
            opacity: 0.4,
            borderRadius: "50%",
            bottom: -80,
            right: -80,
          }}
        />
        <div
          className="relative flex flex-col justify-center items-center gap-6 h-full"
          style={{ padding: 80, minHeight: 400 }}
        >
          <h2
            className="text-center"
            style={{
              color: colors.white,
              fontWeight: 700,
              fontSize: 52,
              lineHeight: 1.15,
              maxWidth: 440,
            }}
          >
            Get the Best Price for Your Car
          </h2>
          <p
            className="text-center"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontWeight: 300,
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 380,
            }}
          >
            Sell your vehicle the easy way get a fair valuation and a fast,
            hassle-free deal.
          </p>
          <button
            onMouseEnter={() => setRightHover(true)}
            onMouseLeave={() => setRightHover(false)}
            style={{
              border: `2px solid ${colors.white}`,
              background: rightHover ? colors.white : "transparent",
              color: rightHover ? colors.primary : colors.white,
              fontWeight: 500,
              fontSize: 16,
              padding: "16px 40px",
              borderRadius: 8,
              transition: "all 0.2s",
            }}
          >
            Sell My Car →
          </button>
        </div>
      </div>

      {/* Center divider with OR badge */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center">
          <div style={{ width: 1, height: 200, background: "rgba(255,255,255,0.25)" }} />
          <div
            className="flex items-center justify-center"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: colors.white,
              boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
              margin: "0",
            }}
          >
            <span style={{ color: colors.black, fontWeight: 700, fontSize: 11 }}>
              OR
            </span>
          </div>
          <div style={{ width: 1, height: 200, background: "rgba(255,255,255,0.25)" }} />
        </div>
      </div>
    </section>
  );
}
