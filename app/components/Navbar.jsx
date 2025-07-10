// components/Navbar.jsx
'use client';

import { useState } from 'react';
import { ChevronDown, Phone, ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white px-6 py-4 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image src="/logos/1.png" alt="Logo" width={160} height={100} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6 text-[#0f2c4f]" />
                    ) : (
                        <Menu className="h-6 w-6 text-[#0f2c4f]" />
                    )}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-between w-full pl-10">
                    {/* Navigation Links */}
                    <div className="flex space-x-8 text-[#0f2c4f] font-medium">
                        <div className="group relative">
                            <button className="flex items-center gap-1 hover:text-blue-600 py-2">
                                Solutions <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                            </button>
                            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 w-64">
                                <div className="space-y-2">
                                    <Link href="#" className="block px-3 py-2 hover:bg-blue-50 rounded-md">Billing & Payments</Link>
                                    <Link href="#" className="block px-3 py-2 hover:bg-blue-50 rounded-md">Attendance</Link>
                                    <Link href="#" className="block px-3 py-2 hover:bg-blue-50 rounded-md">Registration</Link>
                                    <Link href="#" className="block px-3 py-2 hover:bg-blue-50 rounded-md">Communication</Link>
                                </div>
                            </div>
                        </div>
                        {/* <Link href="#" className="hover:text-blue-600 py-2">Why Playground</Link> */}
                        <Link href="/features" className="hover:text-blue-600 py-2">Features</Link>
                        <div className="group relative">
                            <button className="flex items-center gap-1 hover:text-blue-600 py-2">
                                Customers <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                            </button>
                            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 w-64">
                                <div className="space-y-2">
                                    <Link href="#" className="block px-3 py-2 hover:bg-blue-50 rounded-md">Case Studies</Link>
                                    <Link href="#" className="block px-3 py-2 hover:bg-blue-50 rounded-md">Testimonials</Link>
                                </div>
                            </div>
                        </div>
                        <div className="group relative">
                            <button className="flex items-center gap-1 hover:text-blue-600 py-2">
                                Resources <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                            </button>
                            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 w-64">
                                <div className="space-y-2">
                                    <Link href="#" className="block px-3 py-2 hover:bg-blue-50 rounded-md">Blog</Link>
                                    <Link href="#" className="block px-3 py-2 hover:bg-blue-50 rounded-md">Webinars</Link>
                                    <Link href="#" className="block px-3 py-2 hover:bg-blue-50 rounded-md">Help Center</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Contact & Button */}
                    <div className="flex items-center space-x-6">
                        <a href="tel:5168427339" className="flex items-center text-blue-600 hover:underline">
                            <Phone className="w-4 h-4 mr-1" />
                            (516) 842-7339
                        </a>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-full flex items-center gap-2 transition shadow-sm hover:shadow-md">
                            Book demo <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-6 z-40 border-t">
                        <div className="flex flex-col space-y-4">
                            <div className="border-b pb-2">
                                <button className="flex items-center justify-between w-full py-2 font-medium text-[#0f2c4f]">
                                    Solutions <ChevronDown className="w-4 h-4" />
                                </button>
                            </div>
                            <Link href="#" className="py-2 font-medium text-[#0f2c4f]">Why Playground</Link>
                            <div className="border-b pb-2">
                                <button className="flex items-center justify-between w-full py-2 font-medium text-[#0f2c4f]">
                                    Customers <ChevronDown className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="border-b pb-2">
                                <button className="flex items-center justify-between w-full py-2 font-medium text-[#0f2c4f]">
                                    Resources <ChevronDown className="w-4 h-4" />
                                </button>
                            </div>
                            <a href="tel:5168427339" className="flex items-center py-2 text-blue-600">
                                <Phone className="w-4 h-4 mr-2" />
                                (516) 842-7339
                            </a>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-3 rounded-full flex items-center justify-center gap-2 transition shadow-md">
                                Book demo <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
