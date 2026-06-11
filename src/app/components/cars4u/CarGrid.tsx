import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { colors, font } from "./tokens";

type Car = {
  id: string;
  name: string;
  meta: string;
  fuel: string;
  price: string;
  image: string;
};

const cars: Car[] = [
  {
    id: "land-cruiser",
    name: "Toyota Land Cruiser",
    meta: "2022 · 32,000 km · Automatic",
    fuel: "Petrol",
    price: "AED 285,000",
    image:
      "https://images.unsplash.com/photo-1566479171817-2698c7b43a1d?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "patrol",
    name: "Nissan Patrol",
    meta: "2021 · 48,000 km · Automatic",
    fuel: "Diesel",
    price: "AED 198,000",
    image:
      "https://images.unsplash.com/photo-1605515298946-d06295c7bb28?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "bmw",
    name: "BMW 3 Series",
    meta: "2023 · 18,500 km · Automatic",
    fuel: "Petrol",
    price: "AED 165,000",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz C-Class",
    meta: "2022 · 27,000 km · Automatic",
    fuel: "Petrol",
    price: "AED 210,000",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "civic",
    name: "Honda Civic",
    meta: "2023 · 12,000 km · Automatic",
    fuel: "Petrol",
    price: "AED 88,000",
    image:
      "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "asx",
    name: "2024 Mitsubishi ASX GLX",
    meta: "2024 · 5,000 km · Automatic",
    fuel: "Petrol",
    price: "AED 59,700",
    image:
      "https://images.unsplash.com/photo-1596429924638-d1f8a252df7d?w=800&h=500&fit=crop&q=80",
  },
];

function CarCard({ car }: { car: Car }) {
  const [hover, setHover] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col overflow-hidden"
      style={{
        background: colors.white,
        borderRadius: 8,
        border: `1px solid ${colors.border}`,
        boxShadow: hover
          ? "0px 12px 40px rgba(0,0,0,0.14)"
          : "0px 4px 24px rgba(0,0,0,0.06)",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.25s ease",
      }}
    >
      <div className="relative w-full overflow-hidden" style={{ height: 220 }}>
        <ImageWithFallback
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
        <span
          className="absolute"
          style={{
            top: 12,
            left: 12,
            background: colors.primary,
            color: colors.white,
            fontWeight: 500,
            fontSize: 11,
            padding: "4px 10px",
            borderRadius: 100,
          }}
        >
          {car.fuel}
        </span>
      </div>
      <div className="flex flex-col gap-2" style={{ padding: "16px 20px 20px" }}>
        <div style={{ color: colors.black, fontWeight: 500, fontSize: 18 }}>
          {car.name}
        </div>
        <div style={{ color: colors.textMuted2, fontWeight: 400, fontSize: 13 }}>
          {car.meta}
        </div>
        <div style={{ color: colors.primary, fontWeight: 700, fontSize: 22 }}>
          {car.price}
        </div>
        <button
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          className="w-full mt-1"
          style={{
            border: `1.5px solid ${colors.primary}`,
            background: btnHover ? colors.primary : "transparent",
            color: btnHover ? colors.white : colors.primary,
            fontWeight: 500,
            fontSize: 14,
            padding: 10,
            borderRadius: 6,
            transition: "all 0.2s",
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export function CarGrid() {
  return (
    <section
      aria-label="Layout 2 — Car Grid"
      style={{ background: colors.white, fontFamily: font }}
      className="w-full flex flex-col gap-12 px-8 md:px-16 lg:px-[120px] py-16 lg:py-24"
    >
      <div className="flex flex-col items-center gap-3">
        <h2 style={{ color: colors.black, fontWeight: 700, fontSize: 40 }}>
          Explore Our Fleet
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}
