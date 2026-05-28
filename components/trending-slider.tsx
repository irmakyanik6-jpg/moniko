"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/data"

export function TrendingSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: containerRef })
  const opacity = useTransform(scrollXProgress, [0, 0.5, 1], [1, 1, 0.5])

  const trendingProducts = products.filter((p) => p.isNew || p.isBestSeller).slice(0, 6)

  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              What&apos;s Hot
            </p>
            <h2 className="text-3xl md:text-4xl font-serif">Trending Now</h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:block text-sm tracking-wider uppercase hover:text-accent transition-colors"
          >
            View All
          </Link>
        </motion.div>
      </div>

      <motion.div
        ref={containerRef}
        style={{ opacity }}
        className="flex gap-6 overflow-x-auto pb-6 px-6 scrollbar-hide cursor-grab active:cursor-grabbing"
      >
        {trendingProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-72"
          >
            <Link href={`/shop/${product.id}`} className="group block">
              <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-foreground text-background text-xs tracking-wider uppercase">
                    New
                  </span>
                )}
              </div>
              <h3 className="font-serif text-lg mb-1 group-hover:text-accent transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground">${product.price}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
