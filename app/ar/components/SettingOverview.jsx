'use client';

import ExportedImage from 'next-image-export-optimizer';
import { CheckCircle } from 'lucide-react';
import portalSetting from '@/public/images/portalSetting.png'; // Replace with your actual image



const settings = [
  {
    title: "وصول ولي الأمر لتقارير تقدم الطفل",
    description:
      "تمكين أو تعطيل إمكانية أولياء الأمور من عرض تقارير تقدم أطفالهم عبر البوابة.",
  },
  {
    title: "إدارة تسجيل دخول وخروج الأطفال من قبل المربية",
    description:
      "السماح للمربيات بتسجيل دخول وخروج الأطفال من خلال البوابة.",
  },
  {
    title: "بوابة حضور الموظفين للمربية",
    description:
      "تمكين المربيات من إدارة حضورهن (تسجيل دخول/خروج) مباشرة من خلال البوابة.",
  },
  {
    title: "إدارة تسجيل دخول وخروج الأطفال من قبل المعلم",
    description:
      "السماح للمعلمين بإدارة عمليات تسجيل دخول وخروج الطلاب.",
  },
  {
    title: "بوابة حضور الموظفين للمعلم",
    description:
      "تمكين المعلمين من تسجيل حضورهم داخل النظام.",
  },
  {
    title: "وصول ولي الأمر للرسائل",
    description:
      "التحكم في إمكانية أولياء الأمور من إرسال أو استقبال الرسائل من خلال نظام البوابة.",
  },
];

export default function SettingOverview() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00254d] mb-4">
            نظرة عامة على إعدادات البوابة
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            تتيح إعدادات البوابة للمسؤولين التحكم في ما يمكن لكل نوع من المستخدمين (معلم، مربية، أو ولي أمر)
            الوصول إليه أو القيام به داخل البوابة. هذا يضمن تجربة منظمة ومصممة حسب مسؤوليات كل دور.
          </p>
        </div>

        {/* تصميم الشبكة */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* اليسار: صورة */}
          <div className="w-full h-full">
            <div className="h-full rounded-3xl overflow-hidden border border-gray-200 shadow-[0_10px_30px_rgba(59,130,246,0.4)] transition duration-300 hover:scale-[1.02]">
              <ExportedImage
                src={portalSetting}
                alt="واجهة إعدادات البوابة"
                width={800}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              معاينة: واجهة إعدادات البوابة
            </p>
          </div>

          {/* اليمين: بطاقات */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {settings.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-emerald-600 w-6 h-6 mt-1" />
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
