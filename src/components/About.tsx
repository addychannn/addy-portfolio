"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Visual Element */}
        <div className="relative">
          <div className="w-full aspect-square bg-[#E5E5E0] rounded-full overflow-hidden flex items-center justify-center">
            {/* Abstract floral shape from screenshot */}
            <div className="absolute top-0 right-0 text-7xl opacity-20">✿</div>
            <div className="absolute bottom-0 left-0 text-5xl opacity-20 rotate-45">✦</div>
            <div className="w-3/4 h-3/4 rounded-full bg-white/50 backdrop-blur-sm" />
          </div>
          {/* Decorative floral blobs */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-6xl font-black mb-8 uppercase tracking-tighter">Hello!</h2>
          <p className="text-xl font-bold mb-6 text-primary/90">
            Bridging the gap between Design and Code
          </p>
          <div className="space-y-6 text-lg text-primary/70">
            <p>
              I am a <span className="font-bold text-primary">UI/UX Designer</span> and <span className="font-bold text-primary">Front-End Developer</span> with nearly 3 years of 
              professional experience in turning complex ideas into seamless digital realities. I specialize in building responsive, 
              human-centric web applications that are as technically sound as they are visually stunning.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-secondary font-black">✦</span>
                <p><span className="font-bold text-primary">Design with Intent:</span> I create intuitive interfaces that prioritize the user journey.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-black">✦</span>
                <p><span className="font-bold text-primary">Build with Precision:</span> I write clean, scalable code that brings those designs to life.</p>
              </li>
            </ul>
            <p className="italic">
              When I'm "AFK": You'll find me sketching new characters, belting out my favorite songs, or being a full-time servant to my cats 🐈.
              Creativity isn't just my job—it's my lifestyle.
            </p>

            <div className="pt-8 flex gap-4">
              <button className="sticker bg-primary text-white">Download CV</button>
              <button className="border-2 border-primary px-8 py-2 rounded-lg font-bold">Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
