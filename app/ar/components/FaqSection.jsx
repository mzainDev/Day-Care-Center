'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: "ما هو هدف هذه المنصة؟",
    answer: "تساعد هذه المنصة مراكز رعاية الأطفال على إدارة الموظفين، والتواصل مع أولياء الأمور، وتبسيط العمليات اليومية.",
  },
  {
    question: "هل هناك تكلفة للتسجيل؟",
    answer: "التسجيل مجاني حاليًا لجميع المراكز خلال فترة الإطلاق.",
  },
  {
    question: "كيف يمكن أن يستفيد أولياء الأمور من ذلك؟",
    answer: "يحصل أولياء الأمور على تحديثات فورية عن أنشطة أطفالهم، وحضورهم، ورسائل المعلمين.",
  },
  {
    question: "هل يمكنني تحديث معلومات مركزي بعد التسجيل؟",
    answer: "نعم، يمكنك بسهولة تعديل ملف مركزك، وقائمة الموظفين، والمزيد من لوحة التحكم.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-[#00254d] mb-4 text-center">الأسئلة الشائعة</h2>
        <p className="text-base text-center text-gray-600 mb-8">
          روضة تجمع بين التكنولوجيا المتطورة والتصميم السهل لتغيير طريقة إدارة مركزك.
        </p>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-blue-100 rounded-lg shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-right text-gray-800 font-medium hover:bg-blue-50 transition"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                <div
                  className={`px-5 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] py-2' : 'max-h-0'
                    }`}
                >
                  <p className="text-sm text-gray-600">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
