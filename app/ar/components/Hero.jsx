"use client";

import React from 'react';
import ExportedImage from 'next-image-export-optimizer';
import { ArrowRight, DollarSign, CalendarCheck, ClipboardList, MessageSquare, FileText, CreditCard } from 'lucide-react';

const Hero = () => {
    return (
        <section className="bg-gradient-to-b from-[#f2f7fb] to-white px-6 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center">
                    {/* Top Badge */}
                    <div className="inline-flex items-center space-x-1 px-4 py-1.5 rounded-full border border-pink-300 text-pink-700 bg-white text-sm font-medium mb-8 hover:bg-pink-50 cursor-pointer transition shadow-sm">
                        <span>بيئة آمنة وتعليمية لأطفالك، بإشراف خبراء محليين</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-[1.75rem] leading-[2.25rem] sm:text-4xl sm:leading-[3rem] md:text-5xl md:leading-[3.5rem] font-extrabold text-[#0f2c4f] mb-6 tracking-tight">
                        <span className="block sm:inline">برنامج لإدارة رعاية الأطفال</span>
                        <span className="block sm:inline">&nbsp;يجعل</span>
                        <span className="block sm:inline">&nbsp;العائلات والمعلمين أكثر سعادة</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-[#0f2c4f]/80 text-lg md:text-xl mb-8 max-w-3xl">
                        روضة هو برنامج لإدارة رعاية الأطفال
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-[#0f2c4f] mb-10">
                        <span className="flex items-center gap-1.5 bg-green-100 border border-green-300 text-green-800 px-3 py-1.5 rounded-full">
                            <DollarSign className="w-4 h-4" /> الفواتير
                        </span>
                        <span className="flex items-center gap-1.5 bg-pink-100 border border-pink-300 text-pink-800 px-3 py-1.5 rounded-full">
                            <CalendarCheck className="w-4 h-4" /> الحضور
                        </span>
                        <span className="flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 px-3 py-1.5 rounded-full">
                            <ClipboardList className="w-4 h-4" /> التسجيل
                        </span>
                        <span className="flex items-center gap-1.5 bg-blue-100 border border-blue-300 text-blue-800 px-3 py-1.5 rounded-full">
                            <MessageSquare className="w-4 h-4" /> التواصل
                        </span>
                        <span className="flex items-center gap-1.5 bg-sky-100 border border-sky-300 text-sky-800 px-3 py-1.5 rounded-full">
                            <FileText className="w-4 h-4" /> المستندات
                        </span>
                        <span className="flex items-center gap-1.5 bg-rose-100 border border-rose-300 text-rose-800 px-3 py-1.5 rounded-full">
                            <CreditCard className="w-4 h-4" /> الرواتب
                        </span>
                        <span className="text-[#0f2c4f]/80 px-2">والمزيد لبرامج رعاية الأطفال.</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
                        <button className="bg-[#5fe4e4] hover:bg-[#1f8282] text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition shadow-md hover:shadow-lg">
                            احجز عرضاً توضيحياً <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="bg-white hover:bg-gray-50 text-[#0f2c4f] border border-gray-300 font-medium px-6 py-3 rounded-full flex items-center gap-2 transition shadow-sm hover:shadow-md">
                            اعرف المزيد <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Screenshot */}
                    <div className="relative w-full max-w-5xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl blur-sm opacity-20 transform translate-y-2"></div>
                        <div className="relative bg-white p-2 sm:p-4 rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                            <ExportedImage
                                src="/logos/ss.png"
                                alt="صورة لبرنامج Playground"
                                width={1200}
                                height={800}
                                className="rounded-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
