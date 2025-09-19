import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
    {
        quote: "When I launched my website, I was so pleased and excited to see how many amazing products and features were available. The platform exceeded my expectations.",
        name: "Zamar Martinez",
        business: "Z. Jewelers",
        rating: 5,
        revenue: "Rs50k+ monthly"
    },
    {
        quote: "I went from selling to my town to selling across the country in one week. It's a whole new business with incredible reach.",
        name: "Rand Pitts",
        business: "Evolve",
        rating: 5,
        revenue: "Rs75k+ monthly"
    },
    {
        quote: "This platform has transformed my online presence! I can't believe how easy it is to manage my store and track analytics.",
        name: "Emily Smith",
        business: "Fashion Boutique",
        rating: 5,
        revenue: "Rs30k+ monthly"
    },
    {
        quote: "The tools provided allowed me to create a beautiful site without any coding skills. The drag-and-drop interface is incredible.",
        name: "James Lee",
        business: "Tech Store",
        rating: 5,
        revenue: "Rs60k+ monthly"
    },
    {
        quote: "I love how customizable everything is! My store looks exactly how I envisioned it, and the results speak for themselves.",
        name: "Sarah Johnson",
        business: "Home Decor",
        rating: 5,
        revenue: "Rs40k+ monthly"
    },
    {
        quote: "The platform has made it simple to sell online. I'm thrilled with the support and resources available to grow my business.",
        name: "Michael Brown",
        business: "Gadget Hub",
        rating: 5,
        revenue: "Rs85k+ monthly"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
        setIsAutoPlaying(false);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
        setIsAutoPlaying(false);
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                        <Star className="w-5 h-5 text-yellow-500 mr-2 fill-current" />
                        <span className="text-slate-600 font-medium">Trusted by 1M+ businesses</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-slate-800 via-purple-800 to-slate-900 bg-clip-text text-transparent">
                            Powering eCommerce
                        </span>
                        <br />
                        <span className="text-slate-800">dreams worldwide</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        See how entrepreneurs are transforming their businesses and achieving remarkable growth
                    </p>
                </div>

                {/* Main testimonial display */}
                <div className={`transform transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="relative max-w-4xl mx-auto">
                        {/* Navigation arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white/80 backdrop-blur-sm hover:bg-white border border-white/20 rounded-full p-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 z-10"
                        >
                            <ChevronLeft className="w-6 h-6 text-slate-600" />
                        </button>
                        
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white/80 backdrop-blur-sm hover:bg-white border border-white/20 rounded-full p-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 z-10"
                        >
                            <ChevronRight className="w-6 h-6 text-slate-600" />
                        </button>

                        {/* Testimonial card */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20 relative overflow-hidden">
                            {/* Quote icon */}
                            <Quote className="w-16 h-16 text-purple-400 opacity-20 absolute top-8 right-8" />
                            
                            <div className="relative z-10">
                                {/* Stars */}
                                <div className="flex justify-center mb-6">
                                    {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed text-center mb-8 italic">
                                    "{testimonialsData[currentIndex].quote}"
                                </blockquote>

                                {/* Author info */}
                                <div className="flex items-center justify-center space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        {testimonialsData[currentIndex].name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-slate-800">
                                            {testimonialsData[currentIndex].name}
                                        </h3>
                                        <p className="text-slate-600 font-medium">
                                            {testimonialsData[currentIndex].business}
                                        </p>
                                        <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mt-1">
                                            {testimonialsData[currentIndex].revenue}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dots navigation */}
                <div className="flex justify-center mt-8 space-x-3">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? 'bg-purple-600 w-8'
                                    : 'bg-slate-300 hover:bg-slate-400'
                            }`}
                        />
                    ))}
                </div>

                {/* Bottom stats */}
                <div className={`transform transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
                        <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                1M+
                            </div>
                            <div className="text-slate-600 font-medium">Success Stories</div>
                        </div>
                        <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                Rs2B+
                            </div>
                            <div className="text-slate-600 font-medium">Revenue Generated</div>
                        </div>
                        <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                98%
                            </div>
                            <div className="text-slate-600 font-medium">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;