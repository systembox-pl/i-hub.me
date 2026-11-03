import {
  ShieldCheck,
  Workflow,
  ShoppingCart,
  ArrowRight,
  Check,
  Mail,
  Phone,
  Clock,
  ExternalLink,
  MessageSquare,
  FileText,
  Wrench,
  LifeBuoy,
} from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"

const CONTACT_EMAIL = "hello@i-hub.me"
const CONTACT_PHONE = "+48 787 460 539"
const CONTACT_PHONE_HREF = "tel:+48787460539"

const mailto = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`

const offers = [
  {
    id: "ksc",
    icon: ShieldCheck,
    badge: "Pilne",
    title: "KSC / NIS2",
    lead: "Wpis do Wykazu KSC i przygotowanie firmy do nowych obowiązków.",
    note: "Termin samorejestracji minął 3 października 2026. Jeśli Twoja firma podlega ustawie, a wniosku nie złożyła, obowiązek nadal jest do wykonania — lepiej teraz niż czekać na wpis z urzędu.",
    points: [
      "Sprawdzamy, czy firma jest podmiotem kluczowym lub ważnym",
      "Przygotowujemy i składamy wniosek w Wykazie KSC (S46)",
      "Plan dostosowania przed końcem okresu przejściowego (3 kwietnia 2027)",
    ],
    price: "od 2 500 zł",
    priceNote: "netto, projekt w kilka dni roboczych",
    cta: "Zapytaj o KSC",
    accent: "from-violet-600 to-indigo-700",
  },
  {
    id: "automatyzacje",
    icon: Workflow,
    badge: "KSeF",
    title: "Automatyzacje i integracje z KSeF",
    lead: "Procesy w n8n i Make dla biur rachunkowych i sklepów internetowych.",
    note: "Zamiast ręcznego przepisywania faktur i danych między systemami — jeden przepływ, który robi to sam i informuje, gdy coś wymaga uwagi.",
    points: [
      "Pobieranie i obieg faktur z KSeF dla biur rachunkowych",
      "Sklep → faktura w KSeF → księgowość, bez ręcznej pracy",
      "Integracje: sklep, CRM, arkusze, mail, system księgowy",
    ],
    price: "od 4 500 zł",
    priceNote: "netto za automatyzację, z opieką po wdrożeniu",
    cta: "Opisz swój proces",
    accent: "from-indigo-600 to-blue-700",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    badge: "E-commerce",
    title: "Marketing i technika dla sklepów",
    lead: "Kompleksowe wsparcie małych sklepów — od reklam po kod platformy.",
    note: "Jeden partner od kampanii, ofert i strony, zamiast trzech podwykonawców, którzy przerzucają się odpowiedzialnością.",
    points: [
      "Kampanie Meta i TikTok Ads, katalogi produktowe Google",
      "Oferty i optymalizacja sprzedaży na Allegro",
      "Przyspieszenie strony, zmiany w Shoper, WooCommerce i PrestaShop",
    ],
    price: "od 1 000 zł",
    priceNote: "netto, przyjmujemy też małe zlecenia",
    cta: "Porozmawiajmy o sklepie",
    accent: "from-blue-600 to-cyan-700",
  },
]

const steps = [
  { icon: MessageSquare, title: "Rozmowa", text: "30 minut, bezpłatnie. Ustalamy, co realnie da się zrobić i ile to da." },
  { icon: FileText, title: "Stała wycena", text: "Konkretny zakres i cena przed startem. Bez rozliczania godzin w ciemno." },
  { icon: Wrench, title: "Wdrożenie", text: "Działamy szybko i pokazujemy postęp na bieżąco, a nie dopiero na końcu." },
  { icon: LifeBuoy, title: "Opieka", text: "Po wdrożeniu nie znikamy. Poprawki i rozwój w ramach stałej współpracy." },
]

const products = [
  { name: "Generowanie leadów", desc: "Kontakty B2B w modelu success fee", url: "https://lead.i-hub.me/" },
  { name: "Strony WWW", desc: "Nowoczesne strony w kilka dni", url: "https://webstudio.i-hub.me/" },
  { name: "VIRA Voice", desc: "Asystent głosowy AI dla obsługi klienta", url: "https://vira.i-hub.me/" },
  { name: "Vedro AI", desc: "Chatbot sprzedażowy 24/7", url: "https://www.vedroai.com/" },
  { name: "AutomationAI", desc: "Więcej o naszych automatyzacjach", url: "https://ai.i-hub.me/" },
]

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden text-slate-800">
      <AnimatedBackground />

      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <a href="#top" aria-label="iHub Group – strona główna">
            <img src="/images/logo-footer.png" alt="iHub Group" className="h-7 md:h-8 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#oferta" className="hover:text-indigo-700 transition-colors">Oferta</a>
            <a href="#jak-pracujemy" className="hover:text-indigo-700 transition-colors">Jak pracujemy</a>
            <a href="#produkty" className="hover:text-indigo-700 transition-colors">Produkty</a>
          </nav>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-700 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-800 transition-colors"
          >
            Kontakt
          </a>
        </div>
      </header>

      <main id="top" className="relative z-10">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-16 text-center">
          <p
            className="inline-block rounded-full border border-indigo-200 bg-white/70 px-4 py-1 text-xs md:text-sm font-medium text-indigo-700 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0s" }}
          >
            KSC · KSeF · automatyzacje · e-commerce
          </p>
          <h1
            className="mt-6 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Załatwiamy obowiązki, automatyzujemy pracę{" "}
            <span className="bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">
              i sprzedajemy więcej
            </span>
          </h1>
          <p
            className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-slate-600 text-pretty opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Pomagamy małym firmom, biurom rachunkowym i sklepom internetowym. Stała cena przed startem,
            konkretny efekt w dni, a nie miesiące.
          </p>
          <div
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-700 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-700/20 hover:bg-indigo-800 transition-colors"
            >
              Zobacz ofertę <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={CONTACT_PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 font-semibold text-slate-700 hover:border-indigo-400 hover:text-indigo-700 transition-colors"
            >
              <Phone className="h-4 w-4" /> {CONTACT_PHONE}
            </a>
          </div>
        </section>

        {/* Offers */}
        <section id="oferta" className="max-w-6xl mx-auto px-4 md:px-8 py-12 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center">W czym jesteśmy najmocniejsi</h2>
          <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
            Trzy obszary, w których dowozimy najszybciej. Ceny orientacyjne — dokładną wycenę dostajesz po rozmowie.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {offers.map((o) => (
              <article
                key={o.id}
                id={o.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white/85 backdrop-blur shadow-sm hover:shadow-xl transition-shadow overflow-hidden scroll-mt-20"
              >
                <div className={`h-1.5 bg-gradient-to-r ${o.accent}`} />
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${o.accent} text-white`}>
                      <o.icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {o.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{o.title}</h3>
                  <p className="mt-2 font-medium text-slate-700">{o.lead}</p>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">{o.note}</p>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {o.points.map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <Check className="h-4 w-4 mt-0.5 shrink-0 text-indigo-600" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <div className="border-t border-slate-200 pt-5">
                      <p className="text-2xl font-bold">{o.price}</p>
                      <p className="text-xs text-slate-500">{o.priceNote}</p>
                    </div>
                    <a
                      href={mailto(`${o.title} – zapytanie`)}
                      className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${o.accent} px-5 py-3 font-semibold text-white hover:opacity-90 transition-opacity`}
                    >
                      {o.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="jak-pracujemy" className="max-w-6xl mx-auto px-4 md:px-8 py-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Jak pracujemy</h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-slate-200 bg-white/80 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-700">
                    {i + 1}
                  </span>
                  <s.icon className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section id="kontakt" className="max-w-6xl mx-auto px-4 md:px-8 py-12 scroll-mt-20">
          <div className="rounded-3xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-800 p-8 md:p-12 text-white shadow-2xl shadow-indigo-900/20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">Opowiedz, co Cię blokuje</h2>
                <p className="mt-4 text-indigo-100 leading-relaxed">
                  Napisz dwa zdania o swojej firmie i problemie. Odpiszemy w ciągu jednego dnia roboczego
                  z propozycją rozmowy i wstępną wyceną.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href={mailto("Zapytanie ze strony i-hub.me")}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 hover:bg-white/20 transition-colors"
                >
                  <Mail className="h-5 w-5 shrink-0" />
                  <span className="font-semibold">{CONTACT_EMAIL}</span>
                </a>
                <a
                  href={CONTACT_PHONE_HREF}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 hover:bg-white/20 transition-colors"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  <span className="font-semibold">{CONTACT_PHONE}</span>
                </a>
                <div className="flex items-center gap-4 rounded-2xl p-4 text-indigo-100">
                  <Clock className="h-5 w-5 shrink-0" />
                  <span>pon.–pt., 8:00–17:00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary products strip */}
        <section id="produkty" className="max-w-6xl mx-auto px-4 md:px-8 py-14 scroll-mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 text-center">
            Nasze produkty
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-slate-200 bg-white/70 p-4 hover:border-indigo-300 hover:bg-white transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-sm">{p.name}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-indigo-600" />
                </div>
                <p className="mt-1 text-xs text-slate-500">{p.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-200/70 py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <img src="/images/logo-footer.png" alt="iHub Group" className="h-6 w-auto opacity-80" />
          <p>
            © {new Date().getFullYear()} iHub Group ·{" "}
            <a href={mailto("Kontakt")} className="hover:text-indigo-700">{CONTACT_EMAIL}</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
