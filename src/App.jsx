import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Collections from "./components/Collections";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0a0a0a] text-[#eae5da] selection:bg-[#c9ad6a]/30">
      {/* Subtle brocade/threadwork background pattern */}
      <div className="fixed inset-0 -z-20 opacity-[0.06]" aria-hidden>
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="brocade" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <path d="M0 30 Q 15 10 30 30 T 60 30" fill="none" stroke="#d7c08a" strokeWidth="0.8"/>
              <path d="M0 0 Q 30 20 60 0" fill="none" stroke="#d7c08a" strokeWidth="0.5"/>
              <circle cx="30" cy="30" r="2" fill="#d7c08a"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#brocade)"/>
        </svg>
      </div>

      {/* Vignette and luxury glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#000_100%)]"/>
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[#0f0f0f] shadow-[0_0_300px_140px_rgba(201,173,106,0.1)]"/>
        <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#0f0f0f] shadow-[0_0_260px_120px_rgba(9,121,105,0.12)]"/>
      </div>

      <Hero />
      <About />
      <Collections />
      <Contact />

      <footer className="border-t border-[#c9ad6a]/20 bg-black/40 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-[#eae5da]/70">
          © {new Date().getFullYear()} Madhav Fashion, Surat • India. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
