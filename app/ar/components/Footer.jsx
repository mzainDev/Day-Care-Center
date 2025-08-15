"use client";

import React from 'react'
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0f2c4f] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* العمود 1: الشعار والوصف */}
                    <div className="space-y-6">
                        <div className="bg-white p-2 rounded-md w-[160px] h-[50px]">
                            <Link href="/">
                                <ExportedImage
                                    src="/logos/logo.png"
                                    alt="شعار روضة"
                                    width={160}
                                    height={50}
                                    className="w-full h-full object-contain"
                                />
                            </Link>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            تقدم روضة حلولاً شاملة لإدارة مراكز رعاية الأطفال، مما يسهل العمليات
                            ويعزز التجربة للعائلات والمعلمين على حد سواء.
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

                    {/* العمود 2: روابط سريعة */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">روابط سريعة</h3>
                        <ul className="space-y-3">
                            <li><Link href="/features" className="text-gray-300 hover:text-white transition">المميزات</Link></li>
                            <li><Link href="/targetclients" className="text-gray-300 hover:text-white transition">العملاء المستهدفون</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white transition">اتصل بنا</Link></li>
                            <li><Link href="/registercenter" className="text-gray-300 hover:text-white transition">تسجيل مركز</Link></li>
                        </ul>
                    </div>

                    {/* العمود 3: المميزات */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">المميزات</h3>
                        <ul className="space-y-3">
                            <li><Link href="/features" className="text-gray-300 hover:text-white transition">نظام الحضور</Link></li>
                            <li><Link href="/features" className="text-gray-300 hover:text-white transition">ميزة الدردشة السلسة</Link></li>
                            <li><Link href="/features" className="text-gray-300 hover:text-white transition">نماذج الامتثال</Link></li>
                            <li><Link href="/features" className="text-gray-300 hover:text-white transition">تقارير شاملة</Link></li>
                            <li><Link href="/features" className="text-gray-300 hover:text-white transition">خطط الاشتراك</Link></li>
                        </ul>
                    </div>

                    {/* العمود 4: تواصل معنا */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">تواصل معنا</h3>
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
                                <span className="text-gray-300">123 شارع التعليم<br />جناح 100<br />نيويورك، NY 10001</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* الشريط السفلي */}
                <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} برنامج روضة. جميع الحقوق محفوظة.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition">سياسة الخصوصية</Link>
                        <Link href="#" className="hover:text-white transition">شروط الخدمة</Link>
                        <Link href="#" className="hover:text-white transition">إمكانية الوصول</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
