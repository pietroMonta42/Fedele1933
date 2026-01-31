'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[var(--forest-green)] text-[var(--paper)] py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo & Tagline */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="inline-block">
                            <span
                                className="text-2xl tracking-wide"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                Fedele <span style={{ color: 'var(--gold)' }}>1933</span>
                            </span>
                        </Link>
                        <p className="text-sm text-[var(--paper)]/70 mt-2">{t.footer.tagline}</p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-8 text-sm">
                        <Link
                            href="/"
                            className="text-[var(--paper)]/70 hover:text-[var(--gold)] transition-colors duration-300"
                        >
                            {t.nav.home}
                        </Link>
                        <Link
                            href="/about"
                            className="text-[var(--paper)]/70 hover:text-[var(--gold)] transition-colors duration-300"
                        >
                            {t.nav.about}
                        </Link>
                        <Link
                            href="/contact"
                            className="text-[var(--paper)]/70 hover:text-[var(--gold)] transition-colors duration-300"
                        >
                            {t.nav.contact}
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-[var(--paper)]/10 text-center">
                    <p className="text-xs text-[var(--paper)]/50">
                        © {new Date().getFullYear()} Fedele 1933. {t.footer.rights}.
                    </p>
                </div>
            </div>
        </footer>
    );
}
