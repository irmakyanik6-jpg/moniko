"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { SlidersHorizontal, X } from "lucide-react"
import { products, categories } from "@/lib/data"
import { ProductCard } from "@/components/product-card"

export default function ShopContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [sortBy, setSortBy] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = [...products]
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "newest":
        filtered = filtered.filter((p) => p.isNew).concat(filtered.filter((p) => !p.isNew))
        break
      default:
        // featured - keep original order
        break
    }

    return filtered
  }, [selectedCategory, sortBy])

  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Koleksiyon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Modern kadın için en kaliteli malzemelerle üretilmiş lüks çanta ve aksesuar koleksiyonumuzu keşfedin.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-border">
            <p className="text-muted-foreground">
              {filteredProducts.length} ürün gösteriliyor
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 px-4 py-2 border border-border hover:border-foreground transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filtreler
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-transparent border border-border focus:border-foreground outline-none cursor-pointer"
              >
                <option value="featured">Öne Çıkanlar</option>
                <option value="newest">En Yeni</option>
                <option value="price-low">Fiyat: Düşükten Yükseğe</option>
                <option value="price-high">Fiyat: Yüksekten Düşüğe</option>
              </select>
            </div>
          </div>

          <div className="flex gap-12">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-32">
                <h3 className="font-medium tracking-wider uppercase text-sm mb-6">
                  Kategoriler
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className={`text-left w-full hover:text-accent transition-colors ${
                        selectedCategory === "all" ? "text-accent font-medium" : "text-muted-foreground"
                      }`}
                    >
                      Tüm Ürünler
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`text-left w-full hover:text-accent transition-colors ${
                          selectedCategory === category.id ? "text-accent font-medium" : "text-muted-foreground"
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Mobile Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 md:hidden"
                onClick={() => setShowFilters(false)}
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute left-0 top-0 bottom-0 w-80 bg-background p-6"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-medium tracking-wider uppercase">Filtreler</h3>
                    <button onClick={() => setShowFilters(false)}>
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <h4 className="font-medium mb-4">Kategoriler</h4>
                  <ul className="space-y-3">
                    <li>
                      <button
                        onClick={() => {
                          setSelectedCategory("all")
                          setShowFilters(false)
                        }}
                        className={`text-left w-full ${
                          selectedCategory === "all" ? "text-accent font-medium" : "text-muted-foreground"
                        }`}
                      >
                        Tüm Ürünler
                      </button>
                    </li>
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => {
                            setSelectedCategory(category.id)
                            setShowFilters(false)
                          }}
                          className={`text-left w-full ${
                            selectedCategory === category.id ? "text-accent font-medium" : "text-muted-foreground"
                          }`}
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">Bu kategoride ürün bulunamadı.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
