"use client"
import React from 'react'
import ExportedImage from 'next-image-export-optimizer'
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
        title: 'جهاز البصمة',
        description: 'تتبع الحضور بشكل آمن ودقيق باستخدام تقنية البصمة الحيوية.',
    },
    {
        icon: <MessageCircle className="text-green-600 w-6 h-6" />,
        title: 'واجهة برمجة واتساب',
        description: 'إرسال التنبيهات والتذكيرات تلقائيًا إلى أولياء الأمور والموظفين.',
    },
    {
        icon: <Globe className="text-blue-600 w-6 h-6" />,
        title: 'تكامل الموقع الإلكتروني',
        description: 'ربط نماذج اتصل بنا، طلبات التوظيف، والمزيد.',
    },
    {
        icon: <ClipboardList className="text-purple-600 w-6 h-6" />,
        title: 'دعم صفحات الهبوط',
        description: 'التقاط العملاء المحتملين وإرسال النماذج بسهولة من صفحاتك.',
    },
];

const paymentCards = [
    {
        icon: (
            <ExportedImage
                src={IMAGES.tap}
                alt="أيقونة تــاب"
                width={48}
                height={48}
                className="w-12 h-12"
            />
        ),
        title: 'تاب للمدفوعات',
        description: 'قبول Apple Pay و Mada وبطاقات Visa — كلها في بوابة آمنة واحدة.',
    },
    {
        icon: (
            <ExportedImage
                src={IMAGES.tabby}
                alt="أيقونة تابي"
                width={48}
                height={48}
                className="w-12 h-12"
            />
        ),
        title: 'تابي',
        description: 'توفير خطط دفع شهرية مرنة للعائلات مع تكامل تابي.',
    },
    {
        icon: (
            <ExportedImage
                src={IMAGES.tamara}
                alt="أيقونة تمارا"
                width={48}
                height={48}
                className="w-12 h-12"
            />
        ),
        title: 'تمارا',
        description: 'تفعيل خيار "اشتر الآن وادفع لاحقًا" لتسهيل الدفع على أولياء الأمور.',
    },
    {
        icon: (
            <ExportedImage
                src={IMAGES.zatca}
                alt="أيقونة زاتكا"
                width={48}
                height={48}
                className="w-12 h-12"
            />
        ),
        title: 'زاتكا (فاتورة)',
        description: 'إصدار فواتير متوافقة مع زاتكا لضمان الشفافية والالتزام.',
    },
];

const TrustedConnection = () => {
    return (
        <>
            <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50" id="integrations">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
                            تكامل سلس واتصالات موثوقة
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            عزز مركز الرعاية الخاص بك بأدوات قوية — متكاملة وذكية وجاهزة للنمو.
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
                                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-purple-600"></div>
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
                                <ExportedImage
                                    src={IMAGES.integration}
                                    alt="صورة التكامل"
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
                            طرق دفع مرنة وآمنة
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            اجعل مدفوعات مراكز الرعاية أسهل للعائلات ومتوافقة تمامًا مع اللوائح المحلية.
                        </p>
                        <div className="mt-2 w-24 h-1 bg-indigo-600 rounded-full mx-auto"></div>
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                        {/* Left */}
                        <div className="flex-1 animate-fade-in-delayed">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur-lg opacity-30"></div>
                                <ExportedImage
                                    src={IMAGES.paymentMethod}
                                    alt="صورة الدفع"
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
                                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-teal-500"></div>
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
