import React, { useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa'; 

const testimonialsData = [
    {
        quote: "When I launched my Wix website, I was so pleased and excited to see how many amazing products, Wix offers.",
        name: "Zamar Martinez",
        business: "Z. Jewelers",
        bgColor: "bg-green-200"
    },
    {
        quote: "I went from selling to my town to selling across the country in one week. It’s a whole new business.",
        name: "Rand Pitts",
        business: "Evolve",
        bgColor: "bg-blue-200"
    },
    {
        quote: "Wix has transformed my online presence! I can’t believe how easy it is to manage my store.",
        name: "Emily Smith",
        business: "Fashion Boutique",
        bgColor: "bg-yellow-200"
    },
    {
        quote: "The tools provided by Wix allowed me to create a beautiful site without any coding skills.",
        name: "James Lee",
        business: "Tech Store",
        bgColor: "bg-red-200"
    },
    {
        quote: "I love how customizable everything is! My store looks exactly how I envisioned it.",
        name: "Sarah Johnson",
        business: "Home Decor",
        bgColor: "bg-purple-200"
    },
    {
        quote: "Wix has made it simple to sell online. I’m thrilled with the support and resources available!",
        name: "Michael Brown",
        business: "Gadget Hub",
        bgColor: "bg-teal-200"
    }
];

const Testimonials = () => {
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
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="py-12">
            <style>
                {`
                /* Import AOS styles */
                @import url('https://unpkg.com/aos@next/dist/aos.css');

                /* Hide scrollbar for Chrome, Safari and Opera */
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }

                /* Hide scrollbar for IE, Edge and Firefox */
                .hide-scrollbar {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
                `}
            </style>
            <div className="max-w-7xl mx-auto text-center">
                <h2
                    className="text-6xl mb-10 mt-10"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Powering the eCommerce <br /> dreams of over 1M sites
                </h2>
                <div className="flex overflow-x-auto hide-scrollbar space-x-8 pb-4">
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`${testimonial.bgColor} rounded-lg p-8 min-w-[400px]`}
                            data-aos="fade-up"
                            data-aos-delay={`${200 + index * 100}`} 
                        >
                            <div className="mb-4">
                                <p className="text-xl italic">{testimonial.quote}</p>
                            </div>
                            <div className="flex items-start">
                                <FaUserCircle className="text-5xl text-gray-700 mr-4" />
                                <div>
                                    <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                                    <p className="text-lg text-gray-600">{testimonial.business}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;