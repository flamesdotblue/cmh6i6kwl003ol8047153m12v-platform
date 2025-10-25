import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c9ad6a]/30 px-3 py-1 text-[11px] tracking-[0.25em] text-[#eae5da]/70">
        OUR STORY
      </div>
      <div className="grid items-start gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-[#f4efe6] md:text-4xl">A Decade of Couture Embroidery</h2>
          <p className="mt-4 text-[#eae5da]/85">
            Madhav Fashion is a distinguished atelier from Surat, Gujarat—where threads become poetry and fabric becomes legacy. For over a decade, our artisans have sculpted intricate handwork for women’s couture and regal sherwanis for men.
          </p>
          <p className="mt-3 text-[#eae5da]/80">
            Inspired by the quiet grandeur of India’s royal courts and the refined minimalism of contemporary design, each creation reflects sophistication, culture, and timeless beauty. We embrace slow-luxury—meticulous processes, curated materials, and a devotion to heritage.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#c9ad6a]/25 bg-black/40 p-5">
              <div className="text-sm font-semibold text-[#f4efe6]">Design</div>
              <div className="mt-1 text-sm text-[#eae5da]/80">Moodboards, archival motifs, and couture palettes in champagne and emerald.</div>
            </div>
            <div className="rounded-2xl border border-[#c9ad6a]/25 bg-black/40 p-5">
              <div className="text-sm font-semibold text-[#f4efe6]">Sampling</div>
              <div className="mt-1 text-sm text-[#eae5da]/80">Swatches, stitch tests, and embellishment trials for perfect drape and depth.</div>
            </div>
            <div className="rounded-2xl border border-[#c9ad6a]/25 bg-black/40 p-5">
              <div className="text-sm font-semibold text-[#f4efe6]">Quality</div>
              <div className="mt-1 text-sm text-[#eae5da]/80">Touch-point checks for fabric integrity, colorfastness, and finish.</div>
            </div>
            <div className="rounded-2xl border border-[#c9ad6a]/25 bg-black/40 p-5">
              <div className="text-sm font-semibold text-[#f4efe6]">Finish</div>
              <div className="mt-1 text-sm text-[#eae5da]/80">Pressing, edge finishing, and couture packaging for shows and clients.</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c09?q=80&w=1800&auto=format&fit=crop"
            alt="Artisan embroidering intricate motifs"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl shadow-black/50"
          />
          <div className="absolute -bottom-5 -left-5 -z-10 h-44 w-44 rounded-2xl bg-gradient-to-tr from-emerald-700/30 to-[#c9ad6a]/30 blur-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
