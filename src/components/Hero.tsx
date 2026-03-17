"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register the plugin
gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const typeTarget = useRef(null);
  const roles = [
    "2D Artist",
    "Web Designer",
    "UI/UX Designer",
    "Front-end Developer",
  ];

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    roles.forEach((role) => {
      tl.to(typeTarget.current, {
        duration: 1.5,
        text: role,
        ease: "none",
      })
      .to({}, { duration: 1 }) 
      .to(typeTarget.current, {
        duration: 0.6,
        text: "", 
        ease: "none",
      });
    });
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-radial-grid">
      <div className="flex w-full min-h-screen">
        {/* LEFT HALF: Content */}
        <div className="w-1/2 flex flex-col justify-center pl-20 lg:pl-80 z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-4xl font-medium text-[#2d3321]">Hello there, I'm</p>
            <h1 className="text-[8rem] lg:text-[12rem] font-black italic leading-[0.8] text-[#2d3321] tracking-tighter">
              ADDY
            </h1>
            
            <div className="flex items-center text-4xl lg:text-5xl font-medium text-[#2d3321] mt-4 min-h-[1.2em]">
              <span ref={typeTarget}></span>
              <span className="w-[3px] h-[45px] bg-[#849464] ml-2 animate-pulse"></span>
            </div>

            <div className="mt-10 flex gap-4">
              <button className="bg-[#849464] px-8 py-3 text-white rounded-lg font-bold hover:brightness-110 transition-all">
                View My Works
              </button>
              <button className="border-2 border-gray-200 bg-white px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all">
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT HALF: Image Container */}
        <div className="relative w-1/2 h-screen">
          <motion.div 
            className="relative w-full h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/hero_meow.png"
              alt="Addy Character"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Soft Glow Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#e2f0e8] blur-[120px] -z-10 opacity-60" />
    </section>
  );
}