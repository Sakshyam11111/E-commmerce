import React, { useState, useEffect } from 'react';
import { Plus, Minus, ShoppingBag, Zap, Package, Download, RotateCcw } from 'lucide-react';

const ProductSelling = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://unpkg.com/aos@next/dist/aos.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.AOS.init({
                duration: 1000,
                once: true,
            });
        };

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    useEffect(() => {
        setCurrentImage(items[0].image);
    }, []);

    const toggleAccordion = (index, image) => {
        setOpenIndex(openIndex === index ? null : index);
        setImageLoaded(false);
        setCurrentImage(image);
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const getIcon = (index) => {
        const icons = [ShoppingBag, Package, Zap, Download, RotateCcw];
        const IconComponent = icons[index];
        return <IconComponent className="w-6 h-6" />;
    };

    const items = [
        { 
            title: 'Physical products', 
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
            description: 'Add an extensive catalog of products to your online store with up to 1,000 variants each. Import and export CSV files with products or seamlessly migrate your catalog with the Cart2Cart app.',
            highlight: 'Up to 1,000 variants'
        },
        { 
            title: 'Dropshipping', 
            image: 'https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=800&h=600&fit=crop',
            description: 'Add ready-to-sell products from suppliers and let them take care of fulfillment while you focus on marketing and customer service.',
            highlight: 'Zero inventory risk'
        },
        { 
            title: 'Print on demand', 
            image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&h=600&fit=crop',
            description: 'Add your designs to hundreds of high-quality products, from t-shirts to headphones and let suppliers ship your custom merchandise directly to customers.',
            highlight: 'Custom designs'
        },
        { 
            title: 'Digital products', 
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
            description: 'Sell digital products, such as music files, ebooks, online courses, images or gift cards with instant delivery.',
            highlight: 'Instant delivery'
        },
        { 
            title: 'Subscriptions', 
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
            description: 'Easily create and manage recurring products and sell subscriptions to generate a steady, predictable revenue stream.',
            highlight: 'Recurring revenue'
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4">
            <style>
                {`
                    @import url('https://unpkg.com/aos@next/dist/aos.css');
                `}
            </style>
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative order-2 lg:order-1" data-aos="fade-right">
                        <div className="relative group">
                            {/* Background decorative elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-orange-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition-all duration-500"></div>
                            
                            {/* Main image container */}
                            <div className="relative bg-white rounded-2xl p-2 shadow-2xl overflow-hidden">
                                <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden bg-gray-100">
                                    {!imageLoaded && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                    <img 
                                        src={currentImage} 
                                        alt="Product showcase" 
                                        className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                                        onLoad={handleImageLoad}
                                    />
                                    
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                    
                                    {/* Floating badge */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-lg">
                                        {items[openIndex]?.highlight}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Decorative dots */}
                            <div className="absolute -bottom-6 -right-6 grid grid-cols-3 gap-2 opacity-60">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="order-1 lg:order-2 space-y-8" data-aos="fade-left">
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                                <Package className="w-4 h-4" />
                                <span>Product Solutions</span>
                            </div>
                            
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Sell your own products, or{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    find products to sell
                                </span>
                            </h2>
                            
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Choose from multiple selling options to match your business model and start generating revenue today.
                            </p>
                        </div>

                        {/* Accordion */}
                        <div className="space-y-2">
                            {items.map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`border rounded-2xl transition-all duration-300 ${
                                        openIndex === index 
                                            ? 'border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg' 
                                            : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                                    }`}
                                >
                                    <div
                                        className="flex justify-between items-center p-6 cursor-pointer group"
                                        onClick={() => toggleAccordion(index, item.image)}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className={`p-3 rounded-xl transition-all duration-300 ${
                                                openIndex === index 
                                                    ? 'bg-blue-600 text-white shadow-lg scale-110' 
                                                    : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                                            }`}>
                                                {getIcon(index)}
                                            </div>
                                            <div>
                                                <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                                                    openIndex === index ? 'text-blue-900' : 'text-gray-900'
                                                }`}>
                                                    {item.title}
                                                </h3>
                                                {openIndex === index && (
                                                    <div className="flex items-center space-x-2 mt-1">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                        <span className="text-sm text-green-600 font-medium">Active</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className={`p-2 rounded-full transition-all duration-300 ${
                                            openIndex === index 
                                                ? 'bg-blue-600 text-white shadow-lg rotate-180' 
                                                : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                                        }`}>
                                            {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                        </div>
                                    </div>
                                    
                                    {openIndex === index && (
                                        <div className="px-6 pb-6 animate-in slide-in-from-top duration-300">
                                            <div className="pl-16">
                                                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                                    {item.description}
                                                </p>
                                                <div className="flex items-center space-x-4">
                                                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                                                        <span className="text-sm text-gray-600">Best for:</span>
                                                        <span className="ml-2 font-medium text-gray-900">{item.highlight}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="space-y-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                                    <span>Start Selling</span>
                                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                                        →
                                    </div>
                                </button>
                                
                                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                                    <span>Learn More</span>
                                </button>
                            </div>
                            
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">500K+</div>
                                    <div className="text-sm text-gray-600">Products Sold</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                                    <div className="text-sm text-gray-600">Support</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">99.9%</div>
                                    <div className="text-sm text-gray-600">Uptime</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSelling;