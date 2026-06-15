import Image from "next/image"
import { basePath, site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-card/40 py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <Image
              src={`${basePath}/images/logo-machado.png`}
              alt="Advocacia Machado"
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="font-serif font-semibold text-foreground">
                {site.lawyer}
              </p>
              <p className="text-sm text-muted-foreground">{site.oab}</p>
            </div>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
            {site.address.line1}, {site.address.line2}.
          </p>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p className="mt-1">
            Este site tem caráter meramente informativo, em conformidade com o
            Código de Ética e Disciplina da OAB.
          </p>
        </div>
      </div>
    </footer>
  )
}
