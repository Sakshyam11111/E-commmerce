import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, TrendingUp, Zap } from 'lucide-react';

const VisionToRevenue = () => {
    const [buttonHovered, setButtonHovered] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-200 overflow-hidden flex items-center justify-center">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
            </div>

            {/* Floating icons */}
            <div className="absolute inset-0 pointer-events-none">
                <Sparkles className={`absolute top-1/4 left-1/4 w-6 h-6 text-purple-600 transition-all duration-1000 ${mounted ? 'opacity-60 animate-bounce' : 'opacity-0'}`} style={{animationDelay: '0s'}} />
                <TrendingUp className={`absolute top-1/3 right-1/4 w-8 h-8 text-blue-600 transition-all duration-1000 ${mounted ? 'opacity-60 animate-bounce' : 'opacity-0'}`} style={{animationDelay: '1s'}} />
                <Zap className={`absolute bottom-1/3 left-1/6 w-7 h-7 text-pink-600 transition-all duration-1000 ${mounted ? 'opacity-60 animate-bounce' : 'opacity-0'}`} style={{animationDelay: '2s'}} />
                <Sparkles className={`absolute bottom-1/4 right-1/3 w-5 h-5 text-indigo-600 transition-all duration-1000 ${mounted ? 'opacity-60 animate-bounce' : 'opacity-0'}`} style={{animationDelay: '0.5s'}} />
            </div>

            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                {/* Main heading */}
                <div className={`transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                        <span className="bg-gradient-to-r from-slate-800 via-purple-800 to-slate-900 bg-clip-text text-transparent">
                            Transform your vision
                        </span>
                        <br />
                        <span className="text-slate-800">into </span>
                        <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                            revenue
                        </span>
                        <span className="text-slate-800">.</span>
                    </h1>
                </div>

                {/* Subtitle */}
                <div className={`transform transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Launch your digital empire with cutting-edge tools, stunning designs, and powerful analytics that convert visitors into loyal customers.
                    </p>
                </div>

                {/* CTA Button */}
                <div className={`transform transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <button
                        className="group relative bg-gradient-to-r from-black to-gray-800 hover:from-black hover:to-gray-800 text-white font-bold px-10 py-6 rounded-full flex items-center justify-center mx-auto transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                        onMouseEnter={() => setButtonHovered(true)}
                        onMouseLeave={() => setButtonHovered(false)}
                    >
                        {/* Button glow effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black to-gray-800 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                        
                        <span className="relative text-lg md:text-xl mr-2">Start Your Store</span>
                        <ChevronRight 
                            className={`relative w-6 h-6 transition-all duration-300 ${
                                buttonHovered ? 'transform translate-x-1 opacity-100' : 'opacity-70'
                            }`} 
                        />
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 transition-all duration-700 ${buttonHovered ? 'translate-x-full' : '-translate-x-full'}`}></div>
                        </div>
                    </button>
                </div>

                {/* Stats or features */}
                <div className={`transform transition-all duration-1000 delay-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="flex justify-center items-center space-x-8 mt-16 text-slate-600">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-slate-800">10K+</div>
                            <div className="text-sm">Active Stores</div>
                        </div>
                        <div className="w-px h-8 bg-slate-400"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-slate-800">Rs50M+</div>
                            <div className="text-sm">Revenue Generated</div>
                        </div>
                        <div className="w-px h-8 bg-slate-400"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-slate-800">24/7</div>
                            <div className="text-sm">Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-200 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default VisionToRevenue;