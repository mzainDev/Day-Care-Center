'use client';

import ExportedImage from 'next-image-export-optimizer';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TrustedPartner = () => {
  const sliderRef = useRef(null);

  const partners = [
    { id: 1, logo: '/seclogo/2.png', alt: 'Partner 1' },
    { id: 2, logo: '/seclogo/6.png', alt: 'Partner 2' },
    { id: 3, logo: '/seclogo/7.png', alt: 'Partner 3' },
    { id: 4, logo: '/seclogo/8.png', alt: 'Partner 4' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="partner-area py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted By Leading Organizations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with industry leaders to deliver exceptional child care solutions
          </p>
        </motion.div>

        <div className="carousel-wrapper relative">
          <Slider ref={sliderRef} {...settings}>
            {partners.map((partner) => (
              <div key={partner.id} className="px-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="partner-item bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-32"
                >
                  <ExportedImage
                    src={partner.logo}
                    alt={partner.alt}
                    width={170}
                    height={70}
                    className="object-contain h-full w-full"
                  />
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;