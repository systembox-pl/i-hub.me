import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />

      <main className="flex-1 flex items-center justify-center px-6 py-12 relative z-10">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-8">
            <div className="text-2xl md:text-3xl font-medium text-primary">iHub Group</div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance opacity-0 animate-fade-in-up"
              style={{
                animationDelay: "0.2s",
                fontWeight: "700",
                letterSpacing: "-0.025em",
              }}
            >
              Pozyskujemy klientów i automatyzujemy Twój biznes dzięki AI
            </h1>
            <p className="text-muted-foreground text-pretty max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Wybierz kierunek, który najbardziej odpowiada Twoim potrzebom
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 - Lead Generation */}
            <div className="modern-card rounded-2xl p-8 flex flex-col h-full group cursor-pointer animate-subtle-float">
              <div className="h-24 flex items-center justify-center mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center leading-tight">
                  Generowanie leadów w modelu CPA
                </h3>
              </div>
              <div className="h-32 flex items-center justify-center mb-8 flex-grow">
                <p className="text-base text-muted-foreground leading-relaxed text-center">
                  Dostarczamy zweryfikowane kontakty biznesowe w modelu success fee – płacisz tylko za efekt.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="modern-button-blue w-full px-8 py-3 text-base font-medium text-white rounded-xl border-0"
              >
                <a href="https://lead.i-hub.me/" target="_blank" rel="noopener noreferrer">
                  Dowiedz się więcej
                </a>
              </Button>
            </div>

            {/* Card 2 - AI & Automation */}
            <div
              className="modern-card rounded-2xl p-8 flex flex-col h-full group cursor-pointer animate-subtle-float"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="h-24 flex items-center justify-center mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center leading-tight">
                  Automatyzacje i AI
                </h3>
              </div>
              <div className="h-32 flex items-center justify-center mb-8 flex-grow">
                <p className="text-base text-muted-foreground leading-relaxed text-center">
                  Wdrażamy inteligentne rozwiązania, które oszczędzają Twój czas, redukują koszty i zwiększają sprzedaż.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="modern-button-purple w-full px-8 py-3 text-base font-medium text-white rounded-xl border-0"
              >
                <a href="https://ai.i-hub.me/" target="_blank" rel="noopener noreferrer">
                  Dowiedz się więcej
                </a>
              </Button>
            </div>

            {/* Card 3 - Web Development */}
            <div
              className="modern-card rounded-2xl p-8 flex flex-col h-full group cursor-pointer animate-subtle-float"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="h-24 flex items-center justify-center mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center leading-tight">
                  Tworzenie stron WWW
                </h3>
              </div>
              <div className="h-32 flex items-center justify-center mb-8 flex-grow">
                <p className="text-base text-muted-foreground leading-relaxed text-center">
                  Nowoczesne strony internetowe gotowe w 3 dni. Bez grafika, bez czekania – tylko skuteczne rozwiązania.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="modern-button-pink w-full px-8 py-3 text-base font-medium text-white rounded-xl border-0"
              >
                <a href="https://webstudio.i-hub.me/" target="_blank" rel="noopener noreferrer">
                  Dowiedz się więcej
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center relative z-10">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} iHub Group</p>
      </footer>
    </div>
  )
}
