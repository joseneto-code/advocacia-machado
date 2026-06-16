// Deve corresponder ao "basePath" em next.config.mjs (necessário para GitHub Pages)
export const basePath = "/advocacia-machado"

export const site = {
  name: "Advocacia Machado",
  lawyer: "Dr. Henrique Machado",
  oab: "OAB/PR 63.160",
  url: "https://www.advocaciamachado.adv.br",
  // Telefone usado para chamadas e WhatsApp (formato internacional, sem símbolos)
  whatsapp: "5544991012343",
  phoneDisplay: "(44) 99101-2343",
  whatsappMessage:
    "Olá Dr. Henrique, preciso de orientação jurídica criminal urgente.",
  email: "advocaciamachado.mga@gmail.com",
  address: {
    line1: "Rua Basílio Saltchuk, nº 762, sobreloja 05",
    line2: "Novo Centro, Maringá - PR",
    maps: "https://www.google.com/maps?q=Rua+Bas%C3%ADlio+Saltchuk+762+Maring%C3%A1+PR",
    embed:
      "https://www.google.com/maps?q=Rua+Bas%C3%ADlio+Saltchuk+762+Maring%C3%A1+PR&output=embed",
  },
} as const

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
