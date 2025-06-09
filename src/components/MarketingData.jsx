import React, { useState, useEffect } from 'react'; // Added useEffect for AOS
import { FaChevronRight } from 'react-icons/fa';

const MarketingSuite = () => {
  const [buttonHovered, setButtonHovered] = useState(false);

  // Array of marketing suite data
  const marketingData = [
    {
      title: 'SEO',
      percentage: '24%',
      highlightColor: 'text-black',
      description: 'increase in monthly revenue for stores using Wix SEO tools',
      subDescription: "Optimize your store for search engines with Wix's built-in SEO tools",
    },
    {
      title: 'PAID ADVERTISING',
      percentage: '30%',
      highlightColor: 'text-black',
      description: 'more revenue on average for Wix sites using paid ad features',
      subDescription: 'Run precise ad campaigns on Google and Facebook without technical expertise',
    },
    {
      title: 'EMAIL MARKETING',
      percentage: '45%',
      highlightColor: 'text-black',
      description: 'higher revenues on average for Wix stores using automated emails',
      subDescription: 'Bring in returning customers with email marketing templates and AI-generated emails',
    },
    {
      title: 'GIFT CARDS',
      percentage: '65%',
      highlightColor: 'text-black',
      description: 'increase in average order value for Wix sites accepting gift cards',
      subDescription: 'Improve sales and bring in new shoppers with your own digital gift cards',
    },
    {
      title: 'SOCIAL MEDIA',
      percentage: '6X',
      highlightColor: 'text-black',
      description: 'more revenue from sites using Wix',
      subDescription: 'Promote your store with templates, AI, and hashtags',
    },
    {
      title: 'AFFILIATE PROGRAMS',
      percentage: '18%',
      highlightColor: 'text-black',
      description: 'increase in referral traffic for Wix sites using affiliate programs',
      subDescription: 'Expand your reach by partnering with affiliates to promote your products',
    },
    {
      title: 'LIVE CHAT',
      percentage: '35%',
      highlightColor: 'text-black',
      description: 'higher customer satisfaction for Wix stores with live chat support',
      subDescription: 'Engage customers in real-time to boost conversions and loyalty',
    },
    {
      title: 'CONTENT MARKETING',
      percentage: '40%',
      highlightColor: 'text-black',
      description: 'more organic traffic for Wix sites using content marketing tools',
      subDescription: 'Create blogs, videos, and more to attract and retain customers',
    },
  ];

  // Load and initialize AOS
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
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1
          className="text-7xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Boost traffic and revenue <br /> with a full marketing suite
        </h1>
        <p
          className="text-gray-800 mb-10 mt-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Attract new customers and keep existing clientele coming back for more <br /> with built-in tools to expand your reach and increase sales.
        </p>
        <div className="flex justify-center mb-12"> {/* Centered the button */}
          <button
            className="bg-black text-white px-4 py-2 rounded-full flex items-center justify-center transition-all duration-300"
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Launch Your Store
            {buttonHovered && <FaChevronRight className="ml-2" />}
          </button>
        </div>
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-4">
          {marketingData.map((item, index) => (
            <div
              key={index}
              className="w-[300px] h-[350px] bg-white border border-gray-200 rounded-2xl p-6 shadow-md flex-shrink-0 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={400 + index * 100} // Staggered animation for cards
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                <p className={`text-6xl font-bold ${item.highlightColor} mb-6`}>{item.percentage}</p>
                <p className="text-black mb-4">{item.description}</p>
                <hr className="border-t border-gray-300 mb-4" />
                <p className="text-sm text-black">{item.subDescription}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Custom scrollbar hiding styles */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        {/* AOS CSS */}
        <style jsx global>{`
          @import url('https://unpkg.com/aos@2.3.4/dist/aos.css');
        `}</style>
      </div>
    </section>
  );
};

export default MarketingSuite;