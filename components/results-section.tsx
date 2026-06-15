import { Users, Clock, Siren, Gavel, Landmark } from "lucide-react"

const results = [
  {
    icon: Users,
    text: "Dezenas de clientes atendidos em Maringá e região",
  },
  {
    icon: Clock,
    text: "Atendimento 24 horas",
  },
  {
    icon: Siren,
    text: "Defesa em flagrantes",
  },
  {
    icon: Gavel,
    text: "Atuação perante o Tribunal do Júri",
  },
  {
    icon: Landmark,
    text: "Recursos junto ao STF e STJ",
  },
]

export function ResultsSection() {
  return (
    <section
      id="resultados"
      className="border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Experiência que faz a diferença
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
            Resultados e Casos Atendidos
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Atuação consolidada como advogado criminalista em Maringá, com
            histórico de casos em todas as fases do processo penal.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {results.map((item) => (
            <div
              key={item.text}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-card/80 p-6 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <item.icon className="h-6 w-6" />
              </span>
              <p className="text-sm font-medium leading-relaxed text-foreground/90">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
