"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-6xl font-bold">SPD ISL</h1>

      <motion.div className="text-yellow-400 text-3xl mt-4">
        {words[index]}
      </motion.div>

      <p className="mt-4 text-gray-400">
        10 May – 20 May | Sai Purvi Symphony
      </p>
    </section>
  );
}
const words = ["INTENSE", "COMPETITIVE", "ELECTRIC"];
