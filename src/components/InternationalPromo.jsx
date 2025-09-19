import React, { useEffect, useState } from 'react';
import { 
  ChevronRight, 
  Globe, 
  CreditCard, 
  Languages, 
  DollarSign,
  MapPin,
  Users,
  TrendingUp,
  Star,
  Shield,
  Zap
} from 'lucide-react';

const InternationalPromo = () => {
  const [buttonHovered, setButtonHovered] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    if (!window.AOS) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/aos@2.3.4/dist/aos.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.AOS.init({
          duration: 800,
          once: true,
          easing: 'ease-in-out',
          mirror: false,
        });
      };

      script.onerror = () => {
        console.error('Failed to load AOS script');
      };

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    } else {
      window.AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out',
        mirror: false,
      });
    }
  }, []);

  const features = [
    {
      icon: Languages,
      title: 'Multilingual Support',
      description: 'Translate your store into multiple languages',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: DollarSign,
      title: 'Currency Converter',
      description: 'Support 160+ currencies automatically',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: CreditCard,
      title: 'Global Payments',
      description: '80+ trusted payment providers worldwide',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Bank-level security for all payments',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const stats = [
    { number: '190+', label: 'Countries Supported', icon: Globe },
    { number: '160+', label: 'Currencies', icon: DollarSign },
    { number: '80+', label: 'Payment Methods', icon: CreditCard },
    { number: '50+', label: 'Languages', icon: Languages }
  ];

  const countries = ['🇺🇸', '🇬🇧', '🇩🇪', '🇫🇷', '🇯🇵', '🇨🇦', '🇦🇺', '🇧🇷'];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating globe animation */}
      <div className="absolute top-10 right-20 opacity-20">
        <Globe className="w-32 h-32 text-white animate-pulse" />
      </div>

      <style>
        {`
          @import url('https://unpkg.com/aos@2.3.4/dist/aos.css');
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .float-animation {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes slideInFromRight {
            0% { transform: translateX(100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          .slide-in-right {
            animation: slideInFromRight 0.8s ease-out;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium" data-aos="fade-up">
                <Globe className="w-4 h-4" />
                <span>Global Commerce</span>
              </div>

              <h2
                className="text-4xl lg:text-6xl font-bold leading-tight"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Sell{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                  internationally
                </span>
              </h2>

              <p
                className="text-xl text-blue-100 leading-relaxed max-w-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Take your eCommerce website to international markets with multilingual support, currency conversion, and 80+ trusted payment providers around the world.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="300">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer ${
                    hoveredFeature === index ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <feature.icon className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-xs text-blue-100 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="400">
              <button
                className="group bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 flex items-center space-x-3"
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                aria-label="Get started with international selling"
              >
                <span>Get Started</span>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${buttonHovered ? 'translate-x-1' : ''}`} />
              </button>

              {/* Country flags */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-blue-200">Trusted in:</span>
                <div className="flex space-x-1">
                  {countries.map((flag, index) => (
                    <span key={index} className="text-2xl hover:scale-125 transition-transform duration-200 cursor-pointer">
                      {flag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive World Map */}
          <div className="relative" data-aos="fade-left" data-aos-delay="500">
            <div className="relative">
              {/* Main visual container */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                {/* World map visualization */}
                <div className="relative h-96 flex items-center justify-center">
                  {/* Central globe */}
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl float-animation">
                      <Globe className="w-24 h-24 text-white" />
                    </div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute inset-0">
                      {/* Payment icons orbiting */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 animate-pulse">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 animate-pulse delay-300">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <CreditCard className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 animate-pulse delay-500">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <Languages className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 animate-pulse delay-700">
                        <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connection lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full opacity-30">
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                      <path d="M50 50 L150 100 L250 150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                      <path d="M350 50 L250 100 L150 150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-300" />
                    </svg>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                      <div className="flex items-center justify-center mb-2">
                        <stat.icon className="w-5 h-5 text-cyan-300 mr-2" />
                        <span className="text-2xl font-bold text-white">{stat.number}</span>
                      </div>
                      <p className="text-sm text-blue-200">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                Global Ready
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                190+ Countries
              </div>
            </div>
          </div>
        </div>

        {/* Bottom testimonial section */}
        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="800">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-xl text-white mb-4 italic">
              "Expanding internationally was seamless with these tools. We're now selling in 25 countries!"
            </p>
            <p className="text-blue-200">- Sarah Chen, Global Fashion Brand</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalPromo;