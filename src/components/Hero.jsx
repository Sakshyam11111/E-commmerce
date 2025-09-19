import React, { useEffect, useState } from 'react';
import { ShoppingCart, TrendingUp, Users, Zap, Play, Star, Check } from 'lucide-react';

const Hero = () => {
    const [currentFeature, setCurrentFeature] = useState(0);

    const features = [
        "Zero Transaction Fees",
        "Advanced Analytics",
        "Mobile Optimized",
        "24/7 Support"
    ];

    const stats = [
        { number: "50K+", label: "Active Stores" },
        { number: "99.9%", label: "Uptime" },
        { number: "24/7", label: "Support" },
        { number: "Rs2M+", label: "Sales Generated" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFeature((prev) => (prev + 1) % features.length);
        }, 2000);
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

    const scrollToDemo = () => {
        document.getElementById('demo-section')?.scrollIntoView({ 
            behavior: 'smooth' 
        });
    };

    return (
        <>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Trust Indicators */}
                        <div className="flex justify-center items-center gap-2 mb-6" data-aos="fade-down">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-sm opacity-80">Trusted by 50,000+ businesses</span>
                        </div>

                        {/* Main Heading */}
                        <h1
                            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight"
                            data-aos="fade-up"
                            data-aos-delay="0"
                        >
                            BUILD YOUR DREAM
                            <br />
                            <span className="text-4xl md:text-6xl text-cyan-300">ECOMMERCE STORE</span>
                        </h1>

                        {/* Dynamic Feature Showcase */}
                        <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
                            <p className="text-xl md:text-2xl mb-4 opacity-90">
                                Start selling immediately. Grow without limits.
                            </p>
                            <div className="h-12 flex items-center justify-center">
                                <span className="text-lg font-semibold text-cyan-300 transition-all duration-500">
                                    ✨ {features[currentFeature]}
                                </span>
                            </div>
                        </div>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center gap-3 mb-8" data-aos="fade-up" data-aos-delay="300">
                            {[
                                { icon: ShoppingCart, text: "Easy Setup" },
                                { icon: TrendingUp, text: "Analytics" },
                                { icon: Users, text: "Customer Management" },
                                { icon: Zap, text: "Fast & Secure" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                                    <item.icon className="w-4 h-4" />
                                    <span className="text-sm font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" data-aos="fade-up" data-aos-delay="400">
                            <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Create Your Store
                                    <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>
                            
                            <button 
                                onClick={scrollToDemo}
                                className="flex items-center gap-2 bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white hover:scale-105"
                            >
                                <Play className="w-5 h-5" />
                                Watch Demo
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="text-sm opacity-70" data-aos="fade-up" data-aos-delay="500">
                            <p className="mb-2">🔒 SSL Secured • 💳 PCI Compliant • 📱 Mobile Ready</p>
                            <p>No setup fees • Cancel anytime • 14-day free trial</p>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Preview */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
                        Everything You Need to Succeed
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Instant Setup",
                                description: "Get your store online in minutes, not days",
                                icon: Zap,
                                features: ["One-click installation", "Pre-built templates", "Drag & drop editor"]
                            },
                            {
                                title: "Powerful Analytics",
                                description: "Track sales, customers, and growth metrics",
                                icon: TrendingUp,
                                features: ["Real-time dashboard", "Sales reports", "Customer insights"]
                            },
                            {
                                title: "Scale Globally",
                                description: "Reach customers worldwide with built-in tools",
                                icon: Users,
                                features: ["Multi-currency", "International shipping", "24/7 support"]
                            }
                        ].map((feature, index) => (
                            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" data-aos="fade-up" data-aos-delay={index * 100}>
                                <feature.icon className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 mb-6">{feature.description}</p>
                                <ul className="space-y-2">
                                    {feature.features.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <Check className="w-4 h-4 text-green-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </>
    );
};

export default Hero;