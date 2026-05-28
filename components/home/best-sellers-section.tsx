"use client"

import { motion } from "framer-motion"
import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"

export function BestSellersSection() {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4)

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Müşteri Favorileri
          </p>
          <h2 className="text-3xl md:text-4xl font-serif">Çok Satanlar</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/shop"
            className="inline-block px-10 py-4 border border-foreground text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            Tüm Ürünleri Gör
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
