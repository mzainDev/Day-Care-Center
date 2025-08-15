import React from 'react'
import Link from 'next/link';
import { DollarSign, ClipboardList, MessageCircle, Users, FileText, BarChart2 } from 'lucide-react';
import TrustedConnection from './TrustedConnection';

const FeatureSec = () => {
  const features = [
    {
      title: "الفوترة المبسطة",
      description: "إنشاء الفواتير تلقائيًا، معالجة المدفوعات، وتتبع النفقات في مكان واحد.",
      icon: <DollarSign className="bg-white rounded-full p-1 w-8 h-8 text-[#5fe4e4]" />,
      bg: "bg-gradient-to-br from-blue-400 via-cyan-200 to-blue-200",
    },
    {
      title: "تتبع الحضور",
      description: "نظام تسجيل دخول/خروج رقمي مع تقارير لمراقبة الحضور ونسب الموظفين.",
      icon: <ClipboardList className="bg-white rounded-full p-1 w-8 h-8 text-[#5fe4e4]" />,
      bg: "bg-gradient-to-br from-purple-400 via-pink-300 to-pink-200",
    },
    {
      title: "التواصل مع أولياء الأمور",
      description: "تحديثات فورية، نشرات إخبارية، ورسائل مباشرة لإبقاء العائلات على اطلاع.",
      icon: <MessageCircle className="bg-white rounded-full p-1  w-8 h-8 text-[#5fe4e4]" />,
      bg: "bg-gradient-to-br from-green-200 via-lime-300 to-green-200",
    },
    {
      title: "إدارة الموظفين",
      description: "جدولة الموظفين، تتبع الشهادات، وإدارة الرواتب بكفاءة.",
      icon: <Users className="bg-white rounded-full p-1 w-8 h-8 text-[#5fe4e4]" />,
      bg: "bg-gradient-to-br from-yellow-300 via-orange-300 to-red-200",
    },
    {
      title: "التوثيق",
      description: "رقمنة جميع مستنداتك والوصول إليها في أي وقت ومن أي مكان.",
      icon: <FileText className="bg-white rounded-full p-1 w-8 h-8 text-[#5fe4e4]" />,
      bg: "bg-gradient-to-br from-indigo-400 via-violet-300 to-indigo-200",
    },
    {
      title: "التقارير والتحليلات",
      description: "إنشاء تقارير ورؤى حول التسجيل، الإيرادات، أداء الموظفين والمزيد.",
      icon: <BarChart2 className="bg-white rounded-full p-1 w-8 h-8 text-[#5fe4e4]" />,
      bg: "bg-gradient-to-br from-pink-400 via-rose-300 to-pink-200",
    },
  ];

  return (
    <>
      <TrustedConnection />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              كل ما تحتاجه لإدارة مركز رعاية الأطفال
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              يجمع روضة جميع الأدوات التي تحتاجها في منصة واحدة سهلة الاستخدام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-6 ${feature.bg} rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            مصمم خصيصًا لاحتياجات مراكز رعاية الأطفال في السعودية
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            تم تصميمه بما يتوافق مع اللوائح المحلية، الممارسات الثقافية، واحتياجات المجتمع.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-400 via-lime-300 to-green-200 p-6 rounded-2xl shadow hover:shadow-lg transition text-right">
              <h3 className="text-xl font-semibold mb-2">نماذج متوافقة مع الوزارة</h3>
              <p className="text-gray-600 text-sm">
                تشمل نماذج متابعة وقوالب سجلات معتمدة جاهزة للاستخدام التنظيمي.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-200 p-6 rounded-2xl shadow hover:shadow-lg transition text-right">
              <h3 className="text-xl font-semibold mb-2">العطلات المحلية + التقويم</h3>
              <p className="text-gray-600 text-sm">
                تقويم مُحمّل مسبقًا بالعطلات الرسمية السعودية لجدولة دقيقة.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-400 via-pink-300 to-pink-200 p-6 rounded-2xl shadow hover:shadow-lg transition text-right">
              <h3 className="text-xl font-semibold mb-2">واجهة عربية</h3>
              <p className="text-gray-600 text-sm">
                واجهة مترجمة بالكامل للموظفين وأولياء الأمور الذين يفضلون اللغة العربية.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-300 via-orange-300 to-red-200 p-6 rounded-2xl shadow hover:shadow-lg transition text-right">
              <h3 className="text-xl font-semibold mb-2">فواتير متوافقة مع هيئة الزكاة والضريبة</h3>
              <p className="text-gray-600 text-sm">
                إنشاء فواتير تلبي متطلبات الفوترة الإلكترونية لهيئة الزكاة والضريبة في السعودية.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block bg-[#5fe4e4] hover:bg-[#1f8282] text-white font-medium px-6 py-3 rounded-full transition"
          >
            ابدأ الآن
          </Link>
        </div>
      </section>
    </>
  )
}

export default FeatureSec;
