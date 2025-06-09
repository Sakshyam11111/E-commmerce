import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
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
    const [showAllTemplates, setShowAllTemplates] = useState(true);
    const [activeButton, setActiveButton] = useState('All');

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            once: true, // Animations happen only once on scroll
        });
    }, []);

    return (
        <section className="flex flex-col items-center justify-center h-auto bg-white min-h-screen">
            <div className="text-center mb-6">
                <h1 
                    className="text-4xl font-bold text-gray-900 mt-20"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    Pick the Website Template You Love
                </h1>
                <div 
                    className="relative w-full max-w-md mx-auto mt-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <input
                        type="text"
                        placeholder="Search all templates..."
                        className="w-full p-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                </div>
            </div>
            <Navbar 
                setActiveButton={setActiveButton} 
                setShowAllTemplates={setShowAllTemplates} 
                activeButton={activeButton} 
            />
            <TemplateSection 
                showAllTemplates={showAllTemplates} 
                setShowAllTemplates={setShowAllTemplates} 
                activeButton={activeButton} 
                setActiveButton={setActiveButton} 
            />
        </section>
    );
};

const Navbar = ({ setActiveButton, setShowAllTemplates, activeButton }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownClick = (category, e) => {
        e.preventDefault();
        const categoryMap = {
            'eCommerce': 'All',
            'Fashion & Clothing': 'Fashion & Clothing',
            'Jewelry & Accessories': 'Jewelry & Accessories',
            'Home & Decor': 'Home & Decor',
            'Beauty & Wellness': 'Beauty & Wellness',
            'Food & Drinks': 'Food & Drinks',
            'Sports & Outdoors': 'Sports & Outdoors',
            'Electronics': 'Electronics'
        };
        const selectedCategory = categoryMap[category] || 'All';
        setActiveButton(selectedCategory);
        setShowAllTemplates(selectedCategory === 'All');
        setIsDropdownOpen(false);
    };

    const getDropdownCategory = (activeButton) => {
        const reverseMap = {
            'All': 'eCommerce',
            'Fashion & Clothing': 'Fashion & Clothing',
            'Jewelry & Accessories': 'Jewelry & Accessories',
            'Home & Decor': 'Home & Decor',
            'Beauty & Wellness': 'Beauty & Wellness',
            'Food & Drinks': 'Food & Drinks',
            'Sports & Outdoors': 'Sports & Outdoors',
            'Electronics': 'Electronics'
        };
        return reverseMap[activeButton] || 'eCommerce';
    };

    const activeDropdownCategory = getDropdownCategory(activeButton);

    return (
        <nav className="bg-white shadow w-full">
            <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between">
                <div className="flex space-x-4 gap-5">
                    <a href="#" className="text-gray-600">Business Solutions</a>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center text-blue-600 focus:outline-none"
                        >
                            Store
                            <IoIosArrowDown className="ml-1 text-blue-600" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                <a 
                                    href="#" 
                                    onClick={(e) => handleDropdownClick('eCommerce', e)} 
                                    className={`block px-5 py-2 text-gray-700 hover:bg-gray-100 ${activeDropdownCategory === 'eCommerce' ? 'font-bold' : ''}`}
                                >
                                    eCommerce
                                </a>
                                <a 
                                    href="#" 
                                    onClick={(e) => handleDropdownClick('Fashion & Clothing', e)} 
                                    className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${activeDropdownCategory === 'Fashion & Clothing' ? 'font-bold' : ''}`}
                                >
                                    Fashion & Clothing
                                </a>
                                <a 
                                    href="#" 
                                    onClick={(e) => handleDropdownClick('Jewelry & Accessories', e)} 
                                    className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${activeDropdownCategory === 'Jewelry & Accessories' ? 'font-bold' : ''}`}
                                >
                                    Jewelry & Accessories
                                </a>
                                <a 
                                    href="#" 
                                    onClick={(e) => handleDropdownClick('Home & Decor', e)} 
                                    className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${activeDropdownCategory === 'Home & Decor' ? 'font-bold' : ''}`}
                                >
                                    Home & Decor
                                </a>
                                <a 
                                    href="#" 
                                    onClick={(e) => handleDropdownClick('Beauty & Wellness', e)} 
                                    className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${activeDropdownCategory === 'Beauty & Wellness' ? 'font-bold' : ''}`}
                                >
                                    Beauty & Wellness
                                </a>
                                <a 
                                    href="#" 
                                    onClick={(e) => handleDropdownClick('Food & Drinks', e)} 
                                    className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${activeDropdownCategory === 'Food & Drinks' ? 'font-bold' : ''}`}
                                >
                                    Food & Drinks
                                </a>
                                <a 
                                    href="#" 
                                    onClick={(e) => handleDropdownClick('Sports & Outdoors', e)} 
                                    className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${activeDropdownCategory === 'Sports & Outdoors' ? 'font-bold' : ''}`}
                                >
                                    Sports & Outdoors
                                </a>
                                <a 
                                    href="#" 
                                    onClick={(e) => handleDropdownClick('Electronics', e)} 
                                    className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${activeDropdownCategory === 'Electronics' ? 'font-bold' : ''}`}
                                >
                                    Electronics
                                </a>
                            </div>
                        )}
                    </div>
                    <a href="#" className="text-gray-600">Community</a>
                </div>
                <div className="flex space-x-4 gap-5">
                    <a href="#" className="text-gray-600">All Templates</a>
                    <a href="#" className="text-gray-600">Dark Templates</a>
                    <a href="#" className="text-gray-600">Collections</a>
                </div>
            </div>
        </nav>
    );
};

// Data for all templates
const allTemplates = [
    { image: Image1, alt: "Template 1", title: "Accessories Store" },
    { image: Image2, alt: "Template 2", title: "Backpack Store" },
    { image: Image3, alt: "Template 3", title: "Electronics Store" },
    { image: Image4, alt: "Template 4", title: "Gift Shop" },
    { image: Image5, alt: "Template 5", title: "Home Goods Store" },
    { image: Image6, alt: "Template 6", title: "Wellness Shop" },
    { image: Image7, alt: "Template 7", title: "Accessories Store" },
    { image: Image8, alt: "Template 8", title: "Stationery Store" },
    { image: Image9, alt: "Template 9", title: "T-Shirt Store" },
    { image: Image10, alt: "Template 10", title: "Flower Shop" },
    { image: Image11, alt: "Template 11", title: "Beauty Shop" },
    { image: Image12, alt: "Template 12", title: "Supermarket" },
];

// Data for Fashion & Clothing templates
const fashionTemplates = [
    { image: Image9, alt: "Fashion Template 1", title: "T-Shirt Store" },
    { image: Image13, alt: "Fashion Template 6", title: "Clothing Store" },
    { image: Image14, alt: "Fashion Template 7", title: "Clothing Store" },
    { image: Image15, alt: "Fashion Template 8", title: "Clothing Store" },
    { image: Image16, alt: "Fashion Template 9", title: "Clothing Store" },
    { image: Image17, alt: "Fashion Template 10", title: "T-Shirt Store" },
    { image: Image18, alt: "Fashion Template 11", title: "Accessories Store" },
    { image: Image19, alt: "Fashion Template 12", title: "Clothing Store" },
    { image: Image20, alt: "Fashion Template 13", title: "Clothing Store" },
    { image: Image21, alt: "Fashion Template 14", title: "Clothing Store" },
    { image: Image22, alt: "Fashion Template 15", title: "Clothing Store" },
    { image: Image14, alt: "Fashion Template 15", title: "Clothing Store" },
];

// Data for Jewelry & Accessories templates
const jewelryAccessoriesTemplates = [
    { image: Image1, alt: "Jewelry Template 1", title: "Jewelry Boutique" },
    { image: Image4, alt: "Jewelry Template 2", title: "Gift Shop" },
    { image: Image7, alt: "Jewelry Template 3", title: "Accessories Store" },
    { image: Image10, alt: "Jewelry Template 4", title: "Earring Gallery" },
    { image: Image13, alt: "Jewelry Template 5", title: "Accessory Haven" },
    { image: Image16, alt: "Jewelry Template 6", title: "Ring Emporium" },
    { image: Image23, alt: "Jewelry Template 7", title: "Necklace Store" },
    { image: Image24, alt: "Jewelry Template 8", title: "Accessories Store" },
    { image: Image25, alt: "Jewelry Template 9", title: "Watch Store" },
    { image: Image26, alt: "Jewelry Template 10", title: "Eyewear Store" },
    { image: Image27, alt: "Jewelry Template 11", title: "Jewelry Store" },
    { image: Image28, alt: "Jewelry Template 12", title: "Eyewear Store" },
];

// Data for Home & Decor templates
const homeDecorTemplates = [
    { image: Image29, alt: "Home Decor Template 1", title: "Home Goods Store" },
    { image: Image5, alt: "Home Decor Template 2", title: "Home Goods Store" },
    { image: Image30, alt: "Home Decor Template 3", title: "Home Goods Store" },
    { image: Image4, alt: "Home Decor Template 4", title: "Gift Shop" },
    { image: Image31, alt: "Home Decor Template 5", title: "Plant Store" },
    { image: Image32, alt: "Home Decor Template 6", title: "Wellness Shop" },
    { image: Image33, alt: "Home Decor Template 7", title: "Home Goods Store" },
    { image: Image34, alt: "Home Decor Template 8", title: "Electronics Store" },
    { image: Image35, alt: "Home Decor Template 9", title: "Textile Designer" },
    { image: Image36, alt: "Home Decor Template 10", title: "Hardware Store" },
    { image: Image37, alt: "Home Decor Template 11", title: "Ceramic Store" },
    { image: Image38, alt: "Home Decor Template 12", title: "Gift Shop" },
];

// Data for Beauty & Wellness templates
const beautyWellnessTemplates = [
    { image: Image6, alt: "Beauty Template 1", title: "Wellness Shop" },
    { image: Image11, alt: "Beauty Template 3", title: "Beauty Shop" },
    { image: Image5, alt: "Beauty Template 2", title: "Home Goods Store" },
    { image: Image39, alt: "Beauty Template 4", title: "Hair Extension & Lash Store" },
    { image: Image40, alt: "Beauty Template 5", title: "Wellness Store" },
    { image: Image41, alt: "Beauty Template 6", title: "Spa" },
    { image: Image42, alt: "Beauty Template 7", title: "Makeup Store" },
    { image: Image43, alt: "Beauty Template 8", title: "Natural Cosmetics Shop" },
    { image: Image44, alt: "Beauty Template 9", title: "Beauty Supply Store" },
    { image: Image45, alt: "Beauty Template 10", title: "Beauty Shop" },
    { image: Image46, alt: "Beauty Template 11", title: "Feminine Products Shop" },
    { image: Image47, alt: "Beauty Template 12", title: "Subscription Box Company" },
];

// Data for Food & Drinks templates
const foodDrinksTemplates = [
    { image: Image48, alt: "Food Template 1", title: "Snack Bar Company" },
    { image: Image12, alt: "Food Template 2", title: "Supermarket" },
    { image: Image49, alt: "Food Template 3", title: "Cookie Shop" },
    { image: Image50, alt: "Food Template 4", title: "Farm" },
    { image: Image51, alt: "Food Template 5", title: "Food Shop" },
    { image: Image52, alt: "Food Template 6", title: "Tea Shop" },
    { image: Image53, alt: "Food Template 7", title: "Juice Shop" },
    { image: Image54, alt: "Food Template 8", title: "Sporting Goods Store" },
    { image: Image55, alt: "Food Template 9", title: "Subscription Box Company" },
    { image: Image56, alt: "Food Template 10", title: "Wine Store" },
    { image: Image57, alt: "Food Template 11", title: "Grocery Store" },
    { image: Image58, alt: "Food Template 12", title: "Online Grocery Store" },
];

// Data for category buttons
const categories = [
    { name: "All", width: "w-24 sm:w-28" },
    { name: "Fashion & Clothing", width: "w-40" },
    { name: "Jewelry & Accessories", width: "w-44" },
    { name: "Home & Decor", width: "w-32" },
    { name: "Beauty & Wellness", width: "w-40" },
    { name: "Food & Drinks", width: "w-32" },
    { name: "Sports & Outdoors", width: "w-40" },
    { name: "Electronics", width: "w-24" },
];

const TemplateCard = ({ image, alt, title, index }) => (
    <div 
        className="border border-gray-300 rounded-lg overflow-hidden relative group"
        data-aos="fade-up"
        data-aos-delay={index * 100} // Staggered animation for each card
    >
        <img src={image} alt={alt} className="w-full h-40 object-cover" />
        <div className="p-2 text-center">{title}</div>
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col gap-2">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Edit</button>
                <button className="bg-white text-black px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">View</button>
            </div>
        </div>
    </div>
);

const TemplateSection = ({ showAllTemplates, setShowAllTemplates, activeButton, setActiveButton }) => {
    const handleCategoryClick = (category, e) => {
        e.preventDefault();
        setActiveButton(category);
        setShowAllTemplates(category === 'All');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-4">
            <h2 
                className="text-xl font-semibold mb-2"
                data-aos="fade-right"
                data-aos-delay="300"
            >
                Website Templates / eCommerce
            </h2>
            <h2 
                className="text-2xl font-semibold mb-4"
                data-aos="fade-left"
                data-aos-delay="400"
            >
                eCommerce Website Templates
            </h2>
            <div 
                className="flex items-center mb-4"
                data-aos="fade-up"
                data-aos-delay="500"
            >
                <p className="text-gray-600">Sort by:</p>
                <select className="ml-2 border border-gray-300 rounded-md">
                    <option>Recommended</option>
                    <option>Newest</option>
                    <option>Top Templates</option>
                </select>
            </div>
            <div 
                className="flex flex-wrap gap-2 justify-center"
                data-aos="zoom-in"
                data-aos-delay="600"
            >
                {categories.map((category, index) => (
                    <React.Fragment key={category.name}>
                        <a
                            href="#"
                            onClick={(e) => handleCategoryClick(category.name, e)}
                            className={`block ${category.width} h-10 border border-gray-300 rounded-lg text-center p-2 ${activeButton === category.name ? 'bg-blue-600 text-white' : ''}`}
                        >
                            {category.name}
                        </a>
                        {index === 0 && <p className="mx-2 hidden md:block">|</p>}
                    </React.Fragment>
                ))}
            </div>
            {activeButton === 'All' && showAllTemplates && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-6">
                    {allTemplates.map((template, index) => (
                        <TemplateCard
                            key={index}
                            image={template.image}
                            alt={template.alt}
                            title={template.title}
                            index={index}
                        />
                    ))}
                </div>
            )}
            {activeButton === 'Fashion & Clothing' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-6">
                    {fashionTemplates.map((template, index) => (
                        <TemplateCard
                            key={index}
                            image={template.image}
                            alt={template.alt}
                            title={template.title}
                            index={index}
                        />
                    ))}
                </div>
            )}
            {activeButton === 'Jewelry & Accessories' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-6">
                    {jewelryAccessoriesTemplates.map((template, index) => (
                        <TemplateCard
                            key={index}
                            image={template.image}
                            alt={template.alt}
                            title={template.title}
                            index={index}
                        />
                    ))}
                </div>
            )}
            {activeButton === 'Home & Decor' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-6">
                    {homeDecorTemplates.map((template, index) => (
                        <TemplateCard
                            key={index}
                            image={template.image}
                            alt={template.alt}
                            title={template.title}
                            index={index}
                        />
                    ))}
                </div>
            )}
            {activeButton === 'Beauty & Wellness' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-6">
                    {beautyWellnessTemplates.map((template, index) => (
                        <TemplateCard
                            key={index}
                            image={template.image}
                            alt={template.alt}
                            title={template.title}
                            index={index}
                        />
                    ))}
                </div>
            )}
            {activeButton === 'Food & Drinks' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-6">
                    {foodDrinksTemplates.map((template, index) => (
                        <TemplateCard
                            key={index}
                            image={template.image}
                            alt={template.alt}
                            title={template.title}
                            index={index}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ETemplate1;