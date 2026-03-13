import type { Metadata } from 'next'
import { Bricolage_Grotesque, DM_Mono } from 'next/font/google'
import { LanguageProvider } from '@/contexts/LanguageContext'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Luiz Fillipe — AI Annotation & Automation',
  description:
    'Multimodal AI Annotation Specialist and Automation Builder based in São Luís, Brazil. Available for remote AI operations and dataset training roles.',
  keywords: [
    'AI annotation',
    'multimodal annotation',
    'automation engineer',
    'creative technologist',
    'dataset labeling',
    'audiovisual analysis',
  ],
  openGraph: {
    title: 'Luiz Fillipe — AI Annotation & Automation',
    description: 'Multimodal AI Annotation Specialist and Automation Builder.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmMono.variable}`}>
      <body className="font-display bg-bg text-text-primary">
        <div className="wave-bg" aria-hidden="true">
          <div className="wave-layer wave-layer-1" />
          <div className="wave-layer wave-layer-2" />
        </div>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
