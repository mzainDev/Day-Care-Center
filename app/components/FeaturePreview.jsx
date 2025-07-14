'use client';

import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FeaturePreview = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

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
      className="relative w-full overflow-x-hidden py-32 bg-gradient-to-b from-[#f9fafb] to-[#f0f4f8]"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 overflow-hidden z-0"
      >
        <div className="absolute top-[15%] left-[10%] w-[600px] h-[600px] bg-[#006adc] rounded-full blur-[180px] opacity-10" />
        <div className="absolute bottom-[15%] right-[10%] w-[700px] h-[700px] bg-[#22c55e] rounded-full blur-[200px] opacity-10" />
        <div className="absolute top-[30%] right-[25%] w-[400px] h-[400px] bg-[#8b5cf6] rounded-full blur-[150px] opacity-10" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-[#006adc]/10 rounded-full mb-6"
          >
            <span className="text-sm font-medium text-[#006adc] tracking-wider">RAWDHAT MANAGEMENT SYSTEM</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-[#00254d] leading-tight mb-6"
          >
            <span className="relative inline-block">
              <span className="relative z-10">The Complete</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#e6f1ff] z-0 opacity-70" />
            </span>
            <br />
            Child Care Solution
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-[#4b5563] max-w-3xl mx-auto"
          >
            Rawdhat combines powerful technology with intuitive design to transform how you manage your center.
          </motion.p>
        </motion.div>

        {/* Hero Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-br from-white to-[#f8fafc] rounded-3xl p-0.5 mb-24 shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#006adc] to-[#22c55e] opacity-20 blur-3xl -z-10" />
          <div className="relative bg-white rounded-[calc(1.5rem-1px)] overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#006adc] animate-pulse" />
                  <span className="text-sm font-medium text-[#006adc]">FLAGSHIP FEATURE</span>
                </div>
                <h2 className="text-3xl font-bold text-[#00254d] mb-4">Smart Attendance Tracking</h2>
                <p className="text-lg text-[#4b5563] mb-8">
                  Rawdhat&apos;s intelligent system automates check-ins, generates compliance reports,
                  and provides real-time visibility into classroom ratios.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Auto Check-In", "Real-Time Alerts", "Compliance Reports", "Ratio Tracking"].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-[#f8fafc] rounded-full text-sm font-medium text-[#00254d] border border-gray-200"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 group text-[#006adc] font-semibold w-fit"
                >
                  <span className="relative">
                    <span className="relative z-10">Explore Attendance Features</span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#006adc]/20 group-hover:h-full transition-all duration-300 ease-out z-0" />
                  </span>
                  <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </Link>
              </div>

              <div className="lg:w-1/2 relative h-[500px] bg-white overflow-hidden">
                <ExportedImage
                  src="/ss/Monthly Attendance.JPG"
                  alt="Rawdhat Attendance Dashboard"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expert Grid with Premium Styling */}
        <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: "backOut"
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className={`${feature.colSpan} ${feature.rowSpan} ${feature.height} group relative h-full overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl z-0" />
              <div className="relative h-full bg-white rounded-2xl border border-[#f0f0f0] overflow-hidden transition-all duration-300 group-hover:border-transparent z-10 flex flex-col">
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
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-32 text-center"
        >
          <div className="relative inline-block">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -inset-4 bg-[#006adc] rounded-2xl blur-2xl opacity-20 -z-10"
            />
            <Link
              href="#"
              className="relative inline-flex items-center justify-center px-8 py-4 bg-[#006adc] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule Rawdhat Demo
                <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200" size={22} />
              </span>
              <span className="absolute inset-0 bg-[#005bb5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-[#64748b]"
          >
            Trusted by 5,000+ child care centers worldwide
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturePreview;