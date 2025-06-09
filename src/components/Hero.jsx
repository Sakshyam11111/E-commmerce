import React, { useEffect } from 'react';

const Hero = () => {
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
            <section className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-300 text-white text-center">
                <div className="container mx-auto my-44 text-black">
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-4"
                        data-aos="fade-up"
                        data-aos-delay="0"
                    >
                        BUILD AN ECOMMERCE WEBSITE
                    </h1>
                    <p
                        className="text-lg md:text-2xl mb-8"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Start selling immediately. Grow without limits.
                    </p>
                    <p
                        className="mb-8"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        Get everything you need to build, run, and scale your business—on one unified platform.
                    </p>
                    <button
                        className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        Create Your Store
                    </button>
                </div>
            </section>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </>
    );
};

export default Hero;