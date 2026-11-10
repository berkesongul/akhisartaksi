"use client";

import { motion } from "framer-motion";
import { Car, CheckCircle2 } from "lucide-react";

const vehicles = [
  {
    Icon: Car,
    name: "Dacia Sandero",
    desc: "Şehir içi ve şehirlerarası yolculuklarınız için konforlu, ekonomik ve güvenilir binek taksi.",
    passengers: "1–4 kişi",
    features: ["Klima", "Geniş Bagaj", "USB Şarj", "Konforlu Koltuklar"],
    badge: "Taksi",
    featured: true,
  },
];

export default function FleetSection() {
  return (
    <section id="filo" className="section-wrapper section-wrapper--alt">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <div className="eyebrow mx-auto w-fit">
            <Car size={14} />
            Hizmet Aracımız
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white" style={{ marginBottom: "3rem" }}>
            Konforlu <span className="gradient-text">Araç Seçeneği</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg text-center">
            Bakımlı, temiz ve modern aracımızla Akhisar&apos;da
            ulaşım çok daha konforlu.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {vehicles.map((v) => (
            <div
              key={v.name}
              className="card-hover bg-zinc-950/40 border border-zinc-800/40 rounded-3xl p-8 max-w-md w-full"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{v.name}</h3>
              <p className="text-zinc-400 text-sm mb-4">{v.desc}</p>
              <div className="flex flex-col gap-2">
                {v.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-zinc-300 text-sm">
                    <CheckCircle2 size={16} className="text-[#ffcc00]" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
