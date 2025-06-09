import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image1 from "../assets/e-1.jpg";
import Image2 from "../assets/e-2.jpg";
import Image3 from "../assets/e-3.jpg";
import Image4 from "../assets/e-4.jpg";
import Image5 from "../assets/e-5.jpg";
import Image6 from "../assets/e-6.jpg";
import Image7 from "../assets/ele-1.jpg";
import Image8 from "../assets/ele-2.jpg";
import Image9 from "../assets/ele-3.jpg";
import Image10 from "../assets/ele-4.jpg";
import Image11 from "../assets/ele-5.jpg";
import Image12 from "../assets/ele-6.jpg";
import Image13 from "../assets/p-1.jpg";
import Image14 from "../assets/p-2.jpg";
import Image15 from "../assets/p-3.jpg";
import Image16 from "../assets/p-4.jpg";
import Image17 from "../assets/p-5.jpg";
import Image18 from "../assets/p-6.jpg";
import Image19 from "../assets/b1.jpg";
import Image20 from "../assets/b2.jpg";
import Image21 from "../assets/b3.jpg";
import Image22 from "../assets/b4.jpg";
import Image23 from "../assets/b5.jpg";
import Image24 from "../assets/b6.jpg";
import Image25 from "../assets/o1.jpg";
import Image26 from "../assets/o2.jpg";
import Image27 from "../assets/o3.jpg";
import Image28 from "../assets/o4.jpg";
import Image29 from "../assets/o5.jpg";
import Image30 from "../assets/o6.jpg";

const TemplateSection = () => {
    const fashionTemplates = [
        { category: 'Fashion1', image: Image1, size: 'extra-large' },
        { category: 'Fashion2', image: Image2, size: 'normal' },
        { category: 'Fashion3', image: Image3, size: 'extra-large' },
        { category: 'Fashion4', image: Image4, size: 'extra-large' },
        { category: 'Fashion5', image: Image5, size: 'normal' },
        { category: 'Fashion6', image: Image6, size: 'normal' },
    ];

    const electronicsTemplates = [
        { category: 'Electronics1', image: Image7, size: 'extra-large' },
        { category: 'Electronics2', image: Image8, size: 'normal' },
        { category: 'Electronics3', image: Image9, size: 'extra-large' },
        { category: 'Electronics4', image: Image10, size: 'extra-large' },
        { category: 'Electronics5', image: Image11, size: 'normal' },
        { category: 'Electronics6', image: Image12, size: 'normal' },
    ];

    const homeTemplates = [
        { category: 'Home1', image: Image13, size: 'extra-large' },
        { category: 'Home2', image: Image14, size: 'normal' },
        { category: 'Home3', image: Image15, size: 'extra-large' },
        { category: 'Home4', image: Image16, size: 'extra-large' },
        { category: 'Home5', image: Image17, size: 'normal' },
        { category: 'Home6', image: Image18, size: 'normal' },
    ];

    const beautyTemplates = [
        { category: 'Beauty1', image: Image19, size: 'extra-large' },
        { category: 'Beauty2', image: Image20, size: 'normal' },
        { category: 'Beauty3', image: Image21, size: 'extra-large' },
        { category: 'Beauty4', image: Image22, size: 'extra-large' },
        { category: 'Beauty5', image: Image23, size: 'normal' },
        { category: 'Beauty6', image: Image24, size: 'normal' },
    ];

    const otherTemplates = [
        { category: 'Other1', image: Image25, size: 'extra-large' },
        { category: 'Other2', image: Image26, size: 'normal' },
        { category: 'Other3', image: Image27, size: 'extra-large' },
        { category: 'Other4', image: Image28, size: 'extra-large' },
        { category: 'Other5', image: Image29, size: 'normal' },
        { category: 'Other6', image: Image30, size: 'normal' },
    ];

    const categories = ['Fashion', 'Electronics', 'Home & Decor', 'Beauty & Wellness', 'Other'];

    const [selectedCategory, setSelectedCategory] = useState('Fashion');
    const scrollContainerRef = useRef(null);
    const navigate = useNavigate(); // Hook for navigation

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

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    // Navigate to Jud component when Image1 is clicked, Christinaglassess when Image2 is clicked
    const handleImageClick = (image) => {
        if (image === Image1) {
            navigate('/jud');
        } else if (image === Image2) {
            navigate('/christinaglassess');
        }
    };

    // Filter templates based on selected category
    const filteredTemplates = selectedCategory
        ? selectedCategory === 'Fashion'
            ? fashionTemplates
            : selectedCategory === 'Electronics'
            ? electronicsTemplates
            : selectedCategory === 'Home & Decor'
            ? homeTemplates
            : selectedCategory === 'Beauty & Wellness'
            ? beautyTemplates
            : selectedCategory === 'Other'
            ? otherTemplates
            : [...fashionTemplates, ...electronicsTemplates, ...homeTemplates, ...beautyTemplates, ...otherTemplates]
        : [...fashionTemplates, ...electronicsTemplates, ...homeTemplates, ...beautyTemplates, ...otherTemplates];

    return (
        <>
            <style>
                {`
                    .scrollbar-hidden {
                        -ms-overflow-style: none; /* Internet Explorer and Edge */
                        scrollbar-width: none; /* Firefox */
                    }
                    .scrollbar-hidden::-webkit-scrollbar {
                        display: none; /* Chrome, Safari, and other WebKit browsers */
                    }
                `}
            </style>
            <section className="bg-black py-16 px-4">
                <div className="max-w-7xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-4 md:text-4xl">eCommerce website templates built for success</h2>
                    <p className="mb-8 text-base md:text-lg">
                        Discover over 900 free and fully customizable website templates, tailored specially for high-converting mobile and web stores.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
                        {categories.map((category, index) => (
                            <span
                                key={index}
                                onClick={() => handleCategoryClick(category)}
                                className={`text-white text-sm md:text-base cursor-pointer hover:underline transition-colors ${selectedCategory === category ? 'underline font-bold' : ''}`}
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                    <div className="relative">
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors z-10"
                            aria-label="Scroll left"
                        >
                            ←
                        </button>
                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto gap-10 pb-4 snap-x snap-mandatory scrollbar-hidden"
                        >
                            {filteredTemplates.map((template, index) => (
                                <div
                                    key={index}
                                    className={`rounded-lg shadow-md overflow-hidden flex-shrink-0 snap-start ${template.size === 'extra-large' ? 'w-96 md:w-112' : template.size === 'large' ? 'w-80 md:w-96' : 'w-56 md:w-64'}`}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100} 
                                >
                                    <img
                                        src={template.image}
                                        alt={template.category}
                                        className="w-full h-full object-cover cursor-pointer"
                                        onClick={() => handleImageClick(template.image)} 
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors z-10"
                            aria-label="Scroll right"
                        >
                            →
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TemplateSection;