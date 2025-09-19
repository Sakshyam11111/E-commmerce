import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaRocket, FaBrain, FaMagic, FaStar, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const AIFeatures = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [activeFeature, setActiveFeature] = useState(0);

    // Auto-rotate active feature
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            id: 1,
            title: "AI Website Builder",
            subtitle: "Build in minutes, not hours",
            description: "Create stunning websites with our intelligent AI that understands your brand and automatically generates layouts, content, and designs tailored to your business.",
            icon: <FaRocket className="text-2xl" />,
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50",
            benefits: ["No coding required", "Mobile responsive", "SEO optimized"],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center"
        },
        {
            id: 2,
            title: "Smart Content Generator",
            subtitle: "Professional copy in seconds",
            description: "Generate compelling product descriptions, blog posts, and marketing copy that converts. Our AI understands your audience and creates content that drives results.",
            icon: <FaBrain className="text-2xl" />,
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50",
            benefits: ["SEO optimized content", "Brand voice matching", "Multi-language support"],
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center"
        },
        {
            id: 3,
            title: "Intelligent Analytics",
            subtitle: "Data-driven insights",
            description: "Get actionable insights about your store performance, customer behavior, and growth opportunities. Make smarter decisions with AI-powered analytics.",
            icon: <FaMagic className="text-2xl" />,
            gradient: "from-emerald-500 to-teal-500",
            bgGradient: "from-emerald-50 to-teal-50",
            benefits: ["Real-time monitoring", "Predictive analytics", "Custom reports"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30"></div>
            
            {/* Animated background elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-emerald-200/20 rounded-full blur-2xl animate-pulse delay-2000"></div>

            <div className="relative max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6 border border-blue-200/50">
                        <FaStar className="text-yellow-500 animate-pulse" />
                        <span className="text-sm font-semibold text-gray-700">Powered by Advanced AI</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Get better results 
                        <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                            faster with AI
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Boost efficiency with AI features that help you free up time so you can focus on 
                        <span className="font-semibold text-purple-600"> growing your business</span>.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={`group relative bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                                activeFeature === index ? 'ring-4 ring-blue-500/20 shadow-xl' : 'shadow-lg'
                            }`}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => setActiveFeature(index)}
                        >
                            {/* Card Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            
                            {/* Content */}
                            <div className="relative z-10 p-8">
                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                    {feature.icon}
                                </div>

                                {/* Image */}
                                <div className="relative mb-6 overflow-hidden rounded-2xl">
                                    <img 
                                        src={feature.image} 
                                        alt={feature.title}
                                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Text Content */}
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm font-semibold text-purple-600 mb-3">
                                            {feature.subtitle}
                                        </p>
                                    </div>
                                    
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Benefits */}
                                    <div className="space-y-2">
                                        {feature.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center space-x-2">
                                                <FaCheckCircle className="text-green-500 text-sm" />
                                                <span className="text-sm text-gray-600">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Button */}
                                    <button className={`w-full mt-6 bg-gradient-to-r ${feature.gradient} text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-center space-x-2 transform transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:shadow-xl`}>
                                        <span>Create with AI</span>
                                        <FaArrowRight className={`transition-transform duration-300 ${
                                            hoveredCard === index ? 'translate-x-1' : ''
                                        }`} />
                                    </button>
                                </div>
                            </div>

                            {/* Hover Effect Border */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                 style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', padding: '2px' }}>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center">
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">
                            Ready to supercharge your business with AI?
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join thousands of entrepreneurs who are already using our AI-powered tools to build and grow their online stores.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-2 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                <FaRocket />
                                <span>Start Building Now</span>
                            </button>
                            
                            <button className="bg-white/80 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-200 hover:border-purple-300 hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600 mb-1">50K+</div>
                                <div className="text-sm text-gray-600">Stores Created</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                                <div className="text-sm text-gray-600">Satisfaction Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-600 mb-1">24/7</div>
                                <div className="text-sm text-gray-600">AI Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIFeatures;