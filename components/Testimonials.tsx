"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Ahmet Yılmaz", role: "Yolcu", rating: 5, text: "Akhisar Otogarı'na yetişmem gerekiyordu, aradıktan 5 dakika sonra kapımdaydı. Araç tertemizdi ve sürücü çok kibardı. Teşekkürler.", date: "Mayıs 2025" },
  { name: "Fatma Kaya", role: "Öğrenci", rating: 5, text: "Efendi Mahallesi'nden çarşıya ve tren garına sık sık kullanıyorum. Her seferinde dakik ve çok güvenilir. Akhisar'da gözü kapalı tercih edilir.", date: "Nisan 2025" },
  { name: "Mehmet Demir", role: "İş Seyahatçisi", rating: 5, text: "Akhisar'dan Manisa merkeze iş için transfer hizmeti aldım. Sandero gayet konforluydu, sürüş güvenli ve zamanında ulaştım.", date: "Haziran 2025" },
  { name: "Ayşe Çelik", role: "Yerel Müşteri", rating: 5, text: "Gece geç saatte Devlet Hastanesi'ne acil gitmemiz gerekti, hemen geldiler. 7/24 hizmet vaadine gerçekten sadık bir taksici.", date: "Mart 2025" },
  { name: "Emre Arslan", role: "Esnaf", rating: 5, text: "Akhisar Taksi'yi sürekli tercih ediyorum. Ne zaman arasam hemen açıyorlar, araç içi çok temiz ve sigara kokusu yok.", date: "Mayıs 2025" },
  { name: "Zeynep Koç", role: "Yolcu", rating: 5, text: "İzmir Adnan Menderes Havalimanı transferi için sabah erken saatte anlaştık. Tam vaktinde kapımdaydı, çok memnun kaldım.", date: "Nisan 2025" },
];

function ReviewCard({ r }: { r: (typeof reviews)[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[85vw] sm:w-[23rem] bg-zinc-950/40 border border-zinc-800/40 rounded-3xl flex flex-col gap-8 backdrop-blur-sm hover:border-zinc-700/60 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
      style={{
        padding: "2.5rem",
        marginLeft: "1.75rem",
        marginRight: "1.75rem",
      }}
    >
      <div className="flex items-start justify-between">
        <Quote size={24} className="text-[#ffcc00]/30" />
        <div className="flex gap-1">
          {Array.from({ length: r.rating }).map((_, i) => (
            <Star key={i} size={16} className="star-filled" />
          ))}
        </div>
      </div>
      <p className="text-base text-zinc-400 leading-relaxed flex-1">
        &ldquo;{r.text}&rdquo;
      </p>
      <div className="flex items-center justify-between pt-5 border-t border-zinc-800/60">
        <div>
          <p className="text-base font-semibold text-white mb-1">{r.name}</p>
          <p className="text-sm text-zinc-600">{r.role}</p>
        </div>
        <p className="text-sm text-zinc-700">{r.date}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let animId: number;
    const speed = 0.55;

    const animate = () => {
      pos += speed;
      const half = track.scrollWidth / 2;
      if (pos >= half) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animId);
    const resume = () => { animId = requestAnimationFrame(animate); };
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  const doubled = [...reviews, ...reviews];

  return (
    <section id="yorumlar" className="section-wrapper overflow-hidden">
      <div className="container mb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <div className="eyebrow mx-auto w-fit mb-6">
            <Star size={10} className="fill-[#ffcc00]" />
            Müşteri Yorumları
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white" style={{ marginBottom: "1rem" }}>
            Müşterilerimiz <span className="gradient-text">Ne Diyor?</span>
          </h2>
          <p style={{ textAlign: "center", marginBottom: "1.5rem", marginLeft: "auto", marginRight: "auto", maxWidth: "30rem", display: "block" }} className="text-zinc-400 text-lg leading-relaxed">
            Akhisar ve çevresinde yüzlerce memnun yolcumuzun gerçek değerlendirmeleri.
          </p>
          {/* Score pill */}
          <div
            className="inline-flex items-center bg-zinc-870/60 border border-zinc-700/80 rounded-2xl"
            style={{
              paddingTop: "1.25rem",
              paddingBottom: "1.25rem",
              paddingLeft: "2.5rem",
              paddingRight: "2.5rem",
              gap: "2.25rem",
              marginBottom: "1.5rem"
            }}
          >
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={20} className="star-filled" />)}
            </div>
            <span className="text-3xl font-black text-white">5.0</span>
            <span className="text-base text-zinc-500">/ 5.0 Memnuniyet</span>
          </div>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#09090b] to-transparent z-50 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#09090b] to-transparent z-50 pointer-events-none" />
        <div ref={trackRef} className="flex will-change-transform" style={{ width: "max-content" }}>
          {doubled.map((r, i) => <ReviewCard key={i} r={r} />)}
        </div>
      </div>
    </section>
  );
}
