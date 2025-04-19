import React, { useEffect, useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import gsap from 'gsap';

const Carousel = () => {

    const images = [
        {
          image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?cs=srgb&dl=pexels-cdc-library-3992949.jpg&fm=jpg',
          head: 'Together, We Can Heal the World',
          para: 'Join hands to build a healthier, safer future for all.'
        },
        {
          image: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?cs=srgb&dl=pexels-rebecca-zaal-252062-764681.jpg&fm=jpg',
          head: 'Every Act of Kindness Counts',
          para: 'Your support can bring warmth, hope, and dignity to lives in need.'
        },
        {
          image: 'https://images.pexels.com/photos/18487183/pexels-photo-18487183/free-photo-of-two-children-opening-their-mouths.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          head: 'Give Joy. Share Smiles.',
          para: 'Help create a world where every child has a reason to laugh.'
        }
      ];     
      
      useEffect(() => {
        gsap.to('#carousel', {
          scaleX: '100%',
          duration: 1,
          ease: 'power3 .inOut'
        })
      }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div id='carousel' className='scale-x-0  origin-center'>
      <Slider {...settings}>
        {images.map((val, ind) => (
          <div key={ind} className='w-full overflow-hidden relative h-[70vh]'>
            <div className='w-full h-full  flex flex-col justify-center text-white items-center'>
              <p className='text-3xl text-center text-mustard font-inter tracking-tighter z-[40]'>{val.para}</p>
              <h1 className='text-8xl text-center font-dm z-[40]'>{val.head}</h1>
            </div>
            <img
              src={val.image}
              className='w-full opacity-75 absolute z-0 top-0 left-0 h-full object-cover'
              alt=""
              style={{ zIndex: -1 }}
            />
            <div className='absolute inset-0 bg-black/50 w-full h-full' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
