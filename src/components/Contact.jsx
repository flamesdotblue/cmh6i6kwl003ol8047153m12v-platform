import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b08d57]/30 px-3 py-1 text-xs tracking-widest text-[#e9e4d9]/70">
            CONTACT US
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-[#f4efe6] md:text-4xl">Let’s Create Something Regal</h2>
          <p className="mt-3 max-w-xl text-[#e9e4d9]/80">
            Whether you’re a fashion house, boutique, or exhibition partner, we’d love to collaborate. Share your requirements and our team will respond within 1–2 business days.
          </p>

          <div className="mt-8 space-y-4 text-sm text-[#e9e4d9]/80">
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#b08d57]" /> <a href="tel:+917912345678" className="hover:text-[#b08d57]">+91 79 1234 5678</a></div>
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#b08d57]" /> <a href="mailto:info@madhavfashion.in" className="hover:text-[#b08d57]">info@madhavfashion.in</a></div>
            <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-[#b08d57]" />
              <span>Udhna Industrial Area, Surat, Gujarat 394210, India</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const params = new URLSearchParams();
            for (const [key, value] of data.entries()) params.append(key, value);
            window.location.href = `mailto:info@madhavfashion.in?subject=Madhav%20Fashion%20Enquiry&body=${encodeURIComponent(
              `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nMessage: ${data.get("message")}`
            )}`;
          }}
          className="rounded-2xl border border-[#b08d57]/30 bg-[#0b132b]/40 p-6 backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="text-xs text-[#e9e4d9]/70">Full Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-[#b08d57]/30 bg-[#0b132b]/60 px-3 py-2 text-sm text-[#e9e4d9] placeholder-[#e9e4d9]/40 outline-none focus:border-[#b08d57]" placeholder="Your name" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-xs text-[#e9e4d9]/70">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-[#b08d57]/30 bg-[#0b132b]/60 px-3 py-2 text-sm text-[#e9e4d9] placeholder-[#e9e4d9]/40 outline-none focus:border-[#b08d57]" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-[#e9e4d9]/70">Phone</label>
              <input name="phone" className="mt-1 w-full rounded-lg border border-[#b08d57]/30 bg-[#0b132b]/60 px-3 py-2 text-sm text-[#e9e4d9] placeholder-[#e9e4d9]/40 outline-none focus:border-[#b08d57]" placeholder="Optional" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-[#e9e4d9]/70">Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg border border-[#b08d57]/30 bg-[#0b132b]/60 px-3 py-2 text-sm text-[#e9e4d9] placeholder-[#e9e4d9]/40 outline-none focus:border-[#b08d57]" placeholder="Tell us about your project, quantities, timelines…" />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-[#e9e4d9]/60">By submitting, you agree to be contacted by Madhav Fashion.</p>
            <button type="submit" className="rounded-full bg-gradient-to-r from-[#b08d57] to-[#caa56b] px-6 py-2.5 text-sm font-semibold text-[#1a1a1a] shadow-[0_0_0_1px_rgba(176,141,87,.6)] transition hover:shadow-[0_0_0_2px_rgba(176,141,87,.9)]">Send Enquiry</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
