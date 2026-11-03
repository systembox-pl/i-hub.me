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

export const metadata: Metadata = {
  title: "iHub Group - Generowanie leadów i automatyzacje AI",
  description:
    "Pozyskujemy klientów i automatyzujemy Twój biznes dzięki AI. Generowanie leadów w modelu CPA i inteligentne rozwiązania automatyzacji.",
  keywords: "generowanie leadów B2B, automatyzacja biznesu, systemy AI, iHub Group, sztuczna inteligencja, wzrost biznesu",
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
    <html lang="pl" className={inter.variable}>
      <body className="font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
