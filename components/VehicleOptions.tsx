"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Briefcase, CheckCircle2, Sparkles } from "lucide-react";

import sanderoImg from "@/app/Taksi/daciasandero.png";

const vehicles = [
  {
    name: "Dacia Sandero",
    subtitle: "Konforlu & Ekonomik Binek Taksi",
    image: sanderoImg,
    passengers: "1-4 Yolcu",
    luggage: "2-3 Valiz",
    desc: "Tüm periyodik bakımları eksiksiz yapılan, klimalı ve ferah Dacia Sandero aracımız ile hem Akhisar içi seyahatlerinizde hem de şehirlerarası ve havalimanı transferlerinizde ekonomik, güvenli ve huzurlu bir yolculuk sunuyoruz.",
    features: [
      "Klima & Konforlu İç Mekan",
      "Geniş ve Temiz Bagaj Kapasitesi",
      "Periyodik Bakımlı ve Güvenli Araç",
      "7/24 Kesintisiz Hizmet",
    ],
    accent: "Konforlu Binek Taksi",
  },
];

export default function VehicleOptions() {
  return (
    <section id="araclar" className="section-wrapper bg-[#0a0a0c]">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
          style={{ marginBottom: "2rem" }}
        >
          <div className="eyebrow mx-auto w-fit mb-4">
            <Sparkles size={14} className="text-[#ffcc00]" />
            Hizmet Aracımız
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white" style={{ marginBottom: "1.5rem" }}>
            Araç <span className="gradient-text">Seçeneğimiz</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg text-center">
            Siz değerli yolcularımız için özenle hazırlanan, periyodik bakımları ve temizliği
            düzenli yapılan aracımız ile güvenli ve konforlu yolculuklar.
          </p>
        </motion.div>

        {/* Vehicles List */}
        <div className="flex flex-col gap-12 sm:gap-16 max-w-5xl mx-auto">
          {vehicles.map((v) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center bg-zinc-950/40 border border-zinc-800/40 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Vehicle Image */}
              <div className="lg:col-span-6 flex justify-center items-center relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900/60 to-zinc-950/20 border border-zinc-800/30 group p-6">
                <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[320px] flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter brightness-95 group-hover:brightness-100 transition-all"
                    priority
                  />
                </div>
              </div>

              {/* Vehicle Specifications */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="bg-[#ffcc00]/10 text-[#ffcc00] border border-[#ffcc00]/25 text-xs font-semibold px-3 py-1 rounded-full w-fit">
                    {v.accent}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {v.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#ffcc00] tracking-wider uppercase">
                    {v.subtitle}
                  </p>
                </div>

                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                  {v.desc}
                </p>

                {/* Core details */}
                <div className="grid grid-cols-2 gap-4 bg-zinc-900/40 border border-zinc-800/30 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center flex-shrink-0">
                      <Users size={18} className="text-[#ffcc00]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Kapasite</span>
                      <span className="text-sm font-semibold text-zinc-300">{v.passengers}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={18} className="text-[#ffcc00]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Bagaj</span>
                      <span className="text-sm font-semibold text-zinc-300">{v.luggage}</span>
                    </div>
                  </div>
                </div>

                {/* Features list */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Öne Çıkan Özellikler</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {v.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-zinc-400 text-sm">
                        <CheckCircle2 size={16} className="text-[#ffcc00] flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
