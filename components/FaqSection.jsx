'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: "What is the purpose of this platform?",
    answer: "This platform helps daycare centers manage staff, communicate with parents, and streamline daily operations."
  },
  {
    question: "Is there a cost to register?",
    answer: "Registration is currently free for all centers during our launch period."
  },
  {
    question: "How can parents benefit from this?",
    answer: "Parents get real-time updates about their child’s activities, attendance, and messages from teachers."
  },
  {
    question: "Can I update my center’s information after registering?",
    answer: "Yes, you can easily edit your center's profile, staff list, and more from the admin dashboard."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">FAQs</h2>
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-blue-200 rounded-lg shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-4 text-left text-base font-medium text-gray-800 hover:bg-blue-50 transition"
                >
                  {item.question}
                  <ChevronDown
                    className={`transform transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 py-2 px-4' : 'max-h-0 py-0 px-4'
                  }`}
                >
                  <p className="text-sm text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
