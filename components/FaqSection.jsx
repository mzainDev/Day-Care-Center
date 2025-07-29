'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: "What is the purpose of this platform?",
    answer: "This platform helps daycare centers manage staff, communicate with parents, and streamline daily operations.",
  },
  {
    question: "Is there a cost to register?",
    answer: "Registration is currently free for all centers during our launch period.",
  },
  {
    question: "How can parents benefit from this?",
    answer: "Parents get real-time updates about their child’s activities, attendance, and messages from teachers.",
  },
  {
    question: "Can I update my center’s information after registering?",
    answer: "Yes, you can easily edit your center's profile, staff list, and more from the admin dashboard.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-[#00254d] mb-4 text-center">Frequently Asked Questions</h2>
        <p className="text-base text-center text-gray-600 mb-8">
          Rawdhat combines powerful technology with intuitive design to transform how you manage your center.
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
                  className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-800 font-medium hover:bg-blue-50 transition"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`px-5 transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] py-2' : 'max-h-0'
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
