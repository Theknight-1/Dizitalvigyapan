import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Dizital Vigyapan | Digital Marketing Solutions",
  description:
    "Premium digital marketing agency specializing in SEO, SEM, content marketing, and brand building. We grow brands digitally with data-driven strategies.",
  generator: "v0.app",
  keywords:
    "Digital Marketing, SEO, SEM, Content Marketing, Brand Building, Digital Agency",
  authors: [{ name: "Dizital Vigyapan" }],
  icons: {
    icon: "/apple-touch-icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#FFB800',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
