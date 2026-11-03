"use client"

import React, { useState } from "react"
import { ArrowRight, Mail, Phone, ExternalLink } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"

const CONTACT_EMAIL = "hello@i-hub.me"
const CONTACT_PHONE = "+48 787 460 539"
const CONTACT_PHONE_HREF = "tel:+48787460539"

const mailto = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`

type Panel = {
  id: string
  title: string
  tagline: string
  description: string
  flow: string[]
  cta: string
  image?: string
  bgClass?: string
  gradient: string
}

// Panele opisują problem klienta, nie nasz produkt.
// Po rozwinięciu pokazują "przepływ" – jak wygląda praca po wdrożeniu.
const panels: Panel[] = [
  {
    id: "ksef",
    title: "Faktury i KSeF",
    tagline: "Koniec przepisywania",
    description:
      "Faktury z KSeF same trafiają do księgowości – opisane i sprawdzone. Dla biur rachunkowych i firm, które mają dość ręcznej roboty.",
    flow: ["KSeF", "Kontrola", "Księgowość"],
    cta: "Pokaż to na moich fakturach",
    image: "/images/lead-bg.jpg",
    gradient: "from-blue-900/80 via-blue-800/70 to-blue-900/90",
  },
  {
    id: "automatyzacje",
    title: "Automatyzacje",
    tagline: "Systemy, które gadają ze sobą",
    description:
      "Łączymy sklep, CRM, pocztę i arkusze w n8n lub Make. Powtarzalna praca dzieje się sama, a Ty dostajesz tylko wyjątki.",
    flow: ["Zamówienie", "Faktura", "Powiadomienie"],
    cta: "Opisz swój proces",
    image: "/images/ai-bg.jpg",
    gradient: "from-purple-900/80 via-purple-800/70 to-purple-900/90",
  },
  {
    id: "reklamy",
    title: "Reklamy",
    tagline: "Meta · TikTok · budżet, który wraca",
    description:
      "Kampanie sprzedażowe dla sklepów, katalogi produktowe i pomiar, który pokazuje, co naprawdę zarabia, a co tylko wydaje.",
    flow: ["Katalog", "Kampania", "Sprzedaż"],
    cta: "Sprawdźmy Twoje kampanie",
    image: "/images/web-bg.jpg",
    gradient: "from-pink-900/80 via-pink-800/70 to-pink-900/90",
  },
  {
    id: "allegro",
    title: "Allegro i Google",
    tagline: "Więcej miejsc sprzedaży",
    description:
      "Oferty na Allegro, które się wyświetlają, i produkty w katalogu Google. Jeden feed z Twojego sklepu, wiele kanałów sprzedaży.",
    flow: ["Sklep", "Feed", "Allegro + Google"],
    cta: "Chcę sprzedawać szerzej",
    image: "/images/chat-bg.jpg",
    gradient: "from-orange-900/80 via-orange-800/70 to-orange-900/90",
  },
  {
    id: "sklep",
    title: "Szybki sklep",
    tagline: "Shoper · Woo · Presta",
    description:
      "Przyspieszamy wolne strony i wprowadzamy zmiany w Shoperze, WooCommerce i PrestaShop – od drobnej poprawki po nową funkcję.",
    flow: ["Audyt", "Poprawki", "Szybszy sklep"],
    cta: "Zbadaj mój sklep",
    bgClass: "panel-bg-grid",
    gradient: "from-emerald-900/80 via-emerald-800/70 to-emerald-900/90",
  },
]

const products = [
  { name: "Generowanie leadów", url: "https://lead.i-hub.me/" },
  { name: "Strony WWW", url: "https://webstudio.i-hub.me/" },
  { name: "VIRA Voice", url: "https://vira.i-hub.me/" },
  { name: "Vedro AI", url: "https://www.vedroai.com/" },
]

export default function Home() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handlePanelClick = (panelId: string) => {
    // Na telefonie panel rozwija się kliknięciem (na desktopie – hover w CSS)
    if (window.innerWidth <= 768) {
      setExpandedId((current) => (current === panelId ? null : panelId))
    }
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AnimatedBackground />

      <main className="flex-1 flex items-center justify-center px-4 md:px-8 py-8 md:py-12 relative z-10">
        <div className="w-full max-w-7xl mx-auto text-center space-y-8 md:space-y-10">
          {/* Nagłówek */}
          <div className="space-y-4 md:space-y-5">
            <div
              className="text-lg md:text-xl font-semibold text-slate-500 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0s" }}
            >
              iHub Group
            </div>
            <h1
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight text-balance opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s", letterSpacing: "-0.025em" }}
            >
              Automatyzujemy firmy
              <br className="hidden md:block" /> i rozkręcamy sklepy internetowe
            </h1>
            <p
              className="text-slate-500 text-pretty max-w-2xl mx-auto text-sm md:text-base leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Wybierz, co chcesz poprawić. Resztę bierzemy na siebie.
            </p>
          </div>

          {/* Skośny akordeon – problemy klienta */}
          <div
            className="accordion-container mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {panels.map((panel, index) => (
              <div
                key={panel.id}
                className={`accordion-panel ${expandedId === panel.id ? "mobile-expanded" : ""}`}
                style={{ zIndex: panels.length - index }}
                onClick={() => handlePanelClick(panel.id)}
                onKeyDown={(e) => e.key === "Enter" && handlePanelClick(panel.id)}
                role="button"
                tabIndex={0}
                aria-label={panel.title}
              >
                <div
                  className={`accordion-panel-bg ${panel.bgClass ?? ""}`}
                  style={panel.image ? { backgroundImage: `url(${panel.image})` } : undefined}
                />
                <div className={`accordion-panel-overlay bg-gradient-to-b ${panel.gradient}`} />

                <div className="accordion-panel-content">
                  <h2 className="accordion-panel-title">{panel.title}</h2>
                  <p className="accordion-panel-tagline">{panel.tagline}</p>
                  <p className="accordion-panel-description">{panel.description}</p>

                  <div className="accordion-panel-flow" aria-label="Jak to działa po wdrożeniu">
                    {panel.flow.map((step, i) => (
                      <React.Fragment key={step}>
                        {i > 0 && <span className="flow-arrow">→</span>}
                        <span className="flow-step" style={{ animationDelay: `${i * 0.35}s` }}>
                          {step}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>

                  <a
                    href={mailto(`${panel.title} – zapytanie ze strony`)}
                    className="accordion-panel-cta inline-flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {panel.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Kontakt + produkty */}
          <div className="space-y-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={mailto("Zapytanie ze strony i-hub.me")}
                className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-900 transition-colors"
              >
                <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
              </a>
              <a
                href={CONTACT_PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-500 transition-colors"
              >
                <Phone className="h-4 w-4" /> {CONTACT_PHONE}
              </a>
            </div>
            <p className="text-xs text-slate-400">Bezpłatna rozmowa i wycena · pon.–pt. 8:00–17:00</p>

            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="text-slate-400 mr-1">Nasze produkty:</span>
              {products.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-slate-600 hover:border-indigo-300 hover:text-indigo-700 transition-colors"
                >
                  {p.name} <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center relative z-10">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} iHub Group</p>
      </footer>
    </div>
  )
}
