'use client'

import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';

const AttendanceSystem = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* Image - Left */}
          <div className="relative lg:w-1/2">
            <div className="overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9">
              <ExportedImage
                src="/features/dummy.jpg"
                alt="Attendance System"
                width={550}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-green-100 rounded-lg -z-10"></div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 lg:pl-10">
            <div className="inline-flex px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-green-600 uppercase bg-green-50 rounded-full">
              Tracking
            </div>

            <h2 className="text-3xl font-bold text-gray-900">
              Attendance System
            </h2>

            <p className="mt-4 text-gray-600">
              Real-time tracking and instant updates for children and staff.
            </p>

            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
              {[
                { icon: '⏱️', title: "Check-ins", desc: "Instant notifications" },
                { icon: '⚠️', title: "Alerts", desc: "Late arrivals tracking" },
                { icon: '📈', title: "Trends", desc: "Attendance analytics" },
                { icon: '📊', title: "Reports", desc: "Visual summaries" }
              ].map((feature, index) => (
                <div key={index} className="p-4 transition-all duration-200 bg-white border border-gray-200 rounded-lg hover:shadow-sm">
                  <div className="text-xl mb-2">{feature.icon}</div>
                  <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <Link
                href="#attendance"
                className="flex items-center px-5 py-2 text-sm font-medium text-white transition-all duration-200 bg-green-600 rounded-lg hover:bg-green-700"
              >
                Learn More
              </Link>
              <Link
                href="#demo"
                className="px-5 py-2 text-sm font-medium text-gray-700 transition-all duration-200 border border-gray-300 rounded-lg hover:border-green-400"
              >
                See Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendanceSystem;