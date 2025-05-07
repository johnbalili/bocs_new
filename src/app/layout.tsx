import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { NavatticJS } from '@/components/navattic'
import Head from 'next/head'
import BocsLogo from '@/screenshots/bocs-logo-green.png'

export const metadata: Metadata = {
  title: {
    template: '%s - Radiant',
    default: 'Radiant - Close every deal',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/blog/feed.xml"
        />
        <meta property="og:title" content="Bocs – A Better Subscription Box Experience for WooCommerce" />
        <meta property="og:description" content="Tired of clunky plugins? Bocs replaces Woo Subscriptions with a clean, flexible box builder and built-in analytics to help you grow faster." />
        <meta property="og:image" content={BocsLogo.src} />
        <meta name="robots" content="index, follow" />
        <script src="https://js.navattic.com/embeds.js" async></script> 
      </Head>
      <body className="text-gray-950 antialiased">
        {children}
        <NavatticJS/>
      </body>
    </html>
  )
}
