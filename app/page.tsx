import { HeroSection } from "@/components/home/hero-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { BestSellersSection } from "@/components/home/best-sellers-section"
import { PromoSection } from "@/components/home/promo-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { InstagramSection } from "@/components/home/instagram-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <BestSellersSection />
      <PromoSection />
      <TestimonialsSection />
      <InstagramSection />
    </>
  )
}
