import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    src: "https://images.unsplash.com/photo-1621784563330-ef8f0953b832?q=80&w=1600&auto=format&fit=crop",
    alt: "Royal blue sherwani with gold zardozi detailing",
    tag: "Men • Sherwani",
  },
  {
    src: "https://images.unsplash.com/photo-1631366937684-27cfd87c1a73?q=80&w=1600&auto=format&fit=crop",
    alt: "Ivory lehenga with intricate hand embroidery",
    tag: "Women • Couture",
  },
  {
    src: "https://images.unsplash.com/photo-1621783899606-d39f0a32f46b?q=80&w=1600&auto=format&fit=crop",
    alt: "Maroon sherwani in regal studio lighting",
    tag: "Men • Sherwani",
  },
  {
    src: "https://images.unsplash.com/photo-1571907480495-27f3b66c2bcc?q=80&w=1600&auto=format&fit=crop",
    alt: "Gold-thread floral embroidery close-up",
    tag: "Craft • Detail",
  },
  {
    src: "https://images.unsplash.com/photo-1632659477857-03ba9f5e7b40?q=80&w=1600&auto=format&fit=crop",
    alt: "Contemporary lehenga set with heritage motifs",
    tag: "Women • Ensemble",
  },
  {
    src: "https://images.unsplash.com/photo-1621784465011-1c19708a7920?q=80&w=1600&auto=format&fit=crop",
    alt: "Sherwani cuff with beaded handwork",
    tag: "Craft • Detail",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#b08d57]/30 px-3 py-1 text-xs tracking-widest text-[#e9e4d9]/70">
          FEATURED WORK
        </div>
        <h2 className="mt-3 text-3xl font-semibold text-[#f4efe6] md:text-4xl">Gallery of Royal Craftsmanship</h2>
        <p className="mt-2 max-w-3xl text-[#e9e4d9]/75">
          Explore our signature embroidery across couture womenswear and regal menswear. Hover to reveal details.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-[#b08d57]/20 bg-[#0b132b]/40"
          >
            <img src={item.src} alt={item.alt} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b132b] via-transparent to-transparent opacity-60" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
              <div className="rounded-full bg-[#0b132b]/70 px-3 py-1 text-xs text-[#e9e4d9]/90">
                {item.tag}
              </div>
              <div className="rounded-full border border-[#b08d57]/40 bg-[#0b132b]/60 px-3 py-1 text-[10px] tracking-wider text-[#b08d57] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                VIEW DETAILS
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials / Collaborations */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {["Exhibition-Grade Finish", "Trusted by Boutiques", "Couture-Ready Quality"].map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
            className="rounded-2xl border border-[#b08d57]/30 bg-[#0b132b]/40 p-6"
          >
            <p className="text-sm text-[#e9e4d9]/85">“{t}. Impeccable detailing and responsive production timelines.”</p>
            <div className="mt-4 text-xs text-[#e9e4d9]/60">— Partner Boutique, Mumbai</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
