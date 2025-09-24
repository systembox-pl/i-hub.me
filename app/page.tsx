import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Hero Headlines */}
          <div className="space-y-6">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent animate-pulsing-glow">
              iHub Group
            </div>
            <h1
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight text-balance lg:text-5xl opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              Pozyskujemy klientów i automatyzujemy Twój biznes dzięki AI
            </h1>
            <p className="text-gray-600 text-pretty max-w-3xl mx-auto font-extralight text-2xl">
              Wybierz kierunek, który najbardziej odpowiada Twoim potrzebom
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 - Lead Generation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
              <div className="flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Generowanie leadów w modelu CPA</h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-extralight">
                    Dostarczamy zweryfikowane kontakty biznesowe w modelu success fee – płacisz tylko za efekt.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <a href="https://lead.i-hub.me/" target="_blank" rel="noopener noreferrer">
                    Dowiedz się więcej
                  </a>
                </Button>
              </div>
            </div>

            {/* Card 2 - AI & Automation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
              <div className="flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Automatyzacje i AI</h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-extralight">
                    Wdrażamy inteligentne rozwiązania, które oszczędzają Twój czas, redukują koszty i zwiększają
                    sprzedaż.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full px-8 py-4 text-lg font-semibold bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <a href="https://ai.i-hub.me/" target="_blank" rel="noopener noreferrer">
                    Dowiedz się więcej
                  </a>
                </Button>
              </div>
            </div>

            {/* Card 3 - Web Development */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
              <div className="flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Tworzenie stron WWW</h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-extralight">
                    Nowoczesne strony internetowe gotowe w 3 dni. Bez grafika, bez czekania – tylko skuteczne
                    rozwiązania.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <a href="https://webstudio.i-hub.me/" target="_blank" rel="noopener noreferrer">
                    Dowiedz się więcej
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center">
        <p className="text-gray-500 text-sm font-medium">© {new Date().getFullYear()} iHub Group</p>
      </footer>
    </div>
  )
}
