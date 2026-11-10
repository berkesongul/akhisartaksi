import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Akhisar Taksi | Akhisar'da 7/24 Güvenilir & Hızlı Taksi Hizmeti",
  description:
    "Akhisar Taksi ile konforlu, hızlı ve güvenli ulaşım. Akhisar Otogar, Tren Garı, Devlet Hastanesi ve şehir içi tüm noktalar. 7/24 hizmet. +90 536 922 54 04",
  keywords:
    "Akhisar Taksi, Akhisar Nöbetçi Taksi, Akhisar Otogar Taksi, Akhisar Tren Garı Taksi, Akhisar Hastane Taksi, Akhisar Transfer, Akhisar Gece Taksi, Akhisar Manisa Taksi, Akhisar İzmir Taksi, Akhisar Soma Taksi",
  authors: [{ name: "Akhisar Taksi" }],
  openGraph: {
    title: "Akhisar Taksi | 7/24 Güvenli & Hızlı Ulaşım",
    description:
      "Akhisar'da konforlu ve güvenilir taksi hizmeti. Otogar, Tren Garı, Devlet Hastanesi ve şehiriçi tüm güzergahlar.",
    locale: "tr_TR",
    type: "website",
    siteName: "Akhisar Taksi",
  },
  other: {
    "geo.region": "TR-45",
    "geo.placename": "Akhisar",
    "geo.position": "38.9244;27.8386",
    ICBM: "38.9244, 27.8386",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0e0e0e" />
        {/* JSON-LD Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              name: "Akhisar Taksi",
              telephone: "+905369225404",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Efendi Mah. 272. Sok. No:2",
                addressLocality: "Akhisar",
                addressRegion: "Manisa",
                postalCode: "45200",
                addressCountry: "TR",
              },
              openingHours: "Mo-Su 00:00-24:00",
              priceRange: "₺₺",
              description:
                "Akhisar'da 7/24 konforlu ve güvenilir taksi hizmeti. Otogar, tren garı, hastane ve şehirlerarası transferler.",
              areaServed: "Akhisar",
            }),
          }}
        />
        {/* Google Translate */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="lazyOnload"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'tr',
                  includedLanguages: 'tr,en,de',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false,
                }, 'google_translate_element');
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
