"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Visual Element */}
        <div className="relative">
          <Image
            src="/images/image_container.png"
            alt="sparkle"
            width={1500}
            height={1500}
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-8xl font-black mb-8 uppercase tracking-tighter text-[#272D18]">
            Hello!
          </h2>
          <p className="text-xl font-bold mb-6 text-[#272D18]">
            Bridging the gap between Design and Code
          </p>
          <div className="space-y-6 text-lg text-[#272D18]">
            <p>
              I am a{" "}
              <span className="font-bold text-[#272D18]">UI/UX Designer</span>{" "}
              and{" "}
              <span className="font-bold text-[#272D18]">
                Front-End Developer
              </span>{" "}
              with nearly 3 years of professional experience in turning complex
              ideas into seamless digital realities. I specialize in building
              responsive, human-centric web applications that are as technically
              sound as they are visually stunning.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-secondary font-black">✦</span>
                <p>
                  <span className="font-bold text-[#272D18]">
                    Design with Intent:
                  </span>{" "}
                  I create intuitive interfaces that prioritize the user
                  journey.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-black">✦</span>
                <p>
                  <span className="font-bold text-[#272D18]">
                    Build with Precision:
                  </span>{" "}
                  I write clean, scalable code that brings those designs to
                  life.
                </p>
              </li>
            </ul>
            <p className="italic">
              When I'm "AFK": You'll find me sketching new characters, belting
              out my favorite songs, or being a full-time servant to my cats 🐈.
              Creativity isn't just my job it's my lifestyle.
            </p>

            <div className="pt-8 flex gap-4">
              <button className="bg-primary px-8 py-3 text-white cursor-pointer rounded-lg font-bold hover:bg-primary transition-colors">
                Download CV
              </button>
              <button className="border-2 border-primary px-8 py-3 rounded-lg font-bold hover:bg-primary/5 transition-colors">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
