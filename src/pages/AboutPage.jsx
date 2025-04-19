import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav';
import StickyNav from '../components/Nav/StickyNav';
import Footer from '../components/Footer/Footer';
import Carousel from '../components/Carousel/Carousel';
import Mission from '../components/Misson/Mission';
import AboutUs from '../components/AboutUs/AboutUs';

const AboutPage = () => {
    const [showStickyNav, setShowStickyNav] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowStickyNav(window.scrollY > 100);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div className='w-full min-h-screen'>
      <Nav />
      {showStickyNav && <StickyNav />}
      <Carousel />
      <AboutUs />
      <Mission />
      <Footer />
    </div>
  )
}

export default AboutPage