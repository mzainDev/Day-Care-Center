'use client'
import Image from "next/image";
import Link from 'next/link';
import { Users, Calendar, BarChart2, Key } from 'lucide-react';

const StaffManagement = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-14 lg:flex-row">
          {/* Image - Left */}
          <div className="relative lg:w-[60%]">
            <div className="relative rounded-3xl overflow-hidden bg-white bg-opacity-30 backdrop-blur-md border border-blue-200/50 shadow-[0_25px_80px_rgba(92,225,230,0.3)] transition-transform duration-300 hover:scale-105">
              <Image
                src="/features/featurespage-ar-1.png"
                alt="إدارة الموظفين"
                width={900}
                height={950}
                className="w-full h-auto rounded-3xl object-contain"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-xl blur-md -z-10"></div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 lg:pl-10">
            <div className="inline-flex px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-blue-700 uppercase bg-blue-100 rounded-full shadow-sm">
              القوى العاملة
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              إدارة الموظفين
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              قم بتبسيط العمليات اليومية باستخدام بوابة إدارة الموظفين السهلة.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2">
              {[
                { icon: <Users className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "الملفات الشخصية", desc: "ملفات شاملة للموظفين" },
                { icon: <Calendar className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "الجدولة", desc: "تقويم بصري للمناوبات" },
                { icon: <BarChart2 className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "التحليلات", desc: "مؤشرات الأداء" },
                { icon: <Key className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "الأدوار", desc: "مستويات الصلاحيات" }
              ].map((feature, index) => (
                <div key={index} className="p-5 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              <Link
                href="#demo"
                className="flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-[#5fe4e4] hover:bg-[#1f8282] rounded-lg shadow transition"
              >
                طلب عرض توضيحي
              </Link>
              <Link
                href="#features"
                className="px-6 py-2.5 text-sm font-semibold text-white rounded-lg bg-[#5fe4e4] hover:bg-[#1f8282] transition"
              >
                جميع المزايا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffManagement;
