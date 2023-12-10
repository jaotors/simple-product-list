import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

import Navbar from '@/components/Navbar'

import './globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple Product List',
  description: 'Using Dummy API json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
