'use client'
import Image from "next/image";
import Link from 'next/link';
import { Smartphone, HeartPulse, BookOpen, Bell } from 'lucide-react';

const GuardianDashboard = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-14 lg:flex-row-reverse">
          {/* Image - Right */}
          <div className="relative lg:w-1/2">
            <div className="relative overflow-hidden rounded-3xl bg-white bg-opacity-30 backdrop-blur-md border border-purple-200/50 shadow-[0_25px_80px_rgba(168,85,247,0.25)] transition-transform duration-300 hover:scale-105">
              <Image
                src="/features/features-ar-2.png"
                alt="لوحة تحكم ولي الأمر"
                width={720}
                height={500}
                className="object-cover w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-100 rounded-xl blur-md -z-10"></div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 lg:pr-10">
            <div className="inline-flex px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-purple-700 uppercase bg-purple-100 rounded-full shadow-sm">
              بوابة أولياء الأمور
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              لوحة تحكم ولي الأمر
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              رؤية فورية لرفاهية طفلك وتطوره.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2">
              {[
                { icon: <Smartphone className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "التحديثات", desc: "تقارير النشاط اليومية" },
                { icon: <HeartPulse className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "الصحة", desc: "متابعة الصحة" },
                { icon: <BookOpen className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "التقدم", desc: "المراحل التعليمية" },
                { icon: <Bell className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "التنبيهات", desc: "إشعارات فورية" }
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
                href="#tour"
                className="flex items-center px-6 py-2.5 text-sm font-semibold text-white rounded-lg shadow bg-[#5fe4e4] hover:bg-[#1f8282] transition"
              >
                جولة تعريفية
              </Link>
              <Link
                href="#testimonials"
                className="px-6 py-2.5 text-sm font-semibold  rounded-lg text-white bg-[#5fe4e4] hover:bg-[#1f8282] transition"
              >
                قصص أولياء الأمور
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuardianDashboard;
