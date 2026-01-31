'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import FadeIn from '@/components/FadeIn';
import ProductCard from '@/components/ProductCard';
import { Sparkles, Cookie, Soup } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, var(--forest-green) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
          <FadeIn>
            <span
              className="inline-block text-sm tracking-[0.3em] uppercase text-[var(--gold)] mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t.about.heritage}
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-[var(--forest-green)] mb-8"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}
            >
              {t.hero.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              className="text-xl md:text-2xl text-[var(--text-muted)] max-w-2xl mx-auto mb-12"
              style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
            >
              {t.hero.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Link href="/about" className="btn-outlined">
              {t.hero.cta}
            </Link>
          </FadeIn>

          {/* Decorative Elements */}
          <FadeIn delay={0.4}>
            <div className="mt-20 flex justify-center items-center gap-4">
              <div className="w-16 h-px bg-[var(--gold)]" />
              <div className="w-2 h-2 rotate-45 border border-[var(--gold)]" />
              <div className="w-16 h-px bg-[var(--gold)]" />
            </div>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-[var(--forest-green)]/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[var(--forest-green)]/30 rounded-full" />
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span
                className="inline-block text-sm tracking-[0.2em] uppercase text-[var(--gold)] mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                ✦
              </span>
              <h2
                className="text-3xl md:text-4xl text-[var(--forest-green)] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.excellence.title}
              </h2>
              <p className="text-[var(--text-muted)] max-w-xl mx-auto">{t.excellence.subtitle}</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              icon={<Sparkles size={40} strokeWidth={1} />}
              title={t.excellence.spices.title}
              description={t.excellence.spices.description}
              delay={0.1}
            />
            <ProductCard
              icon={<Cookie size={40} strokeWidth={1} />}
              title={t.excellence.desserts.title}
              description={t.excellence.desserts.description}
              delay={0.2}
            />
            <ProductCard
              icon={<Soup size={40} strokeWidth={1} />}
              title={t.excellence.broth.title}
              description={t.excellence.broth.description}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Heritage Banner */}
      <section className="py-20 bg-[var(--forest-green)] relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, var(--paper) 1px, transparent 0)`,
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <p
              className="text-2xl md:text-3xl text-[var(--paper)] leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
            >
              &ldquo;{t.about.story3}&rdquo;
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 flex justify-center items-center gap-4">
              <div className="w-12 h-px bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xl">✦</span>
              <div className="w-12 h-px bg-[var(--gold)]" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2
              className="text-3xl md:text-4xl text-[var(--forest-green)] mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.contact.subtitle}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link href="/contact" className="btn-outlined-gold">
              {t.nav.contact}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
