'use client';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import ContactCard from '@/components/ContactCard';
import FaqSection from '@/components/FaqSection';
import Swal from 'sweetalert2';

const RegisterCenter = () => {
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      Swal.fire({
        icon: 'warning',
        title: 'CAPTCHA Required',
        text: 'Please complete the CAPTCHA to continue.',
      });
      return;
    }

    // Collect form data
    const form = e.target;
    const formData = {
      name: form.name.value,
      isActive: 0, // or 1 if you want to set active by default
      email: form.email.value,
      password: form.password.value,
      confirmpassword: form.confirmPassword.value,
      nameOfDirector: form.nameOfDirector.value,
      centerManager: form.centerManager.value,
      address: form.address.value,
      phoneNo: form.phoneNo.value,
      capacity: form.capacity.value,
      city: form.city.value,
      district: form.district.value,
      shortaddress: form.shortAddress.value,
      captchaToken,
    };

    try {
      const res = await fetch(
        // "http://localhost:5000/register-center",
        "https://back.hadnat.site/register-center",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      const data = await res.json();

      if (!data.success) {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: data.message || "Registration failed.",
        });
        return;
      }

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Center registered successfully!',
      });
      form.reset();
      setCaptchaToken(null);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Server error. Please try again later.',
      });
    }
  };

  return (
    <>
      <header className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5fe4e9] mb-4">
          Register Your Childcare Center
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Set up your center quickly and efficiently — all in one seamless form.
        </p>
      </header>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-10 grid gap-6 bg-white bg-opacity-30 backdrop-blur-md border border-blue-200/50 rounded-3xl p-8 flex items-start gap-4 relative overflow-hidden shadow-[0_10px_60px_rgba(59,130,246,0.4)] transition-all duration-300 hover:shadow-[0_20px_100px_rgba(59,130,246,0.6)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Center Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Kids Care Academy"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. admin@center.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="nameOfDirector" className="block text-gray-700 font-medium mb-2">Name of Director</label>
                <input
                  id="nameOfDirector"
                  type="text"
                  placeholder="e.g. Ayesha Khan"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="centerManager" className="block text-gray-700 font-medium mb-2">Center Manager</label>
                <input
                  id="centerManager"
                  type="text"
                  placeholder="e.g. Umar Farooq"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Full Address</label>
                <input
                  id="address"
                  type="text"
                  placeholder="e.g. House 12, Main Street, Gulberg"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="phoneNo" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  id="phoneNo"
                  type="tel"
                  placeholder="e.g. 0301-1234567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="capacity" className="block text-gray-700 font-medium mb-2">Capacity</label>
                <input
                  id="capacity"
                  type="number"
                  placeholder="e.g. 120"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                <input
                  id="city"
                  type="text"
                  placeholder="e.g. Lahore"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="district" className="block text-gray-700 font-medium mb-2">District</label>
                <input
                  id="district"
                  type="text"
                  placeholder="e.g. Lahore Cantt"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="shortAddress" className="block text-gray-700 font-medium mb-2">Short Address</label>
                <input
                  id="shortAddress"
                  type="text"
                  placeholder="e.g. Gulberg III"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* 🛡️ CAPTCHA Component */}
            <div className="w-full mt-4 flex justify-center">
              <ReCAPTCHA
                // sitekey="6LfdWpUrAAAAAMDz5dinc3py3eJGLF8NvlGn9xqi",
                sitekey="6LcQ9ZYrAAAAAGL9t6vFelXxAcs-MsPooF68FX6V"
                onChange={handleCaptchaChange}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-[#5fe4e4] hover:bg-[#1f8282] text-white text-lg py-3 rounded-xl transition duration-300"
            >
              Submit for Activation
            </button>
          </form>

        </div>
      </section>

      <section className="bg-white py-2 px-6">
        <ContactCard />
        <div className="mt-10">
          <FaqSection />
        </div>
      </section>
    </>
  );
};

export default RegisterCenter;
