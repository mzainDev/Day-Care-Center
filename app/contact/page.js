'use client';
import ContactCards from '../components/ContactCards';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className='mb-15'>

      <ContactCards />
      <div className="bg-gray-100 py-16 px-4 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto items-start">
          {/* Left Side - Contact Info + Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 w-full h-full"
          >

            {/* Form */}
            <form className="space-y-4 h-full">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="number"
                placeholder="Your Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Side - Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full flex"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.555406930771!2d46.64207177459375!3d24.62677595595747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03fef4d066e9%3A0xf60dcb3c5b8cbba0!2z2KfZhNij2KfZhiDYp9mE2KfZhNin2YbZhtmK2Kkg2KfZhNmF2YjYsdin2Kog2KfZhNi52YTYp9mE2KfYqNmK2Kkg2KfZhNmF2YXZitmG2YrYqQ!5e0!3m2!1sen!2ssa!4v1716832920864!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              className="rounded-lg shadow-lg border border-gray-200 min-h-[400px] h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
