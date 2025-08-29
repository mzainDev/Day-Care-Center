"use client"
import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Fingerprint, MessageCircle, Globe, ClipboardList,
} from 'lucide-react';


const IMAGES = {
    integration: '/trusted-icons/integration.png',
    paymentMethod: '/trusted-icons/paymentmethod.png',
    tap: '/trusted-icons/tap.ico',
    tabby: '/trusted-icons/tabby.ico',
    tamara: '/trusted-icons/tamara.ico',
    zatca: '/trusted-icons/zatca.ico',
};

const cards = [
    {
        icon: <Fingerprint className="text-indigo-600 w-6 h-6" />,
        title: 'Fingerprint Device',
        description: 'Secure and accurate attendance tracking using biometric technology.',
    },
    {
        icon: <MessageCircle className="text-green-600 w-6 h-6" />,
        title: 'WhatsApp API',
        description: 'Automated alerts and reminders sent directly to parents and staff.',
    },
    {
        icon: <Globe className="text-blue-600 w-6 h-6" />,
        title: 'Website Integration',
        description: 'Connect Contact Us forms, Job Applications, and more.',
    },
    {
        icon: <ClipboardList className="text-purple-600 w-6 h-6" />,
        title: 'Landing Page Support',
        description: 'Easily capture leads and form submissions from your landing pages.',
    },
];

const paymentCards = [
    {
        icon: (
            <Image
                src={IMAGES.tap}
                alt="Tap Icon"
                width={48}
                height={48}
                className="w-12 h-12"
            />
        ),
        title: 'Tap Payment',
        description: 'Accept Apple Pay, Mada, and Visa cards — all in one secure gateway.',
    },
    {
        icon: (
            <Image
                src={IMAGES.tabby}
                alt="Tabby Icon"
                width={48}
                height={48}
                className="w-12 h-12"
            />
        ),
        title: 'Tabby',
        description: 'Offer families flexible monthly installment plans with Tabby integration.',
    },
    {
        icon: (
            <Image
                src={IMAGES.tamara}
                alt="Tamara Icon"
                width={48}
                height={48}
                className="w-12 h-12"
            />
        ),
        title: 'Tamara',
        description: 'Enable "Buy Now, Pay Later" options to ease parent payments.',
    },
    {
        icon: (
            <Image
                src={IMAGES.zatca}
                alt="Saudi Pay Icon"
                width={48}
                height={48}
                className="w-12 h-12"
            />
        ),
        title: 'ZATCA (فاتورة)',
        description: 'Issue official ZATCA-compliant invoices for full transparency and coverage.',
    },
];

const TrustedConnection = () => {
    return (
        <>
            <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50" id="integrations">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
                            Seamless Integrations & Trusted Connections
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Empower your daycare with powerful tools — fully integrated, smart, and ready for growth.
                        </p>
                        <div className="mt-2 w-24 h-1 bg-indigo-600 rounded-full mx-auto"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Left: Text and Cards */}
                        <div className="flex-1 space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {cards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="animate-fade-slide-up"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <Card className="shadow-md hover:shadow-xl transition-all duration-300 bg-white border-0 overflow-hidden rounded-xl hover:-translate-y-2">

                                            <CardHeader className="flex flex-row items-center gap-3 pb-2">
                                                <div className="p-2 rounded-lg bg-gray-50">
                                                    {card.icon}
                                                </div>
                                                <CardTitle className="text-lg font-semibold text-gray-800">
                                                    {card.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-gray-600">{card.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Screenshot */}
                        <div className="flex-1 flex justify-center animate-fade-in-delayed">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
                                <Image
                                    src={IMAGES.integration}
                                    alt="Integration Screenshot"
                                    width={400}
                                    height={300}
                                    className="rounded-2xl h-auto w-full max-w-[400px] shadow-xl object-cover relative z-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 Payment Methods */}
            <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white" id="payments">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
                            Flexible & Secure Payment Methods
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Make daycare payments easier for families and fully compliant with local regulations.
                        </p>
                        <div className="mt-2 w-24 h-1 bg-indigo-600 rounded-full mx-auto"></div>
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                        {/* Left */}
                        <div className="flex-1 animate-fade-in-delayed">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur-lg opacity-30"></div>
                                <Image
                                    src={IMAGES.paymentMethod}
                                    alt="Payment Screenshot"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-xl w-full h-auto object-cover relative z-10"
                                />
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex-1 space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {paymentCards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="animate-fade-slide-up"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <Card className="shadow-md hover:shadow-xl transition-all duration-300 bg-white border-0 overflow-hidden rounded-xl hover:-translate-y-2">

                                            <CardHeader className="flex flex-row items-center gap-3 pb-2">
                                                <div className="p-2 rounded-lg bg-gray-50">
                                                    {card.icon}
                                                </div>
                                                <CardTitle className="text-lg font-semibold text-gray-800">
                                                    {card.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-gray-600">{card.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrustedConnection