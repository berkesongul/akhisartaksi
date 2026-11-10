"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingCallWidget() {
  return (
    <motion.a
      href="tel:+905369225404"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-row fixed bottom-24 md:bottom-8 right-6 md:right-8 z-50 items-center justify-center h-[4.5rem] min-w-[120px] px-9 bg-[#ffcc00] text-zinc-950 rounded-full shadow-[0_8px_30px_rgba(255,204,0,0.3)] hover:bg-[#ffe066] transition-colors cursor-pointer group gap-3.5 whitespace-nowrap"
      aria-label="Taksi Çağır: 0536 922 54 04"
    >
      {/* Pulsing ring aura */}
      <div className="absolute inset-0 rounded-full bg-[#ffcc00] opacity-40 animate-ping -z-10 group-hover:opacity-0" />

      <Phone size={23} strokeWidth={2.8} className="text-zinc-950" />
      <span className="font-black text-[17px] tracking-wider text-zinc-950 uppercase leading-none">ARA</span>
    </motion.a>
  );
}
