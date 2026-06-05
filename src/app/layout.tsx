import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Supsuu — Doğa Severler İçin Sosyal Platform',
  description: 'Kamp, balık tutma, trekking, kaya tırmanışı ve daha fazlası. Konumları işaretle, etiketle, topluluğunla paylaş.',
  keywords: 'kamp, doğa, trekking, balık tutma, yürüyüş, kaya tırmanışı, türkiye',
  openGraph: {
    title: 'Supsuu',
    description: 'Doğa severler için sosyal platform',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
