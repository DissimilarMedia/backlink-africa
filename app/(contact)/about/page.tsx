import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'
import Dashboard from "@/public/images/1610-removebg.png"
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Illustration behind hero content */}
        <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          


        </div>

        {/* Hero content */}
        <div className="pt-32 pb-10 md:pt-40 md:pb-16 flex flex-col-reverse md:flex-row items-center justify-between relative">
          
            
          {/* Section header */}
          <div className="max-w-6xl mx-auto pb-12 md:pb-16 md:pr-8">
            <h1 className="h1 mb-4 text-gray-700" data-aos="fade-up"> About us
             </h1>
            <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">BackLink Africa is the leading content monetization company, focused on working with content creators to help them better monetize their content. We are the leader in providing link-building services to clients who are interested in Africa-centric audiences around the world.</p>
           <h2 className="h3 mb-4 text-gray-700" data-aos="fade-up">Our mission</h2>
           <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">Our mission is to empower Africa’s creative talent by offering them better ways to reach advertisers, monetize their content, and build sustainable businesses.</p>
           <h2 className="h3 mb-4 text-gray-700" data-aos="fade-up">Our Vision.</h2>
           <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">To be the leading digital content monetization company in Africa by adopting global best practices and adapting them to the unique local context of African markets</p>
          </div>
        </div>

      </div>
    </section>
  )
}
