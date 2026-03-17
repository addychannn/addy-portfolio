"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="Addy Logo" 
            width={40} 
            height={40} 
          />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-12 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2">
        <Link href="#home" className="text-sm font-bold uppercase tracking-widest">Home</Link>
        <Link href="#about" className="text-sm font-bold uppercase tracking-widest">About</Link>
        <Link href="#projects" className="text-sm font-bold uppercase tracking-widest">Projects</Link>
        <Link href="#contact" className="text-sm font-bold uppercase tracking-widest">Get in Touch</Link>
      </div>
    </nav>
  );
}
