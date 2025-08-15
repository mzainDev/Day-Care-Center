'use client';

import { useRef } from 'react';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TESTIMONIALS = [
  {
    id: 't1',
    quote:
      "روضات غيّرت تمامًا طريقة عمل مركزنا. تتبع الحضور الآلي وحده يوفر لنا أكثر من 15 ساعة أسبوعيًا ويقلل الأخطاء بنسبة 90٪.",
    name: 'سارة جونسون',
    role: 'مديرة',
    organization: 'أكاديمية المستكشفين الصغار',
    image: '/seclogo/pp1.jpg',
  },
  {
    id: 't2',
    quote:
      'عملية التسجيل لدينا انخفضت من 3 أيام إلى 3 ساعات فقط. أولياء الأمور يحبون النماذج الرقمية وطاقمنا أصبح يركز على الأطفال بدلًا من الأعمال الورقية.',
    name: 'مايكل تشين',
    role: 'مالك',
    organization: 'البدايات المشرقة',
    image: '/seclogo/pp2.jpg',
  },
  {
    id: 't3',
    quote:
      "مستوى التحليلات والتقارير الذي تقدمه روضات لا مثيل له. لم نشعر من قبل بهذه الثقة في قراراتنا اليومية.",
    name: 'عائشة الفلان',
    role: 'مديرة',
    organization: 'روضة القلوب السعيدة',
    image: '/seclogo/pp3.jpg',
  },
  {
    id: 't4',
    quote:
      "كنت مترددة في البداية، لكن دعم فريق روضات في مرحلة الانضمام جعل الانتقال سلسًا للغاية. معلماتنا يشعرن بالتمكين والدعم يوميًا.",
    name: 'ديفيد مينديز',
    role: 'مدير',
    organization: 'مركز أطفال أشعة الشمس',
    image: '/seclogo/pp4.jpg',
  },
];

export default function TestimonialSec() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: 'linear',
    appendDots: dots => <div className="testimonial-pagination mt-10 flex items-center justify-center space-x-2">{dots}</div>,
    responsive: [
      { breakpoint: 2560, settings: { slidesToShow: 3, slidesToScroll: 1, centerMode: false } },
      { breakpoint: 1440, settings: { slidesToShow: 3, slidesToScroll: 1, centerMode: false } },
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1, centerMode: false } },
      { breakpoint: 1024, settings: { slidesToShow: 2.2, slidesToScroll: 1, centerMode: true } },
      { breakpoint: 768, settings: { slidesToShow: 1.4, slidesToScroll: 1, centerMode: true } },
      { breakpoint: 640, settings: { slidesToShow: 1.1, slidesToScroll: 1, centerMode: true } }
    ]
  };

  return (
    <section className="py-24 bg-gradient-to-b from-sky-50 via-white to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700 tracking-wider">
              موثوق من قبل المربين
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            محبوبة من مراكز رعاية الأطفال حول العالم
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            انضم إلى آلاف المراكز التي طورت عملياتها باستخدام روضات
          </p>
        </motion.div>

        {/* Slider Carousel */}
        <div className="relative px-4">
          <Slider {...settings} ref={sliderRef} className="!pb-12">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="h-[450px] bg-white p-8 rounded-2xl shadow-md border border-gray-100 transition-colors duration-200 flex flex-col justify-between mx-2"
                >
                  <svg className="w-10 h-10 text-blue-300 mb-6" fill="currentColor" viewBox="0 0 24 24">
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
                        alt={`صورة ${testimonial.name}`}
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
                            ، <span className="text-green-600">{testimonial.organization}</span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>

          {/* Navigation */}
          <div className="absolute inset-y-0 left-0 z-10 flex items-center -ml-4">
            <button 
              onClick={() => sliderRef.current.slickPrev()}
              className="testimonial-prev w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 z-10 flex items-center -mr-4">
            <button 
              onClick={() => sliderRef.current.slickNext()}
              className="testimonial-next w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-24 text-center"
        >
          <Link
            href="/demo"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all duration-200 text-lg"
          >
            احجز عرضًا توضيحيًا
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
