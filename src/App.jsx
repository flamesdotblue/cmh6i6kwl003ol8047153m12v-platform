import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0b132b] text-[#e9e4d9] scroll-smooth">
      {/* Background luxury gradient accents */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[38rem] w-[38rem] rounded-full bg-gradient-to-br from-[#b08d57]/20 via-[#7a0019]/10 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-[#172554]/30 via-[#b08d57]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-gradient-to-t from-[#7a0019]/20 to-transparent blur-3xl" />
      </div>

      <Hero />
      <About />
      <Gallery />
      <Contact />

      <footer className="border-t border-[#b08d57]/20 bg-[#0b132b]/60 backdrop-blur"> 
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-[#e9e4d9]/70">
          © {new Date().getFullYear()} Madhav Fashion, Surat. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
