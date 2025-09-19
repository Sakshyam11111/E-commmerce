import React, { useState } from 'react';
import { FaSearch, FaGlobe, FaCheck, FaStar, FaArrowRight } from 'react-icons/fa';

const DomainSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = () => {
        if (!searchValue.trim()) return;

        setIsSearching(true);
        // Simulate search delay
        setTimeout(() => {
            setSuggestions([
                { domain: `${searchValue}.com`, price: 'Rs1400', available: true, popular: true },
                { domain: `${searchValue}.store`, price: 'Rs1900', available: true, popular: false },
                { domain: `${searchValue}.shop`, price: 'Rs2400', available: true, popular: false },
                { domain: `${searchValue}.online`, price: 'Rs1200', available: false, popular: false },
            ]);
            setIsSearching(false);
        }, 1500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const features = [
        "Free for first year",
        "SSL certificate included",
        "24/7 support",
        "Easy management"
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50"></div>
            <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-pink-200/40 rounded-full blur-2xl"></div>

            <div className="relative max-w-7xl mx-auto px-4">
                {/* Main Content */}
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-300/20 to-transparent rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-300/20 to-transparent rounded-full"></div>

                    <div className="relative z-10 text-center">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full mb-6 border border-yellow-200/50">
                                <FaGlobe className="text-orange-500" />
                                <span className="text-sm font-semibold text-orange-700">Domain Registration</span>
                                <FaStar className="text-yellow-500 text-xs" />
                            </div>

                            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                                Get the perfect domain
                            </h2>
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-yellow-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                                name for your store
                            </h2>

                            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Secure your brand with a memorable domain name.
                                <span className="font-semibold text-orange-600"> Free for the first year</span> with select website plans.
                            </p>
                        </div>

                        {/* Search Section */}
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                                <div className="relative flex-1 w-full">
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <FaGlobe className="text-lg" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Enter your dream domain name..."
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        className="w-full pl-12 pr-6 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg placeholder-gray-400"
                                    />
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                        <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                                            .com
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleSearch}
                                    disabled={isSearching || !searchValue.trim()}
                                    className="bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 text-white flex items-center px-8 py-4 rounded-2xl hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 font-semibold text-lg min-w-[140px] justify-center"
                                >
                                    {isSearching ? (
                                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                                    ) : (
                                        <>
                                            <FaSearch className="mr-2" />
                                            Search
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Popular suggestions */}
                            <div className="mt-6 flex flex-wrap justify-center gap-2">
                                <span className="text-sm text-gray-500 mr-2">Popular:</span>
                                {['mystore', 'shopnow', 'bestdeals', 'trendy'].map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        onClick={() => setSearchValue(suggestion)}
                                        className="text-sm bg-gray-100 hover:bg-orange-100 px-3 py-1 rounded-full transition-colors duration-200 text-gray-700 hover:text-orange-600"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Search Results */}
                        {suggestions.length > 0 && (
                            <div className="max-w-3xl mx-auto mb-8">
                                <h3 className="text-2xl font-bold mb-6 text-gray-800">Available Domains</h3>
                                <div className="grid gap-4">
                                    {suggestions.map((suggestion) => (
                                        <div
                                            key={suggestion.domain}
                                            className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-300 ${suggestion.available
                                                    ? 'border-green-200 bg-green-50/50 hover:bg-green-50 hover:shadow-md'
                                                    : 'border-gray-200 bg-gray-50/50 opacity-60'
                                                }`}
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-3 h-3 rounded-full ${suggestion.available ? 'bg-green-500' : 'bg-gray-400'
                                                    }`}></div>
                                                <span className="text-lg font-semibold text-gray-800">
                                                    {suggestion.domain}
                                                </span>
                                                {suggestion.popular && (
                                                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                                                        Popular
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center space-x-4">
                                                <span className="text-xl font-bold text-gray-800">
                                                    {suggestion.price}
                                                    <span className="text-sm text-gray-500 font-normal">/year</span>
                                                </span>
                                                {suggestion.available ? (
                                                    <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium flex items-center space-x-2">
                                                        <FaCheck className="text-sm" />
                                                        <span>Select</span>
                                                    </button>
                                                ) : (
                                                    <span className="text-gray-500 px-6 py-2">Taken</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Features */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {features.map((feature) => (
                                <div
                                    key={feature}
                                    className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                                        <FaCheck className="text-white text-lg" />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-700 text-center">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-12">
                            <button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center space-x-2 mx-auto">
                                <span>Browse All Extensions</span>
                                <FaArrowRight className="text-sm" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DomainSearch;