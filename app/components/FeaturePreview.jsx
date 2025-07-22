'use client';

import ExportedImage from 'next-image-export-optimizer';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const FeaturePreview = () => {
  const containerRef = useRef(null);

  const features = [
    {
      title: "Billing",
      description: "Automated payment processing with subsidy management",
      image: "/ss/plan subscriptions details.JPG",
      colSpan: "lg:col-span-4",
      rowSpan: "lg:row-span-2",
      color: "from-indigo-500 to-purple-600",
      height: "min-h-[400px]"
    },
    {
      title: "Enrollment",
      description: "Digital registration with automated paperwork",
      image: "/ss/Staff Info.JPG",
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-1",
      color: "from-teal-500 to-emerald-600",
      height: "min-h-[300px]"
    },
    {
      title: "Attendance",
      description: "Real-time tracking with facial recognition",
      image: "/ss/Monthly Attendance.JPG",
      colSpan: "lg:col-span-3",
      rowSpan: "lg:row-span-2",
      color: "from-blue-500 to-indigo-600",
      height: "min-h-[400px]"
    },
    {
      title: "Parent Communication",
      description: "Instant messaging with read receipts",
      image: "/ss/chat feature.JPG",
      colSpan: "lg:col-span-3",
      rowSpan: "lg:row-span-1",
      color: "from-violet-500 to-purple-600",
      height: "min-h-[300px]"
    },
    {
      title: "Curriculum",
      description: "Development tracking with automated assessments",
      image: "/ss/Daily Reports.JPG",
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-1",
      color: "from-amber-500 to-orange-600",
      height: "min-h-[300px]"
    },
    {
      title: "Nutrition",
      description: "CACFP-compliant meal planning",
      image: "/ss/graph stats.JPG",
      colSpan: "lg:col-span-4",
      rowSpan: "lg:row-span-2",
      color: "from-emerald-500 to-teal-600",
      height: "min-h-[400px]"
    },
    {
      title: "Reporting",
      description: "Automated state compliance documentation",
      image: "/ss/Monthly Analysis.JPG",
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-1",
      color: "from-orange-500 to-amber-600",
      height: "min-h-[300px]"
    },
    {
      title: "Staff Management",
      description: "Scheduling, training, and certification tracking",
      image: "/ss/Staff Info.JPG",
      colSpan: "lg:col-span-3",
      rowSpan: "lg:row-span-1",
      color: "from-rose-500 to-pink-600",
      height: "min-h-[300px]"
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden py-32 bg-gradient-to-b from-[#f9fafb] to-[#f0f4f8]"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] bg-[#006adc] rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] bg-[#22c55e] rounded-full blur-[120px] opacity-10" />
        <div className="absolute top-[30%] right-[25%] w-[300px] h-[300px] bg-[#8b5cf6] rounded-full blur-[100px] opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-4 py-2 bg-[#006adc]/10 rounded-full mb-6">
            <span className="text-sm font-medium text-[#006adc] tracking-wider">
              RAWDHAT MANAGEMENT SYSTEM
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#00254d] leading-tight mb-6">
            <span className="relative inline-block">
              <span className="relative z-10">The Complete</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#e6f1ff] z-0 opacity-70" />
            </span>
            <br />
            Child Care Solution
          </h2>

          <p className="text-xl text-[#4b5563] max-w-3xl mx-auto">
            Rawdhat combines powerful technology with intuitive design to transform how you manage your center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.colSpan} ${feature.rowSpan} ${feature.height} group relative h-full overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl shadow-lg z-0" />
              <div className="relative h-full bg-white rounded-2xl border border-[#f0f0f0] z-10 flex flex-col">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`} />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-[#00254d]">{feature.title}</h3>
                    <div className="p-2 rounded-full bg-[#f8fafc] group-hover:bg-[#006adc] group-hover:text-white transition-colors duration-300">
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                  <p className="text-[#64748b] mb-6">{feature.description}</p>
                  <div className="mt-auto relative w-full h-full min-h-[200px] overflow-hidden">
                    <ExportedImage
                      src={feature.image}
                      alt={`Rawdhat ${feature.title}`}
                      fill
                      className="object-contain object-left-top transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
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
