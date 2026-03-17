"use client";

import { motion } from "framer-motion";

const titles = [
  "UI/UX Designer",
  "Creative Designer",
  "Front-End Developer",
  "2D Artist",
  "Product Designer",
];

export default function Marquee() {
  return (
    <div className="flex px-40 w-full justify-center">
      <div className="flex justify-center border-y-2 border-primary py-8 px-10">
        <motion.div className="flex gap-20">
          {titles.map((title, i) => (
            <span key={i} className="text-lg font-medium  tracking-widest ">
              {title}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
