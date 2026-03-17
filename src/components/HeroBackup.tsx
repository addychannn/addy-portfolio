"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-radial-grid">
      {/* Decorative Stars moved inside heading container below */}

      {/* Hero Label moved inside heading container */}
      <div className="relative z-10 inline-block">
        {/* 1st Sparkle - shifted higher and further left of the Year */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-16 -left-14 md:-top-24 md:-left-20 z-30"
        >
          <Image
            src="/images/sparkle.png"
            alt="sparkle"
            width={40}
            height={40}
          />
        </motion.div>

        {/* Year Sticker - overlapping the P */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticker -rotate-6 absolute -top-8 -left-10 md:-top-12 md:-left-16 z-20 font-bold text-lg md:text-xl py-1 md:py-2 px-3 md:px-4"
        >
          {new Date().getFullYear()}
        </motion.div>

        {/* 2nd Sparkle - top right of last O */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute -top-4 -right-8 md:-top-8 md:-right-12 z-20"
        >
          <Image
            src="/images/sparkle.png"
            alt="sparkle"
            width={32}
            height={32}
          />
        </motion.div>

        <h1 className="heading-massive text-center">
          PORTF
          <span className="inline-block align-middle transform translate-y-[-5%] mx-[-2%]">
            <div className="w-24 h-24 md:w-48 md:h-48 overflow-hidden flex items-center justify-center relative">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </span>
          LIO
        </h1>
      </div>

      {/* Floating Creative Designer Window */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
        className="absolute bottom-1/3 left-10 md:left-1/4 border-2 border-primary bg-white px-6 py-2 rounded-md shadow-[4px_4px_0px_0px_#4B5E20] cursor-move z-10"
      >
        <span className="font-bold text-xl">Creative Designer</span>
      </motion.div>

      {/* Signature Badge */}
      <div className="absolute right-10 md:right-1/4 bottom-1/3 z-10">
        <div className="bg-primary px-6 py-2 rounded-full text-white font-bold transform rotate-6 border-2 border-white shadow-lg">
          By: Adelynne Malubay
        </div>
      </div>

      {/* Actions */}
      <div className="mt-12 flex gap-4 relative z-10">
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
