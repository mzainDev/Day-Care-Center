"use client";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Phone,
  ArrowRight,
  Menu,
  X,
  ArrowUp,
  Languages,
} from "lucide-react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Detect current locale
  const currentLocale = pathname.startsWith("/ar") ? "ar" : "en";

  // Helper function to build links
  const buildLink = (path) => `/${currentLocale}${path}`;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const switchLocale = () => {
    if (currentLocale === "en") {
      router.push(pathname.replace("/en", "/ar"));
    } else {
      router.push(pathname.replace("/ar", "/en"));
    }
  };

  return (
    <>
      <nav className="bg-white px-6 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Side: Links */}
          <div className="hidden md:flex items-center space-x-8 text-[#0f2c4f] font-medium">
            <Link href={buildLink("/features")} className="relative py-2 group">
              <span className="relative z-10 transition-all duration-300 group-hover:text-[#1f8282]">
                Features
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5fe4e4] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"></span>
            </Link>
            <Link href={buildLink("/targetclients")} className="relative py-2 group">
              <span className="relative z-10 transition-all duration-300 group-hover:text-[#1f8282]">
                Target Clients
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5fe4e4] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"></span>
            </Link>
            <Link href={buildLink("/contact")} className="relative py-2 group">
              <span className="relative z-10 transition-all duration-300 group-hover:text-[#1f8282]">
                Contact Us
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5fe4e4] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"></span>
            </Link>
            <Link href={buildLink("/registercenter")} className="relative py-2 group">
              <span className="relative z-10 transition-all duration-300 group-hover:text-[#1f8282]">
                Register Your Center
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5fe4e4] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"></span>
            </Link>
          </div>

          {/* Right Side: Logo + Actions */}
          <div className="flex items-center space-x-6">
            {/* Language switch */}
            

            {/* Logo */}
            <Link
              href={`/${currentLocale}`}
              className="transition-all duration-300 hover:scale-[1.02] hover:drop-shadow-[0_2px_5px_rgba(95,228,228,0.3)]"
            >
              <ExportedImage
                src="/logos/1.png"
                alt="Logo"
                width={160}
                height={100}
                priority
                quality={100}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center p-1 rounded-full hover:bg-gray-100/50 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#0f2c4f] group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="h-6 w-6 text-[#0f2c4f] group-hover:rotate-90 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-6 z-40 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href={buildLink("/features")}
                className="py-3 px-4 font-medium text-[#1f8282] hover:pl-6 transition-all duration-300 hover:bg-[#f0fdfd] rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href={buildLink("/targetclients")}
                className="py-3 px-4 font-medium text-[#1f8282] hover:pl-6 transition-all duration-300 hover:bg-[#f0fdfd] rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Target Clients
              </Link>
              <Link
                href={buildLink("/contact")}
                className="py-3 px-4 font-medium text-[#1f8282] hover:pl-6 transition-all duration-300 hover:bg-[#f0fdfd] rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href={buildLink("/registercenter")}
                className="py-3 px-4 font-medium text-[#1f8282] hover:pl-6 transition-all duration-300 hover:bg-[#f0fdfd] rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Register Your Center
              </Link>
              <button
                onClick={switchLocale}
                className="py-3 px-4 font-medium text-[#1f8282] hover:pl-6 transition-all duration-300 hover:bg-[#f0fdfd] rounded-lg flex items-center gap-2"
              >
                <Languages className="w-4 h-4" />
                {currentLocale === "en" ? "العربية" : "English"}
              </button>
              <a
                href="tel:5168427339"
                className="py-3 px-4 font-medium text-[#1f8282] hover:pl-6 transition-all duration-300 hover:bg-[#f0fdfd] rounded-lg flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (516) 842-7339
              </a>
              <button className="bg-[#5fe4e4] hover:bg-[#1f8282] text-white font-medium px-4 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform hover:scale-105">
                Book a Demo <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>

     {/* Right side buttons (Call + WhatsApp) */}
<div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
  {/* Call Button */}
  <a
    href="tel:5168427339"
    className="w-12 h-12 bg-sky-400 hover:bg-sky-500 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-[float_4s_ease-in-out_infinite]"
    aria-label="Call"
  >
    {/* phone icon */}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  </a>

  {/* WhatsApp Button */}
  {/* WhatsApp Button */}
<a
  href="https://wa.me/15168427339"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-[float_4s_ease-in-out_infinite]"
  aria-label="WhatsApp"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335 .157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>

</div>

{/* Left side button (Scroll to Top) */}
{isVisible && (
  <div className="fixed left-4 bottom-4 z-40">
    <button
      onClick={scrollToTop}
      className="w-12 h-12 bg-[#5fe4e4] hover:bg-[#1f8282] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  </div>
)}


      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
        }
      `}</style>
    </>
  );
}