import gsap from 'gsap'
import React, { useRef } from 'react'

const SlideInButton = () => {

    const bgOverlay = useRef()

    const handleMouseHover = () => {
      gsap.fromTo(
        bgOverlay.current,
        { y: '-100%' },         // Initial position (off the top)
        {
          y: '0%',
          duration: 0.4,
          ease: 'power2.out'
        }
      )
    }
  
    const handleMouseLeave = () => {
      gsap.fromTo(
        bgOverlay.current,
        { y: '0%' },            // Start from visible
        {
          y: '100%',            // Move down and hide
          duration: 0.4,
          ease: 'power2.in'
        }
      )
    }

  return (
    <div
    onMouseEnter={handleMouseHover}
    onMouseLeave={handleMouseLeave}
    className="relative overflow-hidden bg-[#F4A83F] rounded-md"
  >
    <div
      ref={bgOverlay}
      className="absolute top-0 left-0 w-full h-full bg-[#DC4448] z-10"
      style={{ transform: 'translateY(-100%)' }}
    ></div>

    {/* Button Text */}
    <a
      href="#"
      className="relative z-10 block px-7 py-4 text-sm text-white z-20 font-inter tracking-tighter rounded-md"
    >
      DONATE NOW
    </a>
  </div>
  )
}

export default SlideInButton