import Image from "next/image"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { whatsappLink } from "@/lib/site"

const navItems = [
  { label: "Atuação", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <Image
            src="/images/logo-machado.png"
            alt="Advocacia Machado"
            width={48}
            height={48}
            className="h-10 w-10 object-contain"
          />
          <span className="font-serif text-base font-semibold tracking-wide text-foreground">
            Advocacia Machado
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Falar agora</span>
        </a>
      </div>
    </header>
  )
}
