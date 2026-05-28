"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ShoppingBag } from "lucide-react"
import type { Product } from "@/lib/data"
import { formatPrice } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart()
  const { isInWishlist, toggleItem } = useWishlist()
  const inWishlist = isInWishlist(product.id)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4">
        <Link href={`/shop/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-foreground text-background text-xs tracking-wider uppercase">
              Yeni
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs tracking-wider uppercase">
              Çok Satan
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => toggleItem(product)}
            className={`w-10 h-10 bg-background/90 backdrop-blur-sm flex items-center justify-center transition-colors ${
              inWishlist ? "text-accent" : "hover:text-accent"
            }`}
            aria-label={inWishlist ? "Favorilerden çıkar" : "Favorilere ekle"}
          >
            <Heart className={`w-5 h-5 ${inWishlist ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Quick Add */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <button
            onClick={() => addItem(product, product.colors[0])}
            className="w-full py-3 bg-foreground text-background text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-accent transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Sepete Ekle
          </button>
        </motion.div>
      </div>

      <Link href={`/shop/${product.id}`}>
        <h3 className="font-serif text-lg mb-1 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground">{formatPrice(product.price)}</p>
      </Link>

      {/* Color Options */}
      <div className="flex gap-2 mt-3">
        {product.colors.map((color) => (
          <span
            key={color}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            {color}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
