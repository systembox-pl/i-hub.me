import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />

      <main className="flex-1 flex items-center justify-center px-6 py-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <div className="text-xl md:text-2xl font-medium text-primary">iHub Group</div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance opacity-0 animate-fade-in-up"
              style={{
                animationDelay: "0.2s",
                fontWeight: "700",
                letterSpacing: "-0.025em",
              }}
            >
              Pozyskujemy klientów i automatyzujemy Twój biznes dzięki AI
            </h1>
            <p className="text-muted-foreground text-pretty max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              Wybierz kierunek, który najbardziej odpowiada Twoim potrzebom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Card 1 - Lead Generation */}
            <a href="https://lead.i-hub.me/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="modern-card rounded-2xl p-6 flex flex-col h-full group cursor-pointer animate-subtle-float">
                <div className="h-20 flex items-center justify-center mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground text-center leading-tight">
                    Generowanie leadów w modelu CPA
                  </h3>
                </div>
                <div className="h-28 flex items-center justify-center mb-6 flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    Dostarczamy zweryfikowane kontakty biznesowe w modelu success fee – płacisz tylko za efekt.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="modern-button-blue w-full px-8 py-3 text-base font-medium text-white rounded-xl border-0 pointer-events-none"
                >
                  Dowiedz się więcej
                </Button>
              </div>
            </a>

            {/* Card 2 - AI & Automation */}
            <a href="https://ai.i-hub.me/" target="_blank" rel="noopener noreferrer" className="block">
              <div
                className="modern-card rounded-2xl p-6 flex flex-col h-full group cursor-pointer animate-subtle-float"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground text-center leading-tight">
                    Automatyzacje i AI
                  </h3>
                </div>
                <div className="h-28 flex items-center justify-center mb-6 flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    Wdrażamy inteligentne rozwiązania, które oszczędzają Twój czas, redukują koszty i zwiększają
                    sprzedaż.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="modern-button-purple w-full px-8 py-3 text-base font-medium text-white rounded-xl border-0 pointer-events-none"
                >
                  Dowiedz się więcej
                </Button>
              </div>
            </a>

            {/* Card 3 - Web Development */}
            <a href="https://webstudio.i-hub.me/" target="_blank" rel="noopener noreferrer" className="block">
              <div
                className="modern-card rounded-2xl p-6 flex flex-col h-full group cursor-pointer animate-subtle-float"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground text-center leading-tight">
                    Tworzenie stron WWW
                  </h3>
                </div>
                <div className="h-28 flex items-center justify-center mb-6 flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    Nowoczesne strony internetowe gotowe w 3 dni. Bez grafika, bez czekania – tylko skuteczne
                    rozwiązania.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="modern-button-pink w-full px-8 py-3 text-base font-medium text-white rounded-xl border-0 pointer-events-none"
                >
                  Dowiedz się więcej
                </Button>
              </div>
            </a>

            <a href="https://vira.i-hub.me/" target="_blank" rel="noopener noreferrer" className="block">
              <div
                className="modern-card rounded-2xl p-6 flex flex-col h-full group cursor-pointer animate-subtle-float"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground text-center leading-tight">
                    VIRA Voice Assistant by iHub
                  </h3>
                </div>
                <div className="h-28 flex items-center justify-center mb-6 flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    Inteligentny asystent głosowy AI, który automatyzuje rozmowy z Twoimi klientami. Windykacja,
                    umawianie wizyt, sprzedaż – jeden voicebot, wiele zastosowań.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="modern-button-green w-full px-8 py-3 text-base font-medium text-white rounded-xl border-0 pointer-events-none"
                >
                  Dowiedz się więcej
                </Button>
              </div>
            </a>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center relative z-10">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} iHub Group</p>
      </footer>
    </div>
  )
}
