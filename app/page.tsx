"use client"

import React from "react"

import { useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"

const services = [
  {
    id: 1,
    title: "Generowanie leadów",
    tagline: "Płacisz za efekt",
    description: "Dostarczamy zweryfikowane kontakty biznesowe w modelu success fee – płacisz tylko za efekt.",
    url: "https://lead.i-hub.me/",
    image: "/images/lead-bg.jpg",
    gradient: "from-blue-900/80 via-blue-800/70 to-blue-900/90",
  },
  {
    id: 2,
    title: "Automatyzacje i AI",
    tagline: "Oszczędność czasu",
    description: "Wdrażamy inteligentne rozwiązania, które oszczędzają Twój czas i zwiększają sprzedaż.",
    url: "https://ai.i-hub.me/",
    image: "/images/ai-bg.jpg",
    gradient: "from-purple-900/80 via-purple-800/70 to-purple-900/90",
  },
  {
    id: 3,
    title: "Strony WWW",
    tagline: "Gotowe w 3 dni",
    description: "Nowoczesne strony internetowe gotowe w 3 dni. Bez czekania – tylko skuteczne rozwiązania.",
    url: "https://webstudio.i-hub.me/",
    image: "/images/web-bg.jpg",
    gradient: "from-pink-900/80 via-pink-800/70 to-pink-900/90",
  },
  {
    id: 4,
    title: "VIRA Voice",
    tagline: "Asystent głosowy",
    description: "Inteligentny asystent głosowy AI automatyzujący rozmowy z klientami.",
    url: "https://vira.i-hub.me/",
    image: "/images/voice-bg.jpg",
    gradient: "from-emerald-900/80 via-emerald-800/70 to-emerald-900/90",
  },
  {
    id: 5,
    title: "Vedro AI",
    tagline: "Chatbot 24/7",
    description: "Chatbot AI zamieniający odwiedzających w wykwalifikowanych leadów 24/7.",
    url: "https://www.vedroai.com/",
    image: "/images/chat-bg.jpg",
    gradient: "from-orange-900/80 via-orange-800/70 to-orange-900/90",
  },
]

export default function Home() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const handlePanelClick = (e: React.MouseEvent, serviceId: number) => {
    // Check if on mobile (768px breakpoint)
    const isMobile = window.innerWidth <= 768

    if (isMobile) {
      // On mobile: toggle expand/collapse
      if (expandedId === serviceId) {
        setExpandedId(null)
      } else {
        setExpandedId(serviceId)
      }
    }
  }

  const handleCtaClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation()
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Background with particles and comet effect */}
      <AnimatedBackground />
      
      <main className="flex-1 flex items-center justify-center px-4 md:px-8 py-8 md:py-12 relative z-10">
        <div className="w-full max-w-7xl mx-auto text-center space-y-8 md:space-y-10">
          {/* Header */}
          <div className="space-y-4 md:space-y-5">
            <div
              className="text-lg md:text-xl font-semibold text-slate-500 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0s" }}
            >
              iHub Group
            </div>
            <h1
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight text-balance opacity-0 animate-fade-in-up"
              style={{
                animationDelay: "0.2s",
                fontWeight: "700",
                letterSpacing: "-0.025em",
              }}
            >
              Pozyskujemy klientów i automatyzujemy Twój biznes dzięki AI
            </h1>
            <p
              className="text-slate-500 text-pretty max-w-2xl mx-auto text-sm md:text-base leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Wybierz kierunek, który najbardziej odpowiada Twoim potrzebom
            </p>
          </div>

          {/* Skewed Accordion */}
          <div
            className="accordion-container mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`accordion-panel ${expandedId === service.id ? "mobile-expanded" : ""}`}
                style={{ zIndex: services.length - index }}
                onClick={(e) => handlePanelClick(e, service.id)}
                onKeyDown={(e) => e.key === "Enter" && handlePanelClick(e as unknown as React.MouseEvent, service.id)}
                role="button"
                tabIndex={0}
              >
                {/* Desktop link wrapper */}
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accordion-panel-link hidden md:block absolute inset-0 z-20"
                  onClick={(e) => e.stopPropagation()}
                />
                
                {/* Background image */}
                <div
                  className="accordion-panel-bg"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                {/* Gradient overlay */}
                <div className={`accordion-panel-overlay bg-gradient-to-b ${service.gradient}`} />
                
                {/* Content */}
                <div className="accordion-panel-content">
                  <h3 className="accordion-panel-title">{service.title}</h3>
                  <p className="accordion-panel-tagline">{service.tagline}</p>
                  <p className="accordion-panel-description">{service.description}</p>
                  <button 
                    type="button"
                    className="accordion-panel-cta"
                    onClick={(e) => handleCtaClick(e, service.url)}
                  >
                    Dowiedz się więcej
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-6 text-center relative z-10">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} iHub Group</p>
      </footer>
    </div>
  )
}
