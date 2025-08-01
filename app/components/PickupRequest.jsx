'use client';
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import { Calendar, Clock, RefreshCw, CheckCircle, Compass, List } from 'lucide-react';

const PickupRequest = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          {/* Image - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-3xl bg-white bg-opacity-30 backdrop-blur-md border border-teal-200/50 shadow-[0_25px_80px_rgba(92,225,230,0.25)] transition-transform duration-300 hover:scale-105">
              <ExportedImage
                src="/features/pickuprequest.png"
                alt="Pickup Requests Dashboard"
                width={900}
                height={675}
                className="w-full h-auto object-cover rounded-3xl"
                priority
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-100 rounded-xl blur-md -z-10"></div>
          </div>

          {/* Content - Left Side */}
          <div className="w-full lg:w-1/2 lg:pr-10">
            <div className="inline-flex px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-teal-700 uppercase bg-teal-100 rounded-full shadow-sm">
              Child Safety
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pickup Requests Management
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Our Pickup Requests page provides a centralized space where admins can view and manage all child pickup requests.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <List className="w-6 h-6 mt-1 mr-4" style={{ color: 'rgb(92, 225, 230)' }} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">View All Pickup Requests</h3>
                  <p className="text-gray-600">See every pickup request submitted by guardians.</p>
                </div>
              </div>

              <div className="flex items-start">
                <Calendar className="w-6 h-6 mt-1 mr-4" style={{ color: 'rgb(92, 225, 230)' }} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Track Date & Time</h3>
                  <p className="text-gray-600">Check scheduled pickup times.</p>
                </div>
              </div>

              <div className="flex items-start">
                <RefreshCw className="w-6 h-6 mt-1 mr-4" style={{ color: 'rgb(92, 225, 230)' }} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Real-time Updates</h3>
                  <p className="text-gray-600">Get notified of new requests.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mt-1 mr-4" style={{ color: 'rgb(92, 225, 230)' }} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Streamlined Process</h3>
                  <p className="text-gray-600">Organized child dismissal.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="/pickup-requests"
                className="px-6 py-3 bg-[#5fe4e4] hover:bg-[#1f8282] text-white font-medium rounded-lg transition-colors flex items-center"
              >
                <Compass className="w-5 h-5 mr-2" />
                Explore Features
              </Link>
              <Link
                href="/demo"
                className="px-6 py-3 bg-[#5fe4e4] hover:bg-[#1f8282] text-white font-medium rounded-lg transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupRequest;