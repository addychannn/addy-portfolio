"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function About() {
  const container = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "expo.out", duration: 1.2 }
    });

    tl.from(".about-image-wrapper", { 
      scale: 0.8,
      x: -100, 
      opacity: 0, 
      rotate: -5
    })
    .from(".about-text", { 
      y: 50, 
      opacity: 0, 
      stagger: 0.1,
      skewY: 2
    }, "-=1")
    .from(".sparkle", {
      scale: 0,
      rotate: 180,
      stagger: 0.2,
      ease: "back.out(1.7)"
    }, "-=0.8")
    .from(".btn-group button", {
      x: 20,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.5");

    gsap.to(imageRef.current, {
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 3
    });

    gsap.to(".about-image-wrapper", {
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: 80
    });

  }, { scope: container });

  return (
    <section 
      id="about" 
      ref={container} 
      className="py-24 px-8 md:px-20 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
        {/* Visual Element */}
        <div className="relative about-image-wrapper">
          <div ref={imageRef}>
            <Image
              src="/images/about_me.png"
              alt="sparkle"
              width={1500}
              height={1500}
              className="drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="about-text text-8xl font-black mb-8 uppercase tracking-tighter text-[#272D18]">
            Hello!
          </h2>
          <p className="about-text text-xl font-bold mb-6 text-[#272D18]">
            Bridging the gap between Design and Code
          </p>
          <div className="space-y-6 text-lg text-[#272D18]">
            <p className="about-text">
              I am a <span className="font-bold">UI/UX Designer</span> and{" "}
              <span className="font-bold">Front-End Developer</span> with nearly 3 years of 
              professional experience in turning complex ideas into seamless digital realities. 
              I specialize in building responsive, human-centric web applications that are as 
              technically sound as they are visually stunning.
            </p>
            
            <ul className="space-y-4">
              <li className="about-text flex gap-3">
                <span className="sparkle text-secondary font-black inline-block">✦</span>
                <p>
                  <span className="font-bold">Design with Intent:</span> I create intuitive 
                  interfaces that prioritize the user journey.
                </p>
              </li>
              <li className="about-text flex gap-3">
                <span className="sparkle text-secondary font-black inline-block">✦</span>
                <p>
                  <span className="font-bold">Build with Precision:</span> I write clean, 
                  scalable code that brings those designs to life.
                </p>
              </li>
            </ul>

            <p className="about-text italic">
              When I&apos;m &quot;AFK&quot;: You’ll find me sketching new characters, belting out 
              my favorite songs, or being a full-time servant to my cats 🐱. 
              Creativity isn&apos;t just my job—it’s my lifestyle.
            </p>

            <div className="btn-group pt-8 flex gap-4">
              <div>
                <button className="bg-primary px-8 py-3 text-white cursor-pointer rounded-lg font-bold hover:scale-105 transition-transform">
                  Download CV
                </button>
              </div>
              <div>
                <button className="border-2 border-primary px-8 py-3 rounded-lg font-bold hover:bg-primary/5 transition-colors">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}