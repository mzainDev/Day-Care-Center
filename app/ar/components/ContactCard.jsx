'use client';

import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  "زيادة ظهور مركزك",
  "الحصول على أدوات الإدارة وجدولة المواعيد",
  "التواصل بسهولة مع أولياء الأمور",
  "إدارة الموظفين والحضور بسهولة"
];

export default function ContactCard() {
  return (
    <div className="py-16 px-6 ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#00254d] mb-10">لماذا التسجيل؟</h2>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-blue-100 rounded-3xl p-6 md:p-8 flex items-start gap-4 shadow-[0_5px_40px_rgba(59,130,246,0.1)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_60px_rgba(59,130,246,0.2)]"
            >
              <CheckCircle className="text-green-600 w-6 h-6 mt-1 shrink-0" />
              <p className="text-base md:text-lg text-gray-700 text-right leading-relaxed">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
