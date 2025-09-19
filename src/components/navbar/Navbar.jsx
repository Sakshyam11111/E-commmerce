import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('aos').then((AOS) => {
                AOS.init({ duration: 800, once: true });
            });
        }
    }, []);

    const handleCreateStoreClick = () => {
        navigate('/signup'); // Navigate to the signup page
    };

    const quickLinks = [
        { name: 'Ecommerce Website', href: '/' },
        { name: 'Online Store', href: '/create' },
        { name: 'Ecommerce Template', href: '/eTemplate1' }
    ];

    return (
        <>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            <div className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer" data-aos="fade-down" data-aos-delay="0">
                            WIX
                        </h1>
                        <nav className="hidden md:flex items-center space-x-1">
                            {quickLinks.map((item, index) => (
                                <div key={item.name} className="relative group" data-aos="fade-down" data-aos-delay={100 * (index + 1)}>
                                    <Link to={item.href} className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:bg-gray-50 rounded-lg group">
                                        {item.name}
                                    </Link>
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
                                </div>
                            ))}
                        </nav>
                        <div className="flex items-center space-x-4">
                            <button onClick={handleCreateStoreClick} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 font-medium shadow-md hover:shadow-lg" data-aos="fade-down" data-aos-delay="800">
                                Create New Store
                            </button>
                            <FaUserCircle className="hidden md:block text-3xl text-gray-600 cursor-pointer hover:text-blue-600 transition-colors duration-200" data-aos="fade-down" data-aos-delay="900" />
                            <button className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                            </button>
                        </div>
                    </div>

                    <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
                            <div className="border-t border-gray-200 pt-4 mb-4">
                                <p className="text-sm font-medium text-gray-500 mb-3">Quick Access</p>
                                {quickLinks.map((link) => (
                                    <Link key={link.name} to={link.href} className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <button onClick={handleCreateStoreClick} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                                Create New Store
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </>
    );
};

export default Navbar;