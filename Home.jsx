
import { useRef, useEffect, useState } from 'react';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  './Home.css';
import Navbar from '../Components/Navbar';
import { motion } from 'framer-motion'
import Images from '../Images';



function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // عدد الصور المراد عرضها في السلايدر
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
        },
      },
    
    ], customPaging: (index) => <div className="slider-dot">{index + 1}</div>
  };

  return (
   <>
    <Navbar></Navbar>
      <div className='intro'>
        
                   <h1>Welcome to the <span>Artists</span> Platform</h1>
                    <p>
                     The Artists Platform is an online marketplace where local artists can showcase their work,
               connect with peers, and share their creations. Explore a variety of artworks, and find
                      inspiration on our platform.
                    </p>
                    </div>
                    
                    


    <>
      <Slider {...settings}>
        {Images.map((image, index) => (
          <div key={index}>
            <motion.img
              src={image} 
              alt={`Image ${index}`} style={{ width: '300px', height: '350px' }} 
              whileHover={{ scale: 1.1 }} // تأثير عند تحويم المؤشر على الصورة
              initial={{ opacity: 0 }} // بداية تأثير عرض الصورة
              animate={{ opacity: 1 }} // تأثير عرض الصورة
              transition={{ duration: 0.3 }} // مدة التأثير
            />
          </div>
        ))}
      </Slider>
      </>
    </>
  );
}

export default Home;


