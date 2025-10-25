import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c9ad6a]/30 px-3 py-1 text-[11px] tracking-[0.25em] text-[#eae5da]/70">
        CONTACT
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold text-[#f4efe6] md:text-4xl">Begin a Couture Conversation</h2>
          <p className="mt-3 max-w-xl text-[#eae5da]/80">
            For collaborations, showcases, and bespoke orders—share your brief and our team will respond within 1–2 business days.
          </p>

          <div className="mt-8 space-y-4 text-sm text-[#eae5da]/85">
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#c9ad6a]" /> <a href="tel:+917912345678" className="transition hover:text-[#c9ad6a]">+91 79 1234 5678</a></div>
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#c9ad6a]" /> <a href="mailto:info@madhavfashion.in" className="transition hover:text-[#c9ad6a]">info@madhavfashion.in</a></div>
            <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-[#c9ad6a]" /> <span>Udhna Industrial Area, Surat, Gujarat 394210, India</span></div>
            <div className="flex gap-4 pt-2 text-xs text-[#eae5da]/70">
              <a href="#" className="transition hover:text-[#c9ad6a]">Instagram</a>
              <a href="#" className="transition hover:text-[#c9ad6a]">LinkedIn</a>
              <a href="#" className="transition hover:text-[#c9ad6a]">Pinterest</a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            window.location.href = `mailto:info@madhavfashion.in?subject=Madhav%20Fashion%20Enquiry&body=${encodeURIComponent(
              `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nMessage: ${data.get("message")}`
            )}`;
          }}
          className="rounded-2xl border border-[#c9ad6a]/30 bg-black/40 p-6 backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="text-xs text-[#eae5da]/70">Full Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-[#c9ad6a]/30 bg-black/60 px-3 py-2 text-sm text-[#eae5da] placeholder-[#eae5da]/40 outline-none focus:border-[#c9ad6a]" placeholder="Your name" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-xs text-[#eae5da]/70">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-[#c9ad6a]/30 bg-black/60 px-3 py-2 text-sm text-[#eae5da] placeholder-[#eae5da]/40 outline-none focus:border-[#c9ad6a]" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-[#eae5da]/70">Phone</label>
              <input name="phone" className="mt-1 w-full rounded-lg border border-[#c9ad6a]/30 bg-black/60 px-3 py-2 text-sm text-[#eae5da] placeholder-[#eae5da]/40 outline-none focus:border-[#c9ad6a]" placeholder="Optional" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-[#eae5da]/70">Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg border border-[#c9ad6a]/30 bg-black/60 px-3 py-2 text-sm text-[#eae5da] placeholder-[#eae5da]/40 outline-none focus:border-[#c9ad6a]" placeholder="Tell us about your project, quantities, timelines…" />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-[#eae5da]/60">By submitting, you agree to be contacted by Madhav Fashion.</p>
            <button type="submit" className="rounded-full bg-gradient-to-r from-[#c9ad6a] to-[#e4cc8e] px-6 py-2.5 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(201,173,106,.6)] transition hover:shadow-[0_0_0_2px_rgba(201,173,106,.85)]">Send Enquiry</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
