"use client";

import { motion } from "framer-motion";

const titles = [
  "UI/UX Designer",
  "Creative Designer",
  "Front-End Developer",
  "2D Artist",
  "Product Designer",
  "UI/UX Designer",
  "Creative Designer",
  "Front-End Developer",
  "2D Artist",
];

export default function Marquee() {
  return (
    <div className="w-full border-y-2 border-primary bg-white py-4 overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-20"
      >
        {titles.map((title, i) => (
          <span key={i} className="text-2xl font-black uppercase tracking-widest text-primary/80">
            {title}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
