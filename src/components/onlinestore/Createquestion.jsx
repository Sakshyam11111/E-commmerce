import React, { useState, useEffect } from 'react';
import Image1 from "../../assets/skin1.avif";
import Image2 from "../../assets/create2.avif";
import Image3 from "../../assets/create3.avif";
import Image4 from "../../assets/create4.avif";
import { FaPlus, FaMinus, FaSearch, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const Createquestion = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [domainInput, setDomainInput] = useState('');
    const [isVisible, setIsVisible] = useState({
        accordion: false,
        domain: false,
        plans: false,
        advice: false,
        support: false
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerPoint = window.innerHeight * 0.8;

            // Accordion section
            const accordionSection = document.getElementById('accordion-section');
            if (accordionSection && accordionSection.getBoundingClientRect().top < triggerPoint) {
                setIsVisible(prev => ({ ...prev, accordion: true }));
            }

            // Domain section
            const domainSection = document.getElementById('domain-section');
            if (domainSection && domainSection.getBoundingClientRect().top < triggerPoint) {
                setIsVisible(prev => ({ ...prev, domain: true }));
            }

            // Plans section
            const plansSection = document.getElementById('plans-section');
            if (plansSection && plansSection.getBoundingClientRect().top < triggerPoint) {
                setIsVisible(prev => ({ ...prev, plans: true }));
            }

            // Advice section
            const adviceSection = document.getElementById('advice-section');
            if (adviceSection && adviceSection.getBoundingClientRect().top < triggerPoint) {
                setIsVisible(prev => ({ ...prev, advice: true }));
            }

            // Support section
            const supportSection = document.getElementById('support-section');
            if (supportSection && supportSection.getBoundingClientRect().top < triggerPoint) {
                setIsVisible(prev => ({ ...prev, support: true }));
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for domain:', domainInput);
    };

    const items = [
        { 
            title: 'Choose a template or use the power of AI', 
            description: 'Jumpstart your business with a template designed for your industry, or generate a professional website with AI in minutes.',
            icon: '🎨'
        },
        { 
            title: 'Drag and drop editor', 
            description: 'Effortlessly customize your website by dragging elements into place. Create a site that looks great on mobile and desktop.',
            icon: '✨'
        },
        { 
            title: 'Top-to-bottom customization', 
            description: 'Create a superior shopping experience through customized galleries, product pages and checkout. Own every detail of your store.',
            icon: '⚡'
        },
        { 
            title: 'AI tools automations', 
            description: 'Reach your goals faster with an assist from AI. Instantly generate content. Automate emails. Create faster, and give yourself more time to sell.',
            icon: '🤖'
        },
    ];

    const plans = [
        {
            name: 'Core',
            storage: 'Unlimited storage',
            domain: 'Free domain for 1 year',
            payments: 'Accept payments',
            products: '50,000 products',
            dropshipping: '25 dropshipping products*',
            marketing: 'Basic marketing suite',
            analytics: 'Basic site analytics',
            cartRecovery: 'Abandoned cart recovery',
            stockNotifications: '10 back-in-stock notifications',
            marketplaces: 'Sell on marketplaces',
            socialChannels: 'Sell on social channels',
            price: '$29',
            recommended: false
        },
        {
            name: 'Business',
            storage: '100 GB storage space',
            domain: 'Free domain for 1 year',
            payments: 'Accept payments',
            products: '50,000 products',
            dropshipping: '250 dropshipping products*',
            marketing: 'Standard marketing suite',
            analytics: 'Standard site analytics',
            cartRecovery: 'Abandoned cart recovery',
            stockNotifications: 'Unlimited back-in-stock notifications',
            marketplaces: 'Sell on marketplaces',
            socialChannels: 'Sell on social channels',
            taxTransactions: '100 automatic tax transactions*',
            currencies: 'Primary currency + 5 additional currencies',
            price: '$59',
            recommended: true
        },
        {
            name: 'Business Elite',
            storage: 'Unlimited storage',
            domain: 'Free domain for 1 year',
            payments: 'Accept payments',
            products: '50,000 products',
            dropshipping: '50,000 dropshipping products*',
            marketing: 'Advanced marketing suite',
            analytics: 'Advanced site analytics',
            reports: 'Customized reports',
            cartRecovery: 'Abandoned cart recovery',
            stockNotifications: 'Unlimited back-in-stock notifications',
            marketplaces: 'Sell on marketplaces',
            socialChannels: 'Sell on social channels',
            taxTransactions: '500 automatic tax transactions*',
            currencies: 'Primary currency + 10 additional currencies',
            price: '$159',
            recommended: false
        },
    ];

    const adviceCards = [
        {
            title: '33 examples of the best eCommerce website designs',
            backgroundColor: 'from-orange-400 to-red-500',
            image: Image2,
            category: 'Design'
        },
        {
            title: '8 proven ways to drive traffic to your online store',
            backgroundColor: 'from-amber-400 to-yellow-500',
            image: Image3,
            category: 'Marketing'
        },
        {
            title: '19 profitable eCommerce business ideas',
            backgroundColor: 'from-blue-400 to-indigo-500',
            image: Image4,
            category: 'Business'
        },
    ];

    const supportCards = [
        {
            title: 'Find quick solutions',
            description: 'Get answers from tutorials and articles in the Wix Help Center.',
            linkText: 'Go to Help Center',
            icon: '📚',
            gradient: 'from-blue-50 to-indigo-50'
        },
        {
            title: 'Contact us',
            description: 'Get round-the-clock support by chat or schedule a call with Customer Care.',
            linkText: 'Log in & Chat With Us',
            icon: '💬',
            gradient: 'from-emerald-50 to-teal-50'
        },
        {
            title: 'Hire a pro',
            description: 'Get a pro to do it for you—from site creation to eCommerce growth.',
            linkText: 'Browse All Services',
            icon: '👨‍💼',
            gradient: 'from-purple-50 to-pink-50'
        },
    ];

    const AnimatedSection = ({ children, isVisible, delay = 0, className = "" }) => (
        <div 
            className={`
                ${className}
                transition-all duration-700 ease-out transform
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
            style={{ transitionDelay: `${delay * 100}ms` }}
        >
            {children}
        </div>
    );

    return (
        <>
            {/* Enhanced Responsive Accordion Section */}
            <section 
                id="accordion-section"
                className="relative min-h-screen sm:min-h-[80vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col lg:flex-row items-center justify-center py-8 sm:py-12 lg:py-16 px-4 overflow-hidden"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute -bottom-40 -left-40 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-gradient-to-r from-emerald-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-12">
                    {/* Image Column - Responsive */}
                    <AnimatedSection isVisible={isVisible.accordion} delay={0.2}>
                        <div className="relative w-full lg:w-1/2 order-first lg:order-last">
                            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-2xl aspect-square sm:aspect-[4/3] lg:aspect-[3/2]">
                                <img
                                    src={Image1}
                                    alt="Product showcase"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 sm:from-black/20 via-transparent to-transparent"></div>
                            </div>
                            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-20 animate-ping hidden lg:block"></div>
                        </div>
                    </AnimatedSection>

                    {/* Content Column - Responsive */}
                    <AnimatedSection isVisible={isVisible.accordion} delay={0}>
                        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight text-center lg:text-left">
                                An online store builder made for business
                            </h2>
                            
                            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                                {items.map((item, index) => (
                                    <div 
                                        key={index}
                                        className={`
                                            group relative bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 
                                            border border-white/20 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-500 
                                            hover:-translate-y-1 ${isVisible.accordion ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                                        `}
                                        style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                                    >
                                        <div
                                            className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer py-2 sm:py-4 w-full gap-3 sm:gap-4"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <div className="flex items-start sm:items-center gap-3 sm:gap-4 w-full">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                                                    {item.icon}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 transition-transform duration-300 group-hover:rotate-180 ml-auto sm:ml-0">
                                                {openIndex === index ? <FaMinus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" /> : <FaPlus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />}
                                            </div>
                                        </div>
                                        
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-3 sm:mt-4 pl-2 sm:pl-16' : 'max-h-0 opacity-0'}`}>
                                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.description}</p>
                                        </div>
                                        
                                        {/* Bottom border animation */}
                                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-500"></div>
                                    </div>
                                ))}
                            </div>

                            <AnimatedSection isVisible={isVisible.accordion} delay={0.6}>
                                <button className="
                                    group relative overflow-hidden w-full lg:w-48 px-6 sm:px-8 py-3 sm:py-4 
                                    bg-gradient-to-r from-black to-gray-800 text-white font-semibold 
                                    text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl 
                                    hover:shadow-2xl transform hover:-translate-y-0.5 
                                    transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3
                                ">
                                    <span>Build Your Store</span>
                                    <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </button>
                            </AnimatedSection>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Enhanced Responsive Domain Search Section */}
            <section 
                id="domain-section"
                className="relative py-12 sm:py-16 lg:py-20 px-4 mx-auto max-w-6xl mt-12 sm:mt-16 bg-gradient-to-br from-orange-400 via-red-400 to-orange-500 rounded-2xl sm:rounded-3xl shadow-lg lg:shadow-2xl overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="relative z-10 text-center">
                    <AnimatedSection isVisible={isVisible.domain} delay={0}>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
                            Make your store official with your own
                        </h2>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-8">
                            domain name
                        </h3>
                    </AnimatedSection>

                    <AnimatedSection isVisible={isVisible.domain} delay={0.2}>
                        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
                            <div className="relative w-full sm:w-80 lg:w-96 flex-shrink-0">
                                <FaSearch className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
                                <input
                                    type="text"
                                    value={domainInput}
                                    onChange={(e) => setDomainInput(e.target.value)}
                                    placeholder="Type the domain you want"
                                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-full bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white text-sm sm:text-base lg:text-lg placeholder-gray-500 transition-all duration-300"
                                />
                            </div>
                            <button
                                type="submit"
                                className="
                                    group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 
                                    font-semibold text-sm sm:text-base lg:text-lg rounded-full shadow-lg hover:shadow-xl 
                                    transform hover:-translate-y-0.5 transition-all duration-300 
                                    flex items-center justify-center gap-2 whitespace-nowrap min-w-[100px] sm:min-w-[120px]
                                "
                            >
                                <span>Search</span>
                                <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>
                        </form>
                    </AnimatedSection>

                    <AnimatedSection isVisible={isVisible.domain} delay={0.4}>
                        <p className="text-white/90 text-xs sm:text-sm lg:text-base font-medium px-4">
                            Enjoy a free one-year domain voucher with your Premium plan. 
                            <span className="text-yellow-200 font-semibold"> 🚀</span>
                        </p>
                    </AnimatedSection>

                    {/* Responsive floating elements */}
                    <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 bg-white/20 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-10 sm:w-16 h-10 sm:h-16 bg-white/10 rounded-full animate-pulse"></div>
                </div>
            </section>

            {/* Enhanced Responsive Pricing Plans Section */}
            <section 
                id="plans-section"
                className="relative py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center mt-16 sm:mt-20 overflow-hidden"
            >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="relative z-10 w-full max-w-6xl text-center px-4">
                    <AnimatedSection isVisible={isVisible.plans} delay={0}>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-4">
                            Choose your perfect plan
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 sm:mb-16 px-2">
                            Select the pricing plan that best fits your business needs
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full mb-8 sm:mb-12 px-2">
                        {plans.map((plan, index) => (
                            <AnimatedSection 
                                key={index} 
                                isVisible={isVisible.plans} 
                                delay={0.1 + index * 0.1}
                                className="group"
                            >
                                <div className={`
                                    relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 
                                    border border-white/20 shadow-lg sm:shadow-2xl hover:shadow-3xl transition-all duration-700 
                                    hover:-translate-y-2 ${plan.recommended ? 'ring-2 ring-orange-400/30 lg:scale-105' : ''}
                                `}>
                                    {plan.recommended && (
                                        <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap">
                                                RECOMMENDED
                                            </span>
                                        </div>
                                    )}
                                    
                                    <div className="text-center space-y-4 sm:space-y-6">
                                        <div>
                                            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 sm:mb-3">
                                                {plan.name}
                                            </h3>
                                            <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2 sm:mb-3">
                                                {plan.price}
                                            </div>
                                            <p className="text-gray-300 text-xs sm:text-sm lg:text-base">per month</p>
                                        </div>

                                        <div className="space-y-2 sm:space-y-3 text-left max-h-48 lg:max-h-56 overflow-y-auto custom-scrollbar">
                                            {[
                                                plan.storage, plan.domain, plan.payments, plan.products,
                                                plan.dropshipping, plan.marketing, plan.analytics,
                                                plan.cartRecovery || plan.reports, plan.stockNotifications,
                                                plan.marketplaces, plan.socialChannels,
                                                plan.taxTransactions, plan.currencies
                                            ].filter(Boolean).slice(0, 8).map((feature, fIndex) => (
                                                <div key={fIndex} className="flex items-center gap-2 sm:gap-3 group-hover:text-white/80 transition-colors px-1">
                                                    <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                                                    <span className="text-gray-200 text-xs sm:text-sm lg:text-base leading-tight">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <button className={`
                                            w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold 
                                            transition-all duration-300 flex items-center justify-center gap-2 
                                            relative overflow-hidden text-sm sm:text-base
                                            ${plan.recommended 
                                                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5' 
                                                : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
                                            }
                                        `}>
                                            <span>Get Started</span>
                                            <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                            {plan.recommended && (
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection isVisible={isVisible.plans} delay={0.4}>
                        <div className="space-y-3 sm:space-y-4 px-2">
                            <button className="
                                group relative overflow-hidden px-6 sm:px-8 sm:px-10 py-3 sm:py-4 bg-white/20 
                                backdrop-blur-sm text-white font-semibold text-sm sm:text-base lg:text-xl 
                                rounded-xl sm:rounded-2xl border border-white/30 hover:bg-white/30 
                                hover:border-white/50 transform hover:-translate-y-0.5 
                                transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 mx-auto
                            ">
                                <span>Compare All Plans</span>
                                <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>
                            <p className="text-xs sm:text-sm text-gray-400 px-2">* Integrated by Modalyst ** Billed annually</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Enhanced Responsive Expert Advice Section */}
            <section 
                id="advice-section"
                className="relative py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center mt-16 sm:mt-20"
            >
                <div className="w-full max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6 px-2">
                        <AnimatedSection isVisible={isVisible.advice} delay={0}>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                                Expert advice to put you ahead
                            </h2>
                        </AnimatedSection>
                        <AnimatedSection isVisible={isVisible.advice} delay={0.2}>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
                                Get advice from industry experts and thought leaders. Check out our blog for the latest eCommerce trends, 
                                selling and marketing tips and in-depth tutorials from Wix Learn.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection isVisible={isVisible.advice} delay={0.4}>
                            <a href="#" className="
                                group inline-flex items-center gap-2 text-lg sm:text-xl lg:text-2xl font-semibold 
                                text-blue-600 hover:text-blue-700 transition-colors duration-300 px-2
                            ">
                                <span>Discover more on the Wix Blog</span>
                                <FaArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2">
                        {adviceCards.map((card, index) => (
                            <AnimatedSection 
                                key={index} 
                                isVisible={isVisible.advice} 
                                delay={0.3 + index * 0.1}
                                className="group"
                            >
                                <div className={`
                                    relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 lg:p-8 h-full 
                                    bg-gradient-to-br ${card.backgroundColor} text-white 
                                    hover:shadow-xl hover:-translate-y-1 transition-all duration-700
                                `}>
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    
                                    <div className="relative z-10 space-y-4 sm:space-y-6 h-full">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                            <span className="text-lg sm:text-xl">{card.category}</span>
                                        </div>
                                        
                                        <div className="aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3">
                                            <img 
                                                src={card.image} 
                                                alt={card.title} 
                                                className="w-full h-full object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>
                                        
                                        <div className="space-y-2 sm:space-y-3 flex-1 flex flex-col justify-end">
                                            <h3 className="text-base sm:text-lg lg:text-xl font-semibold leading-tight line-clamp-2">{card.title}</h3>
                                            <button className="
                                                w-full group/btn relative overflow-hidden px-4 sm:px-6 py-2 sm:py-3 
                                                bg-white/20 backdrop-blur-sm text-white font-medium 
                                                rounded-lg sm:rounded-xl border border-white/30 hover:bg-white/30 
                                                transition-all duration-300 flex items-center justify-center gap-2
                                                text-xs sm:text-sm
                                            ">
                                                <span>Read Article</span>
                                                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Responsive Customer Support Section */}
            <section 
                id="support-section"
                className="relative py-12 sm:py-16 lg:py-20 px-4 bg-white flex flex-col items-center justify-center mt-16 sm:mt-20 mb-12 sm:mb-20"
            >
                <div className="w-full max-w-7xl mx-auto text-center">
                    <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16 px-2">
                        <AnimatedSection isVisible={isVisible.support} delay={0}>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                                Wherever you are, we're here for you
                            </h2>
                        </AnimatedSection>
                        <AnimatedSection isVisible={isVisible.support} delay={0.2}>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl lg:text-4xl font-semibold text-gray-700">
                                Customer support 24/7
                            </h3>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full px-2">
                        {supportCards.map((card, index) => (
                            <AnimatedSection 
                                key={index} 
                                isVisible={isVisible.support} 
                                delay={0.1 + index * 0.1}
                                className="group"
                            >
                                <div className={`
                                    relative h-full p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-lg border 
                                    border-gray-100 bg-gradient-to-br ${card.gradient} hover:shadow-xl hover:-translate-y-1 
                                    transition-all duration-700 group-hover:scale-[1.02] flex flex-col
                                `}>
                                    <div className="absolute inset-0 bg-white/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    
                                    <div className="relative z-10 space-y-4 sm:space-y-6 h-full flex flex-col justify-between">
                                        <div className="space-y-3 sm:space-y-4 flex-shrink-0">
                                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto text-2xl sm:text-3xl mb-4 sm:mb-6">
                                                {card.icon}
                                            </div>
                                            
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">{card.title}</h3>
                                            
                                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{card.description}</p>
                                        </div>
                                        
                                        <a href="#" className="
                                            inline-flex items-center gap-2 text-blue-600 font-semibold 
                                            hover:text-blue-700 transition-colors duration-300 group/link
                                            justify-center sm:justify-end text-sm sm:text-base
                                        ">
                                            <span>{card.linkText}</span>
                                            <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Styles for Responsive Scrollbar */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
                }
                
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 2px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.5);
                }
                
                @media (max-width: 640px) {
                    .line-clamp-2 {
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                }
            `}</style>
        </>
    );
};

export default Createquestion;