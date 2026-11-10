"use client";

import { useEffect, useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

interface TranslateWidgetProps {
  isNavbar?: boolean;
}

export default function TranslateWidget({ isNavbar = false }: TranslateWidgetProps) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[0]);

  useEffect(() => {
    // Hide the native Google Translate bar injected at the top
    const style = document.createElement("style");
    style.innerHTML = `
      body { top: 0 !important; }
      .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
      .skiptranslate { display: none !important; }
    `;
    document.head.appendChild(style);

    // Sync widget state with existing cookie on mount
    const match = document.cookie.match(/googtrans=\/tr\/([a-z]{2})/);
    if (match && match[1]) {
      const savedLang = languages.find((l) => l.code === match[1]);
      if (savedLang) {
        setCurrent(savedLang);
      }
    }
  }, []);

  const handleSelect = (lang: (typeof languages)[0]) => {
    setCurrent(lang);
    setOpen(false);

    // Fallback cookies just in case
    if (lang.code === "tr") {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
    } else {
      document.cookie = `googtrans=/tr/${lang.code}; path=/;`;
      document.cookie = `googtrans=/tr/${lang.code}; path=/; domain=${window.location.hostname};`;
    }

    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (combo) {
      if (lang.code === "tr") {
        combo.value = ""; // Google Translate resets to original language when value is empty
        combo.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));
      } else {
        combo.value = lang.code;
        combo.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));
      }
    } else {
      // If combo box hasn't loaded yet, just reload to let the cookie do the work
      window.location.reload();
    }
  };

  return (
    <>
      {/* Hidden Google Translate container — required for the API to work */}
      <div id="google_translate_element" style={{ display: "none" }} />

      {/* Custom widget */}
      <div
        translate="no"
        className="notranslate"
        style={
          isNavbar
            ? {
                position: "relative",
                zIndex: 50,
              }
            : {
                position: "fixed",
                top: "1.75rem",
                left: "1.75rem",
                zIndex: 9999,
              }
        }
      >
        <div style={{ position: "relative" }}>
          {/* Dropdown list — appears below the button */}
          {open && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: isNavbar ? 0 : "auto",
                left: isNavbar ? "auto" : 0,
                background: "rgba(18,18,20,0.95)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1rem",
                backdropFilter: "blur(20px)",
                boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
                overflow: "hidden",
                minWidth: "160px",
              }}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                    padding: "10px 18px",
                    background: current.code === lang.code ? "rgba(255,204,0,0.08)" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: current.code === lang.code ? "#ffcc00" : "#a1a1aa",
                    fontSize: "14px",
                    fontWeight: current.code === lang.code ? 700 : 500,
                    textAlign: "left",
                    transition: "background 0.15s, color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (current.code !== lang.code) {
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (current.code !== lang.code) {
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                      (e.currentTarget as HTMLButtonElement).style.color = "#a1a1aa";
                    }
                  }}
                >
                  <span style={{ fontSize: "16px" }}>{lang.flag}</span>
                  {lang.label}
                  {current.code === lang.code && (
                    <span style={{ marginLeft: "auto", color: "#ffcc00", fontSize: "12px" }}>✓</span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Toggle button */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(18,18,20,0.90)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "9999px",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
              padding: isNavbar ? "8px 12px" : "10px 18px",
              cursor: "pointer",
              color: "#e4e4e7",
              fontSize: isNavbar ? "12px" : "13px",
              fontWeight: 600,
              transition: "border-color 0.2s, box-shadow 0.2s",
              outline: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,204,0,0.4)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,204,0,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.10)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.5)";
            }}
            aria-label="Dil seçimi"
          >
            <Globe size={14} style={{ color: "#ffcc00" }} />
            <span>{current.flag}</span>
            <span className={isNavbar ? "hidden sm:inline" : ""}>{current.label}</span>
            <ChevronDown
              size={12}
              style={{
                color: "#71717a",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
}
