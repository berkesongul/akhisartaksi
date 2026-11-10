"use client";

import { motion } from "framer-motion";
import { Clock, Car, Shield, Zap, BadgeCheck, Globe } from "lucide-react";
import Image from "next/image";

const features = [
  {
    Icon: Clock,
    title: "7/24 Kesintisiz Hizmet",
    desc: "Gece ya da gündüz, haftanın 7 günü 24 saat hizmetinizdeyiz. Akhisar'da dilediğiniz saatte taksiniz hazır.",
  },
  {
    Icon: Car,
    title: "Temiz ve Bakımlı Araç",
    desc: "Düzenli dezenfekte edilen, klimalı ve konforlu Dacia Sandero ile keyifli ve ferah bir seyahat deneyimi.",
  },
  {
    Icon: Shield,
    title: "Güvenli & Profesyonel",
    desc: "Bölgeyi çok iyi bilen, deneyimli sürücümüz ile her zaman en kestirme ve en güvenli güzergah.",
  },
  {
    Icon: Zap,
    title: "Hızlı Karşılama",
    desc: "Akhisar genelinde dakikalar içinde kapınızda. Otogar ve tren garında beklemeden karşılama imkanı.",
  },
  {
    Icon: BadgeCheck,
    title: "Şeffaf Fiyatlandırma",
    desc: "Sürpriz ek ücret yok. Şehirlerarası ve özel transferlerde yolculuk öncesi net fiyat garantisi.",
  },
  {
    Icon: Globe,
    title: "Şehirlerarası & Transfer",
    desc: "Manisa, İzmir, Soma, Kırkağaç ve havalimanı başta olmak üzere tüm çevre noktalara konforlu transfer.",
  },
];

export default function TrustBadges() {
  return (
    <section id="hizmetler" className="relative section-wrapper overflow-hidden bg-[#09090b]">
      
      {/* ── Background: backgrounds/1.png + black overlays ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/backgrounds/1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <div className="eyebrow mx-auto w-fit">Neden Akhisar Taksi?</div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white" style={{ marginBottom: "2rem" }}>
            Ayrıcalıklı Hizmet <span className="gradient-text">Deneyimi</span>
          </h2>
          <p className="text-zinc-400 w-full max-w-2xl mx-auto leading-relaxed text-lg text-center block">
            Akhisar&apos;ın güvenilir taksi hizmeti olarak, her yolculukta
            müşteri memnuniyetini ve güvenliği ilk sırada tutuyoruz.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card-hover bg-zinc-950/40 border border-zinc-800/40 rounded-3xl p-10 sm:p-12 lg:p-14 backdrop-blur-sm flex flex-col items-center text-center gap-6 min-h-[300px] justify-center"
            >
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <Icon size={36} className="text-[#ffcc00]" strokeWidth={1.8} />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-base text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
