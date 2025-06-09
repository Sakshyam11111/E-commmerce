import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-10 mt-6">Stay Connected</h2>
                <div className="flex justify-center space-x-6 mb-10">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl hover:text-blue-500 transition-colors duration-300" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-2xl hover:text-blue-400 transition-colors duration-300" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl hover:text-pink-500 transition-colors duration-300" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl hover:text-blue-600 transition-colors duration-300" />
                    </a>
                </div>
                <p className="text-sm mb-5">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;