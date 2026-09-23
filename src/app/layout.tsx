import type { Metadata } from 'next'
import { Frank_Ruhl_Libre, Rubik, Cormorant_Garamond } from 'next/font/google'
import Script from 'next/script'
import '../index.css'

const frank = Frank_Ruhl_Libre({ subsets: ['hebrew', 'latin'], variable: '--font-hebrew', weight: ['400', '700', '900'] })
const rubik = Rubik({ subsets: ['hebrew', 'latin'], variable: '--font-body' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['400', '600', '700'] })

const SITE_NAME = 'Centro de Estudios Hebraicos Bene Israel'
const SITE_DESC = 'Torá semanal, reflexiones sobre la Parashá, calendario hebreo, artículos y estudios de la comunidad Bene Israel en Los Teques, Venezuela. Shabat, moedim, oraciones y más.'
const SITE_URL = 'https://www.beneyisrael.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Torá, Parashá y Calendario Hebreo`,
    template: `%s · Bene Israel`,
  },
  description: SITE_DESC,
  keywords: [
    'Torá', 'Parashá', 'parasha de la semana', 'estudios hebraicos', 'calendario hebreo',
    'Shabat', 'moedim', 'festividades judías', 'Los Teques', 'Venezuela', 'comunidad judía',
    'Bene Israel', 'reflexiones Torá', 'siddur', 'Cábala', 'Halajá', 'Musar',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'es_VE',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Torá, Parashá y Calendario Hebreo`,
    description: SITE_DESC,
    images: [
      {
        url: '/images/logo-bet-midrash.png',
        width: 512,
        height: 512,
        alt: `${SITE_NAME} — Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Torá, Parashá y Calendario Hebreo`,
    description: SITE_DESC,
    images: ['/images/logo-bet-midrash.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    // Agrega aquí tu código cuando tengas Google Search Console
    // google: 'TU_CODIGO_DE_VERIFICACION',
  },
  icons: {
    icon: '/images/logo-bet-midrash.png',
    apple: '/images/logo-bet-midrash.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: ['Beit Midrash Bene Israel', 'בית מדרש בני ישראל'],
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo-bet-midrash.png`,
        sameAs: [
          'https://www.instagram.com/beneisrael_/',
          'https://www.tiktok.com/@beneisrael',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Los Teques',
          addressRegion: 'Miranda',
          addressCountry: 'VE',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+58-412-4586537',
          contactType: 'customer service',
          email: 'info@beneyisrael.com',
          availableLanguage: ['Spanish', 'Hebrew'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'es-VE',
      },
    ],
  }

  return (
    <html lang="es">
      <body className={`${frank.variable} ${rubik.variable} ${cormorant.variable} antialiased`}>
        {children}
        <Script
          id="ld-json-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
