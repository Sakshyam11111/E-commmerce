import React, { useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VisionToRevenue = () => {
    const [buttonHovered, setButtonHovered] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <section className="flex items-center justify-center h-screen bg-blue-200">
            <div className="text-center" data-aos="fade-up">
                <h1 className="text-8xl mb-6" data-aos="fade-up" data-aos-delay="200">
                    Transform your vision <br /> into revenue.
                </h1>
                <div className="flex justify-center">
                    <button
                        className="bg-black text-white font-bold px-8 py-5 rounded-full flex items-center transition-all duration-300"
                        onMouseEnter={() => setButtonHovered(true)}
                        onMouseLeave={() => setButtonHovered(false)}
                        data-aos="zoom-in" data-aos-delay="400"
                    >
                        Start Your Store
                        {buttonHovered && <FaChevronRight className="ml-2" />}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VisionToRevenue;