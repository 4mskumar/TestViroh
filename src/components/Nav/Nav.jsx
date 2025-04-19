import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import SlideInButton from '../Button/SlideInButton';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

const Nav = () => {
  const [index, setIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const bottomBor = useRef([]);

  const handleMouseEnter = (ind) => {
    setIndex(ind);
    gsap.fromTo(
      bottomBor.current[ind],
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.3,
        ease: 'power2.out'
      }
    );
  };

  const handleMouseLeave = (ind) => {
    gsap.to(bottomBor.current[ind], {
      scaleX: 0,
      duration: 0.3,
      ease: 'power2.in'
    });
    setIndex(null);
  };

  return (
    <div className='w-full px-6 md:px-52 py-3 flex items-center justify-between relative z-50'>
      {/* Logo */}
      <div className='w-20 md:w-24'>
        <a href="/">
        <img
          className='w-full h-full object-cover'
          src='public/images/virohlogo.jpeg'
          alt='logo'
          />
          </a>
      </div>

      {/* Desktop Nav */}
      <div className='hidden md:flex text-lg font-inter tracking-tighter gap-16 text-navy font-bold items-center'>
        {['Home', 'About', 'Services', 'Contact'].map((val, ind) => (
          <a
            href={`/${val}`}
            key={ind}
            className='relative pb-1'
            onMouseEnter={() => handleMouseEnter(ind)}
            onMouseLeave={() => handleMouseLeave(ind)}
          >
            {val}
            <div
              ref={(el) => (bottomBor.current[ind] = el)}
              className='absolute bottom-0 left-0 h-[2px] w-full bg-crimson origin-left scale-x-0'
            ></div>
          </a>
        ))}
        <SlideInButton />
      </div>

      {/* Mobile Hamburger */}
      <div className='md:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <HiX className='text-3xl text-navy' />
          ) : (
            <HiOutlineMenuAlt3 className='text-3xl text-navy' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden'>
          {['Home', 'About', 'Services', 'Contact'].map((val, ind) => (
            <a
              key={ind}
              href='#'
              className='text-navy text-lg font-semibold'
              onClick={() => setMenuOpen(false)}
            >
              {val}
            </a>
          ))}
          <SlideInButton />
        </div>
      )}
    </div>
  );
};

export default Nav;
