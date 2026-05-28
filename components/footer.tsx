import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail } from "lucide-react"

const footerLinks = {
  shop: [
    { label: "Tüm Çantalar", href: "/shop" },
    { label: "Tote Çantalar", href: "/shop?category=tote-bags" },
    { label: "Omuz Çantaları", href: "/shop?category=shoulder-bags" },
    { label: "Mini Çantalar", href: "/shop?category=mini-bags" },
    { label: "Cüzdanlar", href: "/shop?category=wallets" },
  ],
  support: [
    { label: "Bize Ulaşın", href: "/contact" },
    { label: "Kargo & İade", href: "/shipping" },
    { label: "Beden Rehberi", href: "/size-guide" },
    { label: "Bakım Talimatları", href: "/care" },
    { label: "SSS", href: "/faq" },
  ],
  company: [
    { label: "MONIKO Hakkında", href: "/about" },
    { label: "Hikayemiz", href: "/about#story" },
    { label: "Sürdürülebilirlik", href: "/sustainability" },
    { label: "Kariyer", href: "/careers" },
    { label: "Basın", href: "/press" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:merhaba@moniko.com", label: "E-posta" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-serif mb-4">
              MONIKO Dünyasına Katılın
            </h3>
            <p className="text-primary-foreground/70 mb-8">
              Özel fırsatlar, yeni koleksiyonlara erken erişim ve stil ilhamı için abone olun.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresinizi girin"
                className="flex-1 px-6 py-3 bg-transparent border border-primary-foreground/20 rounded-none focus:border-primary-foreground outline-none placeholder:text-primary-foreground/40 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary-foreground text-foreground font-medium tracking-wider uppercase text-sm hover:bg-primary-foreground/90 transition-colors"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-serif tracking-[0.2em] font-semibold">
              MONIKO
            </Link>
            <p className="mt-6 text-primary-foreground/70 max-w-sm leading-relaxed">
              Modern kadın için zamansız lüks çantalar üretiyoruz. Her parça, olağanüstü işçilik ve zarif tasarımın hikayesini anlatır.
            </p>
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium tracking-wider uppercase text-sm mb-6">Mağaza</h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium tracking-wider uppercase text-sm mb-6">Destek</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium tracking-wider uppercase text-sm mb-6">Şirket</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
            <p>&copy; {new Date().getFullYear()} MONIKO. Tüm hakları saklıdır.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="hover:text-primary-foreground transition-colors">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
