"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Eye, EyeOff, Check } from "lucide-react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    acceptTerms: false,
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration
    console.log("Kayıt:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  // Password strength indicators
  const passwordChecks = [
    { label: "En az 8 karakter", check: formData.password.length >= 8 },
    { label: "Bir rakam içermeli", check: /\d/.test(formData.password) },
    { label: "Büyük harf içermeli", check: /[A-Z]/.test(formData.password) },
  ]

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif mb-4">Hesap Oluştur</h1>
            <p className="text-muted-foreground">
              Yeni koleksiyonlara ve özel fırsatlara erişim için MONIKO ailesine katılın.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  Ad
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground outline-none transition-colors"
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Soyad
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground outline-none transition-colors"
                  placeholder="Soyadınız"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-posta Adresi
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground outline-none transition-colors"
                placeholder="eposta@adresiniz.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Şifre
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground outline-none transition-colors pr-12"
                  placeholder="Bir şifre oluşturun"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Şifreyi gizle" : "Şifreyi göster"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {formData.password && (
                <div className="mt-3 space-y-2">
                  {passwordChecks.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 text-sm ${
                        item.check ? "text-green-600" : "text-muted-foreground"
                      }`}
                    >
                      <Check className={`w-4 h-4 ${item.check ? "opacity-100" : "opacity-30"}`} />
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 mt-0.5 border border-border rounded-none accent-foreground"
                />
                <span className="text-sm">
                  <Link href="/terms" className="underline hover:text-accent transition-colors">
                    Kullanım Şartları
                  </Link>{" "}
                  ve{" "}
                  <Link href="/privacy" className="underline hover:text-accent transition-colors">
                    Gizlilik Politikası
                  </Link>
                  &apos;nı kabul ediyorum
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="w-4 h-4 mt-0.5 border border-border rounded-none accent-foreground"
                />
                <span className="text-sm text-muted-foreground">
                  Özel fırsatlar ve stil güncellemeleri almak için abone ol
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-foreground text-background text-sm tracking-wider uppercase hover:bg-accent transition-colors"
            >
              Hesap Oluştur
            </button>
          </form>

          <p className="text-center mt-8 text-muted-foreground">
            Zaten hesabınız var mı?{" "}
            <Link href="/login" className="text-foreground hover:text-accent transition-colors">
              Giriş yapın
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
