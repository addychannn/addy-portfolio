"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center border-2 border-primary">
          <span className="text-white font-bold">A</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-12">
        <Link href="#home" className="text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors">Home</Link>
        <Link href="#about" className="text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors">About</Link>
        <Link href="#projects" className="text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors">Projects</Link>
        <Link href="#contact" className="text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors">Get in Touch</Link>
      </div>
    </nav>
  );
}
