import FeaturePreview from "./components/FeaturePreview";
import FeatureSec from "./components/FeatureSec";
import Hero from "./components/Hero";
import Image from "next/image";
import TestimonialSec from "./components/TestimonialSec";
import TrustedPartner from "./components/TrustedPartner";
// import TestimonialSec from "./components/TestimonialSec";


export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      <FeatureSec />
      {/* Feature Preview Section */}
      <FeaturePreview/>
      {/* Testimonial Section */}
      <TestimonialSec />
      {/* TrustedPartner */}
      <TrustedPartner />
    </main>
  );
}
