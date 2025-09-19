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
        { category: 'Fashion1', image: Image1, size: 'extra-large', color: 'from-pink-500 to-purple-600' },
        { category: 'Fashion2', image: Image2, size: 'normal', color: 'from-blue-500 to-indigo-600' },
        { category: 'Fashion3', image: Image3, size: 'extra-large', color: 'from-emerald-500 to-teal-600' },
        { category: 'Fashion4', image: Image4, size: 'extra-large', color: 'from-orange-500 to-amber-600' },
        { category: 'Fashion5', image: Image5, size: 'normal', color: 'from-red-500 to-rose-600' },
        { category: 'Fashion6', image: Image6, size: 'normal', color: 'from-violet-500 to-fuchsia-600' },
    ];

    const electronicsTemplates = [
        { category: 'Electronics1', image: Image7, size: 'extra-large', color: 'from-blue-600 to-cyan-500' },
        { category: 'Electronics2', image: Image8, size: 'normal', color: 'from-indigo-600 to-purple-500' },
        { category: 'Electronics3', image: Image9, size: 'extra-large', color: 'from-emerald-600 to-green-500' },
        { category: 'Electronics4', image: Image10, size: 'extra-large', color: 'from-orange-600 to-yellow-500' },
        { category: 'Electronics5', image: Image11, size: 'normal', color: 'from-teal-600 to-blue-500' },
        { category: 'Electronics6', image: Image12, size: 'normal', color: 'from-rose-600 to-pink-500' },
    ];

    const homeTemplates = [
        { category: 'Home1', image: Image13, size: 'extra-large', color: 'from-gray-600 to-slate-500' },
        { category: 'Home2', image: Image14, size: 'normal', color: 'from-amber-600 to-orange-500' },
        { category: 'Home3', image: Image15, size: 'extra-large', color: 'from-emerald-600 to-teal-500' },
        { category: 'Home4', image: Image16, size: 'extra-large', color: 'from-blue-600 to-indigo-500' },
        { category: 'Home5', image: Image17, size: 'normal', color: 'from-purple-600 to-violet-500' },
        { category: 'Home6', image: Image18, size: 'normal', color: 'from-pink-600 to-rose-500' },
    ];

    const beautyTemplates = [
        { category: 'Beauty1', image: Image19, size: 'extra-large', color: 'from-pink-500 to-rose-500' },
        { category: 'Beauty2', image: Image20, size: 'normal', color: 'from-purple-500 to-violet-500' },
        { category: 'Beauty3', image: Image21, size: 'extra-large', color: 'from-emerald-500 to-teal-500' },
        { category: 'Beauty4', image: Image22, size: 'extra-large', color: 'from-amber-500 to-orange-500' },
        { category: 'Beauty5', image: Image23, size: 'normal', color: 'from-blue-500 to-cyan-500' },
        { category: 'Beauty6', image: Image24, size: 'normal', color: 'from-red-500 to-rose-500' },
    ];

    const otherTemplates = [
        { category: 'Other1', image: Image25, size: 'extra-large', color: 'from-indigo-500 to-blue-500' },
        { category: 'Other2', image: Image26, size: 'normal', color: 'from-teal-500 to-emerald-500' },
        { category: 'Other3', image: Image27, size: 'extra-large', color: 'from-orange-500 to-amber-500' },
        { category: 'Other4', image: Image28, size: 'extra-large', color: 'from-violet-500 to-purple-500' },
        { category: 'Other5', image: Image29, size: 'normal', color: 'from-fuchsia-500 to-pink-500' },
        { category: 'Other6', image: Image30, size: 'normal', color: 'from-green-500 to-emerald-500' },
    ];

    const categories = [
        { name: 'Fashion', icon: '👗', color: 'from-pink-500 to-purple-600' },
        { name: 'Electronics', icon: '📱', color: 'from-blue-500 to-cyan-600' },
        { name: 'Home & Decor', icon: '🏠', color: 'from-emerald-500 to-teal-600' },
        { name: 'Beauty & Wellness', icon: '💄', color: 'from-rose-500 to-pink-600' },
        { name: 'Other', icon: '✨', color: 'from-indigo-500 to-violet-600' }
    ];

    const [selectedCategory, setSelectedCategory] = useState('Fashion');
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollContainerRef = useRef(null);
    const navigate = useNavigate();

    // Initialize AOS
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('aos').then((AOS) => {
                AOS.init({
                    duration: 1000,
                    once: true,
                    easing: 'ease-out-cubic'
                });
            });
        }
    }, []);

    const scrollLeft = () => {
        if (scrollContainerRef.current && !isScrolling) {
            setIsScrolling(true);
            scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
            setTimeout(() => setIsScrolling(false), 600);
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current && !isScrolling) {
            setIsScrolling(true);
            scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
            setTimeout(() => setIsScrolling(false), 600);
        }
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    const handleImageClick = (image) => {
        if (image === Image1) {
            navigate('/jud');
        } else if (image === Image2) {
            navigate('/christinaglassess');
        }
    };

    const getTemplatesByCategory = (category) => {
        switch (category) {
            case 'Fashion': return fashionTemplates;
            case 'Electronics': return electronicsTemplates;
            case 'Home & Decor': return homeTemplates;
            case 'Beauty & Wellness': return beautyTemplates;
            case 'Other': return otherTemplates;
            default: return [...fashionTemplates, ...electronicsTemplates, ...homeTemplates, ...beautyTemplates, ...otherTemplates];
        }
    };

    const filteredTemplates = selectedCategory ? getTemplatesByCategory(selectedCategory) : [...fashionTemplates, ...electronicsTemplates, ...homeTemplates, ...beautyTemplates, ...otherTemplates];

    return (
        <>
            <style>
                {`
                    .scrollbar-hidden {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    .scrollbar-hidden::-webkit-scrollbar {
                        display: none;
                    }
                    .gradient-border {
                        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
                        background: linear-gradient(45deg, transparent, transparent),
                                    linear-gradient(135deg, var(--tw-gradient-stops));
                        background-clip: padding-box, border-box;
                    }
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }
                    .float-animation {
                        animation: float 3s ease-in-out infinite;
                    }
                `}
            </style>
            <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4 overflow-hidden">
                {/* Background gradient elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16" data-aos="fade-down">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                            <span className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></span>
                            <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Featured Templates</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                            eCommerce Templates
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Discover 900+ free, fully customizable website templates designed for high-converting mobile and web stores. 
                            Built for speed, conversion, and your brand.
                        </p>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryClick(category.name)}
                                className={`
                                    group relative flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300
                                    ${selectedCategory === category.name 
                                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-${category.color.split(' ')[0].replace('from-', '')}/20 scale-105` 
                                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
                                    }
                                    hover:scale-105 transform
                                `}
                            >
                                <span className="text-lg">{category.icon}</span>
                                <span className="relative z-10">{category.name}</span>
                                {selectedCategory === category.name && (
                                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color} blur opacity-50`}></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Templates Grid */}
                    <div className="relative mb-8" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                {selectedCategory && (
                                    <span className="text-3xl">
                                        {categories.find(cat => cat.name === selectedCategory)?.icon}
                                    </span>
                                )}
                                {selectedCategory || 'All'} Templates
                                <span className="text-sm text-gray-400 font-normal">({filteredTemplates.length})</span>
                            </h3>
                            <div className="flex gap-2">
                                <button
                                    onClick={scrollLeft}
                                    disabled={isScrolling}
                                    className={`
                                        p-3 rounded-full bg-white/10 hover:bg-white/20 text-white
                                        transition-all duration-300 ${isScrolling ? 'opacity-50 cursor-not-allowed' : ''}
                                        backdrop-blur-sm border border-white/20 hover:border-white/30
                                    `}
                                    aria-label="Scroll left"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={scrollRight}
                                    disabled={isScrolling}
                                    className={`
                                        p-3 rounded-full bg-white/10 hover:bg-white/20 text-white
                                        transition-all duration-300 ${isScrolling ? 'opacity-50 cursor-not-allowed' : ''}
                                        backdrop-blur-sm border border-white/20 hover:border-white/30
                                    `}
                                    aria-label="Scroll right"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hidden select-none"
                        >
                            {filteredTemplates.map((template, index) => {
                                const sizeClasses = template.size === 'extra-large' 
                                    ? 'w-80 md:w-[28rem]' 
                                    : 'w-64 md:w-72';
                                
                                return (
                                    <div
                                        key={index}
                                        className={`
                                            ${sizeClasses} flex-shrink-0 snap-start group cursor-pointer
                                            transition-all duration-500 hover:scale-105 hover:-translate-y-2
                                            rounded-2xl overflow-hidden relative bg-white/5 backdrop-blur-sm
                                            border border-white/10 hover:border-white/20
                                            ${index % 2 === 0 ? 'float-animation' : ''}
                                        `}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 150}
                                        onClick={() => handleImageClick(template.image)}
                                    >
                                        {/* Image */}
                                        <div className="relative w-full h-64 md:h-80 overflow-hidden">
                                            <img
                                                src={template.image}
                                                alt={template.category}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                            {/* Category Badge */}
                                            <div className={`
                                                absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold
                                                bg-gradient-to-r ${template.color} text-white shadow-lg
                                                backdrop-blur-sm border border-white/20
                                            `}>
                                                {template.category}
                                            </div>
                                        </div>

                                        {/* Content Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <div className="w-full">
                                                <h4 className="text-white font-bold text-lg mb-2">{template.category}</h4>
                                                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                                    Fully responsive eCommerce template with modern design and high conversion features
                                                </p>
                                                <div className="flex items-center gap-4">
                                                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                                                        Responsive
                                                    </span>
                                                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                                                        Free
                                                    </span>
                                                    <button className="ml-auto px-4 py-2 bg-gradient-to-r from-white/20 to-transparent 
                                                                    rounded-full text-white font-medium hover:from-white/30 
                                                                    transition-all duration-300 border border-white/30">
                                                        Preview →
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Gradient Border */}
                                        <div className={`h-1 bg-gradient-to-r ${template.color} rounded-b-2xl mt-auto`}></div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Gradient Scroll Indicators */}
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-16 pt-12 border-t border-white/10" data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-2xl font-bold text-white mb-4">Ready to build your store?</h3>
                        <p className="text-gray-300 mb-8 max-w-md mx-auto">
                            Start with our free templates and customize them to match your brand perfectly.
                        </p>
                        <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-full 
                                       shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 
                                       transform hover:scale-105 transition-all duration-300 border border-emerald-500/30">
                            Start Building Now
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TemplateSection;