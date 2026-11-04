"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, Mail, Phone } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"

const CONTACT_EMAIL = "hello@i-hub.me"
const CONTACT_PHONE = "+48 787 460 539"
const CONTACT_PHONE_HREF = "tel:+48787460539"
const CONTACT_PHONE_2 = "+48 570 923 234"
const CONTACT_PHONE_2_HREF = "tel:+48570923234"

type Service = {
  id: string
  title: string
  tagline: string
  description: string
  facts: string[]
  cta: string
  url: string
  image: string
  accent: string // RGB, np. "59, 130, 246"
}

// Treści na podstawie podstron: lead.i-hub.me, ai.i-hub.me, vedroai.com
const services: Service[] = [
  {
    id: "leady",
    title: "Generowanie leadów",
    tagline: "Płacisz za efekt",
    description:
      "Ręcznie weryfikowane kontakty od klientów zainteresowanych Twoją ofertą. Płacisz tylko za zaakceptowane leady – bez abonamentu.",
    facts: ["Model CPA", "Leady na wyłączność", "Start w 24 h"],
    cta: "Zamów leady",
    url: "https://lead.i-hub.me/",
    image: "/images/lead-bg.jpg",
    accent: "59, 130, 246",
  },
  {
    id: "automatyzacje",
    title: "Automatyzacje i AI",
    tagline: "Mniej ręcznej pracy",
    description:
      "Łączymy narzędzia, które już masz – faktury, KSeF, raporty, oferty – i zdejmujemy z zespołu powtarzalną pracę.",
    facts: ["n8n · Make", "Integracja z KSeF", "Wsparcie w 2 h"],
    cta: "Policz oszczędność",
    url: "https://ai.i-hub.me/",
    image: "/images/ai-bg.jpg",
    accent: "139, 92, 246",
  },
  {
    id: "vedro",
    title: "Vedro AI",
    tagline: "Chatbot 24/7",
    description:
      "Chatbot na stronę, który odpowiada na pytania, odsiewa przypadkowych gości i zbiera kontakty od zainteresowanych.",
    facts: ["7 dni za darmo", "WhatsApp · Messenger", "Bez kodowania"],
    cta: "Wypróbuj za darmo",
    url: "https://www.vedroai.com/",
    image: "/images/chat-bg.jpg",
    accent: "16, 185, 129",
  },
]

export default function Home() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const isMobile = () => typeof window !== "undefined" && window.innerWidth <= 768

  const handlePanelClick = (service: Service) => {
    if (isMobile()) {
      setExpandedId((current) => (current === service.id ? null : service.id))
    } else {
      window.open(service.url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#f7f8fb] text-slate-900">
      <AnimatedBackground />

      <main className="flex-1 flex items-center justify-center px-4 md:px-8 py-10 md:py-14 relative z-10">
        <div className="w-full max-w-7xl mx-auto text-center">
          {/* Nagłówek */}
          <div className="space-y-5 md:space-y-6">
            <img
              src="/images/logo-footer.png"
              alt="iHub Group"
              className="reveal mx-auto h-7 md:h-8 w-auto"
              style={{ "--d": "0s" } as React.CSSProperties}
            />
            <h1
              className="reveal text-[1.75rem] md:text-5xl lg:text-[3.4rem] font-semibold leading-[1.1] tracking-[-0.035em] text-balance"
              style={{ "--d": "0.12s" } as React.CSSProperties}
            >
              Pozyskujemy klientów
              <br className="hidden md:block" /> i automatyzujemy biznes{" "}
              <span className="text-gradient">dzięki&nbsp;AI</span>
            </h1>
            <p
              className="reveal max-w-xl mx-auto text-sm md:text-base text-slate-500 leading-relaxed"
              style={{ "--d": "0.24s" } as React.CSSProperties}
            >
              Trzy wyspecjalizowane rozwiązania, jeden zespół. Wybierz kierunek.
            </p>
          </div>

          {/* Skośny akordeon */}
          <div className="accordion-container mx-auto mt-10 md:mt-14">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`accordion-panel ${expandedId === service.id ? "mobile-expanded" : ""}`}
                style={
                  {
                    zIndex: services.length - index,
                    "--accent": service.accent,
                    "--d": `${0.36 + index * 0.08}s`,
                  } as React.CSSProperties
                }
                onClick={() => handlePanelClick(service)}
                onKeyDown={(e) => e.key === "Enter" && handlePanelClick(service)}
                role="link"
                tabIndex={0}
                aria-label={`${service.title} – ${service.tagline}`}
              >
                <div className="accordion-panel-bg" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="accordion-panel-overlay" />

                <div className="accordion-panel-content">
                  <span className="accordion-panel-index">{String(index + 1).padStart(2, "0")}</span>
                  <h2 className="accordion-panel-title">{service.title}</h2>
                  <p className="accordion-panel-tagline">{service.tagline}</p>

                  <div className="accordion-panel-details">
                    <div>
                      <p className="details-item accordion-panel-description" style={{ "--i": 0 } as React.CSSProperties}>
                        {service.description}
                      </p>
                      <div className="details-item accordion-panel-facts" style={{ "--i": 1 } as React.CSSProperties}>
                        {service.facts.map((fact) => (
                          <span key={fact} className="fact">
                            {fact}
                          </span>
                        ))}
                      </div>
                      <div className="details-item" style={{ "--i": 2 } as React.CSSProperties}>
                        <a
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="accordion-panel-cta"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {service.cta}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kontakt */}
          <div
            className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-slate-500"
            style={{ "--d": "0.85s" } as React.CSSProperties}
          >
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors"
            >
              <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
            </a>
            <span className="hidden sm:block h-4 w-px bg-slate-300" />
            <a
              href={CONTACT_PHONE_HREF}
              className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors"
            >
              <Phone className="h-4 w-4" /> {CONTACT_PHONE}
            </a>
            <span className="hidden sm:block h-4 w-px bg-slate-300" />
            <a
              href={CONTACT_PHONE_2_HREF}
              className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors"
            >
              <Phone className="h-4 w-4" /> {CONTACT_PHONE_2}
            </a>
          </div>
        </div>
      </main>

      <footer
        className="reveal py-6 text-center relative z-10"
        style={{ "--d": "0.95s" } as React.CSSProperties}
      >
        <p className="text-slate-400 text-xs tracking-wide">© {new Date().getFullYear()} iHub Group</p>
      </footer>
    </div>
  )
}
