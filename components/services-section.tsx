import Image from "next/image"
import { Siren, Gavel, ShieldAlert, Landmark, KeyRound } from "lucide-react"
import { basePath } from "@/lib/site"

const services = [
  {
    icon: Siren,
    title: "Prisão em Flagrante (24h)",
    desc: "Acompanhamento imediato em delegacias e audiências de custódia, a qualquer hora do dia ou da noite.",
    highlight: true,
  },
  {
    icon: Gavel,
    title: "Tribunal do Júri",
    desc: "Defesa técnica e oratória estratégica em crimes dolosos contra a vida perante o conselho de sentença.",
  },
  {
    icon: ShieldAlert,
    title: "Crimes Patrimoniais e Sexuais",
    desc: "Atuação especializada e sigilosa em casos sensíveis, com defesa firme e tecnicamente fundamentada.",
  },
  {
    icon: Landmark,
    title: "Recursos em Tribunais Superiores",
    desc: "Habeas corpus, recursos especiais e extraordinários junto ao STJ e STF.",
  },
  {
    icon: KeyRound,
    title: "Execução Penal e Liberdade",
    desc: "Progressão de regime, livramento condicional e pedidos de liberdade provisória.",
  },
]

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden border-t border-white/5 py-20 md:py-28"
    >
      <Image
        src={`${basePath}/images/dr-henrique-office.jpg`}
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover object-center opacity-15 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Áreas de atuação
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
            Atuação Especializada em Direito Penal
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Defesa completa em todas as fases do processo criminal, com
            estratégia personalizada para cada caso.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group rounded-2xl border p-6 backdrop-blur-sm transition-colors ${
                service.highlight
                  ? "border-primary/40 bg-primary/10"
                  : "border-white/8 bg-card/80 hover:border-primary/30"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
