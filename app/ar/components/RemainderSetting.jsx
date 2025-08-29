"use client";

import Image from "next/image";
import autoReminder from "@/public/images/autoReminder.png";
import { Bell, FileText, Compass } from "lucide-react";

const reminders = [
  {
    icon: <Bell className="text-blue-500 w-6 h-6" />,
    title: "إشعار تسجيل الدخول",
    description: "يرسل إشعارًا عند تسجيل دخول الطفل عبر البوابة.",
  },
  {
    icon: <Bell className="text-blue-500 w-6 h-6" />,
    title: "إشعار تسجيل الخروج",
    description: "يرسل إشعارًا عند تسجيل خروج الطفل من البوابة.",
  },
  {
    icon: <FileText className="text-green-600 w-6 h-6" />,
    title: "إشعار جاهزية التقرير اليومي",
    description: "يخطِر أولياء الأمور عندما يكون تقرير طفلهم اليومي جاهزًا للعرض.",
  },
  {
    icon: <Compass className="text-purple-500 w-6 h-6" />,
    title: "دليل استخدام البوابة",
    description: "يرسل دليل ترحيب أو إرشادات للمستخدمين الجدد للبوابة.",
  },
  {
    icon: <Compass className="text-purple-500 w-6 h-6" />,
    title: "دليل استخدام البوابة",
    description: "يرسل دليل ترحيب أو إرشادات للمستخدمين الجدد للبوابة.",
  },
  {
    icon: <Compass className="text-purple-500 w-6 h-6" />,
    title: "دليل استخدام البوابة",
    description: "يرسل دليل ترحيب أو إرشادات للمستخدمين الجدد للبوابة.",
  },
];

export default function AutoReminderSettings() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00254d] mb-4">
            إعدادات التذكير التلقائي
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            إدارة التذكيرات التلقائية المرسلة عبر الواتساب أو البريد الإلكتروني. يمكن تصنيف التذكيرات حسب الغرض وتشغيلها أو إيقافها لتناسب احتياجاتك.
          </p>
        </div>

        {/* الشبكة */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* الصورة */}
          <div className="w-full h-full">
            <div className="h-full rounded-3xl overflow-hidden border border-gray-200 shadow-[0_10px_30px_rgba(255,0,150,0.4),_0_5px_15px_rgba(0,205,255,0.3)] transition duration-300 hover:scale-[1.02]">
              <Image
                src={autoReminder}
                alt="واجهة إعدادات التذكير التلقائي"
                width={800}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              معاينة: واجهة إعدادات التذكير
            </p>
          </div>

          {/* البطاقات */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reminders.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-[#0e7490]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
