'use client';
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import { MessageSquare, Users, Lock, Mail, MessageCircle } from 'lucide-react';

const ChatFeature = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image - Left Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-3xl bg-white bg-opacity-30 backdrop-blur-md border border-teal-200/50 shadow-[0_25px_80px_rgba(92,225,230,0.25)] transition-transform duration-300 hover:scale-105">
              <ExportedImage
                src="/features/ChatFeature.jpeg"
                alt="Chat Feature Interface"
                width={900}
                height={675}
                className="w-full h-auto object-cover rounded-3xl"
                priority
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-100 rounded-xl blur-md -z-10"></div>
          </div>

          {/* Content - Right Side */}
          <div className="w-full lg:w-1/2 lg:pl-10">
            <div className="inline-flex px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-teal-700 uppercase bg-teal-100 rounded-full shadow-sm">
              Communication
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Seamless Chat Feature
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Our built-in Chat page allows guardians to connect seamlessly with the center's staff including teachers, nannies, and admins all in one place.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <MessageSquare className="w-6 h-6 mt-1 mr-4" style={{ color: 'rgb(92, 225, 230)' }} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">One-on-One Messaging</h3>
                  <p className="text-gray-600">Directly message staff regarding your child's care.</p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="w-6 h-6 mt-1 mr-4" style={{ color: 'rgb(92, 225, 230)' }} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Talk to Teachers & Nannies</h3>
                  <p className="text-gray-600">Stay informed about your child's daily activities.</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 mt-1 mr-4" style={{ color: 'rgb(92, 225, 230)' }} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Admin Communication</h3>
                  <p className="text-gray-600">Reach out to admins for support.</p>
                </div>
              </div>

              <div className="flex items-start">
                <Lock className="w-6 h-6 mt-1 mr-4" style={{ color: 'rgb(92, 225, 230)' }} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Private & Secure</h3>
                  <p className="text-gray-600">All messages are stored securely.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="/chat-feature"
                className="px-6 py-3 bg-[#5fe4e4] hover:bg-[#1f8282] text-white font-medium rounded-lg transition-colors flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Try Chat Feature
              </Link>
              <Link
                href="/demo"
                className="px-6 py-3 bg-[#5fe4e4] hover:bg-[#1f8282] text-white font-medium rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatFeature;