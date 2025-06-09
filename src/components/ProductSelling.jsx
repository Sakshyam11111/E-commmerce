import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from "../assets/skin1.avif"; 
import Image2 from "../assets/drop.avif"; 
import Image3 from "../assets/print.avif"; 
import Image4 from "../assets/digital.avif"; 
import Image5 from "../assets/subs.avif"; 
import { FaPlus, FaMinus } from 'react-icons/fa';

const ProductSelling = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [currentImage, setCurrentImage] = useState(Image1);

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    const toggleAccordion = (index, image) => {
        setOpenIndex(openIndex === index ? null : index);
        setCurrentImage(image);
    };

    const items = [
        { title: 'Physical products', image: Image1, description: 'Add an extensive catalog of products to your online store with up to 1,000 variants each. Import and export CSV files with products or seamlessly migrate your catalog with the Cart2Cart app.' },
        { title: 'Dropshipping', image: Image2, description: 'Add ready-to-sell products from Wix’s dropshipping platform, or third-party apps, and let suppliers take care of fulfillment.' },
        { title: 'Print on demand', image: Image3, description: 'Add your designs to hundreds of high-quality products, from t-shirts to headphones and let suppliers ship your custom merchandise directly to customers.' },
        { title: 'Digital products', image: Image4, description: 'Sell digital products, such as music files, ebooks, online courses, images or gift cards.' },
        { title: 'Subscriptions', image: Image5, description: 'Easily create and manage recurring products and sell subscriptions to generate a steady revenue stream.' },
    ];

    return (
        <section className="flex items-center justify-center py-12" data-aos="fade-up">
            <div className="max-w-7xl flex">
                <img src={currentImage} alt="Product" className="w-1/2 h-auto rounded-lg mr-4" data-aos="zoom-in" />
                <div className="flex flex-col justify-center w-1/2 ml-6" data-aos="fade-left">
                    <h2 className="text-5xl font-semibold mb-2">Sell your own products, or find products to sell</h2>
                    <div className="mb-6">
                        {items.map((item, index) => (
                            <div key={index} className="border-b last:border-b-0">
                                <div
                                    className="flex justify-between items-center py-4 cursor-pointer"
                                    onClick={() => toggleAccordion(index, item.image)}
                                    data-aos="fade-up" 
                                    data-aos-delay={`${index * 100}`} 
                                >
                                    <h3 className="text-2xl">{item.title}</h3>
                                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                                </div>
                                {openIndex === index && (
                                    <p className="text-black mb-4">{item.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <button className="bg-black text-white px-6 py-3 w-40 rounded-full hover:bg-gray-800 transition-all duration-300" data-aos="fade-up">
                        Start Selling
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductSelling;