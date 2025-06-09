import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
    const [dropdown, setDropdown] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleDropdown = (menu) => {
        setDropdown(dropdown === menu ? null : menu);
    };

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

    const handleCreateStoreClick = () => {
        navigate('/signup'); // Navigate to SignUp component
    };

    return (
        <>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            <div className="bg-white shadow-md">
                {/* Top Line */}
                <div className="flex justify-start items-center p-4 container mx-auto">
                    <h1 className="text-2xl font-bold" data-aos="fade-down" data-aos-delay="0">
                        WIX
                    </h1>
                    <ul className="flex space-x-6 ml-10 font-semibold">
                        {['Product', 'Solutions', 'Resources', 'Wix Studio', 'Enterprise'].map((item, index) => (
                            <li
                                key={item}
                                className="cursor-pointer hover:text-blue-600"
                                data-aos="fade-down"
                                data-aos-delay={100 * (index + 1)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Divider */}
                <div className="border-b border-gray-300"></div>

                {/* Bottom Line with Dropdowns */}
                <div className="flex justify-end items-center p-4 container mx-auto">
                    <div className="flex space-x-6 font-semibold">
                        {/* Start Dropdown */}
                        <li
                            className="relative cursor-pointer"
                            onMouseEnter={() => toggleDropdown('start')}
                            onMouseLeave={() => toggleDropdown(null)}
                            data-aos="fade-down"
                            data-aos-delay="400"
                        >
                            <span className="hover:text-blue-600">Start</span>
                            {dropdown === 'start' && (
                                <div className="absolute left-0 w-48 bg-white shadow-lg rounded z-10">
                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100">Ecommerce Website</a>
                                    <a href="/create" className="block px-4 py-2 hover:bg-gray-100">Online Store</a>
                                    <a href="eTemplate1" className="block px-4 py-2 hover:bg-gray-100">Ecommerce Template</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Migrate</a>
                                </div>
                            )}
                        </li>

                        {/* Sell Dropdown */}
                        <li
                            className="relative cursor-pointer"
                            onMouseEnter={() => toggleDropdown('sell')}
                            onMouseLeave={() => toggleDropdown(null)}
                            data-aos="fade-down"
                            data-aos-delay="500"
                        >
                            <span className="hover:text-blue-600">Sell</span>
                            {dropdown === 'sell' && (
                                <div className="absolute left-0 w-48 bg-white shadow-lg rounded z-10">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sell on Wix</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dropshipping Website</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sell Custom Merch</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sales Channels</a>
                                </div>
                            )}
                        </li>

                        {/* Manage Dropdown */}
                        <li
                            className="relative cursor-pointer"
                            onMouseEnter={() => toggleDropdown('manage')}
                            onMouseLeave={() => toggleDropdown(null)}
                            data-aos="fade-down"
                            data-aos-delay="600"
                        >
                            <span className="hover:text-blue-600">Manage</span>
                            {dropdown === 'manage' && (
                                <div className="absolute left-0 w-48 bg-white shadow-lg rounded z-10">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Manage your Store</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Ecommerce Features</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Ecommerce Hosting</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Ecommerce Marketing</a>
                                </div>
                            )}
                        </li>

                        {/* Learn Dropdown */}
                        <li
                            className="relative cursor-pointer"
                            onMouseEnter={() => toggleDropdown('learn')}
                            onMouseLeave={() => toggleDropdown(null)}
                            data-aos="fade-down"
                            data-aos-delay="700"
                        >
                            <span className="hover:text-blue-600">Learn</span>
                            {dropdown === 'learn' && (
                                <div className="absolute left-0 w-48 bg-white shadow-lg rounded z-10">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Ecommerce Blog</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Learn Ecommerce</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Support</a>
                                </div>
                            )}
                        </li>

                        <button
                            className="text-black hover:text-blue-600"
                            data-aos="fade-down"
                            data-aos-delay="800"
                        >
                            Pricing
                        </button>
                    </div>
                    <div className="flex items-center space-x-4 ml-6">
                        <button
                            onClick={handleCreateStoreClick} // On click, navigate to SignUp
                            className="bg-blue-600 text-white px-4 py-2 rounded-3xl hover:bg-blue-700"
                            data-aos="fade-down"
                            data-aos-delay="900"
                        >
                            Create New Store
                        </button>
                        <FaUserCircle
                            className="text-2xl cursor-pointer"
                            data-aos="fade-down"
                            data-aos-delay="1000"
                        />
                    </div>
                </div>
            </div>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </>
    );
};

export default Navbar;