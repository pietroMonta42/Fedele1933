'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import FadeIn from '@/components/FadeIn';
import { MapPin, Mail, Send } from 'lucide-react';

export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setSubmitted(true);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
    };

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
                                ✦
                            </span>
                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl text-[var(--forest-green)] mb-4"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                {t.contact.title}
                            </h1>
                            <p className="text-[var(--text-muted)] max-w-xl mx-auto">{t.contact.subtitle}</p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Form */}
                        <FadeIn direction="left">
                            <div className="bg-white p-8 md:p-12 border border-[var(--paper-dark)]">
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 mx-auto mb-6 bg-[var(--forest-green)] rounded-full flex items-center justify-center">
                                            <Send size={24} className="text-[var(--paper)]" />
                                        </div>
                                        <h3
                                            className="text-2xl text-[var(--forest-green)] mb-4"
                                            style={{ fontFamily: 'Playfair Display, serif' }}
                                        >
                                            Messaggio Inviato!
                                        </h3>
                                        <p className="text-[var(--text-muted)]">
                                            Ti risponderemo il prima possibile.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-6 text-[var(--gold)] text-sm font-medium hover:underline"
                                        >
                                            Invia un altro messaggio
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name */}
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-[var(--text-dark)] mb-2"
                                            >
                                                {t.contact.form.name}
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 border border-[var(--paper-dark)] bg-transparent focus:border-[var(--forest-green)] focus:outline-none transition-colors duration-300"
                                                placeholder=""
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-[var(--text-dark)] mb-2"
                                            >
                                                {t.contact.form.email}
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 border border-[var(--paper-dark)] bg-transparent focus:border-[var(--forest-green)] focus:outline-none transition-colors duration-300"
                                                placeholder=""
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium text-[var(--text-dark)] mb-2"
                                            >
                                                {t.contact.form.message}
                                            </label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-4 py-3 border border-[var(--paper-dark)] bg-transparent focus:border-[var(--forest-green)] focus:outline-none transition-colors duration-300 resize-none"
                                                placeholder=""
                                            />
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-outlined w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? '...' : t.contact.form.send}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </FadeIn>

                        {/* Info */}
                        <FadeIn direction="right" delay={0.1}>
                            <div className="space-y-8">
                                {/* Address Card */}
                                <div className="bg-white p-8 border border-[var(--paper-dark)]">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[var(--forest-green)] text-[var(--paper)]">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h3
                                                className="text-lg text-[var(--forest-green)] mb-2"
                                                style={{ fontFamily: 'Playfair Display, serif' }}
                                            >
                                                {t.contact.address.title}
                                            </h3>
                                            <p className="text-[var(--text-muted)]">{t.contact.address.line1}</p>
                                            <p className="text-[var(--text-muted)]">{t.contact.address.line2}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Email Card */}
                                <div className="bg-white p-8 border border-[var(--paper-dark)]">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[var(--gold)] text-[var(--text-dark)]">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <h3
                                                className="text-lg text-[var(--forest-green)] mb-2"
                                                style={{ fontFamily: 'Playfair Display, serif' }}
                                            >
                                                Email
                                            </h3>
                                            <p className="text-[var(--text-muted)]">info@fedele1933.it</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Placeholder */}
                                <div className="relative aspect-video bg-[var(--paper-dark)] overflow-hidden border border-[var(--paper-dark)]">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.2!2d8.8958!3d44.4467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI2JzQ4LjEiTiA4wrA1Myc0NC45IkU!5e0!3m2!1sen!2sit!4v1600000000000!5m2!1sen!2sit"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Fedele 1933 Location"
                                    />
                                    {/* Overlay with address */}
                                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4">
                                        <p
                                            className="text-sm text-[var(--forest-green)] font-medium"
                                            style={{ fontFamily: 'Inter, sans-serif' }}
                                        >
                                            Via Fegino 10 r, 16161 Genova
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </>
    );
}
