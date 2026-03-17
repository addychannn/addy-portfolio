"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-radial-grid">
      {/* Decorative Stars moved inside heading container below */}
      {/* Hero Label moved inside heading container */}
      <div className="relative z-10 inline-block">
        <Image
          src="/images/main.png"
          alt="sparkle"
          width={1500}
          height={1500}
        />
      </div>

      {/* Actions */}
      <div className="mt-12 flex gap-4 relative z-10">
        <button className="bg-primary px-8 py-3 text-white cursor-pointer rounded-lg font-bold hover:bg-primary transition-colors">
          View My Works
        </button>
        <button className="border-2 border-primary px-8 py-3 rounded-lg font-bold hover:bg-primary/5 transition-colors">
          Get In Touch
        </button>
      </div>
    </section>
  );
}
