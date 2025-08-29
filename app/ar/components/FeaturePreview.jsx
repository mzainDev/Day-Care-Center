'use client';

import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const FeaturePreview = () => {
  const containerRef = useRef(null);

  const features = [
    {
      title: "الفوترة",
      description: "معالجة المدفوعات تلقائيًا مع إدارة الدعم",
      image: "/images/feature1.png",
      colSpan: "lg:col-span-3",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "الحضور",
      description: "تتبع فوري مع التعرف على الوجه",
      image: "images/staff.png",
      colSpan: "lg:col-span-3",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "التسجيل",
      description: "تسجيل رقمي مع إتمام المستندات تلقائيًا",
      image: "images/info.png",
      colSpan: "lg:col-span-2",
      color: "from-teal-500 to-emerald-600",
    },
    {
      title: "التواصل مع أولياء الأمور",
      description: "مراسلة فورية مع تأكيد قراءة الرسائل",
      image: "/images/chat.png",
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-1",
      color: "from-violet-500 to-purple-600",
      height: "100px",
      imageClass: "object-cover"
    },
    {
      title: "إدارة الموظفين",
      description: "الجدولة، التدريب، وتتبع الشهادات",
      image: "images/info.png",
      colSpan: "lg:col-span-2",
      color: "from-rose-500 to-pink-600",
    },
    {
      title: "التغذية",
      description: "تخطيط وجبات متوافق مع CACFP",
      image: "/images/stats.png",
      colSpan: "lg:col-span-3",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "المنهج الدراسي",
      description: "تتبع التطور مع التقييمات التلقائية",
      image: "/images/report.png",
      colSpan: "lg:col-span-3",
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "التقارير",
      description: "توثيق تلقائي للامتثال للجهات الحكومية",
      image: "/images/performance.png",
      colSpan: "lg:col-span-3",
      color: "from-orange-500 to-amber-600",
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden py-12 md:py-20 bg-gradient-to-b from-[#f9fafb] to-[#f0f4f8]"
    >
      {/* الخلفية */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#006adc] rounded-full blur-[80px] md:blur-[120px] opacity-10" />
        <div className="absolute bottom-[15%] right-[10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#22c55e] rounded-full blur-[80px] md:blur-[120px] opacity-10" />
        <div className="absolute top-[30%] right-[25%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#8b5cf6] rounded-full blur-[60px] md:blur-[100px] opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* العنوان */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-[#006adc]/10 rounded-full mb-3 md:mb-4">
            <span className="text-xs md:text-sm font-medium text-[#006adc] tracking-wider">
              نظام إدارة روضة
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#00254d] leading-tight mb-3 md:mb-4">
            <span className="relative inline-block">
              <span className="relative z-10">الحل الكامل</span>
              <span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-[#e6f1ff] z-0 opacity-70"/>
            </span>
            <br />
            لرعاية الأطفال
          </h2>

          <p className="text-lg md:text-xl text-[#4b5563] max-w-3xl mx-auto">
            تجمع روضتنا بين التكنولوجيا القوية والتصميم البديهي لتغيير طريقة إدارة مركزك.
          </p>
        </div>

        {/* بطاقات المزايا */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 auto-rows-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.colSpan} group relative bg-white rounded-xl shadow-sm overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`} />
              <div className="p-4 flex flex-col h-full">
                {/* العنوان */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-[#00254d]">{feature.title}</h3>
                  <div className="p-1.5 rounded-full bg-[#f8fafc] group-hover:bg-[#006adc] group-hover:text-white transition-colors duration-300">
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* الوصف */}
                <p className="text-sm md:text-base text-[#64748b] mb-3">{feature.description}</p>

                {/* الصورة */}
                <div className="w-full mt-auto">
                  <Image
                    src={feature.image}
                    alt={`روضتنا - ${feature.title}`}
                    width={600}
                    height={300}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturePreview;
