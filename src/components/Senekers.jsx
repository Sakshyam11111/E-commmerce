import React, { useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Image1 from "../assets/snekers.avif";

const Senekers = () => {
  const [buttonHovered, setButtonHovered] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/aos@next/dist/aos.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.AOS.init({
        duration: 800, 
        once: true, 
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-12 px-4">
      <style>
        {`
          @import url('https://unpkg.com/aos@next/dist/aos.css');
        `}
      </style>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between my-10">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-4" data-aos="fade-up" data-aos-delay="100">
            Sell everywhere your customers are
          </h2>
          <p className="text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="200">
            Sell your products in more places with ease—in store, on the go, on your eCommerce website and on leading marketplaces—all synced to one dashboard.
          </p>
          <div className="bg-orange-400 rounded-lg p-6 text-white my-10" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-3xl font-semibold mb-2">Sell on your website</h3>
            <p className="mb-4">
              Engage directly with shoppers and own their full customer journey by selling on your own eCommerce website that fully represents your brand.
            </p>
            <button
              className="bg-black text-white px-4 py-2 rounded-4xl flex items-center justify-center transition-all duration-300"
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
            >
              Create with AI
              {buttonHovered && <FaChevronRight className="ml-2" />}
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div
            className="bg-white rounded-lg shadow-lg p-4 max-w-xl mx-auto transition-all duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex justify-center mb-2">
              <img src={Image1} alt="Sneakers" className="w-auto h-80 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Senekers;