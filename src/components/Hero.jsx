import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Crown, Play, Pause, Phone, Mail } from "lucide-react";

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
      {/* Nav */}
      <div className="sticky top-0 z-40 border-b border-[#c9ad6a]/20 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-[#c9ad6a]" />
            <span className="font-semibold tracking-wide text-[#eae5da]">Madhav Fashion</span>
          </div>
          <nav className="hidden gap-8 md:flex">
            <a href="#home" className="text-sm text-[#eae5da]/80 transition-colors hover:text-[#c9ad6a]">Home</a>
            <a href="#about" className="text-sm text-[#eae5da]/80 transition-colors hover:text-[#c9ad6a]">About</a>
            <a href="#collections" className="text-sm text-[#eae5da]/80 transition-colors hover:text-[#c9ad6a]">Collections</a>
            <a href="#contact" className="text-sm text-[#eae5da]/80 transition-colors hover:text-[#c9ad6a]">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleAudio}
              aria-label="Toggle ambient music"
              className="inline-flex items-center gap-2 rounded-full border border-[#c9ad6a]/40 bg-black/50 px-3 py-1.5 text-xs text-[#eae5da]/80 transition-colors hover:border-[#c9ad6a] hover:text-[#c9ad6a]"
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />} Ambient
            </button>
            <a
              href="#contact"
              className="hidden rounded-full bg-gradient-to-r from-[#c9ad6a] to-[#e4cc8e] px-4 py-2 text-xs font-semibold text-black shadow-[0_0_0_1px_rgba(201,173,106,.6)] transition hover:shadow-[0_0_0_2px_rgba(201,173,106,.85)] md:inline-block"
            >
              Enquire
            </a>
          </div>
        </div>
      </div>

      {/* Ambient audio */}
      <audio ref={audioRef} loop preload="none">
        <source src="https://cdn.pixabay.com/download/audio/2022/03/23/audio_ba9c1c36b5.mp3?filename=royal-ambient-10480.mp3" type="audio/mpeg" />
      </audio>

      {/* Cinematic hero with parallax */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-fixed" style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1554941829-202a0b237dfb?q=80&w=2400&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        </div>

        <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#c9ad6a]/40 bg-black/40 px-4 py-2 text-[11px] tracking-[0.25em] text-[#eae5da]/80"
          >
            SURAT • INDIA • ATELIER
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1 }}
            className="mt-6 max-w-5xl text-4xl font-semibold leading-tight text-[#f4efe6] sm:text-5xl md:text-6xl"
          >
            Crafted for the Modern Maharaja & the Timeless Queen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base text-[#eae5da]/85 md:text-lg"
          >
            High couture embroidery that marries Indian heritage with contemporary design. A slow-luxury experience, born in Surat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#collections" className="rounded-full bg-gradient-to-r from-[#c9ad6a] to-[#e4cc8e] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(201,173,106,.6)] transition hover:shadow-[0_0_0_2px_rgba(201,173,106,.85)]">Explore Collections</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#c9ad6a]/50 px-6 py-3 text-sm text-[#eae5da] transition hover:border-[#c9ad6a] hover:text-[#c9ad6a]">
              <Phone className="h-4 w-4" /> Contact
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#eae5da]/70">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@madhavfashion.in</div>
            <div>•</div>
            <div>Women’s Couture • Men’s Royal Wear • Custom Atelier</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
