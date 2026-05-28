"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useWishlist } from "@/lib/wishlist-context"
import { ProductCard } from "@/components/product-card"

export default function WishlistPage() {
  const { items } = useWishlist()

  if (items.length === 0) {
    return (
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center"
          >
            <Heart className="w-20 h-20 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-serif mb-4">Favorileriniz Boş</h1>
            <p className="text-muted-foreground mb-8">
              Sevdiğiniz ürünleri burada takip etmek için kaydedin. 
              Herhangi bir üründeki kalp ikonuna tıklayarak favorilerinize ekleyebilirsiniz.
            </p>
            <Link
              href="/shop"
              className="inline-block px-10 py-4 bg-foreground text-background text-sm tracking-wider uppercase hover:bg-accent transition-colors"
            >
              Koleksiyonu Keşfet
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-serif mb-4">Favorilerim</h1>
          <p className="text-muted-foreground">
            {items.length} ürün kaydedildi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
