import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Image1 from '../assets/internal.avif';

// Note: Ensure AOS CSS is imported globally in your project (e.g., in index.js or App.js)
// import 'aos/dist/aos.css';

const InternationalPromo = () => {
  // State to manage button hover effect
  const [buttonHovered, setButtonHovered] = useState(false);

  // Load and initialize AOS (Animate on Scroll) library
  useEffect(() => {
    // Prevent duplicate AOS script loading
    if (!window.AOS) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/aos@2.3.4/dist/aos.js'; // Use specific version for stability
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.AOS.init({
          duration: 800, // Animation duration in milliseconds
          once: true, // Animations occur only once
          easing: 'ease-in-out', // Smoother animation
          mirror: false, // Prevent animation on scroll up
        });
      };

      script.onerror = () => {
        console.error('Failed to load AOS script');
      };

      // Cleanup: Remove script to prevent memory leaks
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    } else {
      // If AOS is already loaded, initialize it
      window.AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out',
        mirror: false,
      });
    }
  }, []);

  return (
    <section className="py-12 px-4 bg-blue-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between my-20">
        <div className="md:w-1/2">
          <h2
            className="text-5xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Sell internationally
          </h2>
          <p
            className="text-gray-700 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Take your eCommerce website to international markets with Wix Multilingual, currency converter, and 80+ trusted payment providers around the world.
          </p>
          <button
            className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center transition-colors duration-300"
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            aria-label="Get started with international selling"
            data-aos="zoom-in" 
            data-aos-delay="300" 
            data-aos-duration="600" 
          >
            Get Started
            {buttonHovered && <FaChevronRight className="ml-2" />}
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src={Image1}
              alt="International Selling"
              className="w-auto h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalPromo;