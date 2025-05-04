import React from 'react';
import Slider from 'react-slick';
 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
 
  const settings = {
    infinite: true,  
    speed: 500,  
    slidesToShow: 1,  
    slidesToScroll: 1,  
    arrows: true,  
    dots: true,  
    autoplay: true,  
    autoplaySpeed: 3000,  
  };


export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Recent Projects</h2>
        <Slider {...settings}> 
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              1
            </h3> 
          </div>
           
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              2
            </h3> 
          </div>
           
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
             3
            </h3> 
          </div>
        </Slider>
      </div>
    </section>
  );
}
