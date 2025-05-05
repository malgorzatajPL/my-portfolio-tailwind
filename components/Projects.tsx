import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Recent Projects
        </h2>
        <Slider {...settings}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6">
              <div className="w-full md:w-1/2">
                <a
                  href="https://website-restaurant-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src="/restaurant.png"
                    alt="Restaurant Website Preview"
                    width={800}
                    height={450}
                    className="rounded-md shadow w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Restaurant Website
                </h3>
                <p className="text-gray-600">
                  This is a modern, fully responsive restaurant website built
                  using Next.js, React, and Tailwind CSS. The project features a
                  custom graphic design created entirely by me, with subtle
                  animations to enhance the user experience.
                </p>
                <p className="text-gray-600">
                  The website includes a dynamic menu page, as well as dedicated
                  About and Contact Us pages.
                </p>
                <a
                  href="https://website-restaurant-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-green-700 hover:underline font-medium"
                >
                  Visit the live site →
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">2</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">3</h3>
          </div>
        </Slider>
      </div>
    </section>
  );
}
