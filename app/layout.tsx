import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Special Partners - 회사 소개',
  description: 'Special Partners 회사 소개 페이지 목업',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}


