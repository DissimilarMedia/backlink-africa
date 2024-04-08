import Link from 'next/link'
import MobileMenu from './mobile-menu'
import logo from "../../public/images/Header.svg"
import Image from 'next/image'
export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Backlink Africa">
            <Image
              src="/images/Header.svg" // Path relative to the public folder
              alt="Description of the image"
              width={200} // Desired width (in pixels)
              height={300} // Desired height (in pixels)
              layout="fixed" // Optional: layout behavior (fixed, responsive, fill, etc.)
            />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* <li>
                <Link
                  href="/signin"
                  className="font-medium text-blue-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li> */}
              <li>
                <Link href="https://app.backlinkafrica.com" className="btn-sm text-white bg-blue-600 hover:bg-blue-700 ml-3">
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
