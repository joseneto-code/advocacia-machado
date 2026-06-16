import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Advogado Criminalista em Maringá | Atendimento 24 Horas - Dr. Henrique Machado',
    template: '%s | Advocacia Machado',
  },
  description:
    'Advogado criminalista em Maringá-PR. Atendimento imediato para prisão em flagrante, audiência de custódia, habeas corpus e defesa criminal. Mais de 15 anos de experiência na área penal. OAB/PR 63.160.',
  keywords: [
    'advogado criminalista Maringá',
    'defesa criminal Maringá',
    'advogado criminal Maringá',
    'audiência de custódia Maringá',
    'prisão em flagrante advogado',
    'habeas corpus Maringá',
    'advogado tribunal do júri',
    'OAB/PR 63.160',
  ],
  authors: [{ name: site.lawyer }],
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.url,
    siteName: site.name,
    title: 'Advogado Criminalista em Maringá | Atendimento 24 Horas',
    description:
      'Atendimento imediato para prisão em flagrante, audiência de custódia, habeas corpus e defesa criminal em Maringá-PR. OAB/PR 63.160.',
    images: [
      {
        url: '/images/dr-henrique-hero.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Henrique Machado, advogado criminalista em Maringá',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advogado Criminalista em Maringá | Atendimento 24 Horas',
    description:
      'Atendimento imediato para prisão em flagrante, audiência de custódia, habeas corpus e defesa criminal em Maringá-PR.',
    images: ['/images/dr-henrique-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#383838',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: site.lawyer,
  image: `${site.url}/images/dr-henrique-hero.png`,
  url: site.url,
  telephone: `+${site.whatsapp}`,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.line1,
    addressLocality: 'Maringá',
    addressRegion: 'PR',
    addressCountry: 'BR',
  },
  areaServed: 'Maringá, PR',
  priceRange: '$$',
  knowsAbout: 'Direito Penal',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${inter.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
