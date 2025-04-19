import React, { useEffect } from 'react'
import { LuHeartHandshake } from "react-icons/lu";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TiFlowChildren } from "react-icons/ti";
import gsap from 'gsap';

const AboutUs = () => {

    useEffect(() => {
        gsap.fromTo('#bgOverlay', {
            y: 10,
            x: 0,
            yoyo: true
        }, {
            y: -10,
            x: 10,
            duration: 2,
            ease: 'back.inOut',
            repeat: -1,
            yoyo: true
        })
    })

  return (
    <div data-scroll data-scroll-speed='0.1' className="w-full overflow-hidden relative flex flex-col px-6 md:px-20 lg:px-40 xl:px-72 py-20 md:py-32">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-2">
            <img
              className="w-16 md:w-20"
              src="public/images/logowotext.png"
              alt="viroh-logo"
            />
            <p className="font-inter tracking-tighter text-navy text-base md:text-lg font-semibold">
              Education for all
            </p>
          </div>
    
          {/* About Us Section */}
          <div className="mt-6 md:w-5/6 lg:w-2/3">
            <h1 className="text-4xl md:text-6xl font-dm text-navy font-semibold tracking-tight">
              About Us
            </h1>
            <p className="font-inter mt-6 md:mt-10 text-base md:text-lg tracking-tight text-navy">
              VIROH: a place for overall development was formed in 2014 with aim of
              nurturing the abilities of children with special needs.
            </p>
            <p className="font-inter mt-4 md:mt-10 text-base md:text-lg tracking-tight text-navy">
              Gradually, it has grown into an organization which is empowering
              children, adolescents and adults with special needs. We support
              individuals with autism spectrum disorder (ASD), attention deficit
              hyperactivity disorder (ADHD), intellectual disability, down syndrome,
              cerebral palsy, hearing impairment, visual impairment, and other
              developmental disabilities.
            </p>
          </div>
    
          {/* Our Team Section - Right aligned */}
          <div className="mt-6 md:w-5/6 lg:w-[60%] md:ml-auto text-right">
            <h1 className="text-4xl md:text-6xl font-dm text-navy font-semibold tracking-tight">
              Our Team
            </h1>
            <p className="font-inter mt-6 md:mt-10 text-base md:text-lg tracking-tight text-navy">
              Preeti is a registered rehabilitation therapist and a special educator
              who is working for individuals with special needs since 2012. She is
              director of an intervention centre named as ‘VIROH: a place for
              overall development’. She is associated with reputed schools in Delhi
              as a special educator consultant. She is also supporting NGOs and
              child development centers where she helps children to grow independent
              and their parents/family to cope up with stress and anxiety.
            </p>
            <p className="font-inter mt-4 md:mt-10 text-base md:text-lg tracking-tight text-navy">
              She conducts counseling sessions and training workshops for parents
              and young professionals who are working in the field of disability.
              She is also an authorized author with educreation publication and has
              authored two handbooks ‘A snap of math’ and ‘Take a flight’. She is
              also a qualified makeup artist who is making way for individual with
              special needs in fashion and makeup industry with job opportunities.
              Her goal is to empower individuals with special needs and to support
              their family. She believes that everyone has unlimited potential. Her
              mission is to make people realize them about their potential and
              empower them towards independence in all spheres of their lives.
            </p>
          </div>
    
          {/* Icons Section */}
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row gap-10 md:gap-20 md:justify-between md:w-5/6 lg:w-2/3">
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start p-3">
                <LuHeartHandshake size={70} color="#DC4448" />
              </div>
              <p className="text-xl font-inter text-navy font-semibold mt-2">
                Help Mankind
              </p>
              <p className="text-md font-inter text-navy mt-1">
                Be the change the world needs by helping others
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start p-3">
                <FaHandHoldingHeart size={70} color="#F4A83F" />
              </div>
              <p className="text-xl font-inter text-navy font-semibold mt-2">
                Love Your World
              </p>
              <p className="text-md font-inter text-navy mt-1">
                The giving of love is an education in itself
              </p>
            </div>
          </div>
          <div id='bgOverlay' className='absolute text-[50rem] z-[-1] top-10 right-0 text-slate-200'>
            <TiFlowChildren />
          </div>
        </div>
  )
}

export default AboutUs