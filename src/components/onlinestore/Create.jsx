import React, { useEffect, useState } from 'react';
import Image from '../../assets/create1.avif';
import TemplateSection from '../TemplateSection';
import Createquestion from './Createquestion';

const Create = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionVisible, setSectionVisible] = useState({
    hero: false,
    image: false,
    features: false,
    howTo: false,
    steps: {}
  });

  useEffect(() => {
    // Simple scroll-based animation trigger
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.75;

      // Hero section animation
      if (scrollY < 100 && !isVisible) {
        setIsVisible(true);
      }

      // Features section
      const featuresSection = document.getElementById('features-section');
      if (featuresSection && featuresSection.getBoundingClientRect().top < triggerPoint) {
        setSectionVisible(prev => ({ ...prev, features: true }));
      }

      // How to section
      const howToSection = document.getElementById('how-to-section');
      if (howToSection && howToSection.getBoundingClientRect().top < triggerPoint) {
        setSectionVisible(prev => ({ ...prev, howTo: true }));
      }

      // Steps animation
      const steps = document.querySelectorAll('[data-step]');
      steps.forEach((step, index) => {
        if (step.getBoundingClientRect().top < triggerPoint) {
          setSectionVisible(prev => ({
            ...prev,
            steps: { ...prev.steps, [index]: true }
          }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const AnimatedSection = ({ children, isVisible, delay = 0, className = "" }) => (
    <div 
      className={`
        ${className}
        transition-all duration-700 ease-out transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        ${isVisible ? 'delay-[0ms]' : `delay-[${delay * 100}ms]`}
      `}
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      {children}
    </div>
  );

  return (
    <>
      {/* Enhanced Hero Section */}
      <section
        className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        role="region"
        aria-labelledby="create-store-heading"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center font-sans max-w-6xl mx-auto w-full">
          <div className="flex flex-col items-center space-y-6">
            <AnimatedSection isVisible={isVisible} delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                <span className="text-sm font-semibold uppercase tracking-wider">Start Your Journey</span>
              </div>
            </AnimatedSection>

            <AnimatedSection isVisible={isVisible} delay={0.1}>
              <h1
                id="create-store-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight"
              >
                Create an online store.
              </h1>
            </AnimatedSection>

            <AnimatedSection isVisible={isVisible} delay={0.2}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Kickstart your success.
              </h2>
            </AnimatedSection>

            <AnimatedSection isVisible={isVisible} delay={0.3}>
              <p className="text-lg sm:text-xl mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
                Build an online store that fits your vision. Customize the design, access all-in-one
                eComm solutions, and hit the web ready to do business.
              </p>
            </AnimatedSection>

            <AnimatedSection isVisible={isVisible} delay={0.4}>
              <button
                type="button"
                className="group relative overflow-hidden w-full sm:w-auto max-w-md px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                aria-label="Start creating your online store"
              >
                <span>Create Your Store</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </AnimatedSection>

            <AnimatedSection isVisible={isVisible} delay={0.5}>
              <p className="text-sm mt-2 text-gray-500 font-medium">
                Start for free. No credit card required. 🚀
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Image Section */}
      <section
        className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm"
        role="region"
        aria-label="Store illustration"
      >
        <div className="relative z-10 rounded-3xl shadow-2xl p-6 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
          <div className="relative flex items-center justify-center">
            <img
              src={Image}
              alt="Create store illustration"
              className="w-full max-w-4xl h-auto rounded-2xl object-contain transition-transform duration-700 hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.target.src = '/fallback-image.png';
                e.target.alt = 'Fallback illustration for store creation';
              }}
            />
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section
        id="features-section"
        className="relative max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50"
        role="region"
        aria-labelledby="features-heading"
      >
        <div className="text-center font-sans">
          <div className="flex flex-col items-center space-y-6 mb-12">
            <AnimatedSection isVisible={sectionVisible.features} delay={0}>
              <h1
                id="features-heading"
                className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Built-in features for every stage
              </h1>
              <p className="text-xl sm:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Wix's online store builder offers everything you need right out of the box. 
                Design, sell, manage, grow—the solutions are ready, just plug in and launch.
              </p>
            </AnimatedSection>

            <AnimatedSection isVisible={sectionVisible.features} delay={0.2}>
              <button
                type="button"
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-black to-gray-800 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                aria-label="Create your store with built-in features"
              >
                <span>Explore Features</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              {
                title: "Rapid Store Creation",
                subtitle: "Best-in-class design",
                description: "Turn your business into a standout brand. Choose a template or use AI to create a personalized site in minutes.",
                icon: "🚀"
              },
              {
                title: "Full eComm Suite",
                subtitle: "At your fingertips",
                description: "Access tools that support all of your eComm needs, from marketing to sales to managing your business.",
                icon: "🛍️"
              },
              {
                title: "Mobile Management",
                subtitle: "Any device, anywhere",
                description: "Oversee every aspect of your business with the Wix mobile app.",
                icon: "📱"
              }
            ].map((feature, index) => (
              <AnimatedSection 
                key={index} 
                isVisible={sectionVisible.features} 
                delay={0.3 + index * 0.1}
                className="group"
              >
                <div className={`
                  bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-8 
                  flex flex-col items-center justify-center h-full transition-all duration-500 
                  hover:shadow-2xl hover:-translate-y-2 hover:bg-white/90 group-hover:scale-[1.02]
                `}>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg mb-4 text-center">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How to Create Section */}
      <section
        id="how-to-section"
        className="relative max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 overflow-hidden"
        role="region"
        aria-labelledby="how-to-create-store-heading"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Image & CTA */}
          <AnimatedSection isVisible={sectionVisible.howTo} delay={0} className="w-full lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm border border-white/20">
              <div className="p-6 md:p-8">
                <h1
                  id="how-to-create-store-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center lg:text-left"
                >
                  How to create an online store
                </h1>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={Image}
                    alt="Online store example"
                    className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/fallback-image.png';
                      e.target.alt = 'Fallback illustration for online store';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="mt-6 text-center lg:text-left space-y-4">
                  <button
                    type="button"
                    className="group relative overflow-hidden w-full max-w-sm mx-auto lg:mx-0 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                    aria-label="Create a store"
                  >
                    <span>Create a Store</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                  <p className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">
                    Learn how to start an online store →
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - Steps */}
          <AnimatedSection isVisible={sectionVisible.howTo} delay={0.2} className="w-full lg:w-1/2">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Create your eCommerce store with these 5 steps:
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Design & Customize",
                    description: "Use professional templates, AI, and more to give your site its own personality."
                  },
                  {
                    step: 2,
                    title: "Add Products",
                    description: "Easily create a rich product catalog. Add products in bulk and generate descriptions with AI."
                  },
                  {
                    step: 3,
                    title: "Configure Payments",
                    description: "Set up secure payments and fulfill orders easily with your choice of gateways and shipping."
                  },
                  {
                    step: 4,
                    title: "Connect Domain",
                    description: "Go live and reach maximum visibility with a custom domain name."
                  },
                  {
                    step: 5,
                    title: "Promote Business",
                    description: "Drive traffic to your store with built-in SEO and marketing tools."
                  }
                ].map((step, index) => (
                  <div
                    key={step.step}
                    data-step={index}
                    className={`
                      group relative pl-8 pr-4 py-6 rounded-2xl bg-white/70 backdrop-blur-sm 
                      border border-white/20 shadow-md hover:shadow-lg transition-all duration-500
                      hover:-translate-x-2 hover:bg-white/90
                      ${sectionVisible.steps[index] ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-50'}
                    `}
                  >
                    {/* Step Number */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                    
                    {/* Step Content */}
                    <div className="ml-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <TemplateSection />
      <Createquestion />
    </>
  );
};

export default Create;

// Custom Styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    
    .animate-blob {
      animation: blob 7s infinite;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `;
  document.head.appendChild(style);
}