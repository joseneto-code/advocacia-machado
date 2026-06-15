const faqs = [
  {
    question: "Quanto custa um advogado criminalista em Maringá?",
    answer:
      "O valor dos honorários depende da complexidade do caso, da fase processual e da urgência do atendimento. Entre em contato pelo WhatsApp para uma avaliação personalizada.",
  },
  {
    question: "Atendem prisão em flagrante?",
    answer:
      "Sim. O atendimento para prisão em flagrante é imediato, 24 horas por dia, incluindo finais de semana e feriados.",
  },
  {
    question: "Fazem audiência de custódia?",
    answer:
      "Sim. A defesa atua na audiência de custódia desde o primeiro momento, garantindo os direitos do preso perante a autoridade judicial.",
  },
  {
    question: "Atendem finais de semana?",
    answer:
      "Sim. O atendimento de urgência funciona 24 horas, todos os dias da semana.",
  },
  {
    question: "Fazem Habeas Corpus?",
    answer:
      "Sim. São impetrados habeas corpus em todas as instâncias, incluindo STJ e STF, sempre que houver prisão ilegal ou abusiva.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export function FaqSection() {
  return (
    <section
      id="faq"
      className="border-t border-white/5 bg-card/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Tire suas dúvidas
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="mt-10 divide-y divide-white/8 rounded-2xl border border-white/8 bg-background">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5 md:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base font-semibold text-foreground md:text-lg">
                {faq.question}
                <span className="shrink-0 text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  )
}
