import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Rocket, Shield, Heart } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">O iHub Group</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Jesteśmy zespołem pasjonatów technologii i biznesu, którzy wierzą w siłę innowacji. Nasze doświadczenie i
            wiedza pozwalają nam tworzyć rozwiązania, które rzeczywiście zmieniają sposób działania firm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <Lightbulb className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Innowacyjność</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Zawsze szukamy najnowszych technologii i trendów, aby oferować najlepsze rozwiązania.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <Rocket className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Szybkość</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Realizujemy projekty sprawnie, nie tracąc przy tym na jakości wykonania.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Bezpieczeństwo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Dbamy o najwyższe standardy bezpieczeństwa w każdym realizowanym projekcie.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Pasja</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Każdy projekt traktujemy z pełnym zaangażowaniem i pasją do doskonałości.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
