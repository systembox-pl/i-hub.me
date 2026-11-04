import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const title = "iHub Group – leady, automatyzacje AI i chatboty"
const description =
  "Pozyskujemy klientów i automatyzujemy biznes dzięki AI: leady w modelu CPL, automatyzacje n8n/Make z KSeF i chatbot Vedro AI."

export const metadata: Metadata = {
  metadataBase: new URL("https://www.i-hub.me"),
  title,
  description,
  keywords:
    "generowanie leadów, leady CPL, automatyzacje AI, automatyzacje n8n, Make, integracja KSeF, chatbot AI, Vedro AI, iHub Group",
  authors: [{ name: "iHub Group" }],
  creator: "iHub Group",
  publisher: "iHub Group",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pl_PL",
    url: "https://www.i-hub.me",
    siteName: "iHub Group",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

// Dane strukturalne firmy (schema.org) – pomagają Google rozpoznać spółkę
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "iHub Group",
  legalName: "IHUB GROUP sp. z o.o.",
  url: "https://www.i-hub.me",
  logo: "https://www.i-hub.me/images/logo-footer.png",
  email: "hello@i-hub.me",
  telephone: ["+48 787 460 539", "+48 570 923 234"],
  taxID: "7011230049",
  identifier: [
    { "@type": "PropertyValue", propertyID: "KRS", value: "0001135453" },
    { "@type": "PropertyValue", propertyID: "REGON", value: "540033180" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Stefana Batorego 18/108",
    postalCode: "02-591",
    addressLocality: "Warszawa",
    addressCountry: "PL",
  },
  sameAs: ["https://lead.i-hub.me/", "https://ai.i-hub.me/", "https://www.vedroai.com/"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={inter.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
