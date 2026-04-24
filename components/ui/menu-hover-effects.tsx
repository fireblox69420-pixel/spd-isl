"use client";

import React, { useState } from "react";

const menuItems = ["Home", "Fixtures", "Standings", "Teams", "Stats"];

export default function NavMenu({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
}) {
  const [active, setActive] = useState("home");

  const handleClick = (item: string) => {
    setActive(item.toLowerCase());
    onNavigate?.(item.toLowerCase());
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">

        {/* BRAND */}
        <div className="text-white font-black tracking-widest text-sm">
          SPD ISL
        </div>

        {/* NAV ITEMS */}
        <nav className="flex gap-2">
          {menuItems.map((item) => {
            const isActive = active === item.toLowerCase();

            return (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className="relative group px-4 py-2"
              >
                {/* TEXT */}
                <span
                  className={`relative z-10 text-sm font-bold uppercase transition-colors duration-300 ${
                    isActive ? "text-black" : "text-white"
                  } group-hover:text-black`}
                >
                  {item}
                </span>

                {/* BORDER EFFECT */}
                <span className="absolute inset-0 border border-white/20 rounded-md group-hover:border-black/20 transition-all duration-300" />

                {/* HOVER FILL */}
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-md" />
              </button>
            );
          })}
        </nav>

      </div>
    </header>
  );
}