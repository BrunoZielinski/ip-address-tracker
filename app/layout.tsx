import './globals.css'

import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IP Address Tracker',
  description: 'Search for any IP address or domain',
  icons: ['/favicon.png'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
