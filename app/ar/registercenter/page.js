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

const validationSchema = Yup.object({
  name: Yup.string().required('اسم المركز مطلوب'),
  email: Yup.string().email('بريد إلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
  password: Yup.string().min(6, 'يجب أن تتكون كلمة المرور من 6 أحرف على الأقل').required('كلمة المرور مطلوبة'),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'كلمات المرور غير متطابقة')
    .required('تأكيد كلمة المرور مطلوب'),
  nameOfDirector: Yup.string().required('اسم المالك مطلوب'),
  centerManager: Yup.string().required('مدير المركز مطلوب'),
  address: Yup.string().required('العنوان مطلوب'),
  phoneNo: Yup.string().required('رقم الهاتف مطلوب'),
  capacity: Yup.number().required('السعة مطلوبة').positive('يجب أن يكون رقمًا موجبًا'),
  city: Yup.string().required('المدينة مطلوبة'),
  district: Yup.string().required('الحي مطلوب'),
  shortaddress: Yup.string().required('العنوان المختصر مطلوب'),
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
        title: 'مطلوب CAPTCHA',
        text: 'يرجى إكمال CAPTCHA للمتابعة',
      });
      return;
    }

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
    };

    console.log("form data", formData);
    try {
      const res = await fetch(
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
          title: 'فشل التسجيل',
          text: data.message || "فشل التسجيل",
        });
        return;
      }

      Swal.fire({
        icon: 'success',
        title: 'نجاح!',
        text: 'تم تسجيل المركز بنجاح!',
      });
      form.reset();
      setCaptchaToken(null);
      setSelectedPlanId('');
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ في الخادم',
        text: 'خطأ في الخادم. يرجى المحاولة لاحقًا.',
      });
    }
  };

  return (
    <>
      <header className="py-8 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5fe4e9] mb-2">
          سجل مركز رعاية الأطفال الخاص بك
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
          قم بإعداد مركزك بسرعة وكفاءة - كل ذلك في نموذج واحد سلس.
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
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              if (!captchaToken) {
                Swal.fire({
                  icon: 'warning',
                  title: 'مطلوب CAPTCHA',
                  text: 'يرجى إكمال CAPTCHA للمتابعة',
                });
                return;
              }

              const formData = {
                ...values,
                isActive: 0,
                captchaToken,
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
                    title: 'فشل التسجيل',
                    text: data.message || "فشل التسجيل",
                  });
                  return;
                }

                Swal.fire({
                  icon: 'success',
                  title: 'نجاح!',
                  text: 'تم تسجيل المركز بنجاح!',
                });
                resetForm();
                setCaptchaToken(null);
                setSelectedPlanId('');
              } catch (err) {
                Swal.fire({
                  icon: 'error',
                  title: 'خطأ في الخادم',
                  text: 'خطأ في الخادم. يرجى المحاولة لاحقًا.',
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
                      اسم المركز <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="name"
                      type="text"
                      placeholder="مثال: أكاديمية رعاية الأطفال"
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
                      البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="مثال: admin@center.com"
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
                      كلمة المرور <span className="text-red-500">*</span>
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
                      تأكيد كلمة المرور <span className="text-red-500">*</span>
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
                      اسم مالك المركز <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="nameOfDirector"
                      type="text"
                      placeholder="مثال: آية خان"
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
                      اسم مدير المركز <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="centerManager"
                      type="text"
                      placeholder="مثال: عمر فاروق"
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
                      العنوان الكامل <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="address"
                      type="text"
                      placeholder="مثال: المنزل 12، الشارع الرئيسي، جولبرج"
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
                      رقم الهاتف <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="phoneNo"
                      type="tel"
                      placeholder="مثال: 0301-1234567"
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
                      السعة <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="capacity"
                      type="number"
                      placeholder="مثال: 120"
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
                      المدينة <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="city"
                      type="text"
                      placeholder="مثال: الرياض"
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
                      الحي <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="district"
                      type="text"
                      placeholder="مثال: حي المروج"
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
                      العنوان المختصر <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="shortaddress"
                      type="text"
                      placeholder="مثال: جولبرج الثالث"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.shortaddress && touched.shortaddress && (
                      <div className="text-red-500 text-sm mt-1">{errors.shortaddress}</div>
                    )}
                  </div>
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
                  تسجيل
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