import React, { useState, useEffect } from 'react';
import { 
  FaSearch, 
  FaShoppingCart, 
  FaUser, 
  FaBell, 
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaStar,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaTruck
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BackpackStore = () => {
  const [activePage, setActivePage] = useState('home');
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const categories = [
    { id: 'all', name: 'All Backpacks' },
    { id: 'daypacks', name: 'Daypacks' },
    { id: 'hiking', name: 'Hiking' },
    { id: 'travel', name: 'Travel' },
    { id: 'technical', name: 'Technical' },
    { id: 'laptop', name: 'Laptop' }
  ];

  const products = [
    {
      id: 1,
      name: "Summit 30L Daypack",
      price: 89.00,
      originalPrice: null,
      image: "https://imgs.search.brave.com/jcGxVSvCzpoqmKN0weRCjGzjBwbeZIOG7KpU2ZmSbgU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdW1t/aXQtY3JlYXRpdmUu/Y29tLmF1L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA1LzQw/TC1HcmVlbi1Gcm9u/dC1TaWRlLTIuanBn",
      category: "daypacks",
      rating: 4.8,
      reviews: 247,
      isNew: true,
      isOnSale: false,
      capacity: "30L",
      weight: "1.2kg",
      material: "Nylon",
      color: "Midnight Blue"
    },
    {
      id: 2,
      name: "Trailblazer 50L Hiking Pack",
      price: 149.00,
      originalPrice: null,
      image: "https://imgs.search.brave.com/5kh9psFLMUBPjEv0xniE6nJqwcoHeP2FVhR3hx6L6Bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFiTU93UUVmcEwu/anBn",
      category: "hiking",
      rating: 4.9,
      reviews: 156,
      isNew: true,
      isOnSale: false,
      capacity: "50L",
      weight: "1.8kg",
      material: "Ripstop Nylon",
      color: "Forest Green"
    },
    {
      id: 3,
      name: "Nomad 40L Travel Backpack",
      price: 119.00,
      originalPrice: 139.00,
      image: "https://imgs.search.brave.com/Er-nraoXBxu3SLxz7WMRB0nrn4BDxv7K3kz-K1kQbQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDI0LzA0L2NhcnJ5/b250cmF2ZWxiYWNr/cGFja3MtMjA0OHB4/LTg2NTguanBnP2F1/dG89d2VicCZxdWFs/aXR5PTc1JndpZHRo/PTEwMjQ",
      category: "travel",
      rating: 4.7,
      reviews: 89,
      isNew: false,
      isOnSale: true,
      capacity: "40L",
      weight: "1.5kg",
      material: "Canvas",
      color: "Slate Gray"
    },
    {
      id: 4,
      name: "Peak Pro 25L Technical Pack",
      price: 199.00,
      originalPrice: null,
      image: "https://imgs.search.brave.com/57pd0vrunLPAq7wfau0pGeJ16t1GxhyrJv2Xr-q3tZk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGFja2hhY2tlci5j/b20vMjAyNC8wOC9m/NDk2MDc4YS1wZWFr/LWRlc2lnbi1vdXRk/b29yLWJhY2twYWNr/LTI1bC13aXRoLWNh/bWVyYS1jdWJlLmpw/Zw",
      category: "technical",
      rating: 4.9,
      reviews: 203,
      isNew: true,
      isOnSale: false,
      capacity: "25L",
      weight: "1.1kg",
      material: "Cordura",
      color: "Black"
    },
    {
      id: 5,
      name: "Urban 15L Laptop Backpack",
      price: 79.00,
      originalPrice: null,
      image: "http://imgs.search.brave.com/kbUdOdjcq0l4H5QS3EBD0ji4As7AGqoajXIguUdBYP0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEzVy1KeHFKakwu/anBn",
      category: "laptop",
      rating: 4.6,
      reviews: 134,
      isNew: false,
      isOnSale: false,
      capacity: "15L",
      weight: "0.9kg",
      material: "Polyester",
      color: "Charcoal"
    },
    {
      id: 6,
      name: "Explorer 65L Expedition Pack",
      price: 229.00,
      originalPrice: null,
      image: "https://imgs.search.brave.com/C7bcZMr0lHp3_XsgVk__7zcRbyDp27X-Mx3xUIXRH8g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZXRv/bi5teC9jZG4vc2hv/cC9wcm9kdWN0cy90/ZXRvbi1zcG9ydHMt/ZXhwbG9yZXItNjVs/LWJhY2twYWNrLTM4/ODY4NTYwNDc4NDQ2/LmpwZz92PTE3NDU2/MDAyNzImd2lkdGg9/MzAwMA",
      category: "hiking",
      rating: 4.8,
      reviews: 98,
      isNew: true,
      isOnSale: false,
      capacity: "65L",
      weight: "2.1kg",
      material: "Polyester",
      color: "Arctic White"
    },
    {
      id: 7,
      name: "Commute 20L Commuter Pack",
      price: 99.00,
      originalPrice: 119.00,
      image: "https://imgs.search.brave.com/mzNL02LADng35RR1ojshGEterIO01Zj5ca9UQCl65JM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oZWlt/cGxhbmV0LmNvbS9j/ZG4vc2hvcC9wcm9k/dWN0cy82MGU1YjRk/YTcxMWY1NmRjY2Y5/MmE2NTZfQXJ0aWtl/bGJpbGRlcl9DRV9D/b21tdXRlcl8wMTFf/MTAyNHgxMDI0Lmpw/Zz92PTE3NTE4ODI4/MzA",
      category: "daypacks",
      rating: 4.7,
      reviews: 167,
      isNew: false,
      isOnSale: true,
      capacity: "20L",
      weight: "1.0kg",
      material: "Nylon",
      color: "Navy Blue"
    },
    {
      id: 8,
      name: "Tech 16L Laptop Daypack",
      price: 89.00,
      originalPrice: null,
      image: "https://imgs.search.brave.com/NQ13XjcRnglysbIbMmI5Vp0r8B4l3GRpddjoGKOLKHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFLM094NWRjUkwu/anBn",
      category: "laptop",
      rating: 4.8,
      reviews: 112,
      isNew: true,
      isOnSale: false,
      capacity: "16L",
      weight: "0.8kg",
      material: "Recycled Polyester",
      color: "Olive Green"
    }
  ];

  const handleAddToCart = (productId) => {
    setCartCount(prev => prev + 1);
    console.log(`Added product Rs{productId} to cart`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', searchTerm);
  };

  const handleShopNow = () => {
    setActivePage('shop');
    setTimeout(() => {
      document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getFilteredProducts = () => {
    let filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-black bg-opacity-90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                BACKPACK STORE
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-sm font-medium transition-colors Rs{
                  activePage === 'home' ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </a>
              <a 
                href="#shop"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage('shop');
                  document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-sm font-medium transition-colors Rs{
                  activePage === 'shop' ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Shop
              </a>
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>

            {/* Search - Desktop */}
            <div className="hidden md:block relative mx-8">
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  placeholder="Search backpacks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-4 pr-10 py-2 bg-black bg-opacity-20 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent w-64 text-sm"
                />
                <button 
                  type="submit"
                  className="absolute right-3 text-gray-400 hover:text-white"
                >
                  <FaSearch className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Right Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-gray-300 hover:text-white transition-colors">
                <FaBell className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-300 hover:text-white transition-colors relative">
                <FaUser className="w-4 h-4" />
                <FaChevronDown className="w-3 h-3 ml-1" />
              </button>
              <div className="relative">
                <button className="p-2 text-gray-300 hover:text-white transition-colors relative">
                  <FaShoppingCart className="w-4 h-4" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount > 99 ? '99+' : cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#" className="text-gray-300 hover:text-white text-sm">Home</a>
                <a href="#shop" className="text-gray-300 hover:text-white text-sm">Shop</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm">About</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm">Blog</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm">Contact</a>
              </div>
              <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-800">
                <input
                  type="text"
                  placeholder="Search backpacks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 pl-4 py-2 bg-black bg-opacity-20 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <FaSearch className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              CARRY YOUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                ADVENTURE
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Engineered for every journey, from urban commutes to mountain expeditions. 
              Discover backpacks that move with you, not against you.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handleShopNow}
                className="px-12 py-4 bg-white text-black font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide border-2 border-white"
              >
                Explore Collection
                <FaArrowRight className="inline ml-2 w-4 h-4" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Watch Our Story
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center text-white">
              <div data-aos="fade-up" data-aos-delay="100">
                <div className="text-3xl font-bold text-cyan-300">10K+</div>
                <div className="text-sm opacity-90">Satisfied Customers</div>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="text-3xl font-bold text-cyan-300">5Y</div>
                <div className="text-sm opacity-90">Warranty</div>
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <div className="text-3xl font-bold text-cyan-300">50+</div>
                <div className="text-sm opacity-90">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-8 right-8 flex space-x-4" data-aos="fade-left" data-aos-delay="500">
          <a href="#" className="w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all duration-300">
            <FaFacebookF className="w-5 h-5 text-white" />
          </a>
          <a href="#" className="w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all duration-300">
            <FaInstagram className="w-5 h-5 text-white" />
          </a>
          <a href="#" className="w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all duration-300">
            <FaYoutube className="w-5 h-5 text-white" />
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="shop-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium backpacks crafted for every adventure. From city streets to mountain trails.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6" data-aos="fade-up">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium border-2 transition-all duration-200 transform hover:scale-105 Rs{
                    selectedCategory === category.id
                      ? 'border-cyan-600 text-cyan-600 bg-cyan-50 shadow-md'
                      : 'border-gray-300 text-gray-600 hover:border-cyan-400 hover:text-cyan-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-200 bg-white"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Best Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {/* View All Button */}
          {filteredProducts.length > 0 && (
            <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="200">
              <button className="px-12 py-4 bg-black text-white font-bold text-lg rounded-full hover:bg-gray-800 transition-all duration-300 uppercase tracking-wide">
                View All Backpacks
              </button>
            </div>
          )}

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16" data-aos="fade-up">
              <div className="text-6xl mb-4">🎒</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No backpacks found</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Try adjusting your filters or search terms to find the perfect pack
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSortBy('featured');
                }}
                className="bg-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Backpacks?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engineered with precision and built to last. Every detail matters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12" data-aos="fade-up">
            {/* Feature 1 */}
            <div className="text-center group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaTruck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Shipping</h3>
              <p className="text-gray-600 leading-relaxed">
                Orders over Rs100 ship free worldwide. Fast delivery within 3-5 business days.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaShieldAlt className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lifetime Warranty</h3>
              <p className="text-gray-600 leading-relaxed">
                Every backpack comes with our lifetime warranty. Built to last, guaranteed.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Shipping</h3>
              <p className="text-gray-600 leading-relaxed">
                We ship to over 50 countries worldwide. Your adventure gear, delivered anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Pack
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get exclusive access to new releases, limited drops, and expert packing tips. 
            Be the first to carry the future of adventure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-black bg-opacity-20 border-2 border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
            <button className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 uppercase tracking-wide">
              Join Now
            </button>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time. No spam, ever.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <h3 className="text-2xl font-bold text-cyan-400">BACKPACK STORE</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your ultimate destination for premium backpacks that carry more than just gear—they carry your story. 
                From urban explorers to mountain conquerors, we design for every journey.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors">
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-6">Shop</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Daypacks</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Hiking Packs</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Travel Backpacks</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Laptop Bags</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Accessories</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold text-white mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 Backpack Store. All rights reserved. | Built for the journey ahead.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="zoom-in"
      data-aos-delay={Math.random() * 200}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 space-y-2">
          {product.isNew && (
            <div className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              New
            </div>
          )}
          {product.isOnSale && (
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              Sale
            </div>
          )}
        </div>

        {/* Quick Actions */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
              <button 
                className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Quick view:', product.name);
                }}
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
              <button 
                className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product.id);
                }}
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5M7 13l-1.5 7.5M17 13l1.5 7.5M17 13l4-8M16 15H8m0 0l1 1m-1-1l-1-1m3 1l-1-1m-1 1l1 1M17 15l1-1m-1 1l-1 1" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors line-clamp-1">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={`w-4 h-4 Rs{
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : i === Math.floor(product.rating) && product.rating % 1 !== 0
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-4">
          <span className={`text-xl font-bold Rs{product.isOnSale ? 'text-red-600' : 'text-gray-900'}`}>
            Rs{product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">Rs{product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Product Specs */}
        <div className="space-y-1 text-xs text-gray-500 mb-4">
          <div className="flex justify-between">
            <span>Capacity:</span>
            <span className="font-medium">{product.capacity}</span>
          </div>
          <div className="flex justify-between">
            <span>Weight:</span>
            <span className="font-medium">{product.weight}</span>
          </div>
          <div className="flex justify-between">
            <span>Color:</span>
            <span className="font-medium">{product.color}</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product.id)}
          className="w-full bg-black text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 tracking-wide text-sm transform hover:scale-105"
        >
          Add to Cart - Rs {product.price.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default BackpackStore;