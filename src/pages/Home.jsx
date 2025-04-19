import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import About from '../components/AboutUs/About';
import MovingAhead from '../components/Form/MovingAhead';
import Services from '../components/Services/Services';
import Carousel from '../components/Carousel/Carousel';
import StickyNav from '../components/Nav/StickyNav';
import Mission from '../components/Misson/Mission';

const Home = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Nav />
      {showStickyNav && <StickyNav />}
      <Carousel />
      <About />
      <div className="px-4 sm:px-10 md:px-20">
        <Services />
      </div>
      <Mission />
      <MovingAhead />
      <Footer />
    </div>
  );
};

export default Home;
