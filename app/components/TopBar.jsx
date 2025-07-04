// components/TopBar.jsx
'use client';

import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function TopBar() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-gradient-to-r from-[#fdd99e] to-[#ffd077] relative">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                <div className="flex items-center gap-2 text-center sm:text-left mb-2 sm:mb-0">
                    <p className="text-[#0f2c4f] font-medium text-sm md:text-base">
                        <span className="font-bold">How does a 40-location child care brand grow?</span>{' '}
                        <span className="hidden sm:inline">Little Sunshine's shares their strategy.</span>
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1.5 bg-[#d46c23] text-white font-medium px-4 py-1.5 rounded-full hover:bg-[#c25e1e] transition shadow-sm">
                        Watch Now <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-[#0f2c4f] hover:text-[#0f2c4f]/70 p-1 rounded-full transition"
                        aria-label="Close announcement"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
