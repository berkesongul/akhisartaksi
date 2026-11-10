"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Navigation2 } from "lucide-react";

const localZones = [
  "Akhisar Otogarı",
  "Akhisar Tren Garı",
  "M. Kirazoğlu Devlet Hastanesi",
  "Tahir Ün Caddesi (Çarşı)",
  "Efendi Mahallesi",
  "Hilaliye Caddesi",
  "Akhisar OSB",
  "Şehit Necdi Şentürk Parkı",
  "Akhisar Stadyumu",
  "Gölet Mevkii",
];

const intercityRoutes = [
  { from: "Akhisar", to: "Manisa", time: "~40 dk" },
  { from: "Akhisar", to: "İzmir", time: "~1 saat 15 dk" },
  { from: "Akhisar", to: "Soma", time: "~35 dk" },
  { from: "Akhisar", to: "Kırkağaç", time: "~25 dk" },
  { from: "Akhisar", to: "Balıkesir", time: "~1 saat" },
  { from: "Akhisar", to: "İzmir Adnan Menderes HL", time: "~1.5 saat" },
];

export default function ServiceZones() {
  return (
    <section id="bolgeler" className="section-wrapper">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
          style={{ marginBottom: "1.5rem" }}
        >
          <div className="eyebrow mx-auto w-fit">
            <Navigation2 size={14} />
            Hizmet Bölgeleri
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white" style={{ marginBottom: "1.5rem" }}>
            Akhisar&apos;ın Her Noktasına{" "}
            <span className="gradient-text">Ulaşım</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg text-center">
            Şehir içi her mahalle, otogar, tren garı, hastaneler ve çevre ilçelere —
            7/24 kesintisiz ve konforlu taksi hizmeti.
          </p>
        </motion.div>

        {/* ── Local zone chips ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4" style={{ marginBottom: "2rem" }}>
            <MapPin size={18} className="text-[#ffcc00]" />
            <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
              Akhisar İçi Noktalar
            </span>
          </div>
          <div className="flex flex-wrap gap-4 lg:gap-5" style={{ marginTop: "1rem" }}>
            {localZones.map((z, i) => (
              <motion.span
                key={z}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                className="tag-chip text-base sm:text-lg"
                style={{
                  paddingTop: "0.85rem",
                  paddingBottom: "0.85rem",
                  paddingLeft: "1.75rem",
                  paddingRight: "1.75rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                <MapPin size={16} />
                {z}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ── Intercity routes — dashboard rows ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{ marginTop: "3rem" }}
        >
          <div className="flex items-center gap-4" style={{ marginBottom: "2rem" }}>
            <Navigation2 size={18} className="text-[#ffcc00]" />
            <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
              Çevre İlçeler ve Şehirlerarası Transfer
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {intercityRoutes.map((r, i) => (
              <motion.div
                key={`${r.from}-${r.to}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-hover bg-zinc-950/40 border border-zinc-800/40 rounded-3xl flex justify-between items-center group gap-6 min-h-[110px]"
                style={{
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                  paddingLeft: "2.5rem",
                  paddingRight: "2.5rem"
                }}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Güzergah</span>
                    <div className="flex flex-wrap items-center gap-2 text-base lg:text-lg font-bold text-white">
                      <span>{r.from}</span>
                      <ArrowRight size={16} className="text-[#ffcc00] flex-shrink-0" />
                      <span>{r.to}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2">Tahmini Süre</span>
                  <span className="text-base font-semibold text-zinc-300">{r.time}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-zinc-500" style={{ marginTop: "2rem" }}>
            Farklı bir güzergah veya özel transfer için{" "}
            <a href="tel:+905369225404" className="text-[#ffcc00] hover:underline font-semibold">
              bizi arayın
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
