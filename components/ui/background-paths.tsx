"use client";

import { motion } from "framer-motion";

export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 -z-10">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}
       C-${380 - i * 5 * position} -${189 + i * 6}
       -${312 - i * 5 * position} ${216 - i * 6}
       ${152 - i * 5 * position} ${343 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <svg className="absolute inset-0 w-full h-full opacity-20">
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="white"
          strokeWidth={path.width}
          fill="transparent"
          initial={{ pathLength: 0.3 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}
