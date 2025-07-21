'use client'
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import { Globe, RefreshCw, Smartphone, Users } from 'lucide-react';

const MultilingualSupport = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-14 lg:flex-row-reverse">
          {/* Image - Right */}
          <div className="relative lg:w-1/2">
            <div className="relative overflow-hidden rounded-3xl bg-white bg-opacity-30 backdrop-blur-md border border-indigo-200/50 shadow-[0_25px_80px_rgba(99,102,241,0.25)] transition-transform duration-300 hover:scale-105">
              <ExportedImage
                src="/features/multilingualSupport.jpg"
                alt="Multilingual Support"
                width={720}
                height={500}
                className="object-cover w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-100 rounded-xl blur-md -z-10"></div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 lg:pr-10">
            <div className="inline-flex px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-indigo-700 uppercase bg-indigo-100 rounded-full shadow-sm">
              Accessibility
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Multilingual Support
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Accessible interface for all users regardless of language.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2">
              {[
                { icon: <Globe className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "Bilingual", desc: "Arabic & English" },
                { icon: <RefreshCw className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "Toggle", desc: "Seamless switching" },
                { icon: <Smartphone className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "Consistent", desc: "All features translated" },
                { icon: <Users className="w-6 h-6" style={{ color: 'rgb(92, 225, 230)' }} />, title: "Users", desc: "Staff & guardians" }
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
                href="#multilingual"
                className="flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition"
              >
                Learn More
              </Link>
              <Link
                href="#demo"
                className="px-6 py-2.5 text-sm font-semibold text-indigo-600 border border-indigo-300 rounded-lg bg-white hover:border-indigo-500 transition"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultilingualSupport;
