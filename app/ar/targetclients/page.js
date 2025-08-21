'use client'

import ExportedImage from 'next-image-export-optimizer'
import { motion } from 'framer-motion'
import Link from 'next/link'

import targetClients1 from '@/public/images/targetClients1.jpg';
import targetClients2 from '@/public/images/targetClients2.jpg';
import targetClients3 from '@/public/images/targetClients3.jpg';

const sections = [
  {
    title: 'مالكو الحضانات',
    description: 'المالكون أو المدراء لديهم تحكم كامل في النظام.',
    features: ['تقارير جاهزة للحكومة', 'التواصل مع أولياء الأمور'],
    image: targetClients1,
  },
  {
    title: 'المعلمون',
    description: 'المعلمون يحصلون على أدوات قوية مصممة للاستخدام عبر الهاتف المحمول.',
    features: ['لوحات تحكم مناسبة للجوال', 'خيارات وأدوات إعداد تقارير الأطفال'],
    image: targetClients2,
  },
  {
    title: 'الأوصياء',
    description: 'الأوصياء يظلون على اتصال ومطلعين.',
    features: [
      'عرض تقارير الطفل',
      'الدردشة مع المعلمين والمربيات',
      'إجراء المدفوعات',
      'متابعة تقدم الطفل',
    ],
    image: targetClients3,
  },
]

const TargetClient = () => {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mt-2">نخدم جميع الأطراف المعنية</h1>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          من المالكين إلى المعلمين إلى الأوصياء — صممنا هذا النظام لتمكين كل دور في منظومة رعاية الأطفال الخاصة بك.
        </p>
      </div>

      <div className="space-y-20">
        {sections.map((section, index) => (
          <div key={index} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl font-semibold text-gray-800">{section.title}</h3>
              <p className="text-gray-600 mt-2">{section.description}</p>
              <div className="flex justify-center flex-wrap gap-2 mt-4">
                {section.features.map((feature, i) => (
                  <span
                    key={i}
                    className="inline-block bg-blue-100 text-blue-700 text-sm px-4 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-4xl mx-auto bg-white shadow-md border border-gray-200 rounded-lg p-3"
            >
              <div className="overflow-hidden rounded-md">
                <ExportedImage
                  src={section.image}
                  alt={section.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-auto rounded"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/register">
          <button className="bg-[#5fe4e4] hover:bg-[#1f8282] text-white px-6 py-3 rounded-full text-lg transition">
            سجّل الآن
          </button>
        </Link>
      </div>
    </div>
  )
}

export default TargetClient
