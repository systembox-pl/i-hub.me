"use client"

import { useState } from "react"
import { ArrowUpRight, Check, ChevronRight, Cpu, Gauge, Network, ShieldCheck, Sparkles } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Generowanie leadów",
    label: "REVENUE ENGINE",
    description: "Kwalifikowane kontakty B2B rozliczane za efekt. Łączymy dane, scoring i precyzyjny outreach.",
    url: "https://lead.i-hub.me/",
    image: "/images/lead-bg.jpg",
    accent: "blue",
  },
  {
    number: "02",
    title: "Automatyzacje i AI",
    label: "SYSTEMS & OPS",
    description: "Projektujemy systemy, które eliminują ręczną pracę i skalują procesy bez dokładania etatów.",
    url: "https://ai.i-hub.me/",
    image: "/images/ai-bg.jpg",
    accent: "violet",
  },
  {
    number: "03",
    title: "Vedro AI",
    label: "CONVERSATIONAL AI",
    description: "Cyfrowy konsultant dostępny 24/7. Rozpoznaje intencje i zamienia ruch na rozmowy sprzedażowe.",
    url: "https://www.vedroai.com/",
    image: "/images/chat-bg.jpg",
    accent: "cyan",
  },
]

const capabilities = [
  { icon: Network, value: "360°", label: "widoku procesu" },
  { icon: Gauge, value: "24/7", label: "ciągłości działania" },
  { icon: ShieldCheck, value: "100%", label: "własności danych" },
]

export default function Home() {
  const [activeService, setActiveService] = useState(0)

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="iHub Group — strona główna">
          <span className="brand-mark"><span /></span>
          <span>iHUB<span className="brand-muted">/GROUP</span></span>
        </a>
        <div className="header-status"><span className="status-dot" /> SYSTEMS ONLINE <span className="status-separator">//</span> 2026</div>
        <a className="header-link" href="#services">Poznaj rozwiązania <ArrowUpRight size={15} /></a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> STRATEGIA · DANE · AUTOMATYZACJA</div>
            <h1>Budujemy przewagę,<br /><em>która skaluje się sama.</em></h1>
            <p className="hero-description">Łączymy pozyskiwanie klientów z inteligentnymi systemami. Mniej operacji. Więcej powtarzalnego wzrostu.</p>
            <div className="hero-actions">
              <a className="primary-action" href="#services">Zobacz nasze systemy <ArrowUpRight size={17} /></a>
              <a className="text-action" href="#approach">Jak pracujemy <ChevronRight size={16} /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Schemat systemu iHub Group">
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="system-grid" />
            <div className="hero-visual-label top-label">IH / CORE SYSTEM <span>v.2.6</span></div>
            <div className="signal signal-one"><span /> LEAD FLOW <b>ACTIVE</b></div>
            <div className="signal signal-two"><span /> AI LAYER <b>READY</b></div>
            <div className="core-node"><Cpu size={24} /><span>iH</span></div>
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="hero-visual-label bottom-label">CONNECTED INTELLIGENCE <span>///</span></div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Przewagi iHub Group">
          <div className="proof-intro"><Sparkles size={16} /> <span>OPERATING<br />SYSTEM FOR GROWTH</span></div>
          {capabilities.map(({ icon: Icon, value, label }) => (
            <div className="proof-item" key={label}><Icon size={18} /><strong>{value}</strong><span>{label}</span></div>
          ))}
          <div className="proof-note">Dane i technologia<br /><span>pracują razem.</span></div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> CO ROBIMY</div><h2>Infrastruktura<br /><em>Twojego wzrostu.</em></h2></div><p>Trzy wyspecjalizowane systemy.<br />Jeden cel: mierzalny wynik.</p></div>
          <div className="service-layout">
            <div className="service-list">
              {services.map((service, index) => (
                <button key={service.number} className={`service-row accent-${service.accent} ${activeService === index ? "is-active" : ""}`} onClick={() => setActiveService(index)} aria-pressed={activeService === index}>
                  <span className="service-number">{service.number}</span><span className="service-label">{service.label}</span><span className="service-title">{service.title}</span><ArrowUpRight className="service-arrow" size={20} />
                </button>
              ))}
            </div>
            <div className={`service-feature accent-${services[activeService].accent}`}>
              <img src={services[activeService].image} alt="" />
              <div className="feature-overlay" />
              <div className="feature-content"><span className="feature-kicker">{services[activeService].label} / {services[activeService].number}</span><h3>{services[activeService].title}</h3><p>{services[activeService].description}</p><a href={services[activeService].url} target="_blank" rel="noreferrer">Uruchom rozwiązanie <ArrowUpRight size={16} /></a></div>
            </div>
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="approach-index">[ 04 ]</div><div><div className="eyebrow"><span className="eyebrow-line" /> NASZE PODEJŚCIE</div><h2>Nie sprzedajemy<br /><em>gadżetów.</em></h2></div><div className="approach-copy"><p>Najpierw rozumiemy, gdzie uciekają pieniądze i czas. Potem budujemy system, który można mierzyć, ulepszać i skalować.</p><div className="check-list"><span><Check size={14} /> Wynik ponad prezentację</span><span><Check size={14} /> Technologia bez vendor lock-in</span></div></div>
        </section>
      </main>

      <footer className="site-footer"><span>© {new Date().getFullYear()} iHUB GROUP</span><span>LEAD GENERATION · AI SYSTEMS · AUTOMATION</span><span>POLAND / EU</span></footer>
    </div>
  )
}
