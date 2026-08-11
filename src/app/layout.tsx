import type { Metadata, Viewport } from 'next'
import '@/index.css'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollToTop from '@/components/ScrollToTop'

const SITE_URL = 'https://teques.beneyisrael.com'
const SITE_NAME = 'Beit Midrash Bene Israel'
const DESCRIPTION =
  'Centro de estudios hebreos Bene Israel en Los Teques, Venezuela. Torá, Musar, Cábala, Halajá Evolutiva, Hebreo y festividades judías. Estudia con nosotros.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · Centro de Estudios Hebreos · Los Teques`,
    template: `%s · ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'Torá',
    'judaísmo',
    'estudios hebreos',
    'Bene Israel',
    'Los Teques',
    'Venezuela',
    'Cábala',
    'Musar',
    'Halajá',
    'hebreo',
    'parashá',
    'Shabbat',
  ],
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_VE',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} · Centro de Estudios Hebreos`,
    description:
      'Centro de estudios hebreos en Los Teques, Venezuela. Torá, Musar, Cábala, Halajá Evolutiva y Hebreo.',
    images: [
      {
        url: '/images/logo-bet-midrash.png',
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} · Centro de Estudios Hebreos`,
    description:
      'Centro de estudios hebreos en Los Teques, Venezuela. Torá, Musar, Cábala, Halajá Evolutiva y Hebreo.',
    images: ['/images/logo-bet-midrash.png'],
  },
  icons: {
    icon: '/images/logo-bet-midrash.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0c0a07',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: 'בית מדרש בני ישראל',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo-bet-midrash.png`,
      },
      description:
        'Centro de estudios hebreos en Los Teques, Venezuela. Enseñanza de Torá, Musar, Cábala, Halajá Evolutiva y lengua hebrea.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Los Teques',
        addressRegion: 'Miranda',
        addressCountry: 'VE',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+58-412-4586537',
        contactType: 'Información',
        availableLanguage: ['Spanish', 'Hebrew'],
      },
      sameAs: ['https://instagram.com/beneisrael_'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: `${SITE_NAME} · Centro de Estudios Hebreos`,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <WhatsAppFloat />
        <ScrollToTop />
      </body>
    </html>
  )
}