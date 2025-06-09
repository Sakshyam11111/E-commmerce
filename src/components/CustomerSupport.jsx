import React, { useEffect } from 'react';

const CustomerSupport = () => {
  // Array of support data
  const supportData = [
    {
      title: 'Find quick solutions',
      description: 'Get answers from tutorials and articles in the Wix Help Center.',
      linkText: 'Go to Help Center',
      linkUrl: '#', // Replace with actual URL
    },
    {
      title: 'Contact us',
      description: 'Get round-the-clock dedicated support by chat or schedule a call with Customer Care.',
      linkText: 'Log a Ticket With Us',
      linkUrl: '#', // Replace with actual URL
    },
    {
      title: 'Hire a pro',
      description: 'Get a pro to do it for you—from site creation to eCommerce growth.',
      linkText: 'Browse All Services',
      linkUrl: '#', // Replace with actual URL
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
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto my-10">
        <h1
          className="text-5xl font-bold mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          You're never alone—24/7 customer support
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportData.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-gray-200 rounded-2xl p-6 flex flex-col justify-between h-72 hover:bg-gray-800 hover:text-white transition-colors duration-300 group"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="my-10 flex-1">
                <h3 className="text-4xl font-semibold mb-4 text-gray-800 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-1 group-hover:text-white">
                  {item.description}
                </p>
              </div>
              <a
                href={item.linkUrl}
                className="text-black hover:text-white hover:underline text-sm font-semibold group-hover:text-white"
              >
                {item.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* AOS CSS */}
      <style jsx global>{`
        @import url('https://unpkg.com/aos@2.3.4/dist/aos.css');
      `}</style>
    </section>
  );
};

export default CustomerSupport;