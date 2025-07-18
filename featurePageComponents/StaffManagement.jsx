'use client'
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import { Users, Calendar, BarChart2, Key } from 'lucide-react';

const StaffManagement = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* Image - Left */}
          <div className="relative lg:w-1/2">
            <div className="overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9">
              <ExportedImage
                src="/features/dummy.jpg"
                alt="Staff Management"
                width={550}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-blue-100 rounded-lg -z-10"></div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 lg:pl-10">
            <div className="inline-flex px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Workforce
            </div>

            <h2 className="text-3xl font-bold text-gray-900">
              Staff Management
            </h2>

            <p className="mt-4 text-gray-600">
              Streamline daily operations with our intuitive staff management portal.
            </p>

            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
              {[
                { icon: <Users className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "Profiles", desc: "Complete staff profiles" },
                { icon: <Calendar className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "Scheduling", desc: "Visual shift calendar" },
                { icon: <BarChart2 className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "Analytics", desc: "Performance metrics" },
                { icon: <Key className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "Roles", desc: "Permission levels" }
              ].map((feature, index) => (
                <div key={index} className="p-4 transition-all duration-200 bg-white border border-gray-200 rounded-lg hover:shadow-sm">
                  <div className="mb-2" style={{ color: 'rgb(92, 225, 230)' }}>{feature.icon}</div>
                  <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <Link
                href="#demo"
                className="flex items-center px-5 py-2 text-sm font-medium text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Request Demo
              </Link>
              <Link
                href="#features"
                className="px-5 py-2 text-sm font-medium text-gray-700 transition-all duration-200 border border-gray-300 rounded-lg hover:border-blue-400"
              >
                All Features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffManagement;