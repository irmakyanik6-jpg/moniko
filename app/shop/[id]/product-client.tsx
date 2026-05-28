"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Minus, Plus, Heart, ChevronLeft, Check } from "lucide-react"
import { products, formatPrice } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"
import { ProductCard } from "@/components/product-card"

export function ProductClient({ id }: { id: string }) {
  const product = products.find((p) => p.id === id)
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "")
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem } = useCart()
  const { isInWishlist, toggleItem } = useWishlist()

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Ürün bulunamadı</h1>
          <Link href="/shop" className="text-accent hover:underline">
            Mağazaya dön
          </Link>
        </div>
      </div>
    )
  }

  const inWishlist = isInWishlist(product.id)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const images = [product.image, product.image, product.image]

  const handleAddToCart = () => {
    addItem(product, selectedColor, quantity)
  }

  return (
    <div className="pt-24">
      <div className="container mx-auto px-6 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Ana Sayfa
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-foreground transition-colors">
            Mağaza
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Mağazaya Dön
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden group">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-secondary overflow-hidden ${
                    selectedImage === index ? "ring-2 ring-foreground" : ""
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} görünüm ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:py-8"
          >
            {product.isNew && (
              <span className="inline-block px-3 py-1 bg-foreground text-background text-xs tracking-wider uppercase mb-4">
                Yeni Ürün
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-serif mb-4">{product.name}</h1>
            <p className="text-2xl mb-6">{formatPrice(product.price)}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="font-medium mb-4">
                Renk: <span className="text-muted-foreground">{selectedColor}</span>
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 border-2 flex items-center justify-center transition-colors ${
                      selectedColor === color
                        ? "border-foreground"
                        : "border-border hover:border-muted-foreground"
                    }`}
                    aria-label={`${color} seç`}
                  >
                    {selectedColor === color && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-medium mb-4">Adet</h3>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-secondary transition-colors"
                  aria-label="Adeti azalt"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 min-w-[60px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-secondary transition-colors"
                  aria-label="Adeti artır"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-foreground text-background text-sm tracking-wider uppercase hover:bg-accent transition-colors"
              >
                Sepete Ekle
              </button>
              <button
                onClick={() => toggleItem(product)}
                className={`w-14 border flex items-center justify-center transition-colors ${
                  inWishlist
                    ? "border-accent text-accent"
                    : "border-border hover:border-foreground"
                }`}
                aria-label={inWishlist ? "Favorilerden çıkar" : "Favorilere ekle"}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? "fill-current" : ""}`} />
              </button>
            </div>

            <div className="border-t border-border pt-8 space-y-4">
              <div className="flex items-start gap-4">
                <span className="font-medium min-w-[100px]">Malzeme</span>
                <span className="text-muted-foreground">Premium İtalyan Derisi</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-medium min-w-[100px]">Boyutlar</span>
                <span className="text-muted-foreground">30cm x 25cm x 12cm</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-medium min-w-[100px]">Kargo</span>
                <span className="text-muted-foreground">Türkiye genelinde ücretsiz kargo</span>
              </div>
            </div>
          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">
              Bunları da Beğenebilirsiniz
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((related, index) => (
                <ProductCard key={related.id} product={related} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
