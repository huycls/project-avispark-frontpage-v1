"use client";

import GooeyNav from "@/components/molecules/GooeyNav";
import ShineBorder from "@/components/atoms/ShineBorder";
const items = [
  {
    label: "Work",
    description: "Selected projects from the studio.",
    links: [
      { label: "Selected work", href: "#work" },
      { label: "Northwind Studio", href: "#work" },
    ],
  },
  {
    label: "Services",
    description: "Design, build, and the week after launch.",
    links: [{ label: "What we do", href: "#services" }],
  },
  {
    label: "About",
    description: "The team and how to reach us.",
    links: [
      { label: "About Avispark", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Navbar() {
  return (
    <header className="sticky drop-shadow-lg top-0 z-50 w-full h-full bg-white/10 backdrop-blur-lg py-3 border-b border-gray-200">
      <div className="container flex  items-center justify-between">
        <div className="text-3xl bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
          Avispark
        </div>
        <GooeyNav
          items={items}
          initialActiveIndex={0}
          theme="light"
          size="md"
          frame
          particleCount={15}
          spread={56}
          animationTime={600}
          timeVariance={300}
          gooeyness={0.5}
          wobble={0.5}
          hoverEffect
          onChange={(index, item) => console.log(index, item.label)}
        />
        <button className="px-4 relative py-2 rounded-full text-[#333333] drop-shadow-2xl font-semibold border border-gray-200">
          Contact Us
          <ShineBorder
            borderWidth={1}
            duration={14}
            shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            className="absolute inset-0"
          />
        </button>
      </div>
    </header>
  );
}
