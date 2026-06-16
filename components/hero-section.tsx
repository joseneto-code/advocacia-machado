import Image from "next/image"
import { ShieldCheck, Clock, Scale } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { basePath, whatsappLink, site } from "@/lib/site"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <Image
        src={`${basePath}/images/dr-henrique-hero.png`}
        alt="Dr. Henrique Machado, advogado criminalista, em sala de tribunal"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top opacity-60 brightness-110 md:object-[center_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-primary sm:px-4 sm:text-xs sm:tracking-widest">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            Atendimento de urgência 24 horas
          </span>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-balance text-foreground sm:text-5xl md:text-6xl">
            Advogado Criminalista em{" "}
            <span className="text-primary">Maringá</span>
            {" | "}
            <span className="text-muted-foreground">Atendimento 24 Horas</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Atendimento imediato para prisão em flagrante, audiência de
            custódia, habeas corpus e defesa criminal. Mais de 15 anos de
            experiência na área penal.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-black shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar com Advogado Criminalista
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground sm:gap-x-8 sm:gap-y-4">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Sigilo absoluto
            </span>
            <span className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-primary" />
              {site.oab}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Resposta imediata
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
