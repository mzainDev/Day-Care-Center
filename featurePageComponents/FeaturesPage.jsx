'use client'
import React, { useState, useEffect } from 'react';
import ExportedImage from "next-image-export-optimizer";
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const FeaturesPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [direction, setDirection] = useState(0);

  const dashboardSlides = [
    {
      src: "/admin-dashboard-section/admin-dashboard-1.JPG",
      alt: "Dashboard Overview",
    },
    {
      src: "/admin-dashboard-section/admin-dashboard-2.JPG",
      alt: "Staff Intelligence",
    },
    {
      src: "/admin-dashboard-section/admin-dashboard-3.JPG",
      alt: "Lead Ecosystem",
    },
    {
      src: "/admin-dashboard-section/admin-dashboard-4.JPG",
      alt: "Executive Insights",
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActiveSlide(prev => (prev === dashboardSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextSlide = () => {
    setDirection(1);
    setActiveSlide(prev => (prev === dashboardSlides.length - 1 ? 0 : prev + 1));
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveSlide(prev => (prev === 0 ? dashboardSlides.length - 1 : prev - 1));
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  const slideVariants = {
    enter: { x: direction > 0 ? 1000 : -1000, opacity: 0 },
    center: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
    exit: { x: direction < 0 ? 1000 : -1000, opacity: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 overflow-hidden">
      <section className="pt-16 pb-12 px-4 max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-gradient-to-r from-blue-100 to-blue-50 rounded-full px-6 py-2 mb-6 border border-blue-200">
            <span className="text-blue-600 font-medium">Core Feature</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Admin Dashboard
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            It is the central control panel, all the data related to room assignments, staff management, child reports and subscriptions is available here.
          </p>
        </motion.div>

        {/* Slider */}
        <div {...handlers} className="relative group" onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white h-[300px] sm:h-[400px] md:h-[500px]">
            <AnimatePresence custom={direction}>
              <motion.div
                key={activeSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <ExportedImage
                    src={dashboardSlides[activeSlide].src}
                    alt={dashboardSlides[activeSlide].alt}
                    fill
                    className="object-contain"
                    priority
                    quality={100}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button onClick={prevSlide} className="z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[rgb(92,225,230)] hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={nextSlide} className="z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[rgb(92,225,230)] hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {dashboardSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeSlide ? 1 : -1);
                    setActiveSlide(index);
                  }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full duration-300 ${activeSlide === index ? 'bg-[rgb(92,225,230)] scale-110' : 'bg-slate-300'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[rgb(92,225,230)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: 'Real-time Analytics',
              desc: 'Live data visualization of critical metrics',
              bg: "bg-gradient-to-br from-blue-400 via-cyan-200 to-blue-200",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[rgb(92,225,230)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: 'Staff Management',
              desc: 'Complete control over staff assignments',
              bg: "bg-gradient-to-br from-green-200 via-lime-300 to-green-200",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[rgb(92,225,230)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
              title: 'Comprehensive Reports',
              desc: 'Generate detailed insights and analytics',
              bg: "bg-gradient-to-br from-indigo-400 via-violet-300 to-indigo-200",
            }
          ].map((item, i) => (
            <div key={i} className={`${item.bg} p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all`}>
              <div className="text-[rgb(92,225,230)] mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default FeaturesPage;