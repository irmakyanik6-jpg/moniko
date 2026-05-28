import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import { WishlistProvider } from '@/lib/wishlist-context'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CartDrawer } from '@/components/cart-drawer'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'MONIKO | Lüks El Çantaları ve Moda Aksesuarları',
  description: 'MONIKO ile zamansız zarafeti keşfedin. Modern kadın için en kaliteli malzemelerle üretilen premium el çantaları ve moda aksesuarları.',
  keywords: ['lüks çantalar', 'tasarım çantalar', 'kadın modası', 'deri çantalar', 'premium aksesuarlar'],
  openGraph: {
    title: 'MONIKO | Lüks El Çantaları ve Moda Aksesuarları',
    description: 'MONIKO ile zamansız zarafeti keşfedin. Premium el çantaları ve moda aksesuarları.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#F7F3EE',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <WishlistProvider>
          <CartProvider>
            <Navbar />
            <CartDrawer />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </WishlistProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
