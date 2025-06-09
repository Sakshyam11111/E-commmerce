import React, { useEffect } from 'react';
import Image1 from "../assets/FeatureSection.png";

const FeatureSection = () => {
    // Initialize AOS
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('aos').then((AOS) => {
                AOS.init({
                    duration: 800, // Animation duration in ms
                    once: true, // Animate only once
                });
            });
        }
    }, []);

    return (
        <>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            <section className="flex items-center justify-center p-8 my-20">
                <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
                    <div className="p-8 flex-1 my-20">
                        <h2
                            className="text-7xl font-semibold mb-4"
                            data-aos="fade-left"
                            data-aos-delay="0"
                        >
                            Unmatched storefront design
                        </h2>
                        <p
                            className="mb-6"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            Build high-converting storefronts and product pages customized for your brand. 
                            Leverage built-in AI features and exceptional no-code creation to turn your vision into reality even faster.
                        </p>
                        <button
                            className="bg-black text-white px-6 py-3 rounded-4xl hover:bg-gray-800 hover:scale-105 transition-all duration-300"
                            data-aos="fade-left"
                            data-aos-delay="400"
                        >
                            Design Your Store
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <img
                            src={Image1}
                            alt="Storefront Design"
                            className="w-full h-auto object-cover"
                            data-aos="fade-right"
                            data-aos-delay="600"
                        />
                    </div>
                </div>
            </section>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </>
    );
};

export default FeatureSection;