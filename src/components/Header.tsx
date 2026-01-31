'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: t.nav.home },
        { href: '/about', label: t.nav.about },
        { href: '/contact', label: t.nav.contact },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--paper)]/95 backdrop-blur-sm">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <span
                        className="text-2xl tracking-wide"
                        style={{ fontFamily: 'Playfair Display, serif', color: 'var(--forest-green)' }}
                    >
                        Fedele <span style={{ color: 'var(--gold)' }}>1933</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isActive(link.href)
                                    ? 'text-[var(--forest-green)]'
                                    : 'text-[var(--text-muted)] hover:text-[var(--forest-green)]'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Language Toggle & Mobile Menu */}
                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="flex items-center border border-[var(--forest-green)]/30 rounded-sm overflow-hidden">
                        <button
                            onClick={() => setLanguage('it')}
                            className={`px-3 py-1.5 text-xs font-medium tracking-wider transition-all duration-300 ${language === 'it'
                                    ? 'bg-[var(--forest-green)] text-[var(--paper)]'
                                    : 'text-[var(--forest-green)] hover:bg-[var(--forest-green)]/10'
                                }`}
                        >
                            ITA
                        </button>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-3 py-1.5 text-xs font-medium tracking-wider transition-all duration-300 ${language === 'en'
                                    ? 'bg-[var(--forest-green)] text-[var(--paper)]'
                                    : 'text-[var(--forest-green)] hover:bg-[var(--forest-green)]/10'
                                }`}
                        >
                            ENG
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-[var(--forest-green)]"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[var(--paper)] border-t border-[var(--paper-dark)]"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-lg font-medium tracking-wide transition-colors duration-300 ${isActive(link.href)
                                            ? 'text-[var(--forest-green)]'
                                            : 'text-[var(--text-muted)] hover:text-[var(--forest-green)]'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
