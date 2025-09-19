import React, { useEffect } from 'react';

const CustomerSupport = () => {
  const supportData = [
    {
      title: 'Find quick solutions',
      description: 'Get answers from tutorials and articles in the Wix Help Center.',
      linkText: 'Go to Help Center',
      linkUrl: '#',
      icon: '💡',
      color: 'from-blue-500 to-indigo-600',
      badge: 'Knowledge Base'
    },
    {
      title: 'Contact us',
      description: 'Get round-the-clock dedicated support by chat or schedule a call with Customer Care.',
      linkText: 'Log a Ticket With Us',
      linkUrl: '#',
      icon: '🗨️',
      color: 'from-emerald-500 to-teal-600',
      badge: 'Live Support'
    },
    {
      title: 'Hire a pro',
      description: 'Get a pro to do it for you—from site creation to eCommerce growth.',
      linkText: 'Browse All Services',
      linkUrl: '#',
      icon: '👨‍💼',
      color: 'from-purple-500 to-pink-600',
      badge: 'Expert Help'
    }
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.4/dist/aos.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
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
  }, []);

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-white/20 shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Support</span>
            <span className="w-px h-4 bg-gray-300"></span>
            <span className="text-xs text-gray-500">24/7 Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
            You're never alone
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Our dedicated support team is here for you 24/7. Whether you need quick answers, 
              live assistance, or expert help to grow your business.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-blue-600 font-medium">
              <span>🕐</span>
              <span>Available 24/7, 365 days a year</span>
            </div>
          </div>
        </div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
          {supportData.map((item, index) => (
            <div
              key={index}
              className={`
                group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 flex flex-col
                border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500
                hover:-translate-y-2 hover:bg-white/90 overflow-hidden
                ${index === 1 ? 'md:col-span-1' : ''}
              `}
            >
              {/* Animated Background Shape */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`
                    p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="hidden md:block px-3 py-1 bg-gradient-to-r ${item.color} text-white text-xs font-semibold rounded-full shadow-md">
                    {item.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-gray-100">
                  <button
                    className={`
                      group/btn flex items-center gap-2 w-full justify-center px-6 py-3
                      rounded-2xl font-semibold text-sm transition-all duration-300
                      bg-gradient-to-r ${item.color} text-white shadow-lg
                      hover:shadow-xl hover:scale-[1.02] transform
                      relative overflow-hidden
                    `}
                  >
                    <span className="relative z-10">{item.linkText}</span>
                    <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -skew-x-12 transform -translate-x-full group-hover/btn:translate-x-full"></div>
                  </button>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping delay-100"></div>
              </div>

              {/* Card Border Glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-aos="fade-up" data-aos-delay="300">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600 font-medium">Live Support</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-emerald-600 mb-1">99.9%</div>
            <div className="text-sm text-gray-600 font-medium">Uptime</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-purple-600 mb-1">1M+</div>
            <div className="text-sm text-gray-600 font-medium">Happy Users</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-orange-600 mb-1">5★</div>
            <div className="text-sm text-gray-600 font-medium">Rating</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-100" data-aos="fade-up" data-aos-delay="400">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-sm">🔒</span>
              </div>
              <span>Secure Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-emerald-600 text-sm">⚡</span>
              </div>
              <span>Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-sm">🎯</span>
              </div>
              <span>Expert Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://unpkg.com/aos@2.3.4/dist/aos.css');
        
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
        
        .delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </section>
  );
};

export default CustomerSupport;