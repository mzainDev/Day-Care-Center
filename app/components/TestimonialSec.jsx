'use client';

import { useRef } from 'react';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TESTIMONIALS = [
  {
    id: 't1',
    quote:
      "Rawdhat has completely transformed our center's operations. The automated attendance tracking alone saves us 15+ hours per week and reduced errors by 90%.",
    name: 'Sarah Johnson',
    role: 'Director',
    organization: 'Little Explorers Academy',
    image: '/seclogo/pp1.jpg',
  },
  {
    id: 't2',
    quote:
      'Our enrollment process went from 3 days to 3 hours. Parents love the digital forms and our staff can focus on children instead of paperwork.',
    name: 'Michael Chen',
    role: 'Owner',
    organization: 'Bright Beginnings',
    image: '/seclogo/pp2.jpg',
  },
  {
    id: 't3',
    quote:
      "The level of insight and reporting Rawdhat provides is unmatched. We've never been more confident in our day-to-day decisions.",
    name: 'Aisha Al-Fulan',
    role: 'Principal',
    organization: 'Happy Hearts Preschool',
    image: '/seclogo/pp3.jpg',
  },
  {
    id: 't4',
    quote:
      "I was hesitant at first, but Rawdhat's onboarding support made the transition effortless. Our teachers feel empowered and supported every day.",
    name: 'David Mendez',
    role: 'Manager',
    organization: 'Sunshine Kids Center',
    image: '/seclogo/pp4.jpg',
  },
];

export default function TestimonialSec() {
  const swiperRef = useRef(null);
  const progressCircle = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current?.style.setProperty('--progress', 1 - progress);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-sky-50 via-white to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700 tracking-wider">
              TRUSTED BY EDUCATORS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by Child Care Centers Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of centers who have transformed their operations with Rawdhat
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
            }}
            breakpoints={{
              640: { slidesPerView: 1.1, centeredSlides: true },
              768: { slidesPerView: 1.4, centeredSlides: true },
              1024: { slidesPerView: 2.2, centeredSlides: true },
              1280: { slidesPerView: 3, centeredSlides: false },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="!pb-12"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="h-[450px] bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <svg
                    className="w-10 h-10 text-blue-300 mb-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="mb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-white shadow-sm">
                      <ExportedImage
                        src={testimonial.image}
                        alt={`Portrait of ${testimonial.name}`}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        <span className="text-blue-600">{testimonial.role}</span>
                        {testimonial.organization && (
                          <>
                            , <span className="text-green-600">{testimonial.organization}</span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation and pagination */}
          <div className="absolute inset-y-0 left-0 z-10 flex items-center -ml-4">
            <button className="testimonial-prev w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 z-10 flex items-center -mr-4">
            <button className="testimonial-next w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="testimonial-pagination mt-10 flex items-center justify-center space-x-2" />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 text-center"
        >
          <Link
            href="/demo"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 text-lg"
          >
            Schedule a Demo
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
