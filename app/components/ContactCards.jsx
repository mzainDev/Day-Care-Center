'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8 bg-gray-100 mb-10 mt-10">
      {/* Phone Card */}
      <div className="bg-white shadow-md rounded-xl p-6 text-center w-full md:w-1/3 flex flex-col items-center justify-center min-h-[170px] hover:shadow-xl hover:scale-105 transition duration-300">
        <div className="text-yellow-700 mb-4">
          <Phone size={36} />
        </div>
        <h3 className="text-xl font-bold text-gray-900">050 440 4720</h3>
        <p className="text-sm text-yellow-700 mt-2">
          Working hours from 09:00 AM to 05:00 PM
        </p>
      </div>

      {/* Email Card */}
      <div className="bg-white shadow-md rounded-xl p-6 text-center w-full md:w-1/3 flex flex-col items-center justify-center min-h-[170px] hover:shadow-xl hover:scale-105 transition duration-300">
        <div className="text-yellow-700 mb-4">
          <Mail size={36} />
        </div>
        <h3 className="text-xl font-bold text-gray-900">EMAIL ADDRESS</h3>
        <p className="text-sm text-yellow-700 mt-2">info@selsla.sa</p>
      </div>

      {/* Address Card */}
      <div className="bg-white shadow-md rounded-xl p-6 text-center w-full md:w-1/3 flex flex-col items-center justify-center min-h-[170px] hover:shadow-xl hover:scale-105 transition duration-300">
        <div className="text-yellow-700 mb-4">
          <MapPin size={36} />
        </div>
        <h3 className="text-sm font-bold text-gray-900 leading-snug">
          WESTERN RING ROAD,<br />
          WESTERN URAIJA, RIYADH 14921
        </h3>


        <p className="text-sm text-yellow-700 mt-2">We are happy with your visit</p>
      </div>
    </div>
  );
}
