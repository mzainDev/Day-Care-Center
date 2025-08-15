'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import ContactCard from '@/components/ContactCard';
import FaqSection from '@/components/FaqSection';
import Swal from 'sweetalert2';
import {
  Building2,
  Mail,
  Lock,
  User,
  Users,
  MapPin,
  Phone,
  Home,
  LayoutGrid,
  Building,
  MapPinned,
  Hash
} from 'lucide-react';

// import { generateMetadata as generateSEO } from "../components/Meta"; 


// export async function generateMetadata() {
//   const metadata = await generateSEO();
//   return metadata.registercenter;
// }

const validationSchema = Yup.object({
  name: Yup.string().required('Center Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  nameOfDirector: Yup.string().required('Director Name is required'),
  centerManager: Yup.string().required('Center Manager is required'),
  address: Yup.string().required('Address is required'),
  phoneNo: Yup.string().required('Phone Number is required'),
  capacity: Yup.number().required('Capacity is required').positive('Must be a positive number'),
  city: Yup.string().required('City is required'),
  district: Yup.string().required('District is required'),
  shortaddress: Yup.string().required('Short Address is required'),
  // centerPlanId: Yup.string().required('Plan selection is required'),
});

const RegisterCenter = () => {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [plans, setPlans] = useState([]);
  const [selectedPlanId, setSelectedPlanId] = useState('');



  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch("https://rawdhat.com/api/center/getCenterPlans");
        const data = await response.json();
        if (Array.isArray(data)) {
          setPlans(data);
        }
      } catch (error) {
        console.error("Failed to fetch plans:", error);
      }
    };

    fetchPlans();
  }, []);



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
      isActive: 0,
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
      // centerPlanId: selectedPlanId, 
    };

    console.log("form data", formData);
    try {
      const res = await fetch(
        // "http://localhost:5000/signup-center",
        // "http://localhost:5000/register-center",
        "https://back.hadnat.site/signup-center",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      const data = await res.json();
      console.log("Response from server:", data);
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
      setSelectedPlanId('');
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
      <header className="py-8 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5fe4e9] mb-2">
          Register Your Childcare Center
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
          Set up your center quickly and efficiently — all in one seamless form.
        </p>
      </header>

      <section className="py-4 px-6">
        <div className="max-w-4xl mx-auto">
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmpassword: '',
              nameOfDirector: '',
              centerManager: '',
              address: '',
              phoneNo: '',
              capacity: '',
              city: '',
              district: '',
              shortaddress: '',
              // centerPlanId: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              if (!captchaToken) {
                Swal.fire({
                  icon: 'warning',
                  title: 'CAPTCHA Required',
                  text: 'Please complete the CAPTCHA to continue.',
                });
                return;
              }

              const formData = {
                ...values,
                isActive: 0,
                captchaToken,
                // centerPlanId: selectedPlanId,
              };

              try {
                const res = await fetch(
                  "https://back.hadnat.site/signup-center",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                  }
                );
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
                resetForm();
                setCaptchaToken(null);
                setSelectedPlanId('');
              } catch (err) {
                Swal.fire({
                  icon: 'error',
                  title: 'Server Error',
                  text: 'Server error. Please try again later.',
                });
              }
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form className="rounded-2xl p-8 grid gap-6 bg-white bg-opacity-30 backdrop-blur-md border border-blue-200/50 shadow-[0_10px_60px_rgba(59,130,246,0.4)] transition-all duration-300 hover:shadow-[0_20px_100px_rgba(59,130,246,0.6)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Center Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      <Building2 className="inline w-4 h-4 mr-2" />
                      Center Name <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="name"
                      type="text"
                      placeholder="e.g. Kids Care Academy"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.name && touched.name && (
                      <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="e.g. admin@center.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                      <Lock className="inline w-4 h-4 mr-2" />
                      Password <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.password && touched.password && (
                      <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label htmlFor="confirmpassword" className="block text-gray-700 font-medium mb-2">
                      <Lock className="inline w-4 h-4 mr-2" />
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="confirmpassword"
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.confirmpassword && touched.confirmpassword && (
                      <div className="text-red-500 text-sm mt-1">{errors.confirmpassword}</div>
                    )}
                  </div>

                  {/* Director Name Field */}
                  <div>
                    <label htmlFor="nameOfDirector" className="block text-gray-700 font-medium mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Name of Center Owner <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="nameOfDirector"
                      type="text"
                      placeholder="e.g. Ayesha Khan"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.nameOfDirector && touched.nameOfDirector && (
                      <div className="text-red-500 text-sm mt-1">{errors.nameOfDirector}</div>
                    )}
                  </div>

                  {/* Center Manager Field */}
                  <div>
                    <label htmlFor="centerManager" className="block text-gray-700 font-medium mb-2">
                      <Users className="inline w-4 h-4 mr-2" />
                      Name of Center Manager <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="centerManager"
                      type="text"
                      placeholder="e.g. Umar Farooq"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.centerManager && touched.centerManager && (
                      <div className="text-red-500 text-sm mt-1">{errors.centerManager}</div>
                    )}
                  </div>

                  {/* Full Address Field */}
                  <div>
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                      <MapPin className="inline w-4 h-4 mr-2" />
                      Full Address <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="address"
                      type="text"
                      placeholder="e.g. House 12, Main Street, Gulberg"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.address && touched.address && (
                      <div className="text-red-500 text-sm mt-1">{errors.address}</div>
                    )}
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label htmlFor="phoneNo" className="block text-gray-700 font-medium mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="phoneNo"
                      type="tel"
                      placeholder="e.g. 0301-1234567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.phoneNo && touched.phoneNo && (
                      <div className="text-red-500 text-sm mt-1">{errors.phoneNo}</div>
                    )}
                  </div>

                  {/* Capacity Field */}
                  <div>
                    <label htmlFor="capacity" className="block text-gray-700 font-medium mb-2">
                      <Hash className="inline w-4 h-4 mr-2" />
                      Capacity <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="capacity"
                      type="number"
                      placeholder="e.g. 120"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.capacity && touched.capacity && (
                      <div className="text-red-500 text-sm mt-1">{errors.capacity}</div>
                    )}
                  </div>

                  {/* City Field */}
                  <div>
                    <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                      <Building className="inline w-4 h-4 mr-2" />
                      City <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="city"
                      type="text"
                      placeholder="e.g. Lahore"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.city && touched.city && (
                      <div className="text-red-500 text-sm mt-1">{errors.city}</div>
                    )}
                  </div>

                  {/* District Field */}
                  <div>
                    <label htmlFor="district" className="block text-gray-700 font-medium mb-2">
                      <MapPinned className="inline w-4 h-4 mr-2" />
                      District <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="district"
                      type="text"
                      placeholder="e.g. Lahore Cantt"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.district && touched.district && (
                      <div className="text-red-500 text-sm mt-1">{errors.district}</div>
                    )}
                  </div>

                  {/* Short Address Field */}
                  <div>
                    <label htmlFor="shortaddress" className="block text-gray-700 font-medium mb-2">
                      <Home className="inline w-4 h-4 mr-2" />
                      Short Address <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="shortaddress"
                      type="text"
                      placeholder="e.g. Gulberg III"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.shortaddress && touched.shortaddress && (
                      <div className="text-red-500 text-sm mt-1">{errors.shortaddress}</div>
                    )}
                  </div>

                  {/* Center Plan Field */}
                  {/* <div>
                    <label htmlFor="centerPlanId" className="block text-gray-700 font-medium mb-2">
                      <LayoutGrid className="inline w-4 h-4 mr-2" />
                      Select Plan <span className="text-red-500">*</span>
                    </label>
                    <Field
                      as="select"
                      name="centerPlanId"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="">Select a plan</option>
                      {plans.map((plan) => (
                        <option key={plan.id} value={plan.id}>
                          {plan.name} - {plan.days} Days - {plan.price} SAR
                        </option>
                      ))}
                    </Field>
                    {errors.centerPlanId && touched.centerPlanId && (
                      <div className="text-red-500 text-sm mt-1">{errors.centerPlanId}</div>
                    )}
                  </div> */}
                </div>

                <div className="w-full mt-4 flex justify-center">
                  <ReCAPTCHA
                    sitekey="6Ldg6ZkrAAAAAL8cOaMdjji74P4buN9vlMxCtXiw"
                    onChange={(value) => setCaptchaToken(value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-[#5fe4e4] hover:bg-[#1f8282] text-white text-lg py-3 rounded-xl transition duration-300"
                >
                  Register
                </button>
              </Form>
            )}
          </Formik>
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
