"use client";

import React, { useState } from "react";

const menuItems = ["Home", "Fixtures", "Table", "Teams", "Stats", "Contact"];

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/5 backdrop-blur-md border-b border-white/10 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">SPD ISL</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-white/70 hover:text-white transition font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <div key={item}>
              <a className="block text-white">{item}</a>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}