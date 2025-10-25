import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Crown, Phone, Mail, Play, Pause } from "lucide-react";

const Hero = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <header id="home" className="relative">
      {/* Top navigation */}
      <div className="sticky top-0 z-40 border-b border-[#b08d57]/20 bg-[#0b132b]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-[#b08d57]" />
            <span className="font-semibold tracking-wide text-[#e9e4d9]">Madhav Fashion</span>
          </div>
          <nav className="hidden gap-8 md:flex">
            <a href="#home" className="text-sm text-[#e9e4d9]/80 hover:text-[#b08d57] transition-colors">Home</a>
            <a href="#about" className="text-sm text-[#e9e4d9]/80 hover:text-[#b08d57] transition-colors">About</a>
            <a href="#gallery" className="text-sm text-[#e9e4d9]/80 hover:text-[#b08d57] transition-colors">Gallery</a>
            <a href="#contact" className="text-sm text-[#e9e4d9]/80 hover:text-[#b08d57] transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={toggleAudio} aria-label="Toggle ambient music" className="inline-flex items-center gap-2 rounded-full border border-[#b08d57]/30 bg-[#0b132b]/60 px-3 py-1.5 text-xs text-[#e9e4d9]/90 hover:border-[#b08d57]/60 hover:text-[#b08d57] transition-colors">
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              Ambient
            </button>
            <a href="#contact" className="hidden rounded-full bg-gradient-to-r from-[#b08d57] to-[#caa56b] px-4 py-2 text-xs font-semibold text-[#1a1a1a] shadow-[0_0_0_1px_rgba(176,141,87,.6)] transition hover:shadow-[0_0_0_2px_rgba(176,141,87,.9)] md:inline-block">Enquire</a>
          </div>
        </div>
      </div>

      {/* Audio element */}
      <audio ref={audioRef} loop preload="none">
        <source src="https://cdn.pixabay.com/download/audio/2022/03/23/audio_ba9c1c36b5.mp3?filename=royal-ambient-10480.mp3" type="audio/mpeg" />
      </audio>

      {/* Hero content */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1601011927775-e2c9e5c0b1e6?q=80&w=2000&auto=format&fit=crop"
            alt="Royal studio with luxurious Indian textiles and embroidery"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b132b]/60 via-[#0b132b]/70 to-[#0b132b]" />
        </div>

        <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center md:min-h-[86vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#b08d57]/40 bg-[#0b132b]/50 px-4 py-2 text-xs tracking-widest text-[#e9e4d9]/80"
          >
            <Crown className="h-4 w-4 text-[#b08d57]" /> SURAT • INDIA • SINCE 2012
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-tight text-[#f4efe6] sm:text-5xl md:text-6xl"
          >
            Where Royal Threads Meet Timeless Craft
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base text-[#e9e4d9]/80 md:text-lg"
          >
            Madhav Fashion crafts premium embroidery for women’s couture and men’s sherwanis—uniting traditional artistry with contemporary elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#gallery" className="rounded-full bg-gradient-to-r from-[#b08d57] to-[#caa56b] px-6 py-3 text-sm font-semibold text-[#1a1a1a] shadow-[0_0_0_1px_rgba(176,141,87,.6)] transition hover:shadow-[0_0_0_2px_rgba(176,141,87,.9)]">Explore Gallery</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#b08d57]/50 px-6 py-3 text-sm text-[#e9e4d9] transition hover:border-[#b08d57] hover:text-[#b08d57]">
              <Phone className="h-4 w-4" /> Contact Us
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-xs text-[#e9e4d9]/70">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@madhavfashion.in</div>
            <div>•</div>
            <div>Premium Embroidery • Couture Manufacturing • Custom Orders</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
