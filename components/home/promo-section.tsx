"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function PromoSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Promo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] group overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80"
              alt="Yeni gelenler"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <p className="text-sm tracking-[0.3em] uppercase mb-4">Yeni Geldi</p>
              <h3 className="text-3xl md:text-4xl font-serif text-center mb-6">
                İlkbahar Koleksiyonu
              </h3>
              <Link
                href="/shop?collection=spring"
                className="px-8 py-3 border border-white text-sm tracking-wider uppercase hover:bg-white hover:text-foreground transition-colors"
              >
                Şimdi Keşfet
              </Link>
            </div>
          </motion.div>

          {/* Right Promo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] group overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80"
              alt="Özel teklif"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <p className="text-sm tracking-[0.3em] uppercase mb-4">Sınırlı Süre</p>
              <h3 className="text-3xl md:text-4xl font-serif text-center mb-6">
                İlk Siparişe %20 İndirim
              </h3>
              <Link
                href="/shop"
                className="px-8 py-3 border border-white text-sm tracking-wider uppercase hover:bg-white hover:text-foreground transition-colors"
              >
                Alışverişe Başla
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
