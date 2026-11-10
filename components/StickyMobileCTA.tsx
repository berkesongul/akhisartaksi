"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div className="mobile-cta-bar">
      <motion.a
        href="tel:+905369225404"
        whileTap={{ scale: 0.96 }}
        className="pulse-cta flex items-center justify-center gap-3 bg-[#ffcc00] text-zinc-950 font-black text-base w-full py-4 rounded-2xl cursor-pointer"
        aria-label="Taksi çağır: 0536 922 54 04"
      >
        <Phone size={18} strokeWidth={2.5} />
        <span>7/24 TAKSİ ÇAĞIR</span>
        <span className="text-zinc-800 font-semibold text-sm">· 0536 922 54 04</span>
      </motion.a>
    </div>
  );
}
