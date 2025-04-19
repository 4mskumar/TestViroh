import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import { Route, Routes } from 'react-router-dom';
import Lenis from 'lenis'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {

  // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

const locomotiveScroll = new LocomotiveScroll()

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

  return (
    <div className='w-full h-screen'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<AboutPage />}/>              
      </Routes>
    </div>
  );
};

export default App;
