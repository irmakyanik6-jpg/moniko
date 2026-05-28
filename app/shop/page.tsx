import { Suspense } from "react"
import ShopContent from "./shop-content"

function ShopLoading() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="h-12 w-64 bg-muted animate-pulse mx-auto mb-4 rounded" />
          <div className="h-6 w-96 bg-muted animate-pulse mx-auto rounded" />
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-muted mb-4 rounded" />
                <div className="h-6 w-3/4 bg-muted mb-2 rounded" />
                <div className="h-5 w-1/4 bg-muted rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoading />}>
      <ShopContent />
    </Suspense>
  )
}
