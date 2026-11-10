"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import sanderoImg from "@/app/Taksi/daciasandero.png";

export default function Hero() {
  const go = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative h-auto lg:min-h-[100svh] flex items-start lg:items-center overflow-hidden bg-[#09090b] pt-28 lg:pt-0">

      {/* ── Background: banner image + dark overlay ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/backgrounds/banner.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Strong black overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,204,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,0,1) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      {/* ── Content Container ── */}
      <div className="relative z-10 w-full container pt-8 lg:pt-40 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-8 sm:gap-10 lg:gap-12"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="eyebrow w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffcc00] animate-pulse" />
              7/24 Aktif · Akhisar
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-[4.2rem] font-black tracking-tight text-white leading-[1.15]"
            >
              Akhisar&apos;da{" "}
              <span className="gradient-text">Hızlı ve Güvenilir</span>{" "}
              Ulaşım
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="text-lg text-white leading-relaxed max-w-2xl drop-shadow-sm"
            >
              Konforlu, dakik ve profesyonel taksi deneyimi. Akhisar Otogar, Tren Garı,
              Devlet Hastanesi ve çevre tüm ilçelere — kesintisiz 7/24 hizmetinizdeyiz.
            </motion.p>

            {/* Address chip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 text-base text-zinc-400"
            >
              <MapPin size={16} className="text-[#ffcc00] flex-shrink-0" />
              Efendi Mah. 272. Sok. No:2 Akhisar/Manisa
            </motion.div>

            {/* ── Unified massive CTA card ── */}
            <motion.a
              href="tel:+905369225404"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
              aria-label="Taksi çağır: 0536 922 54 04"
              className="pulse-cta group mt-4 bg-[#ffcc00] hover:bg-[#ffe066] text-zinc-950 rounded-3xl shadow-[0_0_40px_rgba(255,204,0,0.15)] transition-all flex items-center gap-4 sm:gap-6 cursor-pointer max-w-md w-full"
              style={{ padding: "1.75rem 2.5rem" }}
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-zinc-950/10 flex items-center justify-center">
                <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-zinc-950" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-zinc-800">
                  Hemen Taksi Çağır
                </span>
                <span className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight leading-none truncate">
                  0536 922 54 04
                </span>
              </div>
              <ArrowRight
                className="ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6"
              />
            </motion.a>

            {/* Secondary action */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => go("#fiyatlar")}
              className="flex items-center gap-2 text-base text-zinc-500 hover:text-white transition-colors w-fit pt-4 cursor-pointer"
            >
              Fiyat listesini görüntüle
              <ChevronDown size={16} />
            </motion.button>
          </motion.div>

          {/* ── RIGHT: 5 cols — car image with huge negative space ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center mt-12 mb-16 lg:mt-0 lg:mb-0"
          >
            {/* Glow aura */}
            <div className="absolute -z-10 w-[480px] h-[480px] rounded-full bg-gradient-to-r from-yellow-500/15 to-transparent blur-[100px]" />

            {/* Image */}
            <div className="relative w-full max-w-[640px]">
              <Image
                src={sanderoImg}
                alt="Akhisar Taksi — Dacia Sandero"
                width={800}
                height={550}
                className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
                priority
              />

              {/* Floating info chip */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="relative lg:absolute mt-12 lg:mt-0 lg:-bottom-24 mx-auto lg:left-1/2 lg:-translate-x-1/2 glass-card rounded-3xl px-8 lg:px-14 py-5 lg:py-7 flex items-center justify-center gap-8 lg:gap-14 w-[95%] sm:w-auto border-zinc-700/50 shadow-[0_24px_50px_rgba(0,0,0,0.7)] whitespace-nowrap"
              >
                <div className="text-center min-w-[110px] sm:min-w-[140px] px-2">
                  <p className="text-[11px] text-zinc-500 uppercase tracking-widest mb-1.5">Firma</p>
                  <p className="text-base font-bold text-white">Akhisar Taksi</p>
                </div>
                <div className="w-px h-12 bg-zinc-700/60" />
                <div className="text-center min-w-[80px] sm:min-w-[110px] px-2">
                  <p className="text-[11px] text-zinc-500 uppercase tracking-widest mb-1.5">Durum</p>
                  <p className="text-base font-bold text-[#ffcc00]">Aktif</p>
                </div>
                <div className="w-px h-12 bg-zinc-700/60" />
                <div className="text-center min-w-[80px] sm:min-w-[110px] px-2">
                  <p className="text-[11px] text-zinc-500 uppercase tracking-widest mb-1.5">Hizmet</p>
                  <p className="text-base font-bold text-white">7/24</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
