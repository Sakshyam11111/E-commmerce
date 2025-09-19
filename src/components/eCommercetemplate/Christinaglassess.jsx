import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosArrowForward, IoMdMail } from 'react-icons/io';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../../assets/Christina1.avif';
import Image2 from '../../assets/Christina2.jpg';
import Image3 from '../../assets/Christina3.avif';
import Image4 from '../../assets/Christina4.avif';
import Image5 from '../../assets/Christina5.avif';
import Image6 from '../../assets/Christina6.avif';

const ChristinaSunglasses = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    pickMe: false,
    members: false,
    vision: false,
    footer: false
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.75;

      // Hero section
      if (scrollY < 200 && !isVisible.hero) {
        setIsVisible(prev => ({ ...prev, hero: true }));
      }

      // Pick Me section
      const pickMeSection = document.getElementById('pick-me-section');
      if (pickMeSection && pickMeSection.getBoundingClientRect().top < triggerPoint) {
        setIsVisible(prev => ({ ...prev, pickMe: true }));
      }

      // Members section
      const membersSection = document.getElementById('members-section');
      if (membersSection && membersSection.getBoundingClientRect().top < triggerPoint) {
        setIsVisible(prev => ({ ...prev, members: true }));
      }

      // Vision section
      const visionSection = document.getElementById('vision-section');
      if (visionSection && visionSection.getBoundingClientRect().top < triggerPoint) {
        setIsVisible(prev => ({ ...prev, vision: true }));
      }

      // Footer section
      const footerSection = document.getElementById('footer-section');
      if (footerSection && footerSection.getBoundingClientRect().top < triggerPoint) {
        setIsVisible(prev => ({ ...prev, footer: true }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { to: "/", label: "HOME", ariaLabel: "Go to Home page" },
    { to: "/shop", label: "SHOP", ariaLabel: "Go to Shop page" },
    { to: "/about", label: "ABOUT", ariaLabel: "Go to About page" },
    { to: "/contact", label: "CONTACT", ariaLabel: "Go to Contact page" },
  ];

  const images = [
    { 
      src: Image1, 
      alt: 'Christina Sun sunglasses collection 1', 
      bgColor: 'from-slate-50 via-blue-50 to-indigo-100',
      overlay: 'from-blue-500/10 via-transparent to-purple-500/10'
    },
    { 
      src: Image2, 
      alt: 'Christina Sun sunglasses collection 2', 
      bgColor: 'from-orange-50 via-amber-50 to-orange-100',
      overlay: 'from-orange-400/10 via-transparent to-red-400/10'
    },
    { 
      src: Image3, 
      alt: 'Christina Sun sunglasses collection 3', 
      bgColor: 'from-emerald-50 via-teal-50 to-cyan-100',
      overlay: 'from-emerald-400/10 via-transparent to-teal-400/10'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    afterChange: (index) => setCurrentSlide(index),
    appendDots: (dots) => (
      <div className="slick-dots absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {dots}
      </div>
    ),
    customPaging: (i) => (
      <div className={`
        w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 
        ${currentSlide === i ? 'bg-white scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/70'}
      `}></div>
    ),
  };

  const AnimatedSection = ({ children, isVisible, delay = 0, className = "" }) => (
    <div 
      className={`
        ${className}
        transition-all duration-700 ease-out transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      {children}
    </div>
  );

  return (
    <div className={`min-h-screen ${images[currentSlide].bgColor} transition-all duration-1000`}>
      {/* Enhanced Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-lg border-b border-gray-100/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent"
              aria-label="Christina Sun - Home"
            >
              <span className="hidden sm:inline">CHRISTINA</span>
              <span className="text-teal-600 font-black">SUN</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className={`
                    relative text-sm lg:text-base font-medium text-gray-700 hover:text-teal-600 
                    transition-all duration-300 group
                    ${location.pathname === link.to ? 'text-teal-600 font-semibold' : ''}
                  `}
                  aria-label={link.ariaLabel}
                >
                  {link.label}
                  <span className={`
                    absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 
                    transition-all duration-300 group-hover:w-full
                    ${location.pathname === link.to ? 'w-full' : ''}
                  `}></span>
                </Link>
              ))}
            </div>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <Link
                to="/profile"
                className="relative p-2 text-gray-600 hover:text-teal-600 transition-colors duration-300 rounded-full hover:bg-teal-50"
                aria-label="User profile"
              >
                <FaUser className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</span>
              </Link>
              <Link
                to="/cart"
                className="relative p-2 text-gray-600 hover:text-teal-600 transition-colors duration-300 rounded-full hover:bg-teal-50"
                aria-label="Shopping cart"
              >
                <FaShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="absolute -top-2 -right-2 min-w-[18px] h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-teal-600 transition-colors duration-300 rounded-full hover:bg-teal-50"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100/50 pb-4 pt-2 animate-slide-down">
              <div className="px-4 space-y-3">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className={`
                      block w-full text-left px-4 py-3 rounded-xl text-base font-medium 
                      transition-all duration-300
                      ${location.pathname === link.to 
                        ? 'bg-gradient-to-r from-teal-50 to-blue-50 text-teal-600 border border-teal-200' 
                        : 'text-gray-700 hover:bg-gray-50'
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center gap-4 pt-2 border-t border-gray-100/50">
                  <Link
                    to="/profile"
                    className="p-2 text-gray-600 hover:text-teal-600 transition-colors duration-300 rounded-lg hover:bg-teal-50"
                    aria-label="User profile"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaUser className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/cart"
                    className="relative p-2 text-gray-600 hover:text-teal-600 transition-colors duration-300 rounded-lg hover:bg-teal-50"
                    aria-label="Shopping cart"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Enhanced Slider */}
      <AnimatedSection isVisible={isVisible.hero}>
        <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Enhanced Slider */}
            <div className="w-full lg:w-1/2 relative">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <div className={`
                      w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden 
                      shadow-2xl relative
                    `}>
                      <img
                        src={image.src}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        alt={image.alt}
                        loading="lazy"
                      />
                      {/* Dynamic Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${images[currentSlide].overlay} rounded-3xl`}></div>
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 max-w-sm">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                            Summer Collection {currentSlide + 1}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 mb-4">
                            Premium quality sunglasses for the modern individual
                          </p>
                          <button className="
                            w-full sm:w-auto px-6 py-2 sm:py-3 bg-gradient-to-r from-teal-600 to-blue-600 
                            text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg 
                            hover:from-teal-700 hover:to-blue-700 transform hover:scale-105 
                            transition-all duration-300 flex items-center justify-center gap-2
                          ">
                            <span>Shop Now</span>
                            <IoIosArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              {/* Custom Dots Indicator */}
              <div className="flex justify-center gap-3 mt-4 sm:mt-6">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => sliderRef.current.slickGoTo(index)}
                    className={`
                      w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 
                      ${currentSlide === index 
                        ? 'bg-teal-600 scale-125 shadow-lg transform translate-y-1' 
                        : 'bg-gray-300 hover:bg-gray-400'
                      }
                    `}
                  />
                ))}
              </div>
            </div>

            {/* Hero Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8">
              <AnimatedSection isVisible={isVisible.hero} delay={0.2}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-700 rounded-full backdrop-blur-sm border border-teal-200/50">
                  <span className="w-2 h-2 bg-teal-500 rounded-full animate-ping"></span>
                  <span className="text-sm font-semibold uppercase tracking-wider">New Arrivals</span>
                </div>
              </AnimatedSection>

              <AnimatedSection isVisible={isVisible.hero} delay={0.3}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight bg-gradient-to-r from-gray-900 via-teal-600 to-blue-700 bg-clip-text text-transparent">
                  OUR NEW
                  <br />
                  <span className="text-teal-600">ARRIVALS</span>
                  <br />
                  ARE HERE
                </h1>
              </AnimatedSection>

              <AnimatedSection isVisible={isVisible.hero} delay={0.4}>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg">
                  Discover our latest collection of premium sunglasses crafted for the modern individual. 
                  Timeless design meets cutting-edge comfort.
                </p>
              </AnimatedSection>

              <AnimatedSection isVisible={isVisible.hero} delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="#"
                    className="
                      group relative overflow-hidden px-8 sm:px-10 py-4 bg-gradient-to-r 
                      from-teal-600 to-blue-700 text-white font-bold text-lg rounded-2xl 
                      shadow-xl hover:shadow-2xl transform hover:-translate-y-1 
                      transition-all duration-300 flex items-center justify-center gap-3
                      max-w-sm
                    "
                    aria-label="Shop new arrivals"
                  >
                    <span>Shop Collection</span>
                    <IoIosArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Link>
                  
                  <Link
                    to="#"
                    className="
                      group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 
                      border-gray-300 text-gray-700 font-semibold text-base rounded-2xl 
                      hover:border-teal-300 hover:text-teal-600 transition-all duration-300
                      max-w-sm justify-center
                    "
                    aria-label="Learn more about our brand"
                  >
                    <span>Learn More</span>
                    <IoIosArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Enhanced Pick Me Banner Section */}
      <AnimatedSection isVisible={isVisible.pickMe}>
        <section id="pick-me-section" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className={`
            absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-100 
            opacity-50 blur-xl -z-10
          `}></div>
          
          <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Enhanced Banner Card */}
            <div className="relative w-full lg:w-1/2 group cursor-pointer">
              <div className={`
                relative bg-white border-4 lg:border-8 border-black rounded-3xl p-6 sm:p-8 lg:p-10 
                shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2
                overflow-hidden
              `}>
                {/* Animated Border */}
                <div className="absolute inset-0 border-4 border-black rounded-3xl group-hover:border-teal-600 transition-colors duration-700"></div>
                
                <div className="relative z-10 text-center space-y-6">
                  <div className="inline-block">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 tracking-tight">
                      PICK ME
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md mx-auto">
                      Our top selling sunglasses are now on sale. Limited time offer on our most popular styles.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button className="
                        group relative overflow-hidden px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r 
                        from-red-600 to-pink-600 text-white font-bold text-base sm:text-lg 
                        rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 
                        transition-all duration-300 flex items-center justify-center gap-2
                      ">
                        <span>Shop Sale</span>
                        <IoIosArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </button>
                      
                      <Link
                        to="#"
                        className="
                          group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 
                          border-gray-300 text-gray-700 font-semibold text-sm sm:text-base 
                          rounded-2xl hover:border-red-300 hover:text-red-600 
                          transition-all duration-300 justify-center
                        "
                        aria-label="View all products"
                      >
                        <span>View All</span>
                        <IoIosArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-500/90 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                      UP TO 50% OFF
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Image */}
            <div className="w-full lg:w-1/2 relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[280px] sm:h-[400px] lg:h-[500px]">
                <img
                  src={Image4}
                  alt="Person with sunglasses on sale"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Signature Series</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-600 line-through">Rs299</span>
                      <span className="text-red-600 font-bold">Rs179</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Enhanced Members Section */}
      <AnimatedSection isVisible={isVisible.members}>
        <section id="members-section" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className={`
            absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-100 
            opacity-30 -z-10
          `}></div>
          
          <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-12">
            {/* Enhanced Image with Frame */}
            <div className="w-full lg:w-1/2 relative group">
              <div className={`
                relative bg-white border-8 lg:border-12 border-gray-300 rounded-3xl 
                p-2 sm:p-4 lg:p-6 shadow-2xl hover:shadow-3xl transition-all duration-700 
                hover:-translate-y-2 overflow-hidden
              `}>
                <img
                  src={Image5}
                  alt="Our super cool members"
                  className="w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-left">
              <AnimatedSection isVisible={isVisible.members} delay={0.1}>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 text-teal-700 rounded-full backdrop-blur-sm border border-teal-200/30">
                  <span className="w-1 h-1 bg-teal-500 rounded-full animate-ping"></span>
                  <span className="text-sm font-semibold uppercase tracking-wider">Exclusive Club</span>
                </div>
              </AnimatedSection>

              <div className="space-y-4">
                <AnimatedSection isVisible={isVisible.members} delay={0.2}>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-gray-900 via-teal-600 to-blue-700 bg-clip-text text-transparent leading-tight">
                    OUR
                    <br />
                    <span className="text-teal-600">SUPER</span>
                    <br />
                    COOL
                    <br />
                    MEMBERS
                  </h2>
                </AnimatedSection>

                <AnimatedSection isVisible={isVisible.members} delay={0.3}>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg">
                    Join the CHRISTINA SUN cool members club and unlock exclusive access to limited edition releases, 
                    members-only discounts, and early access to new collections.
                  </p>
                </AnimatedSection>

                <AnimatedSection isVisible={isVisible.members} delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="
                      group relative overflow-hidden px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r 
                      from-teal-600 to-blue-700 text-white font-bold text-base sm:text-lg 
                      rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 
                      transition-all duration-300 flex items-center justify-center gap-2
                    ">
                      <span>Join Now</span>
                      <IoIosArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </button>
                    
                    <Link
                      to="#"
                      className="
                        group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 
                        border-gray-300 text-gray-700 font-semibold text-sm sm:text-base 
                        rounded-2xl hover:border-teal-300 hover:text-teal-600 
                        transition-all duration-300
                      "
                      aria-label="Learn about our community"
                    >
                      <span>Learn More</span>
                      <IoIosArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Enhanced Vision Section */}
      <AnimatedSection isVisible={isVisible.vision}>
        <section id="vision-section" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className={`
            absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-100 
            opacity-30 -z-10
          `}></div>
          
          <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Enhanced Image */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[280px] sm:h-[400px] lg:h-[600px]">
                <img
                  src={Image6}
                  alt="Our vision and story"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>
                
                {/* Decorative Overlay */}
                <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="w-full lg:w-1/2 space-y-8 lg:space-y-10 text-left">
              <AnimatedSection isVisible={isVisible.vision} delay={0.1}>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-blue-700 rounded-full backdrop-blur-sm border border-blue-200/30">
                  <span className="w-1 h-1 bg-blue-500 rounded-full animate-ping"></span>
                  <span className="text-sm font-semibold uppercase tracking-wider">Our Story</span>
                </div>
              </AnimatedSection>

              <div className="space-y-6">
                <AnimatedSection isVisible={isVisible.vision} delay={0.2}>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-600 to-teal-700 bg-clip-text text-transparent leading-tight">
                    OUR
                    <br />
                    <span className="text-teal-600">VISION</span>
                  </h2>
                </AnimatedSection>

                <AnimatedSection isVisible={isVisible.vision} delay={0.3}>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 leading-tight">
                    GET TO
                    <br />
                    <span className="text-teal-600">KNOW US</span>
                  </h3>
                </AnimatedSection>

                <AnimatedSection isVisible={isVisible.vision} delay={0.4}>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg">
                    At CHRISTINA SUN, we believe sunglasses are more than just accessories—they're an expression of your personality, 
                    a reflection of your style, and a statement of confidence.
                  </p>
                </AnimatedSection>

                <AnimatedSection isVisible={isVisible.vision} delay={0.5}>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200/50">
                    <IoIosArrowForward className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 animate-bounce" />
                    <Link
                      to="#"
                      className="
                        group inline-flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl 
                        font-bold text-teal-600 hover:text-teal-700 transition-all duration-300
                      "
                      aria-label="Discover our complete story"
                    >
                      <span>Discover Our Story</span>
                      <IoIosArrowForward className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Enhanced Footer */}
      <AnimatedSection isVisible={isVisible.footer}>
        <footer 
          id="footer-section"
          className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-gray-100"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23999' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Address Section */}
              <div className="text-center md:text-left space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 uppercase border-b-2 border-teal-600 inline-block pb-2">
                  <FaMapMarkerAlt className="inline mr-2 text-teal-600" />
                  Visit Us
                </h3>
                <div className="space-y-2 text-sm sm:text-base text-gray-600">
                  <p>500 Terry Francine Street</p>
                  <p>San Francisco, CA 94158</p>
                  <p className="text-teal-600 font-semibold">Open 24/7</p>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="text-center md:text-left space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 uppercase border-b-2 border-teal-600 inline-block pb-2">
                  <IoMdMail className="inline mr-2 text-teal-600" />
                  Stay Updated
                </h3>
                <form className="space-y-3 max-w-sm mx-auto md:mx-0" onSubmit={(e) => { e.preventDefault(); }}>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="
                        w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none 
                        focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                        placeholder-gray-500 text-sm sm:text-base transition-all duration-300
                        bg-white/80 backdrop-blur-sm
                      "
                      required
                      aria-label="Email address for newsletter"
                    />
                  </div>
                  <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 rounded" 
                      defaultChecked
                    />
                    <span>Send me exclusive offers and updates</span>
                  </label>
                  <button
                    type="submit"
                    className="
                      w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-700 
                      text-white font-bold text-sm sm:text-base rounded-xl shadow-lg 
                      hover:from-teal-700 hover:to-blue-800 transform hover:scale-105 
                      transition-all duration-300
                    "
                  >
                    Join Our Community
                  </button>
                </form>
              </div>

              {/* Social & Contact */}
              <div className="text-center md:text-left space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 uppercase border-b-2 border-teal-600 inline-block pb-2">
                  Connect With Us
                </h3>
                
                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-4 sm:gap-6 mb-6">
                  {[
                    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
                    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
                    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group relative p-3 rounded-2xl bg-white/50 backdrop-blur-sm 
                        border border-gray-200 hover:border-teal-200 hover:bg-teal-50 
                        shadow-sm hover:shadow-md transition-all duration-300
                        w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center
                      "
                      aria-label={`Follow us on ${social.label}`}
                    >
                      <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-teal-600 transition-colors" />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity scale-0 group-hover:scale-100 origin-center"></div>
                    </a>
                  ))}
                </div>

                {/* Quick Links */}
                <div className="space-y-2 text-sm">
                  <Link 
                    to="/privacy" 
                    className="block text-gray-600 hover:text-teal-600 transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    to="/terms" 
                    className="block text-gray-600 hover:text-teal-600 transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                  <Link 
                    to="/returns" 
                    className="block text-gray-600 hover:text-teal-600 transition-colors duration-300"
                  >
                    Returns & Exchanges
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Border */}
            <div className="border-t border-gray-200/50 mt-12 pt-8">
              <div className="text-center text-sm text-gray-500">
                <p>&copy; 2025 CHRISTINA SUN. All rights reserved.</p>
                <p className="mt-1">Crafted with ❤️ for the modern individual</p>
              </div>
            </div>
          </div>
        </footer>
      </AnimatedSection>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Custom scrollbar for mobile menu */
        .mobile-menu::-webkit-scrollbar {
          width: 4px;
        }
        
        .mobile-menu::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        .mobile-menu::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 2px;
        }
        
        /* Responsive text sizing for better mobile experience */
        @media (max-width: 640px) {
          .hero-title {
            font-size: clamp(2rem, 5vw, 3.5rem) !important;
          }
          
          .section-title {
            font-size: clamp(2.5rem, 6vw, 4rem) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ChristinaSunglasses;