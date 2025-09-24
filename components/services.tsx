import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Cloud, BarChart3, Palette, Cog } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Rozwój oprogramowania",
      description: "Tworzymy nowoczesne aplikacje webowe i mobilne dostosowane do Twoich potrzeb biznesowych.",
      features: ["Aplikacje webowe", "Systemy zarządzania", "Integracje API"],
    },
    {
      icon: Smartphone,
      title: "Aplikacje mobilne",
      description: "Projektujemy i rozwijamy aplikacje mobilne na iOS i Android z najwyższą jakością UX.",
      features: ["iOS & Android", "React Native", "Flutter"],
    },
    {
      icon: Cloud,
      title: "Rozwiązania chmurowe",
      description: "Migracja do chmury, optymalizacja kosztów i zarządzanie infrastrukturą IT.",
      features: ["AWS", "Azure", "Google Cloud"],
    },
    {
      icon: BarChart3,
      title: "Analityka biznesowa",
      description: "Zamieniamy dane w wartościowe insights dla Twojego biznesu.",
      features: ["Dashboardy", "Raporty", "Predykcje"],
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Projektujemy intuicyjne interfejsy, które zachwycają użytkowników.",
      features: ["UI/UX Design", "Prototypy", "Branding"],
    },
    {
      icon: Cog,
      title: "Konsulting IT",
      description: "Doradztwo technologiczne i strategiczne dla rozwoju Twojej firmy.",
      features: ["Audyty IT", "Strategia", "Optymalizacja"],
    },
  ]

  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Nasze usługi</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Oferujemy kompleksowe rozwiązania technologiczne, które pomogą Twojej firmie osiągnąć sukces w cyfrowym
            świecie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Dowiedz się więcej
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
