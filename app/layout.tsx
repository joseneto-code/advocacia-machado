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
    default: 'Defesa Criminal em Maringá | Dr. Henrique Machado - Advogado Criminalista',
    template: '%s | Advocacia Machado',
  },
  description:
    'Advogado criminalista em Maringá-PR especializado em defesa criminal estratégica. Atendimento 24h para prisões em flagrante, audiências de custódia e defesas complexas. OAB/PR 63.160.',
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
    title: 'Defesa Criminal em Maringá | Dr. Henrique Machado',
    description:
      'Defesa criminal estratégica e especializada em Maringá-PR. Atendimento 24h para prisões em flagrante, audiências de custódia e defesas complexas. OAB/PR 63.160.',
    images: [
      {
        url: '/images/dr-henrique-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Henrique Machado, advogado criminalista em Maringá',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Defesa Criminal em Maringá | Dr. Henrique Machado',
    description:
      'Advogado criminalista em Maringá-PR. Atendimento 24h para prisões em flagrante, audiências de custódia e defesas complexas.',
    images: ['/images/dr-henrique-hero.jpg'],
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
  themeColor: '#0a0a0a',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: site.lawyer,
  image: `${site.url}/images/dr-henrique-hero.jpg`,
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
