import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Search, 
  Target, 
  Mail, 
  Gift, 
  Share2, 
  Users, 
  MessageCircle, 
  PenTool,
  TrendingUp,
  Star,
  Zap
} from 'lucide-react';

const MarketingSuite = () => {
  const [buttonHovered, setButtonHovered] = useState(false);

  const getIcon = (index) => {
    const icons = [Search, Target, Mail, Gift, Share2, Users, MessageCircle, PenTool];
    const IconComponent = icons[index];
    return <IconComponent className="w-8 h-8" />;
  };

  const marketingData = [
    {
      title: 'SEO',
      percentage: '24%',
      highlightColor: 'text-emerald-600',
      bgGradient: 'from-emerald-50 to-green-50',
      borderColor: 'border-emerald-200',
      description: 'increase in monthly revenue for stores using Wix SEO tools',
      subDescription: "Optimize your store for search engines with Wix's built-in SEO tools",
      badge: 'Organic Growth'
    },
    {
      title: 'PAID ADVERTISING',
      percentage: '30%',
      highlightColor: 'text-blue-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      description: 'more revenue on average for Wix sites using paid ad features',
      subDescription: 'Run precise ad campaigns on Google and Facebook without technical expertise',
      badge: 'Fast Results'
    },
    {
      title: 'EMAIL MARKETING',
      percentage: '45%',
      highlightColor: 'text-purple-600',
      bgGradient: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      description: 'higher revenues on average for Wix stores using automated emails',
      subDescription: 'Bring in returning customers with email marketing templates and AI-generated emails',
      badge: 'AI Powered'
    },
    {
      title: 'GIFT CARDS',
      percentage: '65%',
      highlightColor: 'text-rose-600',
      bgGradient: 'from-rose-50 to-pink-50',
      borderColor: 'border-rose-200',
      description: 'increase in average order value for Wix sites accepting gift cards',
      subDescription: 'Improve sales and bring in new shoppers with your own digital gift cards',
      badge: 'Higher AOV'
    },
    {
      title: 'SOCIAL MEDIA',
      percentage: '6X',
      highlightColor: 'text-orange-600',
      bgGradient: 'from-orange-50 to-amber-50',
      borderColor: 'border-orange-200',
      description: 'more revenue from sites using Wix',
      subDescription: 'Promote your store with templates, AI, and hashtags',
      badge: 'Viral Reach'
    },
    {
      title: 'AFFILIATE PROGRAMS',
      percentage: '18%',
      highlightColor: 'text-indigo-600',
      bgGradient: 'from-indigo-50 to-blue-50',
      borderColor: 'border-indigo-200',
      description: 'increase in referral traffic for Wix sites using affiliate programs',
      subDescription: 'Expand your reach by partnering with affiliates to promote your products',
      badge: 'Partnership'
    },
    {
      title: 'LIVE CHAT',
      percentage: '35%',
      highlightColor: 'text-teal-600',
      bgGradient: 'from-teal-50 to-cyan-50',
      borderColor: 'border-teal-200',
      description: 'higher customer satisfaction for Wix stores with live chat support',
      subDescription: 'Engage customers in real-time to boost conversions and loyalty',
      badge: 'Real-time'
    },
    {
      title: 'CONTENT MARKETING',
      percentage: '40%',
      highlightColor: 'text-violet-600',
      bgGradient: 'from-violet-50 to-purple-50',
      borderColor: 'border-violet-200',
      description: 'more organic traffic for Wix sites using content marketing tools',
      subDescription: 'Create blogs, videos, and more to attract and retain customers',
      badge: 'Content First'
    },
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.4/dist/aos.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out',
      });
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <style>
        {`
          @import url('https://unpkg.com/aos@2.3.4/dist/aos.css');
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6" data-aos="fade-up">
            <TrendingUp className="w-4 h-4" />
            <span>Marketing Suite</span>
          </div>

          <h1
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Boost traffic and revenue <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              with a full marketing suite
            </span>
          </h1>
          
          <p
            className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Attract new customers and keep existing clientele coming back for more with built-in tools to expand your reach and increase sales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" data-aos="fade-up" data-aos-delay="300">
            <button
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:scale-105 font-semibold text-lg"
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
            >
              <span>Launch Your Store</span>
              <ChevronRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${buttonHovered ? 'translate-x-1' : ''}`} />
            </button>
            
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="400">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-3xl font-bold text-gray-900">4.9</span>
              </div>
              <p className="text-gray-600">Customer Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Zap className="w-5 h-5 text-green-500" />
                <span className="text-3xl font-bold text-gray-900">2M+</span>
              </div>
              <p className="text-gray-600">Active Stores</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span className="text-3xl font-bold text-gray-900">150%</span>
              </div>
              <p className="text-gray-600">Avg. Growth</p>
            </div>
          </div>
        </div>

        {/* Marketing Cards */}
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-8 px-4">
          {marketingData.map((item, index) => (
            <div
              key={index}
              className={`w-[320px] h-[400px] bg-gradient-to-br ${item.bgGradient} border-2 ${item.borderColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl flex-shrink-0 flex flex-col justify-between transition-all duration-500 hover:scale-105 group relative overflow-hidden`}
              data-aos="fade-up"
              data-aos-delay={400 + index * 100}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 transform rotate-45 translate-x-16 -translate-y-16">
                  <div className="w-full h-full bg-black rounded-2xl"></div>
                </div>
              </div>

              <div className="relative z-10">
                {/* Badge */}
                <div className={`inline-flex items-center space-x-1 bg-white/80 backdrop-blur-sm ${item.highlightColor} px-3 py-1 rounded-full text-xs font-medium mb-4`}>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                  <span>{item.badge}</span>
                </div>

                {/* Icon */}
                <div className={`${item.highlightColor} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(index)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-6 text-gray-800 tracking-wide">
                  {item.title}
                </h3>

                {/* Percentage */}
                <div className="mb-6">
                  <p className={`text-6xl font-bold ${item.highlightColor} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {item.percentage}
                  </p>
                  <div className={`w-16 h-1 ${item.highlightColor.replace('text-', 'bg-')} rounded-full group-hover:w-24 transition-all duration-300`}></div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4 font-medium leading-relaxed">
                  {item.description}
                </p>

                {/* Divider */}
                <div className={`border-t ${item.borderColor} mb-4 opacity-50`}></div>

                {/* Sub Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.subDescription}
                </p>
              </div>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingSuite;