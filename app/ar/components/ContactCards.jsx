'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8 mb-10 mt-10 mx-8">
      {/* بطاقة الهاتف */}
      <div className="bg-gradient-to-br from-green-200 via-lime-300 to-green-200 shadow-md rounded-xl p-6 text-center w-full md:w-1/3 flex flex-col items-center justify-center min-h-[170px] hover:shadow-xl hover:scale-105 transition duration-300">
        <div className="bg-white rounded-full p-1 text-[#5fe4e4] mb-4">
          <Phone size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-700">٠٥٠ ٤٤٠ ٤٧٢٠</h3>
        <p className="text-sm text-gray-400 mt-2">
          أوقات العمل من 09:00 صباحًا إلى 05:00 مساءً
        </p>
      </div>

      {/* بطاقة البريد الإلكتروني */}
      <div className="bg-gradient-to-br from-blue-200 via-sky-300 to-blue-200 shadow-md rounded-xl p-6 text-center w-full md:w-1/3 flex flex-col items-center justify-center min-h-[170px] hover:shadow-xl hover:scale-105 transition duration-300">
        <div className="bg-white rounded-full p-1 text-[#5fe4e4] mb-4">
          <Mail size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-700">البريد الإلكتروني</h3>
        <p className="text-sm text-gray-400 mt-2">info@selsla.sa</p>
      </div>

      {/* بطاقة العنوان */}
      <div className="bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 shadow-md rounded-xl p-6 text-center w-full md:w-1/3 flex flex-col items-center justify-center min-h-[170px] hover:shadow-xl hover:scale-105 transition duration-300">
        <div className="bg-white rounded-full p-1 text-[#5fe4e4] mb-4">
          <MapPin size={24} />
        </div>
        <h3 className="text-sm font-bold text-gray-700 leading-snug">
          الطريق الدائري الغربي،<br />
          العريجاء الغربية، الرياض ١٤٩٢١
        </h3>
        <p className="text-sm text-gray-400 mt-2">سعداء بزيارتك</p>
      </div>
    </div>
  );
}
