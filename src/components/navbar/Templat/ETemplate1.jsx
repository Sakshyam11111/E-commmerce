import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaStar, FaHeart, FaEdit } from 'react-icons/fa';
import { IoIosArrowDown, IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useMemo } from 'react';

import Image1 from "../../../assets/eCommerceWebsiteTemplates1.webp";
import Image2 from "../../../assets/eCommerceWebsiteTemplates2.webp";
import Image3 from "../../../assets/eCommerceWebsiteTemplates3.webp";
import Image4 from "../../../assets/eCommerceWebsiteTemplates4.webp";
import Image5 from "../../../assets/eCommerceWebsiteTemplates5.webp";
import Image6 from "../../../assets/eCommerceWebsiteTemplates6.webp";
import Image7 from "../../../assets/eCommerceWebsiteTemplates7.webp";
import Image8 from "../../../assets/eCommerceWebsiteTemplates8.webp";
import Image9 from "../../../assets/eCommerceWebsiteTemplates9.webp";
import Image10 from "../../../assets/eCommerceWebsiteTemplates10.webp";
import Image11 from "../../../assets/eCommerceWebsiteTemplates11.webp";
import Image12 from "../../../assets/eCommerceWebsiteTemplates12.webp";
import Image13 from "../../../assets/Fashion1.webp";
import Image14 from "../../../assets/Fashion2.webp";
import Image15 from "../../../assets/Fashion3.webp";
import Image16 from "../../../assets/Fashion4.webp";
import Image17 from "../../../assets/Fashion5.webp";
import Image18 from "../../../assets/Fashion6.webp";
import Image19 from "../../../assets/Fashion7.webp";
import Image20 from "../../../assets/Fashion8.webp";
import Image21 from "../../../assets/Fashion9.webp";
import Image22 from "../../../assets/e-1.jpg";
import Image23 from "../../../assets/Jew1.webp";
import Image24 from "../../../assets/Jew2.webp";
import Image25 from "../../../assets/Jew3.webp";
import Image26 from "../../../assets/Jew4.webp";
import Image27 from "../../../assets/Jew5.webp";
import Image28 from "../../../assets/Jew6.webp";
import Image29 from "../../../assets/Homedector1.webp";
import Image30 from "../../../assets/Homedector2.webp";
import Image31 from "../../../assets/Homedector3.webp";
import Image32 from "../../../assets/Homedector4.webp";
import Image33 from "../../../assets/Homedector5.webp";
import Image34 from "../../../assets/Homedector6.webp";
import Image35 from "../../../assets/Homedector7.webp";
import Image36 from "../../../assets/Homedector8.webp";
import Image37 from "../../../assets/Homedector9.webp";
import Image38 from "../../../assets/Homedector10.webp";
import Image39 from "../../../assets/beauty1.webp";
import Image40 from "../../../assets/beauty2.webp";
import Image41 from "../../../assets/beauty3.webp";
import Image42 from "../../../assets/beauty4.webp";
import Image43 from "../../../assets/beauty5.webp";
import Image44 from "../../../assets/beauty6.webp";
import Image45 from "../../../assets/beauty7.webp";
import Image46 from "../../../assets/beauty8.webp";
import Image47 from "../../../assets/beauty9.webp";
import Image48 from "../../../assets/Food1.webp";
import Image49 from "../../../assets/Food2.webp";
import Image50 from "../../../assets/Food3.webp";
import Image51 from "../../../assets/Food4.webp";
import Image52 from "../../../assets/Food5.webp";
import Image53 from "../../../assets/Food6.webp";
import Image54 from "../../../assets/Food7.webp";
import Image55 from "../../../assets/Food8.webp";
import Image56 from "../../../assets/Food9.webp";
import Image57 from "../../../assets/Food10.webp";
import Image58 from "../../../assets/Food11.webp";

