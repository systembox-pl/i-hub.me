"use client"

import { useState } from "react"
import { ArrowUpRight, Check, ChevronRight, Play, Quote } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Generowanie leadów B2B",
    description: "Docieramy do firm, które realnie potrzebują Twojej oferty. Łączymy dane, kwalifikację i proces sprzedaży, aby płacić za szanse, nie za przypadkowy ruch.",
    url: "https://lead.i-hub.me/",
    image: "/images/lead-bg.jpg",
  },
  {
    number: "02",
    title: "Automatyzacje procesów",
    description: "Porządkujemy powtarzalną pracę w sprzedaży, obsłudze i operacjach. Projektujemy automatyzacje, które działają w Twoich narzędziach i są zrozumiałe dla zespołu.",
    url: "https://ai.i-hub.me/",
    image: "/images/ai-bg.jpg",
  },
  {
    number: "03",
    title: "Vedro AI",
    description: "Asystent konwersacyjny, który odpowiada na pytania klientów, rozpoznaje intencję i przekazuje wartościowe rozmowy do właściwej osoby — przez całą dobę.",
    url: "https://www.vedroai.com/",
    image: "/images/chat-bg.jpg",
  },
]

const faqs = [
  ["Jak iHub Group pomaga zwiększyć sprzedaż?", "Łączymy generowanie i kwalifikację leadów z automatyzacją procesów. Dzięki temu zespół sprzedaży otrzymuje lepsze szanse, szybciej reaguje i traci mniej czasu na ręczne zadania."],
  ["Dla jakich firm pracujecie?", "Największą wartość tworzymy dla firm B2B, które mają sprawdzoną ofertę, ale chcą zbudować bardziej przewidywalny system pozyskiwania klientów lub usprawnić operacje."],
  ["Czy wdrażacie rozwiązania AI w istniejących narzędziach?", "Tak. Zaczynamy od audytu procesu i dopasowujemy rozwiązanie do obecnego CRM, strony, komunikatorów oraz narzędzi używanych przez zespół."],
]

export default function Home() {
  const [activeService, setActiveService] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="iHub Group — strona główna"><span className="brand-mark"><span /></span><span>iHUB<span className="brand-muted">GROUP</span></span></a>
        <nav className="main-nav" aria-label="Główna nawigacja"><a href="#services">Rozwiązania</a><a href="#approach">Podejście</a><a href="#faq">FAQ</a></nav>
        <a className="header-cta" href="#contact">Porozmawiajmy <ArrowUpRight size={15} /></a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Strategia wzrostu dla firm B2B</p>
            <h1>Więcej dobrych rozmów.<br /><em>Mniej ręcznej pracy.</em></h1>
            <p className="hero-description">Pomagamy firmom rosnąć dzięki połączeniu generowania leadów, automatyzacji i praktycznego AI. Bez obietnic bez pokrycia — z procesem, który można zmierzyć.</p>
            <div className="hero-actions"><a className="primary-action" href="#services">Zobacz, co możemy zrobić <ArrowUpRight size={17} /></a><a className="text-action" href="#approach"><Play size={14} fill="currentColor" /> Jak pracujemy</a></div>
            <div className="hero-trust"><span><Check size={14} /> Konkretny plan działania</span><span><Check size={14} /> Wynik widoczny w danych</span></div>
          </div>
          <div className="hero-visual">
            <img src="/images/lead-bg.jpg" alt="Zespół pracujący nad rozwojem systemu sprzedaży" />
            <div className="hero-visual-shade" />
            <div className="hero-play"><Play size={20} fill="currentColor" /></div>
            <div className="hero-caption"><span>iHub Group</span><strong>Technologia, która<br />pracuje dla biznesu.</strong></div>
            <div className="hero-progress"><span /> <span /> <span /></div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Dlaczego firmy wybierają iHub Group"><p>Łączymy to, co najważniejsze:</p><span>marketing</span><i>+</i><span>sprzedaż</span><i>+</i><span>technologia</span><div className="proof-result">w jeden działający system.</div></section>

        <section className="services-section" id="services">
          <div className="section-heading"><div><p className="eyebrow">Nasze rozwiązania</p><h2>Wzrost nie dzieje się<br /><em>przypadkiem.</em></h2></div><p>Dobieramy narzędzia do problemu,<br />nie problem do narzędzia.</p></div>
          <div className="service-layout"><div className="service-list">{services.map((service, index) => <button key={service.number} className={`service-row ${activeService === index ? "is-active" : ""}`} onClick={() => setActiveService(index)} aria-pressed={activeService === index}><span className="service-number">{service.number}</span><span className="service-title">{service.title}</span><ArrowUpRight className="service-arrow" size={19} /></button>)}</div><article className="service-feature"><img src={services[activeService].image} alt="" /><div className="feature-overlay" /><div className="feature-content"><span className="feature-kicker">Rozwiązanie {services[activeService].number}</span><h3>{services[activeService].title}</h3><p>{services[activeService].description}</p><a href={services[activeService].url} target="_blank" rel="noreferrer">Dowiedz się więcej <ArrowUpRight size={16} /></a></div></article></div>
        </section>

        <section className="approach-section" id="approach"><div className="approach-image"><img src="/images/ai-bg.jpg" alt="Praca nad automatyzacją procesów biznesowych" /><div className="approach-stamp">iH / CASE<br /><strong>01</strong></div></div><div className="approach-copy"><p className="eyebrow">Jak pracujemy</p><h2>Najpierw człowiek.<br /><em>Potem technologia.</em></h2><p>Zaczynamy od rozmowy i poznania Twojego procesu. Szukamy miejsc, w których firma traci czas, leady lub informacje. Dopiero wtedy proponujemy rozwiązanie — proste do wdrożenia i łatwe do rozwijania.</p><div className="check-list"><span><Check size={14} /> Audyt i priorytety</span><span><Check size={14} /> Wdrożenie krok po kroku</span><span><Check size={14} /> Pomiar efektów</span></div></div></section>

        <section className="faq-section" id="faq"><div><p className="eyebrow">Najczęstsze pytania</p><h2>Warto wiedzieć<br /><em>przed startem.</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronRight size={18} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

        <section className="contact-section" id="contact"><Quote size={28} /><p>Masz proces, który powinien działać lepiej?</p><h2>Porozmawiajmy o<br /><em>konkretnym wyniku.</em></h2><a className="primary-action" href="mailto:hello@i-hub.me">Napisz do nas <ArrowUpRight size={17} /></a></section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} iHUB GROUP</span><span>GENEROWANIE LEADÓW · AUTOMATYZACJE · AI</span><span>POLSKA / UE</span></footer>
    </div>
  )
}
