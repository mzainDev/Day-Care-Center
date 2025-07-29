'use client';

import ExportedImage from 'next-image-export-optimizer';
import { CheckCircle } from 'lucide-react';
import portalSetting from '@/app/assets/image/portalSetting.png'; // Replace with your actual image

const settings = [
  {
    title: "Guardian Child Progress Report Access",
    description:
      "Enable or disable the ability for guardians to view their child’s progress reports via the portal.",
  },
  {
    title: "Nanny Children's Check-in Management",
    description:
      "Allow nannies to check children in and out through the portal.",
  },
  {
    title: "Nanny Staff Attendance Portal",
    description:
      "Enable nannies to manage their own attendance (clock in/out) directly through the portal.",
  },
  {
    title: "Teacher Children's Check-in Management",
    description:
      "Allow teachers to handle student check-in/check-out processes.",
  },
  {
    title: "Teacher Staff Attendance Portal",
    description:
      "Enable teachers to record their own attendance within the system.",
  },
  {
    title: "Guardian Messaging Access",
    description:
      "Control whether guardians can send or receive messages through the portal messaging system.",
  },
];

export default function SettingOverview() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00254d] mb-4">
            Portal Settings Overview
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Our Portal Settings allow administrators to control what each type of user (Teacher, Nanny, or Guardian)
            can access and do within the portal. This helps ensure a streamlined experience tailored to each role’s responsibilities.
          </p>
        </div>

        {/* Grid Layout */}
       
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
  {/* Left: Image */}
  <div className="w-full h-full">
    <div className=" h-full rounded-3xl overflow-hidden border border-gray-200 shadow-[0_10px_30px_rgba(59,130,246,0.4)] transition duration-300 hover:scale-[1.02]">
      <ExportedImage
        src={portalSetting}
        alt="Portal Settings UI"
        width={800}
        height={600}
        className="w-full h-full object-contain"
      />
    </div>
    <p className="text-sm text-gray-500 mt-3 text-center">
      Preview: Portal Settings UI
    </p>
  </div>

  {/* Right: Cards in 2-column layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {settings.map((item, index) => (
      <div
        key={index}
        className="bg-gray-50 border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          <CheckCircle className="text-emerald-600 w-6 h-6 mt-1" />
          <div>
            <h3 className="text-base md:text-lg font-semibold text-[#0e7490]">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mt-1">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
