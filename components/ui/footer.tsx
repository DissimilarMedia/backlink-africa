import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top Section: Logo, Contact Info, Navigation Links */}
        <div className="grid grid-cols-3 gap-8 lg:gap-20 mb-8 md:mb-12">
          
          {/* Logo */}
          <div>
            <Link href="/" aria-label="Homepage">
              <Image
                src="/images/Header.svg"
                alt="Company Logo"
                width={150}
                height={300}
                layout="fixed"
              />
            </Link>
            <h2 className='h5 text-gray-600'>The leading marketplace for SEO links and sponsored posts.</h2>
          </div>

          {/* Contact Information */}

          {/* Navigation Links */}
          <div className="text-gray-600">
            <h6 className="font-medium">Company</h6>
            <ul className="text-sm">
            <li><Link href="https://blog.backlinkafrica.com/">Blog</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="text-gray-700">
          <h6 className="font-medium">Location</h6>
            <p>Kadjiado East District, Kitengele,</p>
            <p>Noonkopir Road, Sogom House,</p>
            <p>P.O. Box 412, Nairobi, Kenya</p>
            <p>Phone: +254717527934</p>
            <p>Email: orders@backlinkafrica.com</p>
          </div>

        </div>

        {/* Bottom Section: Copyright Note */}
        <div className="text-center text-gray-600 text-sm">
          &copy; 2023 Backlinkafrica.com. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
