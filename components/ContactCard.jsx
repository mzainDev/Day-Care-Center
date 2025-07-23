'use client';

import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  "Increase your center’s visibility",
  "Get access to admin tools and scheduling",
  "Communicate with parents easily",
  "Manage staff and attendance effortlessly"
];

export default function ContactCard() {
  return (
    <div className="px-6 py-14">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Why Register?</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl rounded-3xl p-8 flex items-start gap-4 hover:shadow-2xl transition duration-300"
            >
              <CheckCircle className="text-green-600 w-7 h-7 mt-1 shrink-0" />
              <p className="text-lg text-gray-700 text-left leading-relaxed">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
