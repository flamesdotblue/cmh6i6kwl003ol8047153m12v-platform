import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const womens = [
  {
    src: "https://images.unsplash.com/photo-1631366937684-27cfd87c1a73?q=80&w=1800&auto=format&fit=crop",
    alt: "Champagne lehenga with heirloom embroidery",
    tag: "Women • Couture",
  },
  {
    src: "https://images.unsplash.com/photo-1632659477857-03ba9f5e7b40?q=80&w=1800&auto=format&fit=crop",
    alt: "Emerald accents and brocade textures",
    tag: "Women • Ensemble",
  },
  {
    src: "https://images.unsplash.com/photo-1571907480495-27f3b66c2bcc?q=80&w=1800&auto=format&fit=crop",
    alt: "Gold-thread floral embroidery close-up",
    tag: "Craft • Detail",
  },
];

const mens = [
  {
    src: "https://images.unsplash.com/photo-1621783899606-d39f0a32f46b?q=80&w=1800&auto=format&fit=crop",
    alt: "Onyx sherwani with antique zardozi",
    tag: "Men • Royal Wear",
  },
  {
    src: "https://images.unsplash.com/photo-1621784563330-ef8f0953b832?q=80&w=1800&auto=format&fit=crop",
    alt: "Royal blue sherwani, gold motifs",
    tag: "Men • Sherwani",
  },
  {
    src: "https://images.unsplash.com/photo-1621784465011-1c19708a7920?q=80&w=1800&auto=format&fit=crop",
    alt: "Cuff and collar beadwork detail",
    tag: "Craft • Detail",
  },
];

const editorial = [
  {
    src: "https://images.unsplash.com/photo-1633114128179-2ca12678a8f6?q=80&w=2000&auto=format&fit=crop",
    alt: "Editorial portrait, couture embroidery in luxury light",
    tag: "Editorial",
  },
  {
    src: "https://images.unsplash.com/photo-1549216963-72c1712c1195?q=80&w=2000&auto=format&fit=crop",
    alt: "Regal studio—sherwani with antique gold work",
    tag: "Royal Wear",
  },
  {
    src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2000&auto=format&fit=crop",
    alt: "Close-up of beadwork and thread textures",
    tag: "Detail",
  },
  {
    src: "https://images.unsplash.com/photo-1615634260167-1ebf14ebc11f?q=80&w=2000&auto=format&fit=crop",
    alt: "Couture silhouette with emerald accents",
    tag: "Women",
  },
  {
    src: "https://images.unsplash.com/photo-1578321272176-35f49d941e87?q=80&w=2000&auto=format&fit=crop",
    alt: "Handcrafted fabric textures and brocade",
    tag: "Texture",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop",
    alt: "Runway-like portrait, onyx with gold filigree",
    tag: "Editorial",
  },
];

const Collections = () => {
  const [tab, setTab] = useState("women");
  const items = tab === "women" ? womens : mens;

  return (
    <section id="collections" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c9ad6a]/30 px-3 py-1 text-[11px] tracking-[0.25em] text-[#eae5da]/70">
        COLLECTIONS
      </div>
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-semibold text-[#f4efe6] md:text-4xl">Couture Selections</h2>
          <p className="mt-2 max-w-2xl text-[#eae5da]/80">
            Curated pieces that embody our house codes—champagne beige, deep gold, onyx black, and whispers of emerald.
          </p>
        </div>
        <div className="inline-flex rounded-full border border-[#c9ad6a]/40 bg-black/40 p-1">
          <button onClick={() => setTab("women")} className={`rounded-full px-4 py-2 text-sm transition ${tab === "women" ? "bg-gradient-to-r from-[#c9ad6a] to-[#e4cc8e] text-black" : "text-[#eae5da]/80 hover:text-[#c9ad6a]"}`}>Women’s Couture</button>
          <button onClick={() => setTab("men")} className={`rounded-full px-4 py-2 text-sm transition ${tab === "men" ? "bg-gradient-to-r from-[#c9ad6a] to-[#e4cc8e] text-black" : "text-[#eae5da]/80 hover:text-[#c9ad6a]"}`}>Men’s Royal Wear</button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, idx) => (
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-[#c9ad6a]/25 bg-black/40"
            >
              <img src={item.src} alt={item.alt} className="h-72 w-full object-cover transition duration-[1500ms] group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                <div className="rounded-full bg-black/60 px-3 py-1 text-xs text-[#eae5da]/90">{item.tag}</div>
                <div className="rounded-full border border-[#c9ad6a]/50 bg-black/50 px-3 py-1 text-[10px] tracking-wider text-[#c9ad6a] opacity-0 transition-opacity duration-500 group-hover:opacity-100">VIEW</div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-16">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#c9ad6a]/30 px-3 py-1 text-[11px] tracking-[0.25em] text-[#eae5da]/70">
          EDITORIAL GALLERY
        </div>
        <p className="max-w-3xl text-sm text-[#eae5da]/75">A cinematic narrative in light, texture, and time—celebrating the art of hand embroidery and couture forms.</p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {editorial.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-[#c9ad6a]/25 bg-black/40"
            >
              <img src={item.src} alt={item.alt} className="h-72 w-full object-cover transition duration-[1500ms] group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                <div className="rounded-full bg-black/60 px-3 py-1 text-xs text-[#eae5da]/90">{item.tag}</div>
                <div className="rounded-full border border-[#c9ad6a]/50 bg-black/50 px-3 py-1 text-[10px] tracking-wider text-[#c9ad6a] opacity-0 transition-opacity duration-500 group-hover:opacity-100">VIEW</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
