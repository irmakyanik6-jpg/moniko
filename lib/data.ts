export interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  description: string
  colors: string[]
  isNew?: boolean
  isBestSeller?: boolean
}

export interface Category {
  id: string
  name: string
  image: string
  productCount: number
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  avatar: string
}

export const categories: Category[] = [
  {
    id: "tote-bags",
    name: "Tote Çantalar",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    productCount: 24,
  },
  {
    id: "shoulder-bags",
    name: "Omuz Çantaları",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
    productCount: 18,
  },
  {
    id: "mini-bags",
    name: "Mini Çantalar",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80",
    productCount: 15,
  },
  {
    id: "crossbody-bags",
    name: "Çapraz Çantalar",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    productCount: 21,
  },
  {
    id: "wallets",
    name: "Cüzdanlar",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
    productCount: 12,
  },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Parisian Tote",
    price: 14850,
    category: "tote-bags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    description: "En kaliteli İtalyan derisinden üretilen Parisian Tote, zamansız zarafeti günlük işlevsellikle birleştiriyor. Birden fazla bölmeli geniş iç hacme sahiptir.",
    colors: ["Krem", "Siyah", "Taba"],
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Luna Omuz Çantası",
    price: 12150,
    category: "shoulder-bags",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
    description: "Luna, omuzda zarif bir şekilde duran hilal silüetine sahiptir. Yumuşak, esnek deri ve altın tonlu donanımlarla üretilmiştir.",
    colors: ["Siyah", "Bordo", "Fildişi"],
    isBestSeller: true,
  },
  {
    id: "3",
    name: "Petit Noir Mini",
    price: 8950,
    category: "mini-bags",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80",
    description: "Küçük ama güçlü olabileceğini kanıtlayan bir parça. Petit Noir, ayarlanabilir zincir askı ve imza MONIKO tokasına sahiptir.",
    colors: ["Siyah", "Altın", "Gümüş"],
    isNew: true,
  },
  {
    id: "4",
    name: "Voyager Çapraz Çanta",
    price: 10650,
    category: "crossbody-bags",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    description: "Hareket halindeki kadın için tasarlandı. Ayarlanabilir askı, birden fazla cep ve imza kapitone deseni içerir.",
    colors: ["Taba", "Siyah", "Zeytin"],
    isBestSeller: true,
  },
  {
    id: "5",
    name: "Élégance Cüzdan",
    price: 5950,
    category: "wallets",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
    description: "Her MONIKO çanta için mükemmel tamamlayıcı. 12 kart yuvası, bozuk para için fermuarlı cep ve banknot bölmesi içerir.",
    colors: ["Siyah", "Pudra", "Lacivert"],
  },
  {
    id: "6",
    name: "The Editor Tote",
    price: 16750,
    category: "tote-bags",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80",
    description: "Yapılandırılmış ama sofistike, The Editor modern profesyonel için tasarlandı. Dolgulu laptop bölmesi ve çıkarılabilir poşet içerir.",
    colors: ["Konyak", "Siyah", "Taupe"],
    isNew: true,
  },
  {
    id: "7",
    name: "Bella Omuz Çantası",
    price: 13050,
    category: "shoulder-bags",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&q=80",
    description: "İtalyan işçiliği Paris tasarımıyla buluşuyor. Bella, benzersiz yarım ay şekli ve manyetik kapağa sahiptir.",
    colors: ["Krem", "Terrakotta", "Siyah"],
  },
  {
    id: "8",
    name: "Chérie Mini Çanta",
    price: 8350,
    category: "mini-bags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    description: "Sevimli ama işlevsel, Chérie akşam dışarı çıkışları için mükemmel. Çok yönlü kullanım için çıkarılabilir askıya sahiptir.",
    colors: ["Pembe", "Siyah", "Beyaz"],
    isBestSeller: true,
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ayşe Yılmaz",
    location: "İstanbul, Türkiye",
    rating: 5,
    text: "Kalite olağanüstü. Parisian Tote günlük vazgeçilmezim oldu. Deri zamanla daha da güzelleşiyor.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    id: "2",
    name: "Elif Demir",
    location: "Ankara, Türkiye",
    rating: 5,
    text: "Sonunda lüksü pratiklikle birleştiren bir marka buldum. Detaylara gösterilen özen olağanüstü.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    id: "3",
    name: "Zeynep Kaya",
    location: "İzmir, Türkiye",
    rating: 5,
    text: "Modada çalışan biri olarak gerçek işçiliği takdir ediyorum. MONIKO her seviyede beklentileri karşılıyor.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
  },
]

export const instagramImages = [
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80",
  "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80",
  "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&q=80",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",
  "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&q=80",
  "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&q=80",
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}
