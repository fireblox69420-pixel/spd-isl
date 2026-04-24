"use client";

import React, { useState } from "react";

const menuItems = ["Home", "Fixtures", "Standings", "Teams", "Stats"];

export default function NavMenu({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
}) {
  const [active, setActive] = useState("Home");

  const handleClick = (item: string) => {
    setActive(item);
    onNavigate?.(item.toLowerCase());
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-center gap-2 py-4">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="relative group px-4 py-2"
          >
            {/* TEXT */}
            <span
              className={`relative z-10 uppercase text-sm font-bold transition-colors duration-300 ${
                active === item ? "text-black" : "text-white"
              } group-hover:text-black`}
            >
              {item}
            </span>

            {/* BORDER ANIMATION */}
            <span className="absolute inset-0 border border-white/20 rounded-md group-hover:border-black/30 transition-all duration-300" />

            {/* BACKGROUND FILL EFFECT */}
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-md" />
          </button>
        ))}
      </div>
    </nav>
  );
}