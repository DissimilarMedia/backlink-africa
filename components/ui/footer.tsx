import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                <Image
                  src="/images/Header.svg" // Path relative to the public folder
                  alt="Description of the image"
                  width={150} // Desired width (in pixels)
                  height={300} // Desired height (in pixels)
                  layout="fixed" // Optional: layout behavior (fixed, responsive, fill, etc.)
                />
                </Link>
              </div>
              <div className="text-gray-700">Kadjiado East District <br/>
                Kitengele<br/>
                Noonkopir Road,Sogom House<br/>
                P.O. Box 412<br/>
                Nairobi, Kenya<br/>
                Phone: +254717527934<br/>
                Email: orders@backlinkafrica.com</div>
            </div>

            {/* 2nd block */}
            <div className="md:col-span-1 lg:col-span-1 md:text-right">
              <div className="text-sm">
                <h6 className="text-gray-600 font-medium mb-3">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/about" className="text-gray-700 hover:text-gray-600 transition duration-150 ease-in-out">About</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/terms" className="text-gray-700 hover:text-gray-600 transition duration-150 ease-in-out">Terms of use</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/privacy-policy" className="text-gray-700 hover:text-gray-600 transition duration-150 ease-in-out">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-center">

            
            {/* Copyrights note */}
            <div className="text-gray-600 text-sm mr-4">&copy; Backlinkafrica.com. All rights reserved.</div>

          </div>
        </div>
      </div>
    </footer>
  )
}
