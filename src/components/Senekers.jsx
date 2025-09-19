import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Sneakers = () => {
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
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <style>
        {`
          @import url('https://unpkg.com/aos@next/dist/aos.css');
        `}
      </style>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight" 
                data-aos="fade-up" 
                data-aos-delay="100"
              >
                Sell everywhere your{' '}
                <span className="text-orange-500 relative">
                  customers
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-orange-200 rounded"></div>
                </span>{' '}
                are
              </h2>
              
              <p 
                className="text-xl text-gray-600 leading-relaxed max-w-lg" 
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                Sell your products in more places with ease—in store, on the go, on your eCommerce website and on leading marketplaces—all synced to one dashboard.
              </p>
            </div>

            {/* Feature Card */}
            <div 
              className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300" 
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <h3 className="text-2xl lg:text-3xl font-bold">Sell on your website</h3>
                </div>
                
                <p className="text-orange-100 leading-relaxed text-lg">
                  Engage directly with shoppers and own their full customer journey by selling on your own eCommerce website that fully represents your brand.
                </p>
                
                <button
                  className={`group bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 transition-all duration-300 hover:shadow-lg ${
                    buttonHovered ? 'transform scale-105' : ''
                  }`}
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                >
                  <span>Create with AI</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${buttonHovered ? 'translate-x-1' : ''}`} />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Active Stores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative" data-aos="fade-up" data-aos-delay="500">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-3xl transform rotate-3 opacity-20"></div>
              
              {/* Main product card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:rotate-1 transition-all duration-500">
                <div className="space-y-6">
                  {/* Product image */}
                  <div className="bg-gray-100 rounded-2xl p-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-pink-100 opacity-50"></div>
                    <div className="relative w-full h-80 flex items-center justify-center">
                      <div className="w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                        <div className="text-white text-6xl font-bold">👟</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-2xl font-bold text-gray-900">Premium Sneakers</h4>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-orange-500">Rs 2000.00 -20% Off</span>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        In Stock
                      </div>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors duration-300">
                      Add to Cart
                    </button>
                    <button className="border-2 border-orange-500 text-orange-500 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                NEW
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                -20%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sneakers;