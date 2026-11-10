"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle, Clock, Navigation } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    tripType: "Şehir İçi",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        tripType: "Şehir İçi",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="iletisim" className="section-wrapper bg-[#0d0d10] border-t border-zinc-900/40">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
          style={{ marginBottom: "4rem" }}
        >
          <div className="eyebrow mx-auto w-fit mb-4">
            <Mail size={14} className="text-[#ffcc00]" />
            İletişim Formu
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Bize <span className="gradient-text">Ulaşın</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg text-center" style={{ marginTop: "1rem" }}>
            Hemen taksi çağırmak, fiyat teklifi almak veya şehirlerarası transfer rezervasyonu oluşturmak için formu doldurabilir veya doğrudan arayabilirsiniz.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch" style={{ marginLeft: "auto", marginRight: "auto", width: "100%", maxWidth: "72rem" }}>
          
          {/* Left Side: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Rapid Call Box */}
            <div className="bg-[#ffcc00]/10 border border-[#ffcc00]/20 rounded-[2rem] flex flex-col gap-4 shadow-[0_10px_30px_rgba(255,204,0,0.02)]" style={{ padding: "2.5rem 3rem" }}>
              <span className="text-xs font-bold text-[#ffcc00] tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffcc00] animate-pulse" />
                Hızlı İletişim Hattı
              </span>
              <a
                href="tel:+905369225404"
                className="text-2xl sm:text-3xl font-black text-white hover:text-[#ffcc00] transition-colors flex items-center gap-3 w-fit"
              >
                <Phone size={28} className="text-[#ffcc00]" />
                0536 922 54 04
              </a>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Telefon aramasıyla birkaç dakika içerisinde taksiniz kapınızda olur.
              </p>
            </div>

            {/* General Info Card */}
            <div className="bg-zinc-950/40 border border-zinc-800/40 rounded-[2rem] flex flex-col gap-6 backdrop-blur-sm flex-1 justify-between" style={{ padding: "2.5rem 3rem" }}>
              <div className="flex flex-col gap-6">
                {/* Durak / Hizmet */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#ffcc00] flex-shrink-0">
                    <Navigation size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Hizmet Bölgesi</h4>
                    <p className="text-zinc-400 text-sm">Akhisar & Tüm Çevre İlçeler</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#ffcc00] flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Çalışma Saatleri</h4>
                    <p className="text-zinc-400 text-sm">7 Gün / 24 Saat (Resmi tatiller dahil)</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#ffcc00] flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Adres</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Efendi Mah. 272. Sok. No:2 Akhisar/Manisa
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#ffcc00] flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">E-Posta</h4>
                    <p className="text-zinc-400 text-sm">info@akhisartaksi.com</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <a
                href="https://wa.me/905369225404?text=Merhaba,%20taksi%20rezervasyonu%20yaptırmak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 bg-[#25d366]/10 border border-[#25d366]/20 text-[#25d366] font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-[#25d366]/20 transition-all text-sm uppercase tracking-wider cursor-pointer"
                style={{
                  paddingTop: "1.25rem",
                  paddingBottom: "1.25rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem"
                }}
              >
                <MessageCircle size={18} />
                WhatsApp ile Mesaj Gönder
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 bg-zinc-950/40 border border-zinc-800/40 rounded-[2.5rem] backdrop-blur-sm flex flex-col justify-between"
            style={{ padding: "3rem 3.5rem" }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Örn. Ahmet Yılmaz"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-850 focus:border-[#ffcc00]/50 rounded-2xl text-white placeholder-zinc-650 outline-none text-base transition-colors"
                    style={{
                      paddingTop: "1.25rem",
                      paddingBottom: "1.25rem",
                      paddingLeft: "2rem",
                      paddingRight: "2rem"
                    }}
                  />
                </div>

                {/* Phone Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="Örn. 0536 922 54 04"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-850 focus:border-[#ffcc00]/50 rounded-2xl text-white placeholder-zinc-650 outline-none text-base transition-colors"
                    style={{
                      paddingTop: "1.25rem",
                      paddingBottom: "1.25rem",
                      paddingLeft: "2rem",
                      paddingRight: "2rem"
                    }}
                  />
                </div>
              </div>

              {/* Trip Type Select */}
              <div className="flex flex-col gap-2">
                <label htmlFor="tripType" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Yolculuk Tipi
                </label>
                <select
                  id="tripType"
                  value={formData.tripType}
                  onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-850 focus:border-[#ffcc00]/50 rounded-2xl text-zinc-300 outline-none text-base transition-colors appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23a1a1aa' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundPosition: "right 1.5rem center",
                    backgroundSize: "1.25rem",
                    backgroundRepeat: "no-repeat",
                    paddingTop: "1.25rem",
                    paddingBottom: "1.25rem",
                    paddingLeft: "2rem",
                    paddingRight: "3.5rem"
                  }}
                >
                  <option className="bg-zinc-950" value="Şehir İçi">Şehir İçi Taksi</option>
                  <option className="bg-zinc-950" value="Otogar / Tren Garı Transferi">Otogar veya Tren Garı Transferi</option>
                  <option className="bg-zinc-950" value="Şehirlerarası">Şehirlerarası Taksi</option>
                  <option className="bg-zinc-950" value="İzmir Adnan Menderes HL">İzmir Adnan Menderes HL Transferi</option>
                </select>
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Mesajınız veya Notunuz (Opsiyonel)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Yolculuk saati, kişi sayısı, gideceğiniz adres veya özel notunuz..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-900/50 border border-zinc-850 focus:border-[#ffcc00]/50 rounded-2xl text-white placeholder-zinc-650 outline-none text-base transition-colors resize-none"
                  style={{
                    paddingTop: "1.25rem",
                    paddingBottom: "1.25rem",
                    paddingLeft: "2rem",
                    paddingRight: "2rem"
                  }}
                />
              </div>

              {/* Submit Button & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-[#ffcc00] hover:bg-[#ffe066] text-zinc-950 font-black rounded-2xl flex items-center justify-center gap-3 transition-all uppercase tracking-wider text-sm disabled:opacity-50 accent-glow cursor-pointer"
                  style={{
                    paddingTop: "1.25rem",
                    paddingBottom: "1.25rem",
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem"
                  }}
                >
                  {status === "sending" ? "Gönderiliyor..." : "Talebi Gönder"}
                  <Send size={16} />
                </button>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex items-center gap-2.5 text-[#25d366] text-sm font-semibold"
                    >
                      <CheckCircle2 size={18} />
                      Talebiniz başarıyla gönderildi.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="text-red-500 text-sm font-semibold"
                    >
                      Lütfen zorunlu alanları doldurun.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
