'use client';
import { useState } from 'react';
import { ChevronDown, Phone, ArrowRight, Menu, X } from 'lucide-react';
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
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
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-[#0f2c4f]" />
          ) : (
            <Menu className="h-6 w-6 text-[#0f2c4f]" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full pl-10">
          <div className="flex space-x-8 text-[#0f2c4f] font-medium">
            <Link href="/features" className=" hover:text-[#1f8282] py-2">
              Features
            </Link>
            <Link href="/targetclients" className=" hover:text-[#1f8282]  py-2">
              Target Clients
            </Link>
            <Link href="/contact" className=" hover:text-[#1f8282] py-2">
              Contact Us
            </Link>
            <Link href="/registercenter" className="hover:text-[#1f8282] py-2">
              Register Your Center
            </Link>
          </div>

          {/* Right Side Contact & Button */}
          <div className="flex items-center space-x-6">
            <a
              href="tel:5168427339"
              className="flex items-center text-[#5fe4e4] hover:underline"
            >
              <Phone className="w-4 h-4 mr-1" />
              (516) 842-7339
            </a>
            <button className="bg-[#5fe4e4] hover:text-[#1f8282] text-white font-medium px-4 py-2 rounded-full flex items-center gap-2 transition shadow-sm hover:shadow-md">
              Book demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-6 z-40 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/features"
                className="py-2 font-medium text-[#1f8282]"
              >
                Features
              </Link>
              <Link
                href="/targetclients"
                className="py-2 font-medium text-[#1f8282]"
              >
                Target Clients
              </Link>
              <Link
                href="/contact"
                className="py-2 font-medium text-[#1f8282]"
              >
                Contact Us
              </Link>
              <Link
                href="/registercenter"
                className="py-2 font-medium text-[#1f8282]"
              >
                Register Your Center
              </Link>
              <a
                href="tel:5168427339"
                className="flex items-center py-2 text-[#1f8282]"
              >
                <Phone className="w-4 h-4 mr-2" />
                (516) 842-7339
              </a>
              <button className="bg-[#5fe4e4] hover:bg-[#1f8282] text-white font-medium px-4 py-3 rounded-full flex items-center justify-center gap-2 transition shadow-md">
                Book demo <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
