import { useState } from "react";
import { colors, font } from "./tokens";

const contactRows = [
  { icon: "📍", text: "Showroom 14, Al Quoz Industrial Area 3, Dubai, UAE" },
  { icon: "📞", text: "+971 4 330 9820" },
  { icon: "📧", text: "info@cars4u.ae" },
  { icon: "🕐", text: "Mon–Sat: 9AM–8PM | Sun: 10AM–6PM" },
];

const intents = ["Buy a Car", "Sell My Car", "General Enquiry"];

function Field({
  label,
  placeholder,
  textarea,
}: {
  label: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const [focus, setFocus] = useState(false);
  const sharedStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1.5px solid ${focus ? colors.primary : colors.border}`,
    color: colors.black,
    fontWeight: 400,
    fontSize: 15,
    fontFamily: font,
    padding: "0 0 8px 0",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <div className="flex flex-col gap-2">
      <label style={{ color: colors.text2, fontWeight: 500, fontSize: 13 }}>
        {label}
      </label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ ...sharedStyle, height: 120, resize: "none" }}
        />
      ) : (
        <input
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ ...sharedStyle, height: 48 }}
        />
      )}
    </div>
  );
}

export function ContactForm() {
  const [intent, setIntent] = useState<string | null>(null);
  const [submitHover, setSubmitHover] = useState(false);
  const showConditional = intent === "Buy a Car" || intent === "Sell My Car";

  return (
    <section
      aria-label="Layout 4 — Contact Form"
      style={{ background: colors.white, fontFamily: font }}
      className="w-full flex flex-col lg:flex-row items-start gap-20 px-8 md:px-16 lg:px-[120px] py-16 lg:py-24"
    >
      {/* Left panel */}
      <div className="w-full lg:w-[42%] flex flex-col gap-8">
        <h2 style={{ color: colors.black, fontWeight: 700, fontSize: 36 }}>
          Ready to Sell or Buy?
        </h2>
        <p
          style={{
            color: colors.textMuted,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          Fill in your details and our team will get back to you within 24 hours.
        </p>
        <div className="flex flex-col gap-5">
          {contactRows.map((r) => (
            <div key={r.text} className="flex flex-row gap-4 items-start">
              <span style={{ fontSize: 20 }}>{r.icon}</span>
              <span style={{ color: colors.text2, fontWeight: 400, fontSize: 15 }}>
                {r.text}
              </span>
            </div>
          ))}
        </div>
        <div
          className="w-full flex items-center justify-center"
          style={{ height: 200, background: "#F3F4F6", borderRadius: 12 }}
        >
          <span style={{ color: colors.textMuted2, fontWeight: 400, fontSize: 14 }}>
            📍 View on Google Maps →
          </span>
        </div>
      </div>

      {/* Right panel */}
      <div className="w-full lg:w-[58%] flex flex-col gap-6">
        <div
          style={{
            background: colors.white,
            padding: 40,
            borderRadius: 12,
            boxShadow: "0px 4px 24px rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex flex-col gap-5">
            <Field label="Full Name" />
            <Field label="Phone Number" placeholder="+971 XX XXX XXXX" />

            <div className="flex flex-col gap-2">
              <label style={{ color: colors.text2, fontWeight: 500, fontSize: 13 }}>
                I want to:
              </label>
              <div className="flex flex-row flex-wrap gap-3">
                {intents.map((opt) => {
                  const selected = intent === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => setIntent(opt)}
                      style={{
                        border: `1.5px solid ${selected ? colors.primary : colors.border}`,
                        background: selected ? colors.primary : colors.white,
                        color: selected ? colors.white : colors.textMuted,
                        fontWeight: 500,
                        fontSize: 13,
                        padding: "10px 20px",
                        borderRadius: 100,
                        transition: "all 0.2s",
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {showConditional && (
              <>
                <Field label="Car Make & Model" />
                <Field label="Budget / Expected Price (AED)" />
              </>
            )}

            <Field label="Email Address" />
            <Field label="Message" textarea />

            <button
              onMouseEnter={() => setSubmitHover(true)}
              onMouseLeave={() => setSubmitHover(false)}
              className="w-full"
              style={{
                background: submitHover ? colors.primaryHover : colors.primary,
                color: colors.white,
                fontWeight: 500,
                fontSize: 16,
                padding: 18,
                borderRadius: 8,
                transition: "all 0.2s",
              }}
            >
              Submit
            </button>
            <p
              className="text-center"
              style={{ color: colors.textMuted2, fontWeight: 400, fontSize: 12 }}
            >
              🔒 Your details are safe. We never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
