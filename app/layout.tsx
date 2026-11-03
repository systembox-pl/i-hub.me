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

const title = "iHub Group – leady, automatyzacje AI, strony WWW, voiceboty i chatboty"
const description =
  "Pozyskujemy klientów i automatyzujemy biznes dzięki AI: leady w modelu CPA, automatyzacje n8n/Make z KSeF, strony WWW w 3 dni, voicebot VIRA i chatbot Vedro AI."

export const metadata: Metadata = {
  metadataBase: new URL("https://www.i-hub.me"),
  title,
  description,
  keywords:
    "generowanie leadów, leady CPA, automatyzacje AI, KSeF, strony WWW, voicebot, chatbot AI, automatyzacje n8n, Make, biuro rachunkowe, e-commerce, Allegro, Meta Ads, TikTok Ads, Shoper, WooCommerce, PrestaShop",
  authors: [{ name: "iHub Group" }],
  creator: "iHub Group",
  publisher: "iHub Group",
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
