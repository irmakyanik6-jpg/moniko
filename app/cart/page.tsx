"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/data"

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center"
          >
            <ShoppingBag className="w-20 h-20 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-serif mb-4">Sepetiniz Boş</h1>
            <p className="text-muted-foreground mb-8">
              Görünüşe göre henüz sepetinize bir şey eklememişsiniz. 
              Koleksiyonumuzu keşfedin ve sevdiğiniz bir şeyler bulun.
            </p>
            <Link
              href="/shop"
              className="inline-block px-10 py-4 bg-foreground text-background text-sm tracking-wider uppercase hover:bg-accent transition-colors"
            >
              Alışverişe Devam Et
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-serif mb-12"
        >
          Alışveriş Sepeti
        </motion.h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="border-b border-border pb-4 mb-6 hidden md:grid grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 text-sm text-muted-foreground">
              <span>Ürün</span>
              <span>Fiyat</span>
              <span>Adet</span>
              <span>Toplam</span>
              <span></span>
            </div>

            <div className="space-y-6">
              {items.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.selectedColor}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="grid md:grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 items-center pb-6 border-b border-border"
                >
                  {/* Product */}
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 bg-secondary flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <Link
                        href={`/shop/${item.id}`}
                        className="font-serif text-lg hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-muted-foreground">{item.selectedColor}</p>
                      <p className="md:hidden mt-2">{formatPrice(item.price)}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <p className="hidden md:block">{formatPrice(item.price)}</p>

                  {/* Quantity */}
                  <div className="flex items-center">
                    <div className="inline-flex items-center border border-border">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                        aria-label="Adeti azalt"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-sm min-w-[40px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                        aria-label="Adeti artır"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 hover:text-accent transition-colors"
                    aria-label="Ürünü kaldır"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/shop"
                className="px-6 py-3 border border-border text-sm tracking-wider uppercase hover:border-foreground transition-colors text-center"
              >
                Alışverişe Devam Et
              </Link>
              <button
                onClick={clearCart}
                className="px-6 py-3 text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                Sepeti Temizle
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-secondary/50 p-8"
            >
              <h2 className="text-xl font-serif mb-6">Sipariş Özeti</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ara Toplam</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Kargo</span>
                  <span>Ücretsiz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Vergi</span>
                  <span>Ödeme sırasında hesaplanır</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="font-medium">Tahmini Toplam</span>
                  <span className="font-medium">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <label htmlFor="promo" className="block text-sm mb-2">
                  İndirim Kodu
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="promo"
                    placeholder="Kodu girin"
                    className="flex-1 px-4 py-2 bg-transparent border border-border focus:border-foreground outline-none transition-colors"
                  />
                  <button className="px-4 py-2 border border-foreground text-sm hover:bg-foreground hover:text-background transition-colors">
                    Uygula
                  </button>
                </div>
              </div>

              <button className="w-full py-4 bg-foreground text-background text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-accent transition-colors">
                Ödemeye Geç
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Stripe ile güvenli ödeme
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
