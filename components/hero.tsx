import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Target } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Innowacyjne rozwiązania dla <span className="text-primary">Twojego biznesu</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            iHub Group to centrum innowacji, które łączy technologię z biznesem. Pomagamy firmom rozwijać się w cyfrowym
            świecie poprzez nowoczesne rozwiązania i strategiczne partnerstwa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Poznaj nasze usługi
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              Skontaktuj się z nami
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Building2 className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">100+</h3>
            <p className="text-muted-foreground">Zrealizowanych projektów</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">50+</h3>
            <p className="text-muted-foreground">Zadowolonych klientów</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Target className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">5+</h3>
            <p className="text-muted-foreground">lat doświadczenia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
