import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from "../assets/ai1.avif"; 
import Image2 from "../assets/ai2.avif";
import Image3 from "../assets/ai3.avif"; 
import { FaChevronRight } from "react-icons/fa";

const AIFeatures = () => {
    const [buttonHovered, setButtonHovered] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <section className="py-12 bg-gray-200">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-6" data-aos="fade-up">Get better results faster with advanced AI</h2>
                <p className="text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="200">Boost efficiency with AI features that help you free up time so you can focus on growing your business.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[Image1, Image2, Image3].map((image, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105"
                            data-aos="fade-up" 
                            data-aos-delay={index * 100} 
                        >
                            <img src={image} alt={`AI Feature ${index + 1}`} className="w-full h-auto mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2">AI Feature {index + 1}</h3>
                            <p className="text-gray-600 mb-4">Description for AI Feature {index + 1}.</p>
                            <div className="flex justify-center">
                                <button 
                                    className="bg-black text-white px-4 py-2 rounded-4xl flex items-center justify-center transition-all duration-300"
                                    onMouseEnter={() => setButtonHovered(index + 1)}
                                    onMouseLeave={() => setButtonHovered(null)}
                                >
                                    Create with AI
                                    {buttonHovered === index + 1 && <FaChevronRight className="ml-2" />}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIFeatures;