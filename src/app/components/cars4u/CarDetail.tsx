import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { colors, font } from "./tokens";

const thumbs = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=250&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=250&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=250&fit=crop&q=80",
  "https://images.unsplash.com/photo-1580274455191-1c62238fa1c6?w=400&h=250&fit=crop&q=80",
];

const stats = [
  { icon: "📏", label: "Mileage", value: "32,000 km" },
  { icon: "⛽", label: "Fuel", value: "Petrol" },
  { icon: "⚙️", label: "Transmission", value: "Automatic" },
  { icon: "🚙", label: "Body", value: "SUV" },
];

const specs = [
  ["Engine", "4.0L V6"],
  ["Cylinders", "6"],
  ["Color", "White"],
  ["Doors", "4"],
  ["Seats", "7"],
  ["Drive", "4WD"],
  ["Condition", "Used"],
  ["Registered", "Dubai"],
];

const Divider = () => (
  <div
    style={{
      width: "100%",
      height: 1,
      background: colors.border,
      margin: "20px 0",
    }}
  />
);

export function CarDetail() {
  const [active, setActive] = useState(0);
  const [testHover, setTestHover] = useState(false);
  const [waHover, setWaHover] = useState(false);

  return (
    <section
      aria-label="Layout 3 — Car Detail"
      style={{ background: colors.surface, fontFamily: font }}
      className="w-full flex flex-col lg:flex-row items-start gap-16 px-8 md:px-16 lg:px-[120px] py-16 lg:py-24"
    >
      {/* Left panel */}
      <div className="w-full lg:w-[55%] flex flex-col gap-4">
        <div className="w-full overflow-hidden" style={{ height: 420, borderRadius: 12 }}>
          <ImageWithFallback
            src={thumbs[active]}
            alt="Toyota Land Cruiser"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-row gap-3 w-full">
          {thumbs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className="flex-1 overflow-hidden cursor-pointer"
              style={{
                height: 100,
                borderRadius: 8,
                outline: active === i ? `2px solid ${colors.primary}` : "none",
                outlineOffset: -2,
              }}
            >
              <ImageWithFallback
                src={t}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="w-full lg:w-[45%] flex flex-col">
        <div style={{ color: colors.black, fontWeight: 700, fontSize: 32 }}>
          Toyota Land Cruiser 2022
        </div>
        <div
          style={{
            color: colors.primary,
            fontWeight: 700,
            fontSize: 26,
            marginTop: 4,
          }}
        >
          AED 285,000
        </div>

        <Divider />

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-1"
              style={{ background: colors.white, padding: 16, borderRadius: 8 }}
            >
              <span style={{ fontSize: 24 }}>{s.icon}</span>
              <span
                className="uppercase"
                style={{
                  color: colors.textMuted2,
                  fontWeight: 400,
                  fontSize: 11,
                  letterSpacing: "1px",
                }}
              >
                {s.label}
              </span>
              <span style={{ color: colors.black, fontWeight: 500, fontSize: 15 }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>

        <Divider />

        <div
          className="grid grid-cols-2"
          style={{ rowGap: 12, columnGap: 32 }}
        >
          {specs.map(([label, value]) => (
            <div key={label} className="flex justify-between">
              <span style={{ color: colors.textMuted2, fontWeight: 400, fontSize: 13 }}>
                {label}
              </span>
              <span style={{ color: colors.black, fontWeight: 500, fontSize: 14 }}>
                {value}
              </span>
            </div>
          ))}
        </div>

        <Divider />

        <button
          onMouseEnter={() => setTestHover(true)}
          onMouseLeave={() => setTestHover(false)}
          className="w-full"
          style={{
            background: testHover ? colors.primaryHover : colors.primary,
            color: colors.white,
            fontWeight: 500,
            fontSize: 16,
            padding: 16,
            borderRadius: 8,
            transition: "all 0.2s",
          }}
        >
          Book a Test Drive
        </button>
        <button
          onMouseEnter={() => setWaHover(true)}
          onMouseLeave={() => setWaHover(false)}
          className="w-full"
          style={{
            border: `2px solid ${colors.green}`,
            background: waHover ? colors.green : "transparent",
            color: waHover ? colors.white : colors.greenText,
            fontWeight: 500,
            fontSize: 16,
            padding: 16,
            borderRadius: 8,
            marginTop: 12,
            transition: "all 0.2s",
          }}
        >
          WhatsApp Enquiry
        </button>

        <div className="flex flex-row flex-wrap gap-4" style={{ marginTop: 20 }}>
          {["✔ Cars4U Certified", "✔ 150-Point Inspection", "✔ Verified Docs"].map(
            (t) => (
              <span
                key={t}
                style={{ color: colors.textMuted, fontWeight: 400, fontSize: 12 }}
              >
                {t}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