const ETemplate1 = () => {
    const navigate = useNavigate();
    const [showAllTemplates, setShowAllTemplates] = useState(true);
    const [activeButton, setActiveButton] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('Recommended');
    const [showFilters, setShowFilters] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });

        // Scroll to top
        window.scrollTo(0, 0);
    }, []);

    // Handle template selection and routing
    const handleTemplateSelect = (templateTitle) => {
        switch (templateTitle) {
            case "Accessories Store":
                navigate('/accessories-store');
                break;
            case "Jewelry Boutique":
                navigate('/accessories-store');
                break;
            case "Backpack Store":
                navigate('/backpackstore');
                break;
            default:
                console.log('Selected template for preview:', templateTitle);
                break;
        }
    };

    // Filter and search templates
    const filteredTemplates = useMemo(() => {
        const getTemplates = () => {
            switch (activeButton) {
                case 'All':
                    return allTemplates;
                case 'Fashion & Clothing':
                    return fashionTemplates;
                case 'Jewelry & Accessories':
                    return jewelryAccessoriesTemplates;
                case 'Home & Decor':
                    return homeDecorTemplates;
                case 'Beauty & Wellness':
                    return beautyWellnessTemplates;
                case 'Food & Drinks':
                    return foodDrinksTemplates;
                case 'Sports & Outdoors':
                    return sportsOutdoorsTemplates;
                case 'Electronics':
                    return electronicsTemplates;
                default:
                    return allTemplates;
            }
        };

        let templates = getTemplates().filter(template =>
            template.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Apply sorting
        templates.sort((a, b) => {
            switch (sortBy) {
                case 'Newest':
                    // For demo purposes, we'll randomize - in real app, use actual dates
                    return Math.random() - 0.5;
                case 'Top Templates':
                    // Sort by rating first, then reviews
                    if (a.rating !== b.rating) {
                        return b.rating - a.rating;
                    }
                    return b.reviews - a.reviews;
                case 'Price: Low to High':
                    return parseFloat(a.price.replace('Rs', '')) - parseFloat(b.price.replace('Rs', ''));
                case 'Price: High to Low':
                    return parseFloat(b.price.replace('Rs', '')) - parseFloat(a.price.replace('Rs', ''));
                default:
                    return 0;
            }
        });

        return templates;
    }, [activeButton, searchTerm, sortBy]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Enhanced Header */}
            <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo/Title */}
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">T</span>
                            </div>
                            <h1 className="text-xl font-bold text-gray-900 hidden sm:block">
                                Template Marketplace
                            </h1>
                        </div>

                        {/* Desktop Search */}
                        <div className="hidden md:flex flex-1 max-w-md mx-8">
                            <div className="relative w-full">
                                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search templates..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors" aria-label="Filter">
                                <FaFilter size={18} />
                            </button>
                            <button
                                className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                                onClick={() => console.log('Get started clicked')}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden pb-4 border-t border-gray-100">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <input
                                    type="text"
                                    placeholder="Search templates..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Hero Section */}
            <section className="pt-20 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1
                        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 bg-clip-text text-transparent mb-6"
                        data-aos="fade-down"
                        data-aos-delay="100"
                    >
                        Pick the Perfect
                        <span className="block text-blue-600">Website Template</span>
                    </h1>
                    <p
                        className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Discover stunning, responsive eCommerce templates designed to showcase your products
                        and grow your online business with style and functionality.
                    </p>

                    {/* Stats */}
                    <div
                        className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="text-center p-4">
                            <div className="text-3xl font-bold text-blue-600 mb-1">1,200+</div>
                            <div className="text-sm text-gray-600">Templates Available</div>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                            <div className="text-sm text-gray-600">Customer Satisfaction</div>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                            <div className="text-sm text-gray-600">Support Available</div>
                        </div>
                    </div>
                </div>
            </section>

            <EnhancedNavbar
                setActiveButton={setActiveButton}
                setShowAllTemplates={setShowAllTemplates}
                activeButton={activeButton}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <EnhancedTemplateSection
                templates={filteredTemplates}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                setShowAllTemplates={setShowAllTemplates}
                showAllTemplates={showAllTemplates}
                sortBy={sortBy}
                setSortBy={setSortBy}
                showFilters={showFilters}
                setShowFilters={setShowFilters}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onTemplateSelect={handleTemplateSelect}
            />
        </div>
    );
};

