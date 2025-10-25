import React from "react";
import { motion } from "framer-motion";
import { Scissors, Palette, Shield, Sparkles } from "lucide-react";

const Step = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group rounded-2xl border border-[#b08d57]/20 bg-[#0b132b]/40 p-6 backdrop-blur hover:border-[#b08d57]/50"
  >
    <div className="mb-4 inline-flex rounded-xl border border-[#b08d57]/30 bg-[#0b132b]/60 p-3 text-[#b08d57]">
      <Icon className="h-5 w-5" />
    </div>
    <h4 className="text-lg font-semibold text-[#f4efe6]">{title}</h4>
    <p className="mt-2 text-sm text-[#e9e4d9]/75">{desc}</p>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold text-[#f4efe6] md:text-4xl">Heritage of Excellence from Surat</h2>
          <p className="mt-4 text-[#e9e4d9]/80">
            For over a decade, Madhav Fashion has perfected the art of embroidery in the heart of Surat, Gujarat. We specialize in exquisite detailing for women’s couture and regal sherwanis for men—where every stitch reflects royal sophistication and modern finesse.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl border border-[#b08d57]/30 bg-[#0b132b]/40 p-4">
              <div className="text-2xl font-semibold text-[#b08d57]">10+ </div>
              <div className="text-xs text-[#e9e4d9]/70">Years Crafting</div>
            </div>
            <div className="rounded-xl border border-[#b08d57]/30 bg-[#0b132b]/40 p-4">
              <div className="text-2xl font-semibold text-[#b08d57]">5000+</div>
              <div className="text-xs text-[#e9e4d9]/70">Designs Delivered</div>
            </div>
            <div className="rounded-xl border border-[#b08d57]/30 bg-[#0b132b]/40 p-4">
              <div className="text-2xl font-semibold text-[#b08d57]">Premium</div>
              <div className="text-xs text-[#e9e4d9]/70">Quality Assured</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c09?q=80&w=1600&auto=format&fit=crop"
            alt="Artisan embroidering intricate patterns in a luxe studio"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl shadow-[#000]/40"
          />
          <div className="absolute -bottom-4 -left-4 -z-10 h-44 w-44 rounded-2xl bg-gradient-to-tr from-[#7a0019]/30 to-[#b08d57]/30 blur-lg" />
        </motion.div>
      </div>

      {/* Process */}
      <div className="mt-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b08d57]/30 px-3 py-1 text-xs tracking-widest text-[#e9e4d9]/70">
          <Sparkles className="h-4 w-4 text-[#b08d57]" /> OUR PROCESS
        </div>
        <h3 className="text-2xl font-semibold text-[#f4efe6] md:text-3xl">Design to Finish, Crafted to Perfection</h3>
        <p className="mt-3 max-w-3xl text-[#e9e4d9]/75">
          From concept sketches to the final stitch, our atelier blends hand craftsmanship with precision-led production. Each ensemble is inspected to meet couture standards.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Step icon={Palette} title="Design" desc="Concept development, motif curation, and royal-inspired palettes." />
          <Step icon={Scissors} title="Sampling" desc="Test swatches, beadwork trials, and stitch perfection." />
          <Step icon={Shield} title="Quality" desc="Rigorous checks for fabric integrity, finish, and durability." />
          <Step icon={Sparkles} title="Finish" desc="Pressing, packaging, and on-time delivery for showcases and clients." />
        </div>
      </div>
    </section>
  );
};

export default About;
