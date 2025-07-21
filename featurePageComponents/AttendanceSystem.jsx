'use client'
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import { Clock, AlertTriangle, TrendingUp, FileText } from 'lucide-react';

const AttendanceSystem = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-14 lg:flex-row">
          {/* Image - Left */}
          <div className="relative lg:w-1/2">
            <div className="relative overflow-hidden rounded-3xl bg-white bg-opacity-30 backdrop-blur-md border border-green-200/50 shadow-[0_25px_80px_rgba(34,197,94,0.25)] transition-transform duration-300 hover:scale-105">
              <ExportedImage
                src="/features/AttendanceSystem.jpg"
                alt="Attendance System"
                width={720}
                height={500}
                className="object-cover w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-100 rounded-xl blur-md -z-10"></div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 lg:pl-10">
            <div className="inline-flex px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-green-700 uppercase bg-green-100 rounded-full shadow-sm">
              Tracking
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Attendance System
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Real-time tracking and instant updates for children and staff.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2">
              {[
                { icon: <Clock className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "Check-ins", desc: "Instant notifications" },
                { icon: <AlertTriangle className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "Alerts", desc: "Late arrivals tracking" },
                { icon: <TrendingUp className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "Trends", desc: "Attendance analytics" },
                { icon: <FileText className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "Reports", desc: "Visual summaries" }
              ].map((feature, index) => (
                <div key={index} className="p-5 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              <Link
                href="#attendance"
                className="flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-green-600 rounded-lg shadow hover:bg-green-700 transition"
              >
                Learn More
              </Link>
              <Link
                href="#demo"
                className="px-6 py-2.5 text-sm font-semibold text-green-600 border border-green-300 rounded-lg bg-white hover:border-green-500 transition"
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
