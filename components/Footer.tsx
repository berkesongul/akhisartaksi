"use client";

import { Phone, MapPin, Mail, Car } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#050507] border-t border-zinc-900">
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "1.5rem" }}>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-20 mb-20">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4" style={{ marginBottom: "2rem" }}>
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-zinc-800" style={{ padding: "0.2rem" }}>
                <Image src="/akhisartaksilogo.png" alt="Akhisar Taksi" fill sizes="48px" className="object-contain" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#ffcc00] tracking-[0.2em] uppercase mb-1">Akhisar</p>
                <p className="text-lg font-bold text-white">Taksi</p>
              </div>
            </div>
            <p className="text-base text-zinc-400 leading-relaxed max-w-sm mb-10">
              Akhisar&apos;ın güvenilir taksi hizmeti Akhisar Taksi, konforlu Dacia Sandero
              aracı ve deneyimli sürücüsüyle şehir içi ve şehirlerarası ulaşımda 7/24
              kesintisiz hizmetinizdedir.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest" style={{ marginBottom: "2rem" }}>İletişim</h3>
            <div className="flex flex-col" style={{ gap: "2rem" }}>
              <a href="tel:+905369225404" className="flex items-start gap-4 group">
                <Phone size={18} className="text-[#ffcc00] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Telefon</p>
                  <p className="text-base font-semibold text-zinc-200 group-hover:text-[#ffcc00] transition-colors">
                    0536 922 54 04
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[#ffcc00] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Adres</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Efendi Mah. 272. Sok. No:2<br />Akhisar / Manisa
                  </p>
                </div>
              </div>
              <a href="mailto:info@akhisartaksi.com" className="flex items-start gap-4 group">
                <Mail size={18} className="text-[#ffcc00] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-zinc-500 mb-1">E-Posta</p>
                  <p className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                    info@akhisartaksi.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest" style={{ marginBottom: "2rem" }}>Hizmetlerimiz</h3>
            <div className="flex flex-col" style={{ gap: "1rem" }}>
              {[
                "Akhisar Otogar Transfer",
                "Akhisar Tren Garı Transfer",
                "Devlet Hastanesi Ulaşım",
                "İzmir Adnan Menderes HL",
                "Şehirlerarası Taksi",
                "Gece Taksi Hizmeti",
                "Hızlı Şehir İçi Ulaşım",
              ].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <Car size={14} className="text-[#ffcc00]/60 flex-shrink-0" />
                  <span className="text-sm text-zinc-400">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-900/80">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Akhisar Taksi. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-sm text-zinc-600">
              <a
                href="https://berkesongul.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-[#ffcc00] font-semibold transition-colors"
              >
                Berke Songul
              </a>{" "}
              tarafından geliştirildi.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-semibold text-zinc-500 hover:text-[#ffcc00] transition-colors cursor-pointer"
            >
              Sayfanın Başına Dön ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
