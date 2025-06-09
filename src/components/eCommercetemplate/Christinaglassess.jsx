import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../../assets/Christina1.avif';
import Image2 from '../../assets/Christina2.jpg';
import Image3 from '../../assets/Christina3.avif';
import Image4 from '../../assets/Christina4.avif';
import Image5 from '../../assets/Christina5.avif';
import Image6 from '../../assets/Christina6.avif';
import { IoIosArrowForward } from "react-icons/io";

const ChristinaSunglasses = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect for scrolling to top and initializing AOS
  useEffect(() => {
    window.scrollTo(0, 0);

    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 800,
          once: true,
        });
      });
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { to: "/", label: "HOME", ariaLabel: "Go to Home page" },
    { to: "/shop", label: "SHOP", ariaLabel: "Go to Shop page" },
    { to: "/about", label: "ABOUT", ariaLabel: "Go to About page" },
    { to: "/contact", label: "CONTACT", ariaLabel: "Go to Contact page" },
  ];

  const images = [
    { src: Image1, alt: 'Christina Sun sunglasses collection 1', bgColor: 'bg-gray-200' },
    { src: Image2, alt: 'Christina Sun sunglasses collection 2', bgColor: 'bg-orange-50' },
    { src: Image3, alt: 'Christina Sun sunglasses collection 3', bgColor: 'bg-blue-50' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className={`min-h-screen ${images[currentSlide].bgColor} transition-colors duration-500`}>
      {/* Navigation Bar */}
      <nav className="bg-white w-full py-3 px-4 sm:px-6 md:px-8 shadow-md flex flex-wrap items-center justify-between">
        <div className="text-black text-lg sm:text-xl md:text-2xl font-bold tracking-widest">
          CHRISTINA SUN
        </div>

        <button
          className="md:hidden text-gray-600 hover:text-teal-600"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 space-y-3 md:space-y-0 md:space-x-4 lg:space-x-6`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-gray-600 hover:text-teal-600 text-sm md:text-base font-medium transition-colors duration-300"
              aria-label={link.ariaLabel}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-3 md:space-x-4 mt-3 md:mt-0">
          <Link
            to="/profile"
            className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
            aria-label="Go to user profile"
          >
            <FaUser size={18} className="md:w-5 md:h-5" />
          </Link>
          <Link
            to="/cart"
            className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
            aria-label="Go to shopping cart"
          >
            <FaShoppingCart size={18} className="md:w-5 md:h-5" />
          </Link>
        </div>
      </nav>

      {/* Main Image and Text Section */}
      <div className="py-4 sm:py-6 md:py-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]" data-aos="fade-right">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                  src={image.src}
                  className="w-full h-full object-cover pointer-events-none"
                  alt={image.alt}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-center md:text-left px-4" data-aos="fade-left" data-aos-delay="200">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 whitespace-pre-line">
            OUR NEW{'\n'}ARRIVALS{'\n'}ARE HERE
          </h1>
        </div>
      </div>

      {/* Pick Me Banner Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-6 md:py-10 bg-gray-200 gap-4 md:gap-10 px-4 sm:px-6 md:px-8">
        <div className="bg-gray-200 border-4 md:border-8 border-black p-4 sm:p-6 text-center w-full sm:w-3/4 md:w-1/2 lg:w-2/5 h-auto flex flex-col justify-center items-center relative z-10" data-aos="zoom-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">PICK ME</h1>
          <p className="text-base sm:text-lg text-gray-600 mt-2 mb-4 sm:mb-5">
            Our top selling sunglasses are now on sale
          </p>
          <button className="bg-black text-white px-6 sm:px-8 py-2 text-base sm:text-lg font-bold">
            SALE
          </button>
        </div>
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 h-auto flex items-center justify-center" data-aos="fade-left">
          <img
            src={Image4}
            alt="Person with sunglasses on sale"
            className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
          />
        </div>
      </div>

      {/* OUR SUPER COOL MEMBERS */}
      <div className="flex flex-col md:flex-row items-center justify-center py-6 md:py-10 bg-gray-200 gap-4 md:gap-10 px-4 sm:px-6 md:px-8">
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 h-auto flex items-center justify-center border-8 sm:border-12 md:border-16 border-gray-300 ml-20" data-aos="fade-right">
          <img
            src={Image5}
            alt="Person with sunglasses on sale"
            className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
          />
        </div>
        <div className="bg-gray-200 p-4 sm:p-6 text-left w-full sm:w-3/4 md:w-1/2 lg:w-2/5 h-auto flex flex-col" data-aos="fade-left" data-aos-delay="200">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">OUR</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">SUPER</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">COOL</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">MEMBERS</h1>
          <p className="text-base sm:text-lg text-gray-600 mt-2">
            CHRISTINA SUN <br />COOL MEMBERS
          </p>
        </div>
      </div>

      {/* OUR VISION GET TO KNOW MORE */}
      <div className="flex flex-col md:flex-row items-center justify-center py-6 md:py-10 bg-gray-200 gap-4 md:gap-10 px-4 sm:px-6 md:px-8">
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 h-auto flex items-center justify-center my-20" data-aos="fade-right">
          <img
            src={Image6}
            alt="Person with sunglasses on sale"
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover"
          />
        </div>
        <div className="bg-gray-200 p-4 sm:p-6 text-left w-full sm:w-3/4 md:w-1/2 lg:w-2/5 h-auto flex flex-col" data-aos="fade-left" data-aos-delay="200">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">OUR <br />VISION</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-10">GET TO <br />KNOW US</h1>
          <IoIosArrowForward className="h-16 w-20 mt-10" />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-200 py-6 px-4 sm:px-6 md:px-8" data-aos="fade-up">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 text-center">
          {/* Address Section */}
          <div>
            <h3 className="text-sm font-bold text-black uppercase border-b border-gray-400 pb-1 mb-2 inline-block">
              Address
            </h3>
            <p className="text-sm text-gray-600">
              500 Terry Francine Street<br />
              San Francisco, CA 94158
            </p>
          </div>

          {/* Become a Member Section */}
          <div className="w-full md:w-auto">
            <h3 className="text-sm font-bold text-black uppercase border-b border-gray-400 pb-1 mb-6 inline-block">
              Become a Member
            </h3>
            <form className="flex flex-col gap-3 items-center">
              <input
                type="email"
                placeholder="Email *"
                className="w-full md:w-64 p-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                required
                aria-label="Enter your email to subscribe"
              />
              <label className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <input type="checkbox" className="h-4 w-4" />
                Yes, subscribe me to your newsletter.
              </label>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 w-full md:w-64 font-bold hover:bg-gray-800 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-sm font-bold text-black uppercase border-b border-gray-400 pb-1 mb-2 inline-block">
              Social
            </h3>
            <div className="flex gap-3 justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
                aria-label="Visit our Facebook page"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
                aria-label="Visit our Twitter page"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
                aria-label="Visit our Instagram page"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChristinaSunglasses;