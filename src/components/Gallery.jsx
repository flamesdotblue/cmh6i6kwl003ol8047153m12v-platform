import React from "react";
import { motion } from "framer-motion";

const items = [
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

const Gallery = () => {
  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c9ad6a]/30 px-3 py-1 text-[11px] tracking-[0.25em] text-[#eae5da]/70">
        GALLERY
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-[#f4efe6] md:text-4xl">Cinematic Frames</h2>
        <p className="mt-2 max-w-3xl text-[#eae5da]/80">A visual narrative in light, texture, and time—celebrating the art of hand embroidery and couture forms.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
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
    </section>
  );
};

export default Gallery;
