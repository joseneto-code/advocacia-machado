import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { whatsappLink } from "@/lib/site"

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Dr. Henrique pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-medium text-black shadow-lg shadow-black/40 transition-transform hover:scale-105 md:bottom-7 md:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden text-sm font-semibold sm:inline">
        Atendimento 24h
      </span>
      <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#1ebe57]" />
      </span>
    </a>
  )
}
