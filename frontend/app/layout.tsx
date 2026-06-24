import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fraud Velocity Monitor | Real Rails Intelligence',
  description: 'Real-time fraud detection and velocity monitoring dashboard for payment systems',
  keywords: ['fraud detection', 'payment systems', 'real-time analytics', 'velocity monitoring'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-rails-bg text-gray-100">
        {children}
      </body>
    </html>
  )
}
