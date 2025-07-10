"use client";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0f2c4f] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Column 1: Logo and Description */}
                    <div className="space-y-6">
                        <Image
                            src="/logos/logo.png"
                            alt="Rawdhat Logo"
                            width={160}
                            height={50}
                            className="bg-white p-2 rounded-md"
                        />
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Rawdhat offers comprehensive childcare management solutions that simplify operations
                            and enhance the experience for families and teachers alike.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-white hover:text-blue-300 transition">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white hover:text-blue-300 transition">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white hover:text-blue-300 transition">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white hover:text-blue-300 transition">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Solutions</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-300 hover:text-white transition">Billing & Payments</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white transition">Registration & Enrollment</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white transition">Attendance Tracking</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white transition">Parent Communication</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white transition">Staff Management</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-300 hover:text-white transition">Blog</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white transition">Webinars</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white transition">Case Studies</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white transition">Help Center</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white transition">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-blue-300 mt-0.5" />
                                <span className="text-gray-300">(516) 842-7339</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-blue-300 mt-0.5" />
                                <span className="text-gray-300">support@playground.com</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-blue-300 mt-0.5" />
                                <span className="text-gray-300">123 Education Lane<br />Suite 100<br />New York, NY 10001</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Rawdhat Software. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer