import Image from "next/image"
import { Award, Clock, Siren, Lock, Scale } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { basePath, whatsappLink } from "@/lib/site"

const credentials = [
  {
    icon: Award,
    text: "Mais de 15 anos de atuação exclusiva em Direito Criminal.",
  },
  {
    icon: Clock,
    text: "Atendimento 24 horas para emergências criminais.",
  },
  {
    icon: Siren,
    text: "Atuação em flagrantes e audiências de custódia.",
  },
  {
    icon: Lock,
    text: "Atendimento sigiloso e personalizado.",
  },
  {
    icon: Scale,
    text: "Defesa estratégica em todas as fases do processo.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={`${basePath}/images/dr-henrique-office.png`}
              alt="Dr. Henrique Machado em seu escritório de advocacia"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            O Especialista
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
            Dr. Henrique Machado
          </h2>
          <p className="mt-1 text-sm font-medium text-primary">OAB/PR 63.160</p>

          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Advogado criminalista dedicado à defesa estratégica e à proteção da
            liberdade de seus clientes. Aliando sólida formação acadêmica e
            ampla atuação prática, conduz cada caso com técnica, ética e
            comprometimento absoluto.
          </p>

          <ul className="mt-8 space-y-4">
            {credentials.map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground/90">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar com Advogado Criminalista
          </a>
        </div>
      </div>
    </section>
  )
}
