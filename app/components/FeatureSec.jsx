import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { DollarSign, ClipboardList, MessageCircle, Users, FileText, BarChart2 } from 'lucide-react';


const FeatureSec = () => {
    const features = [
        {
            title: "Streamlined Billing",
            description: "Automatically generate invoices, process payments, and track expenses all in one place.",
            icon: <DollarSign className="w-8 h-8 text-[#d46c23]" />,
        },
        {
            title: "Attendance Tracking",
            description: "Digital check-in/out system with reporting to monitor attendance patterns and staff ratios.",
            icon: <ClipboardList className="w-8 h-8 text-[#d46c23]" />,
        },
        {
            title: "Parent Communication",
            description: "Real-time updates, newsletters, and direct messaging to keep families informed.",
            icon: <MessageCircle className="w-8 h-8 text-[#d46c23]" />,
        },
        {
            title: "Staff Management",
            description: "Schedule staff, track certifications, and manage payroll efficiently.",
            icon: <Users className="w-8 h-8 text-[#d46c23]" />,
        },
        {
            title: "Documentation",
            description: "Digitize all your paperwork and access important documents anytime, anywhere.",
            icon: <FileText className="w-8 h-8 text-[#d46c23]" />,
        },
        {
            title: "Reporting & Analytics",
            description: "Generate insights on enrollment, revenue, staff performance and more.",
            icon: <BarChart2 className="w-8 h-8 text-[#d46c23]" />,
        },
    ];
    return (
        <>
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to manage your childcare center</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Playground combines all the tools you need in one intuitive platform
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why it's built for Saudi Arabia */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Built for the unique needs of Saudi childcare centers
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Designed with local regulations, cultural practices, and community needs in mind.
                    </p>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-left">
                            <h3 className="text-xl font-semibold mb-2">Ministry-Compliant Forms</h3>
                            <p className="text-gray-600 text-sm">
                                Includes follow-up forms and approved record templates ready for regulatory use.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-left">
                            <h3 className="text-xl font-semibold mb-2">Local Holidays + Calendar</h3>
                            <p className="text-gray-600 text-sm">
                                Preloaded calendar with official Saudi holidays for accurate scheduling.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-left">
                            <h3 className="text-xl font-semibold mb-2">Arabic Interface</h3>
                            <p className="text-gray-600 text-sm">
                                Fully translated interface for staff and parents preferring Arabic.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-left">
                            <h3 className="text-xl font-semibold mb-2">ZATCA-Ready Invoicing</h3>
                            <p className="text-gray-600 text-sm">
                                Generate invoices that meet Saudi Arabia’s ZATCA e-invoicing requirements.
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-block bg-[#d46c23] text-white font-medium px-6 py-3 rounded-full hover:bg-[#c25e1e] transition"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </>
    )
}

export default FeatureSec