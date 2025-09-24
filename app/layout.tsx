import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import ClientLayout from "./client-layout"

export const metadata: Metadata = {
  title: "iHub Group - Generowanie leadów i automatyzacje AI",
  description:
    "Pozyskujemy klientów i automatyzujemy Twój biznes dzięki AI. Generowanie leadów w modelu CPA i inteligentne rozwiązania automatyzacji.",
  keywords: "generowanie leadów, automatyzacja AI, CPA, iHub Group, sztuczna inteligencja, biznes",
  authors: [{ name: "iHub Group" }],
  creator: "iHub Group",
  publisher: "iHub Group",
  openGraph: {
    title: "iHub Group - Generowanie leadów i automatyzacje AI",
    description: "Pozyskujemy klientów i automatyzujemy Twój biznes dzięki AI",
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
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
