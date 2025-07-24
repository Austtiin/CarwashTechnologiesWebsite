import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carwash Technologies - Professional Carwash Solutions',
  description: 'Professional carwash installations, decommissions, chemical sales, and consulting services. Call 612-408-9010 for a free consultation.',
  keywords: 'carwash, installation, decommission, chemical sales, consulting, minnesota',
  authors: [{ name: 'Carwash Technologies' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}

