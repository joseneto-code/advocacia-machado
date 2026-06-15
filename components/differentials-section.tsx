import { Lock, HeartHandshake, Target } from "lucide-react"

const items = [
  {
    icon: Lock,
    title: "Sigilo Absoluto",
    desc: "Cada caso é tratado com total confidencialidade e discrição. Sua privacidade é prioridade.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    desc: "Acolhimento e clareza em cada etapa. Você nunca estará sozinho diante da Justiça.",
  },
  {
    icon: Target,
    title: "Estratégia Personalizada",
    desc: "Análise minuciosa e tese de defesa construída sob medida para o seu caso.",
  },
]

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="border-t border-white/5 bg-card/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Por que confiar
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
            Compromisso com a sua Defesa
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/8 bg-background p-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