// Enhanced Navbar Component
const EnhancedNavbar = ({ setActiveButton, setShowAllTemplates, activeButton, mobileMenuOpen, setMobileMenuOpen }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const categories = [
        { key: 'All', label: 'All', icon: '🌐' },
        { key: 'eCommerce', label: 'eCommerce', icon: '🛒' },
        { key: 'Fashion & Clothing', label: 'Fashion & Clothing', icon: '👗' },
        { key: 'Jewelry & Accessories', label: 'Jewelry & Accessories', icon: '💍' },
        { key: 'Home & Decor', label: 'Home & Decor', icon: '🏠' },
        { key: 'Beauty & Wellness', label: 'Beauty & Wellness', icon: '💅' },
        { key: 'Food & Drinks', label: 'Food & Drinks', icon: '🍽️' },
        { key: 'Sports & Outdoors', label: 'Sports & Outdoors', icon: '⚽' },
        { key: 'Electronics', label: 'Electronics', icon: '📱' }
    ];

    const handleCategorySelect = (category) => {
        setActiveButton(category.label);
        setShowAllTemplates(category.label === 'All');
        setIsDropdownOpen(false);
        if (mobileMenuOpen) setMobileMenuOpen(false);
    };

    return (
        <nav className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">

                    {/* Left Navigation - Desktop */}
                    <div className="flex items-center space-x-6 hidden lg:flex">
                        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors flex items-center space-x-2">
                            <span>💼</span>
                            <span>Business Solutions</span>
                        </a>

                        <div className="relative group">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group-hover:bg-blue-50 px-3 py-2 rounded-lg"
                            >
                                <span>🏪</span>
                                <span>Store</span>
                                <IoIosArrowDown className={`ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-2xl shadow-xl z-20 overflow-hidden">
                                    <div className="py-2 max-h-64 overflow-y-auto">
                                        {categories.map((category) => (
                                            <button
                                                key={category.key}
                                                onClick={() => handleCategorySelect(category)}
                                                className={`w-full flex items-center space-x-3 px-6 py-4 text-left hover:bg-blue-50 transition-colors ${activeButton === category.label ? 'bg-blue-50 border-r-4 border-blue-600 font-semibold' : ''
                                                    }`}
                                            >
                                                <span className="text-lg flex-shrink-0">{category.icon}</span>
                                                <span className="font-medium text-gray-700 truncate">{category.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors flex items-center space-x-2">
                            <span>👥</span>
                            <span>Community</span>
                        </a>
                    </div>

                    {/* Right Navigation - Desktop */}
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">All Templates</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Dark Templates</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Collections</a>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <div className="w-full lg:hidden mt-4 pt-4 border-t border-gray-100">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                {categories.slice(1).map((category) => (
                                    <button
                                        key={category.key}
                                        onClick={() => handleCategorySelect(category)}
                                        className={`p-4 rounded-xl border-2 transition-all ${activeButton === category.label
                                                ? 'border-blue-600 bg-blue-50 text-blue-600 shadow-md'
                                                : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                                            }`}
                                    >
                                        <div className="text-2xl mb-2">{category.icon}</div>
                                        <div className="font-medium text-sm text-center">{category.label}</div>
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-900 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <IoMdClose size={20} />
                                <span>Close</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

// Enhanced Template Data with more properties
const allTemplates = [
    { image: Image1, alt: "Template 1", title: "Accessories Store", rating: 4.8, reviews: 127, price: "Rs49", featured: true },
    { image: Image2, alt: "Template 2", title: "Backpack Store", rating: 4.9, reviews: 89, price: "Rs59", featured: false },
    { image: Image3, alt: "Template 3", title: "Electronics Store", rating: 4.7, reviews: 203, price: "Rs69", featured: true },
    { image: Image4, alt: "Template 4", title: "Gift Shop", rating: 4.6, reviews: 67, price: "Rs39", featured: false },
    { image: Image5, alt: "Template 5", title: "Home Goods Store", rating: 4.9, reviews: 156, price: "Rs55", featured: true },
    { image: Image6, alt: "Template 6", title: "Wellness Shop", rating: 4.8, reviews: 94, price: "Rs45", featured: false },
    { image: Image7, alt: "Template 7", title: "Accessories Store", rating: 4.7, reviews: 112, price: "Rs49", featured: true },
    { image: Image8, alt: "Template 8", title: "Stationery Store", rating: 4.6, reviews: 78, price: "Rs35", featured: false },
    { image: Image9, alt: "Template 9", title: "T-Shirt Store", rating: 4.9, reviews: 145, price: "Rs59", featured: true },
    { image: Image10, alt: "Template 10", title: "Flower Shop", rating: 4.8, reviews: 89, price: "Rs42", featured: false },
    { image: Image11, alt: "Template 11", title: "Beauty Shop", rating: 4.7, reviews: 134, price: "Rs48", featured: true },
    { image: Image12, alt: "Template 12", title: "Supermarket", rating: 4.9, reviews: 201, price: "Rs79", featured: true },
];

const fashionTemplates = [
    { image: Image9, alt: "Fashion Template 1", title: "T-Shirt Store", rating: 4.9, reviews: 145, price: "Rs59", featured: true },
    { image: Image13, alt: "Fashion Template 6", title: "Clothing Store", rating: 4.8, reviews: 112, price: "Rs65", featured: false },
    { image: Image14, alt: "Fashion Template 7", title: "Streetwear Shop", rating: 4.7, reviews: 89, price: "Rs72", featured: true },
    { image: Image15, alt: "Fashion Template 8", title: "Designer Boutique", rating: 4.9, reviews: 167, price: "Rs89", featured: true },
    { image: Image16, alt: "Fashion Template 9", title: "Casual Wear", rating: 4.6, reviews: 98, price: "Rs58", featured: false },
    { image: Image17, alt: "Fashion Template 10", title: "T-Shirt Store", rating: 4.9, reviews: 145, price: "Rs59", featured: true },
    { image: Image18, alt: "Fashion Template 11", title: "Accessories Store", rating: 4.7, reviews: 112, price: "Rs49", featured: false },
    { image: Image19, alt: "Fashion Template 12", title: "Clothing Store", rating: 4.8, reviews: 134, price: "Rs65", featured: true },
    { image: Image20, alt: "Fashion Template 13", title: "Vintage Shop", rating: 4.6, reviews: 78, price: "Rs55", featured: false },
    { image: Image21, alt: "Fashion Template 14", title: "Luxury Brand", rating: 4.9, reviews: 201, price: "Rs99", featured: true },
    { image: Image22, alt: "Fashion Template 15", title: "Sportswear", rating: 4.7, reviews: 123, price: "Rs62", featured: false },
    { image: Image14, alt: "Fashion Template 15", title: "Streetwear Shop", rating: 4.7, reviews: 89, price: "Rs72", featured: true },
];

const jewelryAccessoriesTemplates = [
    { image: Image1, alt: "Jewelry Template 1", title: "Jewelry Boutique", rating: 4.8, reviews: 134, price: "Rs49", featured: true },
    { image: Image4, alt: "Jewelry Template 2", title: "Gift Shop", rating: 4.6, reviews: 67, price: "Rs39", featured: false },
    { image: Image7, alt: "Jewelry Template 3", title: "Accessories Store", rating: 4.7, reviews: 112, price: "Rs49", featured: true },
    { image: Image10, alt: "Jewelry Template 4", title: "Earring Gallery", rating: 4.8, reviews: 89, price: "Rs42", featured: false },
    { image: Image13, alt: "Jewelry Template 5", title: "Accessory Haven", rating: 4.9, reviews: 156, price: "Rs55", featured: true },
    { image: Image16, alt: "Jewelry Template 6", title: "Ring Emporium", rating: 4.6, reviews: 78, price: "Rs35", featured: false },
    { image: Image23, alt: "Jewelry Template 7", title: "Necklace Store", rating: 4.7, reviews: 112, price: "Rs49", featured: true },
    { image: Image24, alt: "Jewelry Template 8", title: "Accessories Store", rating: 4.8, reviews: 134, price: "Rs65", featured: false },
    { image: Image25, alt: "Jewelry Template 9", title: "Watch Store", rating: 4.9, reviews: 201, price: "Rs79", featured: true },
    { image: Image26, alt: "Jewelry Template 10", title: "Eyewear Store", rating: 4.6, reviews: 98, price: "Rs58", featured: false },
    { image: Image27, alt: "Jewelry Template 11", title: "Jewelry Store", rating: 4.7, reviews: 123, price: "Rs62", featured: true },
    { image: Image28, alt: "Jewelry Template 12", title: "Eyewear Store", rating: 4.8, reviews: 89, price: "Rs72", featured: false },
];

const homeDecorTemplates = [
    { image: Image29, alt: "Home Decor Template 1", title: "Home Goods Store", rating: 4.9, reviews: 156, price: "Rs55", featured: true },
    { image: Image5, alt: "Home Decor Template 2", title: "Home Goods Store", rating: 4.8, reviews: 112, price: "Rs49", featured: false },
    { image: Image30, alt: "Home Decor Template 3", title: "Furniture Store", rating: 4.7, reviews: 89, price: "Rs72", featured: true },
    { image: Image31, alt: "Home Decor Template 4", title: "Plant Store", rating: 4.6, reviews: 67, price: "Rs39", featured: false },
    { image: Image32, alt: "Home Decor Template 5", title: "Interior Design", rating: 4.9, reviews: 167, price: "Rs89", featured: true },
    { image: Image33, alt: "Home Decor Template 6", title: "Home Goods Store", rating: 4.8, reviews: 134, price: "Rs65", featured: false },
    { image: Image34, alt: "Home Decor Template 7", title: "Lighting Store", rating: 4.7, reviews: 78, price: "Rs55", featured: true },
    { image: Image35, alt: "Home Decor Template 8", title: "Textile Designer", rating: 4.6, reviews: 98, price: "Rs58", featured: false },
    { image: Image36, alt: "Home Decor Template 9", title: "Hardware Store", rating: 4.9, reviews: 145, price: "Rs59", featured: true },
    { image: Image37, alt: "Home Decor Template 10", title: "Ceramic Store", rating: 4.8, reviews: 89, price: "Rs42", featured: false },
    { image: Image38, alt: "Home Decor Template 11", title: "Gift Shop", rating: 4.7, reviews: 112, price: "Rs49", featured: true },
    { image: Image29, alt: "Home Decor Template 12", title: "Home Decor Store", rating: 4.9, reviews: 156, price: "Rs55", featured: false },
];

const beautyWellnessTemplates = [
    { image: Image6, alt: "Beauty Template 1", title: "Wellness Shop", rating: 4.8, reviews: 94, price: "Rs45", featured: false },
    { image: Image11, alt: "Beauty Template 3", title: "Beauty Shop", rating: 4.7, reviews: 134, price: "Rs48", featured: true },
    { image: Image39, alt: "Beauty Template 4", title: "Hair Extension Store", rating: 4.9, reviews: 156, price: "Rs55", featured: true },
    { image: Image40, alt: "Beauty Template 5", title: "Wellness Store", rating: 4.8, reviews: 112, price: "Rs49", featured: false },
    { image: Image41, alt: "Beauty Template 6", title: "Spa", rating: 4.7, reviews: 89, price: "Rs72", featured: true },
    { image: Image42, alt: "Beauty Template 7", title: "Makeup Store", rating: 4.6, reviews: 67, price: "Rs39", featured: false },
    { image: Image43, alt: "Beauty Template 8", title: "Natural Cosmetics", rating: 4.9, reviews: 167, price: "Rs89", featured: true },
    { image: Image44, alt: "Beauty Template 9", title: "Beauty Supply", rating: 4.8, reviews: 134, price: "Rs65", featured: false },
    { image: Image45, alt: "Beauty Template 10", title: "Beauty Shop", rating: 4.7, reviews: 78, price: "Rs55", featured: true },
    { image: Image46, alt: "Beauty Template 11", title: "Feminine Products", rating: 4.6, reviews: 98, price: "Rs58", featured: false },
    { image: Image47, alt: "Beauty Template 12", title: "Subscription Box", rating: 4.9, reviews: 145, price: "Rs59", featured: true },
    { image: Image39, alt: "Beauty Template 13", title: "Skincare Store", rating: 4.8, reviews: 89, price: "Rs42", featured: false },
];

const foodDrinksTemplates = [
    { image: Image48, alt: "Food Template 1", title: "Snack Bar Company", rating: 4.8, reviews: 123, price: "Rs52", featured: true },
    { image: Image12, alt: "Food Template 2", title: "Supermarket", rating: 4.9, reviews: 201, price: "Rs79", featured: true },
    { image: Image49, alt: "Food Template 3", title: "Cookie Shop", rating: 4.7, reviews: 89, price: "Rs72", featured: false },
    { image: Image50, alt: "Food Template 4", title: "Farm Store", rating: 4.6, reviews: 67, price: "Rs39", featured: false },
    { image: Image51, alt: "Food Template 5", title: "Food Shop", rating: 4.9, reviews: 167, price: "Rs89", featured: true },
    { image: Image52, alt: "Food Template 6", title: "Tea Shop", rating: 4.8, reviews: 134, price: "Rs65", featured: false },
    { image: Image53, alt: "Food Template 7", title: "Juice Shop", rating: 4.7, reviews: 78, price: "Rs55", featured: true },
    { image: Image54, alt: "Food Template 8", title: "Grocery Store", rating: 4.6, reviews: 98, price: "Rs58", featured: false },
    { image: Image55, alt: "Food Template 9", title: "Subscription Box", rating: 4.9, reviews: 145, price: "Rs59", featured: true },
    { image: Image56, alt: "Food Template 10", title: "Wine Store", rating: 4.8, reviews: 89, price: "Rs42", featured: false },
    { image: Image57, alt: "Food Template 11", title: "Grocery Store", rating: 4.7, reviews: 112, price: "Rs49", featured: true },
    { image: Image58, alt: "Food Template 12", title: "Online Grocery", rating: 4.9, reviews: 156, price: "Rs55", featured: false },
];

const sportsOutdoorsTemplates = [
    { image: Image1, alt: "Sports Template 1", title: "Sports Gear Store", rating: 4.8, reviews: 134, price: "Rs49", featured: true },
    { image: Image3, alt: "Sports Template 2", title: "Outdoor Equipment", rating: 4.7, reviews: 112, price: "Rs65", featured: false },
    { image: Image9, alt: "Sports Template 3", title: "Fitness Store", rating: 4.9, reviews: 156, price: "Rs55", featured: true },
    { image: Image12, alt: "Sports Template 4", title: "Camping Gear", rating: 4.6, reviews: 78, price: "Rs35", featured: false },
    { image: Image23, alt: "Sports Template 5", title: "Athletic Wear", rating: 4.8, reviews: 89, price: "Rs42", featured: true },
    { image: Image29, alt: "Sports Template 6", title: "Hiking Store", rating: 4.7, reviews: 123, price: "Rs62", featured: false },
    { image: Image39, alt: "Sports Template 7", title: "Yoga Studio", rating: 4.9, reviews: 167, price: "Rs89", featured: true },
    { image: Image48, alt: "Sports Template 8", title: "Team Sports", rating: 4.6, reviews: 98, price: "Rs58", featured: false },
    { image: Image9, alt: "Sports Template 9", title: "Running Store", rating: 4.8, reviews: 145, price: "Rs59", featured: true },
    { image: Image12, alt: "Sports Template 10", title: "Cycling Shop", rating: 4.7, reviews: 89, price: "Rs72", featured: false },
    { image: Image23, alt: "Sports Template 11", title: "Water Sports", rating: 4.9, reviews: 201, price: "Rs79", featured: true },
    { image: Image29, alt: "Sports Template 12", title: "Winter Gear", rating: 4.8, reviews: 134, price: "Rs65", featured: false },
];

const electronicsTemplates = [
    { image: Image3, alt: "Electronics Template 1", title: "Electronics Store", rating: 4.7, reviews: 203, price: "Rs69", featured: true },
    { image: Image12, alt: "Electronics Template 2", title: "Gadget Store", rating: 4.9, reviews: 201, price: "Rs79", featured: true },
    { image: Image23, alt: "Electronics Template 3", title: "Tech Accessories", rating: 4.8, reviews: 134, price: "Rs65", featured: false },
    { image: Image29, alt: "Electronics Template 4", title: "Smart Home", rating: 4.7, reviews: 112, price: "Rs49", featured: true },
    { image: Image39, alt: "Electronics Template 5", title: "Audio Store", rating: 4.6, reviews: 78, price: "Rs35", featured: false },
    { image: Image48, alt: "Electronics Template 6", title: "Phone Store", rating: 4.9, reviews: 156, price: "Rs55", featured: true },
    { image: Image9, alt: "Electronics Template 7", title: "Gaming Store", rating: 4.8, reviews: 89, price: "Rs42", featured: false },
    { image: Image12, alt: "Electronics Template 8", title: "Camera Shop", rating: 4.7, reviews: 123, price: "Rs62", featured: true },
    { image: Image23, alt: "Electronics Template 9", title: "Drone Store", rating: 4.9, reviews: 167, price: "Rs89", featured: true },
    { image: Image29, alt: "Electronics Template 10", title: "Laptop Store", rating: 4.6, reviews: 98, price: "Rs58", featured: false },
    { image: Image39, alt: "Electronics Template 11", title: "Tablet Store", rating: 4.8, reviews: 145, price: "Rs59", featured: true },
    { image: Image48, alt: "Electronics Template 12", title: "Smartwatch Shop", rating: 4.7, reviews: 89, price: "Rs72", featured: false },
];

const categories = [
    { name: "All", width: "w-20", icon: "🌐" },
    { name: "Fashion & Clothing", width: "w-44", icon: "👗" },
    { name: "Jewelry & Accessories", width: "w-48", icon: "💍" },
    { name: "Home & Decor", width: "w-32", icon: "🏠" },
    { name: "Beauty & Wellness", width: "w-44", icon: "💅" },
    { name: "Food & Drinks", width: "w-36", icon: "🍽️" },
    { name: "Sports & Outdoors", width: "w-44", icon: "⚽" },
    { name: "Electronics", width: "w-28", icon: "📱" },
];

// Enhanced Template Card Component
const EnhancedTemplateCard = ({ template, index, onTemplateSelect }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleEditClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (onTemplateSelect) {
            onTemplateSelect(template.title);
        }
    };

    const handlePreviewClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (onTemplateSelect) {
            onTemplateSelect(template.title);
        }
    };

    const handleCardClick = (e) => {
        if (e.target.tagName !== 'BUTTON' && onTemplateSelect) {
            onTemplateSelect(template.title);
        }
    };

    return (
        <div
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer relative"
            onClick={handleCardClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            {/* Featured Badge */}
            {template.featured && (
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
                        Featured
                    </span>
                </div>
            )}

            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={template.image}
                    alt={template.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading={index < 4 ? "eager" : "lazy"}
                />

                {/* Overlay Actions */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 ${isHovered ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}>
                    <div className="flex space-x-2 w-full">
                        <button
                            onClick={handleEditClick}
                            className="flex-1 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-sm"
                            aria-label={`Edit ${template.title}`}
                        >
                            <FaEdit className="w-4 h-4 inline mr-2" />
                            Edit Template
                        </button>
                        <button
                            onClick={handlePreviewClick}
                            className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
                            title={`Preview & Customize ${template.title}`}
                            aria-label={`Preview ${template.title}`}
                        >
                            <FaHeart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {template.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                    <div className="flex space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(template.rating)
                                        ? 'text-yellow-400 fill-current'
                                        : i === Math.floor(template.rating) && template.rating % 1 !== 0
                                            ? 'text-yellow-300'
                                            : 'text-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-600">({template.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{template.price}</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                        One-time
                    </span>
                </div>

                {/* Action Button */}
                <button
                    onClick={handlePreviewClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold text-sm transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    aria-label={`Preview and customize ${template.title}`}
                >
                    Preview & Customize
                </button>
            </div>
        </div>
    );
};

// Enhanced Template Section
const EnhancedTemplateSection = ({
    templates,
    activeButton,
    setActiveButton,
    setShowAllTemplates,
    showAllTemplates,
    sortBy,
    setSortBy,
    showFilters,
    setShowFilters,
    searchTerm,
    setSearchTerm,
    onTemplateSelect
}) => {
    const handleCategoryClick = (category, e) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveButton(category.name);
        setShowAllTemplates(category.name === 'All');
    };

    const handleClearFilters = () => {
        setSearchTerm('');
        setActiveButton('All');
        setSortBy('Recommended');
        setShowFilters(false);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6" data-aos="fade-right" data-aos-delay="100">
                <a href="/" className="hover:text-blue-600 transition-colors flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Home</span>
                </a>
                <span>/</span>
                <span className="font-medium text-gray-900">Website Templates</span>
                <span>/</span>
                <span className="font-medium text-blue-600">{activeButton}</span>
            </nav>

            {/* Section Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0" data-aos="fade-up" data-aos-delay="200">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {activeButton} Website Templates
                    </h2>
                    <p className="text-gray-600">
                        {templates.length} templates available • Starting from Rs29
                    </p>
                </div>

                {/* Sort & Filter Controls */}
                <div className="flex items-center space-x-4 flex-wrap gap-2">
                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                        >
                            <option value="Recommended">Recommended</option>
                            <option value="Newest">Newest</option>
                            <option value="Top Templates">Top Templates</option>
                            <option value="Price: Low to High">Price: Low to High</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <IoIosArrowDown className="h-4 w-4" />
                        </div>
                    </div>

                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
                        aria-label="Toggle filters"
                    >
                        <FaFilter className="w-4 h-4" />
                        <span>Filters</span>
                        {showFilters && <span className="ml-1 text-xs bg-blue-100 text-blue-600 px-1 py-0.5 rounded-full">✓</span>}
                    </button>

                    {showFilters && (
                        <button
                            onClick={handleClearFilters}
                            className="px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-xl hover:bg-red-50 transition-colors"
                        >
                            Clear All
                        </button>
                    )}
                </div>
            </div>

            {/* Filter Panel */}
            {showFilters && (
                <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-200" data-aos="fade-up" data-aos-delay="300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                            <div className="flex space-x-2">
                                <select className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>All Prices</option>
                                    <option>Rs0 - Rs50</option>
                                    <option>Rs50 - Rs100</option>
                                    <option>Rs100+</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                            <div className="flex space-x-2">
                                <select className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Any Rating</option>
                                    <option>4 Stars & Up</option>
                                    <option>3 Stars & Up</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Featured</label>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="rounded text-blue-600" />
                                    <span className="text-sm text-gray-600">Featured Templates Only</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="rounded text-blue-600" />
                                    <span className="text-sm text-gray-600">New Arrivals</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-12" data-aos="zoom-in" data-aos-delay="400">
                {categories.map((category, index) => (
                    <React.Fragment key={category.name}>
                        <button
                            onClick={(e) => handleCategoryClick(category, e)}
                            className={`group flex items-center space-x-2 px-6 py-3 rounded-full border-2 font-medium text-sm transition-all duration-200 transform hover:scale-105 ${activeButton === category.name
                                    ? 'border-blue-600 bg-blue-600 text-white shadow-lg'
                                    : 'border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 hover:shadow-sm'
                                }`}
                            aria-label={`Filter by ${category.name}`}
                        >
                            <span className="text-lg">{category.icon}</span>
                            <span className="whitespace-nowrap">{category.name}</span>
                        </button>
                        {index < categories.length - 1 && (
                            <span className="hidden lg:inline text-gray-300">•</span>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Templates Grid */}
            {templates.length > 0 ? (
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ${showFilters ? 'lg:grid-cols-3' : ''}`} data-aos="fade-up" data-aos-delay="500">
                    {templates.map((template, index) => (
                        <EnhancedTemplateCard
                            key={`${template.title}-${index}`}
                            template={template}
                            index={index}
                            onTemplateSelect={onTemplateSelect}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16" data-aos="fade-up" data-aos-delay="500">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No templates found</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Try adjusting your search or filter criteria. We have {allTemplates.length} templates in our collection.
                    </p>
                    <button
                        onClick={handleClearFilters}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                        Clear All Filters
                    </button>
                </div>
            )}

            {/* Load More Button */}
            {templates.length > 0 && templates.length < 24 && (
                <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
                    <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 shadow-lg">
                        <span>Load More Templates ({templates.length}/200+)</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ETemplate1;