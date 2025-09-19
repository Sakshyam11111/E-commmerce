import React, { useEffect, useState } from 'react';
import { Palette, Zap, Smartphone, Eye, Code, Sparkles, ArrowRight, Play, Check } from 'lucide-react';

const FeatureSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // Mock image placeholder since we can't import the actual image
    const mockStorefrontImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f0f4f8'/%3E%3Crect x='50' y='50' width='500' height='60' fill='%234299e1' rx='8'/%3E%3Crect x='50' y='130' width='200' height='200' fill='%23e2e8f0' rx='8'/%3E%3Crect x='270' y='130' width='280' height='95' fill='%23e2e8f0' rx='8'/%3E%3Crect x='270' y='235' width='280' height='95' fill='%23e2e8f0' rx='8'/%3E%3Ctext x='300' y='200' fill='%236b7280' font-family='Arial' font-size='14'%3EStorefront Preview%3C/text%3E%3C/svg%3E";

    const features = [
        {
            title: "AI-Powered Design",
            description: "Smart recommendations for layouts and colors",
            icon: Sparkles,
            color: "text-purple-500"
        },
        {
            title: "Mobile Optimized",
            description: "Perfect on every device automatically",
            icon: Smartphone,
            color: "text-blue-500"
        },
        {
            title: "No-Code Builder",
            description: "Drag, drop, and customize with ease",
            icon: Code,
            color: "text-green-500"
        },
        {
            title: "Brand Customization",
            description: "Match your unique brand identity",
            icon: Palette,
            color: "text-pink-500"
        }
    ];

    const designTemplates = [
        { name: "Minimal", style: "Clean & Modern", popular: true },
        { name: "Luxury", style: "Premium & Elegant", popular: false },
        { name: "Vibrant", style: "Bold & Creative", popular: true },
        { name: "Classic", style: "Timeless & Professional", popular: false }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('aos').then((AOS) => {
                AOS.init({
                    duration: 800,
                    once: true,
                });
            });
        }
    }, []);

    return (
        <>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            
            {/* Main Feature Section */}
            <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-100 to-yellow-100 rounded-full blur-3xl opacity-30 translate-y-32 -translate-x-32"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto gap-12">
                        
                        {/* Content Side */}
                        <div className="flex-1 lg:pr-8">
                            {/* Badge */}
                            <div 
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                                data-aos="fade-left"
                            >
                                <Sparkles className="w-4 h-4" />
                                AI-Powered Design
                            </div>

                            <h2
                                className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight"
                                data-aos="fade-left"
                                data-aos-delay="100"
                            >
                                Unmatched Storefront Design
                            </h2>
                            
                            <p
                                className="text-lg text-gray-600 mb-8 leading-relaxed"
                                data-aos="fade-left"
                                data-aos-delay="200"
                            >
                                Build high-converting storefronts and product pages customized for your brand. 
                                Leverage built-in AI features and exceptional no-code creation to turn your vision into reality even faster.
                            </p>

                            {/* Dynamic Feature Highlight */}
                            <div className="mb-8" data-aos="fade-left" data-aos-delay="300">
                                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
                                    <div className={`p-3 rounded-lg bg-gray-50 ${features[activeFeature].color}`}>
                                        {React.createElement(features[activeFeature].icon, { className: "w-6 h-6" })}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{features[activeFeature].title}</h4>
                                        <p className="text-sm text-gray-600">{features[activeFeature].description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8" data-aos="fade-left" data-aos-delay="350">
                                {features.map((feature, index) => (
                                    <div 
                                        key={index}
                                        className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                                            activeFeature === index 
                                                ? 'bg-blue-50 border border-blue-200' 
                                                : 'bg-gray-50 hover:bg-gray-100'
                                        }`}
                                        onClick={() => setActiveFeature(index)}
                                    >
                                        {React.createElement(feature.icon, { className: `w-5 h-5 ${feature.color}` })}
                                        <span className="text-sm font-medium text-gray-700">{feature.title}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-left" data-aos-delay="400">
                                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                                    <Palette className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                    Design Your Store
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                
                                <button 
                                    onClick={() => setIsVideoPlaying(true)}
                                    className="flex items-center justify-center gap-2 bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
                                >
                                    <Play className="w-4 h-4" />
                                    Watch Tutorial
                                </button>
                            </div>
                        </div>

                        {/* Visual Side */}
                        <div className="flex-1 relative">
                            {/* Main Storefront Preview */}
                            <div 
                                className="relative group"
                                data-aos="fade-right"
                                data-aos-delay="600"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                                    <img
                                        src={mockStorefrontImage}
                                        alt="Storefront Design Preview"
                                        className="w-full h-auto object-cover"
                                    />
                                    
                                    {/* Floating Feature Cards */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <Eye className="w-4 h-4 text-green-500" />
                                            <span className="text-xs font-medium text-gray-700">Live Preview</span>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-yellow-500" />
                                            <span className="text-xs font-medium text-gray-700">Auto-Optimize</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div 
                                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                                data-aos="fade-up"
                                data-aos-delay="800"
                            >
                                <div className="text-2xl font-bold text-gray-900">98%</div>
                                <div className="text-sm text-gray-600">Mobile Ready</div>
                            </div>
                            
                            <div 
                                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                                data-aos="fade-down"
                                data-aos-delay="900"
                            >
                                <div className="text-2xl font-bold text-gray-900">5min</div>
                                <div className="text-sm text-gray-600">Setup Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Templates Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Style</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Start with professionally designed templates and customize them to match your brand perfectly.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {designTemplates.map((template, index) => (
                            <div 
                                key={index}
                                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {template.popular && (
                                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                                        Popular
                                    </div>
                                )}
                                
                                <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                                    <Palette className="w-8 h-8 text-gray-500 group-hover:text-blue-600 transition-colors" />
                                </div>
                                
                                <h4 className="font-semibold text-gray-900 mb-2">{template.name}</h4>
                                <p className="text-sm text-gray-600 mb-4">{template.style}</p>
                                
                                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                                    <Check className="w-4 h-4" />
                                    Select Template
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isVideoPlaying && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="relative bg-white rounded-2xl max-w-4xl w-full aspect-video">
                        <button
                            onClick={() => setIsVideoPlaying(false)}
                            className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
                        >
                            ✕
                        </button>
                        <div className="w-full h-full flex items-center justify-center rounded-2xl bg-gray-100">
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                                <p className="text-gray-600">Tutorial video would load here</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </>
    );
};

export default FeatureSection;