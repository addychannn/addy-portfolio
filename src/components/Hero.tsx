"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-grid">
      {/* Decorative Stars */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-1/4 left-10 md:left-20 text-4xl"
      >
        ✧
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-1/4 right-10 md:right-20 text-4xl"
      >
        ✦
      </motion.div>

      {/* Hero Label */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticker -rotate-6 mb-4 font-bold text-xl"
      >
        2026
      </motion.div>

      {/* Main Heading */}
      <div className="relative text-center">
        <h1 className="heading-massive">
          PORTF
          <span className="inline-block align-middle transform translate-y-[-5%] mx-[-2%]">
            <div className="w-24 h-24 md:w-48 md:h-48 rounded-full border-4 border-primary bg-secondary overflow-hidden flex items-center justify-center">
              {/* This is where the character icon would go */}
              <div className="text-white text-4xl md:text-8xl">🐸</div>
            </div>
          </span>
          LIO
        </h1>
      </div>

      {/* Floating Creative Designer Window */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
        className="absolute bottom-1/3 left-10 md:left-1/4 border-2 border-primary bg-white px-6 py-2 rounded-md shadow-[4px_4px_0px_0px_#4B5E20] cursor-move"
      >
        <span className="font-bold text-xl">Creative Designer</span>
      </motion.div>

      {/* Signature Badge */}
      <div className="absolute right-10 md:right-1/4 bottom-1/3">
        <div className="bg-primary px-6 py-2 rounded-full text-white font-bold transform rotate-6 border-2 border-white shadow-lg">
          By: Adelynne Malubay
        </div>
      </div>

      {/* Actions */}
      <div className="mt-12 flex gap-4">
        <button className="sticker px-8 py-3 bg-primary text-white hover:bg-white hover:text-primary transition-colors">
          View My Works
        </button>
        <button className="border-2 border-primary px-8 py-3 rounded-lg font-bold hover:bg-primary/5 transition-colors">
          Get In Touch
        </button>
      </div>
    </section>
  );
}
