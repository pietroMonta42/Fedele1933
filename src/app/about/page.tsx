'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import FadeIn from '@/components/FadeIn';

export default function About() {
    const { t } = useLanguage();

    return (
        <>
            {/* Hero */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <span
                                className="inline-block text-sm tracking-[0.2em] uppercase text-[var(--gold)] mb-4"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {t.about.heritage}
                            </span>
                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl text-[var(--forest-green)]"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                {t.about.title}
                            </h1>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Split Section 1 */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Image */}
                        <FadeIn direction="left">
                            <div className="relative aspect-[4/3] bg-[var(--paper-dark)] overflow-hidden">
                                {/* Decorative placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div
                                            className="text-6xl md:text-8xl text-[var(--forest-green)]/10 mb-4"
                                            style={{ fontFamily: 'Playfair Display, serif' }}
                                        >
                                            1933
                                        </div>
                                        <div
                                            className="text-sm tracking-[0.3em] uppercase text-[var(--gold)]"
                                            style={{ fontFamily: 'Inter, sans-serif' }}
                                        >
                                            Genova
                                        </div>
                                    </div>
                                </div>
                                {/* Border accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--gold)]" />
                            </div>
                        </FadeIn>

                        {/* Text */}
                        <FadeIn direction="right" delay={0.1}>
                            <div>
                                <h2
                                    className="text-2xl md:text-3xl text-[var(--forest-green)] mb-6"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    La Nostra Storia
                                </h2>
                                <p className="text-[var(--text-muted)] leading-relaxed mb-6">{t.about.story1}</p>
                                <p className="text-[var(--text-muted)] leading-relaxed">{t.about.story2}</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Quote Banner */}
            <section className="py-20 bg-[var(--forest-green)] relative overflow-hidden">
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
                </div>
            </section>

            {/* Split Section 2 - Reversed */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Text - Order changed on mobile */}
                        <FadeIn direction="left" className="order-2 md:order-1">
                            <div>
                                <h2
                                    className="text-2xl md:text-3xl text-[var(--forest-green)] mb-6"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    La Qualità Prima di Tutto
                                </h2>
                                <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                                    La conoscenza approfondita delle materie prime e dei processi produttivi ci
                                    permette di garantire un prodotto di elevatissima qualità.
                                </p>
                                <p className="text-[var(--text-muted)] leading-relaxed">
                                    In un settore erroneamente considerato troppo standardizzato, noi crediamo che la
                                    differenza la facciano i dettagli e la passione.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Image - Order changed on mobile */}
                        <FadeIn direction="right" delay={0.1} className="order-1 md:order-2">
                            <div className="relative aspect-[4/3] bg-[var(--paper-dark)] overflow-hidden">
                                {/* Decorative placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-20 h-20 mx-auto mb-4 border-2 border-[var(--gold)] rounded-full flex items-center justify-center">
                                            <span className="text-[var(--gold)] text-2xl">✦</span>
                                        </div>
                                        <div
                                            className="text-sm tracking-[0.3em] uppercase text-[var(--gold)]"
                                            style={{ fontFamily: 'Inter, sans-serif' }}
                                        >
                                            Qualità
                                        </div>
                                    </div>
                                </div>
                                {/* Border accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--gold)]" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2
                                className="text-3xl md:text-4xl text-[var(--forest-green)]"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                I Nostri Valori
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <FadeIn delay={0.1}>
                            <div className="p-8">
                                <div
                                    className="text-5xl text-[var(--gold)] mb-4"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    91
                                </div>
                                <div
                                    className="text-sm tracking-[0.2em] uppercase text-[var(--forest-green)]"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    Anni di Esperienza
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="p-8">
                                <div
                                    className="text-5xl text-[var(--gold)] mb-4"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    100%
                                </div>
                                <div
                                    className="text-sm tracking-[0.2em] uppercase text-[var(--forest-green)]"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    Produzione Artigianale
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="p-8">
                                <div
                                    className="text-5xl text-[var(--gold)] mb-4"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    ∞
                                </div>
                                <div
                                    className="text-sm tracking-[0.2em] uppercase text-[var(--forest-green)]"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    Passione
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </>
    );
}
