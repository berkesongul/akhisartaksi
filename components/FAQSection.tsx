"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Hizmet saatleriniz nelerdir?",
    a: "Akhisar Taksi olarak haftanın 7 günü, günün 24 saati kesintisiz (gece ve gündüz dahil) olarak hizmetinizdeyiz. Dilediğiniz saatte bizi arayarak güvenle seyahat edebilirsiniz.",
  },
  {
    q: "Şehirler arası seyahat veya transfer imkanınız var mı?",
    a: "Evet, sadece Akhisar içi değil; Soma, Kırkağaç, Gölmarmara, Saruhanlı, Manisa, İzmir ve İzmir Adnan Menderes Havalimanı başta olmak üzere dilediğiniz her noktaya konforlu transfer hizmeti sunuyoruz.",
  },
  {
    q: "Fiyatlarınız nasıl belirleniyor? Sabit fiyat alabilir miyim?",
    a: "Şehir içi ulaşımlarda güncel taksimetre tarifesi uygulanmaktadır. Şehirler arası yolculuklar, otogar ve havalimanı transferleri için ise yola çıkmadan önce bizimle iletişime geçerek net ve sabit fiyat teklifi alabilirsiniz.",
  },
  {
    q: "Aracınızın kapasitesi ve bagaj durumu nedir?",
    a: "Hizmet verdiğimiz Dacia Sandero aracımız 1-4 yolcu kapasiteli olup geniş bir bagaj hacmine sahiptir. Hem günlük seyahatlerinizde hem de otogar veya havalimanı valizlerinizle birlikte rahatça seyahat edebilirsiniz.",
  },
  {
    q: "Aracınızın temizliği ve bakımları ne sıklıkla yapılıyor?",
    a: "Aracımızın periyodik mekanik bakımları ve muayeneleri zamanında yetkili servislerde yapılmaktadır. Yolcu sağlığı ve konforu için araç içi temizlik ve dezenfeksiyon işlemleri düzenli olarak gerçekleştirilmektedir.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="section-wrapper bg-[#09090b]">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
          style={{ marginBottom: "3rem" }}
        >
          <div className="eyebrow mx-auto w-fit mb-4">
            <HelpCircle size={14} className="text-[#ffcc00]" />
            Sıkça Sorulan Sorular
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Merak <span className="gradient-text">Edilenler</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg text-center" style={{ marginTop: "1rem" }}>
            Akhisar Taksi hizmetlerimiz, fiyatlandırma politikalarımız ve aracımız hakkında en çok sorulan soruları yanıtladık.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4" style={{ marginLeft: "auto", marginRight: "auto", width: "100%", maxWidth: "64rem" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className={`bg-zinc-950/40 border rounded-[2rem] overflow-hidden backdrop-blur-sm transition-all duration-300 ${
                  isOpen ? "border-[#ffcc00]/30 bg-zinc-900/10 shadow-[0_0_30px_rgba(255,204,0,0.02)]" : "border-zinc-800/40 hover:border-zinc-700/60"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between text-left outline-none cursor-pointer"
                  style={{
                    paddingTop: "2.5rem",
                    paddingBottom: "2.5rem",
                    paddingLeft: "3.5rem",
                    paddingRight: "3.5rem",
                  }}
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] sm:text-[17px] font-bold text-white pr-4">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 border-[#ffcc00]/30 text-[#ffcc00]" : "text-zinc-400"
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div
                        className="text-zinc-400 text-[13px] sm:text-[15px] leading-relaxed border-t border-zinc-900/60"
                        style={{
                          paddingLeft: "3.5rem",
                          paddingRight: "3.5rem",
                          paddingBottom: "2.5rem",
                          paddingTop: "1.5rem",
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
