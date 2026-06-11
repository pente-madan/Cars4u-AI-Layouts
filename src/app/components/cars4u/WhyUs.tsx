import { useState } from "react";
import { colors, font } from "./tokens";

const cards = [
  {
    icon: "🔍",
    title: "Thoroughly Inspected",
    desc: "Every car passes a 150-point mechanical check before listing",
  },
  {
    icon: "📋",
    title: "Clear Documentation",
    desc: "Full history, no hidden fees, transparent pricing always",
  },
  {
    icon: "💬",
    title: "Expert Guidance",
    desc: "Our team helps you find the right car, not just any car",
  },
  {
    icon: "🔄",
    title: "Easy Trade-ins",
    desc: "Sell your car and upgrade in one seamless visit",
  },
];

const stats = [
  { stat: "500+", label: "Cars Available" },
  { stat: "10,000+", label: "Happy Customers" },
  { stat: "2010", label: "Trusted Since" },
  { stat: "#1", label: "Dubai's Top Dealer" },
];

function WhyCard({ card }: { card: (typeof cards)[number] }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex-1 flex flex-col gap-4"
      style={{
        background: colors.white,
        padding: 32,
        borderRadius: 12,
        border: `1px solid ${colors.border}`,
        borderTop: hover ? `3px solid ${colors.primary}` : `1px solid ${colors.border}`,
        boxShadow: hover
          ? "0px 8px 32px rgba(0,0,0,0.10)"
          : "0px 2px 8px rgba(0,0,0,0.04)",
        transition: "all 0.25s ease",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{ width: 48, height: 48, fontSize: 32 }}
      >
        {card.icon}
      </div>
      <div style={{ color: colors.black, fontWeight: 500, fontSize: 18 }}>
        {card.title}
      </div>
      <div
        style={{
          color: colors.textMuted,
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.6,
        }}
      >
        {card.desc}
      </div>
    </div>
  );
}

export function WhyUs() {
  return (
    <section
      aria-label="Layout 5 — Why Us"
      style={{ background: colors.surface, fontFamily: font }}
      className="w-full flex flex-col"
    >
      <div className="flex flex-col gap-12 px-8 md:px-16 lg:px-[120px] py-16 lg:py-24">
        <div className="flex flex-col items-center gap-3">
          <h2
            className="text-center"
            style={{ color: colors.black, fontWeight: 700, fontSize: 40 }}
          >
            Why Choose Cars4U?
          </h2>
          <div
            style={{
              width: 64,
              height: 4,
              background: colors.primary,
              borderRadius: 2,
            }}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {cards.map((c) => (
            <WhyCard key={c.title} card={c} />
          ))}
        </div>
      </div>

      {/* Trust stats bar */}
      <div
        className="w-full flex flex-col md:flex-row"
        style={{
          background: colors.white,
          padding: "40px 0",
          borderTop: `1px solid ${colors.border}`,
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="flex-1 flex flex-col items-center gap-1.5"
            style={{
              borderLeft: i > 0 ? `1px solid ${colors.border}` : "none",
              padding: "0 24px",
            }}
          >
            <span style={{ color: colors.black, fontWeight: 700, fontSize: 32 }}>
              {s.stat}
            </span>
            <span style={{ color: colors.textMuted, fontWeight: 400, fontSize: 14 }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
