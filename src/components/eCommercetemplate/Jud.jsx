import React, { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaShoppingCart } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import Image1 from "../../assets/JUD1.avif";
import Image2 from "../../assets/JUD2.avif";
import Image3 from "../../assets/JUD3.avif";
import Image4 from "../../assets/JUD4.avif";
import Image5 from "../../assets/JUD5.avif";
import Image6 from "../../assets/JUD6.avif";
import Image7 from "../../assets/JUD7.avif";
import Image8 from "../../assets/JUD8.avif";
import Image9 from "../../assets/JUD9.avif";
import Image10 from "../../assets/JUD10.avif";
import Image11 from "../../assets/JUD11.avif";
import Image12 from "../../assets/JUD12.avif";
import Image13 from "../../assets/JUD13.avif";
import Image14 from "../../assets/JUD14.avif";
import Image15 from "../../assets/JUD15.avif";

const Jud = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 800,
          once: true,
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white w-full py-4 flex justify-between items-center px-6 shadow-md">
        <div 
          className="flex space-x-6"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <a href="#" className="text-teal-600 hover:text-teal-800 text-sm font-medium">Shop</a>
          <a href="#" className="text-teal-600 hover:text-teal-800 text-sm font-medium">About</a>
          <a href="#" className="text-teal-600 hover:text-teal-800 text-sm font-medium">FAQ</a>
          <a href="#" className="text-teal-600 hover:text-teal-800 text-sm font-medium">Contact</a>
        </div>
        <div 
          className="absolute left-1/2 transform -translate-x-1/2"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h1 className="text-teal-600 text-xl font-bold tracking-wide">J U D .</h1>
        </div>
        <div 
          className="flex space-x-4"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <FiLogIn size={20} />
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <FaShoppingCart size={20} />
          </a>
        </div>
      </nav>
      <section className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div 
            className="w-2/5"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src={Image1}
              alt="Left Image"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div 
            className="w-1/4"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <img
              src={Image2}
              alt="Right Image"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-5xl text-black mb-4">
            ANNA STONE & <span className="font-bold text-black">JUD.</span>
          </h2>
          <p className="text-xl text-gray-500 mb-6">Introducing the Capsule Collection</p>
          <a 
            href="#" 
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Shop Collection
          </a>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-teal-600 mb-8" data-aos="fade-up" data-aos-delay="200">
            Featured Capsule Collection
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
            {[
              { img: Image3, name: "Elegant Dress", price: "Rs. 9,900.00" },
              { img: Image4, name: "Stylish Jacket", price: "Rs. 12,900.00" },
              { img: Image5, name: "Chic Skirt", price: "Rs. 7,900.00" },
              { img: Image6, name: "Fringed Top", price: "Rs. 11,500.00" },
              { img: Image7, name: "Classic Pants", price: "Rs. 8,900.00" },
              { img: Image8, name: "Silk Blouse", price: "Rs. 10,500.00" },
              { img: Image9, name: "Bohemian Dress", price: "Rs. 13,900.00" },
              { img: Image10, name: "Leather Skirt", price: "Rs. 9,500.00" },
              { img: Image11, name: "Layered Top", price: "Rs. 11,000.00" },
              { img: Image12, name: "Tailored Coat", price: "Rs. 14,500.00" },
              { img: Image13, name: "Casual Shirt", price: "Rs. 7,500.00" },
              { img: Image14, name: "Flowy Scarf", price: "Rs. 5,500.00" },
            ].map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <div className="overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-96 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center my-20">
          <h3 className="text-3xl font-bold text-teal-600 mb-6" data-aos="fade-up" data-aos-delay="200">
            About the Collection
          </h3>
          <p 
            className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            The Anna Stone & JUD. Capsule Collection is a celebration of timeless elegance and modern sophistication. Inspired by the fusion of classic design and contemporary trends, this collection offers a curated selection of pieces that embody versatility and style. From elegant dresses to tailored coats, each item is crafted with meticulous attention to detail, ensuring you look effortlessly chic for any occasion. Discover the essence of JUD. and elevate your wardrobe with this exclusive collaboration.
          </p>
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-teal-600 mb-6" data-aos="fade-up" data-aos-delay="200">
            Featured Design: Tie-Waist Dress
          </h3>
          <div 
            className="relative mx-auto max-w-xl flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              src={Image15}
              alt="Tie-Waist Dress"
              className="w-full max-w-md h-auto rounded-lg shadow-md object-cover"
            />
          </div>
          <p 
            className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Introducing the stunning Tie-Waist Dress from the Anna Stone & JUD. collaboration. This peach and pink masterpiece features a unique tie-waist design and a modern split neckline, blending comfort with chic style. Priced at Rs. 10,900.00, it’s a must-have for your wardrobe.
          </p>
          <a 
            href="#" 
            className="inline-block bg-black text-white px-6 py-3 rounded-full mt-6 hover:bg-teal-600 transition-colors"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Shop Now
          </a>
        </div>
      </section>
      {/* Newsletter Subscription Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center my-20">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6" data-aos="fade-up" data-aos-delay="200">
            Never miss our updates about new arrivals and special offers
          </h3>
          <form className="flex flex-col items-center justify-center space-y-4">
            <input
              type="email"
              placeholder="Enter your email here *"
              className="w-full max-w-md px-4 py-2 border-b-2 border-gray-800 focus:outline-none focus:border-teal-600"
              required
              data-aos="fade-up"
              data-aos-delay="300"
            />
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <label className="flex items-center space-x-2 text-gray-800">
                <input type="checkbox" className="form-checkbox" />
                <span>Yes, subscribe me to your newsletter. *</span>
              </label>
              <button
                type="submit"
                className="w-full sm:w-auto bg-gray-800 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Jud;