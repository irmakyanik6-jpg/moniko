"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80"
            alt="MONIKO atölyesi"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif mb-4"
          >
            Hikayemiz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            2015&apos;ten beri zamansız zarafet üretiyoruz
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Başlangıç
              </p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                İşçilik Tutkusundan Doğdu
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  MONIKO, 2025 yılında tasarımcı Irmak Yanık tarafından İskenderun&apos;da kuruldu.
                  Modern kadınların hayatlarında değerli birer yol arkadaşı olacak çantalar
                  yaratmayı hayal ediyordu. Zanaatkar bir ailede büyüyen Irmak, gerçek lüksün
                  logolarda değil, malzeme kalitesinde ve ustanın becerisinde yattığını erkenden
                  öğrendi.
                </p>
                <p>
                  Her MONIKO parçası İskenderun atölyemizde tasarlanır ve İtalya&apos;da, nesiller boyu
                  deri işleme uzmanlığının her dikiş, her kıvrım ve her detayın titiz
                  standartlarımızı karşılamasını sağladığı yetenekli zanaatkarlar tarafından üretilir.
                </p>
                <p>
                  Bir çantanın eşyalarınızı taşımaktan fazlasını yapması gerektiğine inanıyoruz —
                  özgüveninizi, tarzınızı ve hikayenizi taşımalı.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5]"
            >
              <Image
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                alt="Deri işleyen zanaatkar"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Neyi Savunuyoruz
            </p>
            <h2 className="text-3xl md:text-4xl font-serif">Değerlerimiz</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Önce Kalite",
                description:
                  "Sadece en kaliteli malzemeleri tedarik ediyor ve mükemmeliyete olan bağlılığımızı paylaşan usta zanaatkarlarla çalışıyoruz.",
              },
              {
                title: "Zamansız Tasarım",
                description:
                  "Tasarımlarımız trendleri aşar. Her çanta, geçici bir moda ifadesi değil, kalıcı bir yol arkadaşı olarak yaratılır.",
              },
              {
                title: "Sürdürülebilir Lüks",
                description:
                  "Lüksün sorumlu olması gerektiğine inanıyoruz. Derilerimiz etik kaynaklıdır ve tek kullanımlık yerine uzun ömürlülüğü önceliklendiriyoruz.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 border border-border mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-serif">{index + 1}</span>
                </div>
                <h3 className="text-xl font-serif mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Designer Quote */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8"
            >
              &quot;Gerçekten güzel bir çanta dikkat çekmez — sessizce hükmedicidir.
              Kim olduğunuzun bir uzantısı haline gelir.&quot;
            </motion.blockquote>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="font-medium">Irmak Yanık</p>
              <p className="text-sm text-muted-foreground">Kurucu ve Kreatif Direktör</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Atelier Images */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Perde Arkası
            </p>
            <h2 className="text-3xl md:text-4xl font-serif">Atölye</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
              "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
              "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
              "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Atölye görseli ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
