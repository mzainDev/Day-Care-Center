'use client'

import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';

const GuardianDashboard = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-10 lg:flex-row-reverse">
          {/* Image - Right */}
          <div className="relative lg:w-1/2">
            <div className="overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9">
              <ExportedImage
                src="/features/dummy.jpg"
                alt="Guardian Dashboard"
                width={550}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-purple-100 rounded-lg -z-10"></div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 lg:pr-10">
            <div className="inline-flex px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-600 uppercase bg-purple-50 rounded-full">
              Parent Portal
            </div>

            <h2 className="text-3xl font-bold text-gray-900">
              Guardian Dashboard
            </h2>

            <p className="mt-4 text-gray-600">
              Real-time visibility into your child's well-being and development.
            </p>

            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
              {[
                { icon: '📱', title: "Updates", desc: "Daily activity reports" },
                { icon: '❤️', title: "Health", desc: "Wellness tracking" },
                { icon: '📚', title: "Progress", desc: "Educational milestones" },
                { icon: '🔔', title: "Alerts", desc: "Instant notifications" }
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
                href="#tour"
                className="flex items-center px-5 py-2 text-sm font-medium text-white transition-all duration-200 bg-purple-600 rounded-lg hover:bg-purple-700"
              >
                Take a Tour
              </Link>
              <Link
                href="#testimonials"
                className="px-5 py-2 text-sm font-medium text-gray-700 transition-all duration-200 border border-gray-300 rounded-lg hover:border-purple-400"
              >
                Parent Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuardianDashboard;