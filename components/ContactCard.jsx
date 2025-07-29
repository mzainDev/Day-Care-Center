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
    <div className="py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#00254d] mb-10">Why Register</h2>
        
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-30 backdrop-blur-md border border-blue-200/50 rounded-3xl p-6 md:p-8 flex items-start gap-4 relative overflow-hidden shadow-[0_5px_60px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_100px_rgba(59,130,246,0.6)]"
            >
              <CheckCircle className="text-green-600 w-7 h-7 mt-1 shrink-0" />
              <p className="text-base md:text-xl text-gray-700 text-left leading-normal">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
