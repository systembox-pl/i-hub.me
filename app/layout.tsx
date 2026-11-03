import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "iHub Group | Generowanie leadów B2B i automatyzacje AI",
  description:
    "iHub Group pomaga firmom B2B zdobywać lepsze leady w modelu CPA, automatyzować procesy i wdrażać praktyczne rozwiązania AI. Umów rozmowę o wzroście.",
  keywords: "generowanie leadów B2B, automatyzacja biznesu, systemy AI, iHub Group, sztuczna inteligencja, wzrost biznesu",
  authors: [{ name: "iHub Group" }],
  creator: "iHub Group",
  publisher: "iHub Group",
  openGraph: {
    title: "iHub Group | Generowanie leadów B2B i automatyzacje AI",
    description: "Pomagamy firmom B2B zdobywać lepsze leady i automatyzować procesy dzięki praktycznemu AI",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "iHub Group - Generowanie leadów i automatyzacje AI",
    description: "Pozyskujemy klientów i automatyzujemy Twój biznes dzięki AI",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://i-hub.me/#organization", name: "iHub Group", url: "https://i-hub.me/", email: "hello@i-hub.me", areaServed: "PL", knowsAbout: ["generowanie leadów B2B", "automatyzacja procesów", "sztuczna inteligencja"] },
      { "@type": "WebSite", "@id": "https://i-hub.me/#website", url: "https://i-hub.me/", name: "iHub Group", publisher: { "@id": "https://i-hub.me/#organization" }, inLanguage: "pl-PL" },
      { "@type": "Service", serviceType: "Generowanie leadów B2B i automatyzacje AI", provider: { "@id": "https://i-hub.me/#organization" }, areaServed: "PL", description: "Generowanie kwalifikowanych leadów B2B, automatyzacja procesów i praktyczne wdrożenia AI dla firm." },
      { "@type": "FAQPage", mainEntity: [
        { "@type": "Question", name: "Jak iHub Group pomaga zwiększyć sprzedaż?", acceptedAnswer: { "@type": "Answer", text: "Łączymy generowanie i kwalifikację leadów z automatyzacją procesów, aby zespół sprzedaży szybciej reagował i tracił mniej czasu na ręczne zadania." } },
        { "@type": "Question", name: "Dla jakich firm pracujecie?", acceptedAnswer: { "@type": "Answer", text: "Pracujemy głównie z firmami B2B, które mają sprawdzoną ofertę i chcą zbudować bardziej przewidywalny system pozyskiwania klientów lub usprawnić operacje." } },
        { "@type": "Question", name: "Czy wdrażacie rozwiązania AI w istniejących narzędziach?", acceptedAnswer: { "@type": "Answer", text: "Tak. Zaczynamy od audytu i dopasowujemy rozwiązanie do obecnego CRM, strony, komunikatorów oraz narzędzi używanych przez zespół." } }
      ] }
    ]
  }

  return (
    <html lang="pl" className={inter.variable}>
      <body className="font-sans antialiased">
        <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
