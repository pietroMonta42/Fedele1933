'use client';

import { ReactNode } from 'react';
import FadeIn from './FadeIn';

interface ProductCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    delay?: number;
}

export default function ProductCard({ icon, title, description, delay = 0 }: ProductCardProps) {
    return (
        <FadeIn delay={delay} className="h-full">
            <div className="group h-full bg-white border border-[var(--paper-dark)] p-8 hover:border-[var(--gold)] transition-all duration-500 hover:shadow-lg hover:shadow-[var(--gold)]/10">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center mb-6 text-[var(--gold)] group-hover:scale-110 transition-transform duration-500">
                    {icon}
                </div>

                {/* Title */}
                <h3
                    className="text-xl mb-4 text-[var(--forest-green)]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                >
                    {title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{description}</p>

                {/* Decorative Line */}
                <div className="mt-6 w-12 h-0.5 bg-[var(--gold)] group-hover:w-full transition-all duration-500" />
            </div>
        </FadeIn>
    );
}
