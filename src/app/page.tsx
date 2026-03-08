import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      
      {/* Footer */}
      <footer className="py-12 bg-primary text-white text-center px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black tracking-widest uppercase">ADDY</div>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-white/100">
            <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
            <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-secondary transition-colors">Dribbble</a>
          </div>
          <div className="text-xs text-white/40 uppercase tracking-widest font-bold">
            © 2026 Adelynne Malubay. Designed with Intent.
          </div>
        </div>
      </footer>
    </main>
  );
}
