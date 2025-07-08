import React from 'react'
import Image from "next/image";
import { Star } from "lucide-react";

const TestimonialSec = () => { 
    const testimonials = [
        {
            text: "Playground has completely transformed how we run our daycare center. The billing features alone have saved us countless hours every month.",
            author: "Sarah Johnson",
            role: "Director, Little Explorers Daycare",
            image: "/logos/5.png",
        },
        {
            text: "Parents love the easy communication features, and our staff finds the attendance tracking incredibly simple to use.",
            author: "Michael Rodriguez",
            role: "Owner, Bright Futures Child Care",
            image: "/logos/3.png",
        },
      ];
  return (
    <div>
          <section className="py-20 px-6 bg-white">
              <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by childcare centers nationwide</h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                          See what our customers have to say about Playground
                      </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {testimonials.map((testimonial, index) => (
                          <div
                              key={index}
                              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
                          >
                              <div className="flex items-center gap-1 mb-4">
                                  {[...Array(5)].map((_, i) => (
                                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                  ))}
                              </div>
                              <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                              <div className="flex items-center gap-4">
                                  <Image
                                      src={testimonial.image}
                                      alt={testimonial.author}
                                      width={50}
                                      height={50}
                                      className="rounded-full"
                                  />
                                  <div>
                                      <h4 className="font-semibold">{testimonial.author}</h4>
                                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
    </div>
  )
}

export default TestimonialSec