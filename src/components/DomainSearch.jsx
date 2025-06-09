import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSearch } from 'react-icons/fa'; 

const DomainSearch = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <section className="flex items-center justify-center py-8" data-aos="fade-up">
            <div className="bg-yellow-200 rounded-xl p-6 max-w-6xl w-full text-center my-32" data-aos="zoom-in">
                <h2 className="text-5xl font-semibold mb-2 text-black mt-10" data-aos="fade-up">
                    Get the perfect domain
                </h2>
                <h2 className="text-5xl font-semibold mb-2 text-black" data-aos="fade-up" data-aos-delay="200">
                    name for your store
                </h2>
                <p className="text-sm mt-8 mb-8 text-gray-700 font-semibold" data-aos="fade-up" data-aos-delay="400">
                    Enjoy a free domain name for one year with select website plans.
                </p>
                <div className="flex items-center justify-center space-x-4">
                    <input
                        type="text"
                        placeholder="e.g. haileyflash"
                        className="w-2/3 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white mb-6"
                        data-aos="fade-up" data-aos-delay="600"
                    />
                    <button className="bg-blue-600 text-white flex items-center px-4 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 mb-6" data-aos="fade-up" data-aos-delay="800">
                        <FaSearch className="mr-2" />
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DomainSearch;