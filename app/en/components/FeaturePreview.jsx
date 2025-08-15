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
      colSpan: "lg:col-span-3",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Attendance",
      description: "Real-time tracking with facial recognition",
      image: "/ss/Monthly Attendance.JPG",
      colSpan: "lg:col-span-3",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Enrollment",
      description: "Digital registration with automated paperwork",
      image: "/ss/Staff Info.JPG",
      colSpan: "lg:col-span-2",
      color: "from-teal-500 to-emerald-600",
    },
    {
  title: "Parent Communication",
  description: "Instant messaging with read receipts",
  image: "/ss/chat feature.JPG",
  colSpan: "lg:col-span-2",
  rowSpan: "lg:row-span-1",
  color: "from-violet-500 to-purple-600",
  // ↓↓↓ Adjusted: removed extra height
  height: "100px",
  imageClass: "object-cover"
}
,
    {
      title: "Staff Management",
      description: "Scheduling, training, and certification tracking",
      image: "/ss/Staff Info.JPG",
      colSpan: "lg:col-span-2",
      color: "from-rose-500 to-pink-600",
    },
    {
      title: "Nutrition",
      description: "CACFP-compliant meal planning",
      image: "/ss/graph stats.JPG",
      colSpan: "lg:col-span-3",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Curriculum",
      description: "Development tracking with automated assessments",
      image: "/ss/Daily Reports.JPG",
      colSpan: "lg:col-span-3",
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "Reporting",
      description: "Automated state compliance documentation",
      image: "/ss/Monthly Analysis.JPG",
      colSpan: "lg:col-span-3",
      color: "from-orange-500 to-amber-600",
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden py-12 md:py-20 bg-gradient-to-b from-[#f9fafb] to-[#f0f4f8]"
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#006adc] rounded-full blur-[80px] md:blur-[120px] opacity-10" />
        <div className="absolute bottom-[15%] right-[10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#22c55e] rounded-full blur-[80px] md:blur-[120px] opacity-10" />
        <div className="absolute top-[30%] right-[25%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#8b5cf6] rounded-full blur-[60px] md:blur-[100px] opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-[#006adc]/10 rounded-full mb-3 md:mb-4">
            <span className="text-xs md:text-sm font-medium text-[#006adc] tracking-wider">
              RAWDHAT MANAGEMENT SYSTEM
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#00254d] leading-tight mb-3 md:mb-4">
            <span className="relative inline-block">
              <span className="relative z-10">The Complete</span>
              <span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-[#e6f1ff] z-0 opacity-70"/>
            </span>
            <br />
            Child Care Solution
          </h2>

          <p className="text-lg md:text-xl text-[#4b5563] max-w-3xl mx-auto">
            Rawdhat combines powerful technology with intuitive design to transform how you manage your center.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 auto-rows-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.colSpan} group relative bg-white rounded-xl shadow-sm overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`} />
              <div className="p-4 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-[#00254d]">{feature.title}</h3>
                  <div className="p-1.5 rounded-full bg-[#f8fafc] group-hover:bg-[#006adc] group-hover:text-white transition-colors duration-300">
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-[#64748b] mb-3">{feature.description}</p>

                {/* Image */}
                <div className="w-full mt-auto">
                  <ExportedImage
                    src={feature.image}
                    alt={`Rawdhat ${feature.title}`}
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
