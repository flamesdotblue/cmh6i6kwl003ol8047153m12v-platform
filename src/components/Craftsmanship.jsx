import React from "react";
import { motion } from "framer-motion";
import { Scissors, Shield, Sparkles, Camera } from "lucide-react";

const Step = ({ Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group rounded-2xl border border-[#c9ad6a]/25 bg-black/40 p-6 backdrop-blur hover:border-[#c9ad6a]/50"
  >
    <div className="mb-4 inline-flex rounded-xl border border-[#c9ad6a]/40 bg-black/50 p-3 text-[#c9ad6a]"><Icon className="h-5 w-5" /></div>
    <h4 className="text-lg font-semibold text-[#f4efe6]">{title}</h4>
    <p className="mt-2 text-sm text-[#eae5da]/80">{desc}</p>
  </motion.div>
);

const Craftsmanship = () => {
  return (
    <section id="craft" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c9ad6a]/30 px-3 py-1 text-[11px] tracking-[0.25em] text-[#eae5da]/70">
        CRAFTSMANSHIP
      </div>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-[#f4efe6] md:text-4xl">Behind the Seams</h3>
          <p className="mt-4 text-[#eae5da]/85">
            Our atelier is a sanctum of craft—where hand, needle, and thread create heirloom detail. We bring brocade, zardozi, aari, and beadwork into dialogue with modern silhouettes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Step Icon={Camera} title="Inspiration" desc="Moodboards, archival motifs, and couture palettes in champagne and emerald." />
            <Step Icon={Scissors} title="Sampling" desc="Swatches, stitch tests, and embellishment trials for perfect drape and depth." />
            <Step Icon={Shield} title="Quality" desc="Touch-point checks for fabric integrity, colorfastness, and finish." />
            <Step Icon={Sparkles} title="Finish" desc="Pressing, edge finishing, and couture packaging for shows and clients." />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#c9ad6a]/25">
            <div className="h-full w-full bg-fixed" style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2000&auto=format&fit=crop)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} />
          </div>
          <div className="absolute -top-5 -right-5 -z-10 h-44 w-44 rounded-2xl bg-gradient-to-tr from-emerald-700/30 to-[#c9ad6a]/30 blur-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Craftsmanship;
