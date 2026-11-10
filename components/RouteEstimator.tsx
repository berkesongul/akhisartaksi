"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight, Phone } from "lucide-react";

const routes = [
  { from: "Akhisar Şehir Merkezi", to: "Akhisar Otogarı", time: "~8 dk", price: "₺140 – ₺170", km: "4 km", type: "Şehir İçi" },
  { from: "Akhisar Merkez", to: "Akhisar Tren Garı", time: "~6 dk", price: "₺120 – ₺150", km: "2.5 km", type: "Şehir İçi" },
  { from: "Efendi Mahallesi", to: "Çarşı / Merkez", time: "~5 dk", price: "₺110 – ₺140", km: "2 km", type: "Şehir İçi" },
  { from: "Akhisar Merkez", to: "Mustafa Kirazoğlu D. Hastanesi", time: "~10 dk", price: "₺170 – ₺210", km: "5.5 km", type: "Şehir İçi" },
  { from: "Akhisar Merkez", to: "Akhisar OSB", time: "~15 dk", price: "₺380 – ₺450", km: "12 km", type: "Şehir İçi" },
  { from: "Akhisar Merkez", to: "Kırkağaç", time: "~25 dk", price: "₺850 – ₺950", km: "28 km", type: "Şehirlerarası" },
  { from: "Akhisar Merkez", to: "Gölmarmara", time: "~25 dk", price: "₺800 – ₺900", km: "27 km", type: "Şehirlerarası" },
  { from: "Akhisar Merkez", to: "Soma", time: "~35 dk", price: "₺1.200 – ₺1.350", km: "40 km", type: "Şehirlerarası" },
  { from: "Akhisar Merkez", to: "Saruhanlı", time: "~30 dk", price: "₺1.050 – ₺1.200", km: "35 km", type: "Şehirlerarası" },
  { from: "Akhisar Merkez", to: "Manisa Merkez", time: "~40 dk", price: "₺1.500 – ₺1.700", km: "50 km", type: "Şehirlerarası" },
  { from: "Akhisar", to: "İzmir Şehir Merkezi", time: "~1 saat 15 dk", price: "₺2.700 – ₺3.000", km: "88 km", type: "Şehirlerarası" },
  { from: "Akhisar", to: "İzmir Adnan Menderes HL", time: "~1.5 saat", price: "₺3.500 – ₺3.900", km: "115 km", type: "Transfer" },
];

const typeBadge: Record<string, string> = {
  "Şehir İçi": "bg-blue-950/60 text-blue-400 border border-blue-800/50",
  Transfer: "bg-purple-950/60 text-purple-400 border border-purple-800/50",
  Şehirlerarası: "bg-[#ffcc00]/10 text-[#ffcc00] border border-[#ffcc00]/25",
};

export default function RouteEstimator() {
  return (
    <section id="fiyatlar" className="section-wrapper section-wrapper--alt">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <div className="eyebrow mx-auto w-fit">Tahmini Fiyatlar</div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white" style={{ marginBottom: "1.5rem" }}>
            Popüler <span className="gradient-text">Güzergahlar</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg text-center">
            Fiyatlar ortalama mesafe ve güncel taksimetre tarifeleri baz alınarak tahmin edilmiştir.
            Şehirlerarası ve özel transferler için yola çıkmadan önce sabit fiyat alabilirsiniz.
          </p>
        </motion.div>

        {/* Route rows */}
        <div className="flex flex-col gap-5" style={{ marginBottom: "4rem" }}>
          {routes.map((r, i) => (
            <motion.div
              key={`${r.from}-${r.to}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="card-hover bg-zinc-950/40 border border-zinc-800/40 rounded-3xl flex flex-col md:flex-row md:items-center gap-6 justify-between p-6 sm:p-10 lg:p-12"
            >
              {/* Route */}
              <div className="flex items-center gap-6 flex-1 min-w-0">
                {/* Dot connector */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffcc00]" />
                  <div className="w-[2px] h-9 bg-gradient-to-b from-[#ffcc00]/60 to-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                </div>
                <div className="flex flex-col gap-2.5 min-w-0">
                  <p className="text-base sm:text-lg font-bold text-white flex flex-wrap items-center gap-2">
                    <MapPin size={14} className="text-[#ffcc00] flex-shrink-0" />
                    <span>{r.from}</span>
                  </p>
                  <p className="text-base sm:text-[17px] text-zinc-500 flex flex-wrap items-center gap-2">
                    <MapPin size={14} className="text-zinc-650 flex-shrink-0" />
                    <span>{r.to}</span>
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-between md:justify-end gap-6 sm:gap-8 md:gap-12 flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Clock size={16} />
                    <span className="text-sm font-medium">{r.time}</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-zinc-600">
                    <ArrowRight size={16} />
                    <span className="text-sm">{r.km}</span>
                  </div>
                  <span className={`text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wide ${typeBadge[r.type]}`}>
                    {r.type}
                  </span>
                </div>
                <div className="text-right min-w-[120px] sm:min-w-[140px] lg:min-w-[160px]">
                  <p className="text-[11px] text-zinc-600 uppercase tracking-wider mb-1.5">Tahmini</p>
                  <p className="text-xl lg:text-2xl font-black text-[#ffcc00]">{r.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-zinc-500 text-base" style={{ marginBottom: "2rem" }}>Özel güzergah veya sabit fiyat teklifi için:</p>
          <motion.a
            href="tel:+905369225404"
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-5 bg-[#ffcc00] text-zinc-950 font-bold rounded-full hover:bg-[#ffe066] transition-all accent-glow cursor-pointer"
            style={{
              padding: "1.2rem 2.2rem",
              fontSize: "1.3rem"
            }}
          >
            <Phone size={26} strokeWidth={2.5} />
            0536 922 54 04
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
