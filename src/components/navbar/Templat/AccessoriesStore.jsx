import React, { useState, useEffect } from 'react';
import { 
  FaSearch, 
  FaFacebookF, 
  FaInstagram, 
  FaPinterest, 
  FaShoppingCart, 
  FaUser, 
  FaStar, 
  FaHeart,
  FaTruck,
  FaCreditCard,
  FaShieldAlt,
  FaTimes,
  FaMinus,
  FaPlus,
  FaCheck,
  FaFilter
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AccessoriesStore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activePage, setActivePage] = useState('shop');
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribeChecked, setSubscribeChecked] = useState(false);
  const [showProductModal, setShowProductModal] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "Tiger Print Tote",
      price: 15.00,
      originalPrice: null,
      image: "https://imgs.search.brave.com/eaH5W4CMT_BG292jfuZG1AwZdD9CAJsAWC8-CmNPTbU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFzS3V6NEVIbEwu/anBn",
      category: "funky",
      rating: 4.8,
      reviews: 127,
      isTopSeller: false,
      isOnSale: false,
      description: "Vibrant tiger print tote with bold colors and playful design",
      stock: 50,
      colors: ['orange', 'black'],
      sizes: ['one-size']
    },
    {
      id: 2,
      name: "Swim Team Tote",
      price: 15.00,
      originalPrice: null,
      image: "https://imgs.search.brave.com/9u-SvwGnt1aBYPsTGNuPujxQ2Q2IJokp2udTLtXFbZ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS4yMDc3/NzYzMzkwLjc1NjYv/c3NyY28sdG90ZSxj/b3R0b24sY2FudmFz/X2NyZW1lLGZsYXRs/YXksc3F1YXJlLDYw/MHg2MDAtYmcsZjhm/OGY4LjEuanBn",
      category: "funky",
      rating: 4.9,
      reviews: 89,
      isTopSeller: true,
      isOnSale: false,
      description: "Fun swim team inspired tote with retro beach vibes",
      stock: 30,
      colors: ['blue', 'white'],
      sizes: ['one-size']
    },
    {
      id: 3,
      name: "Abstract Orange Tote",
      price: 15.00,
      originalPrice: null,
      image: "https://imgs.search.brave.com/eYkLkVPk_VQId0CIbK41aODCxDYmZPQlJamr5FySzr4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxcVlSWFlZeTFM/LmpwZw",
      category: "funky",
      rating: 4.7,
      reviews: 203,
      isTopSeller: false,
      isOnSale: false,
      description: "Bold abstract orange design perfect for making a statement",
      stock: 45,
      colors: ['orange', 'yellow'],
      sizes: ['one-size']
    },
    {
      id: 4,
      name: "Abstract Blue Tote",
      price: 12.00,
      originalPrice: 18.00,
      image: "https://imgs.search.brave.com/RkjGYsLaOVfH6l4nPCh2LQ3p0ywC4XQJskEy6WYHDEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFNMEdUY25ic0wu/anBn",
      category: "funky",
      rating: 4.6,
      reviews: 67,
      isTopSeller: false,
      isOnSale: true,
      description: "Stunning blue abstract pattern at an amazing sale price",
      stock: 25,
      colors: ['blue', 'navy'],
      sizes: ['one-size']
    },
    {
      id: 5,
      name: "Cactus Pattern Tote",
      price: 16.00,
      originalPrice: 22.00,
      image: "https://imgs.search.brave.com/-uInBRS9EO3ulJMfoMgo6u1ZKW7oBHE0wCajVCVQ5I0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFiL2Fl/L2IwLzFiYWViMDZl/MjczZjFhODc5ODFi/ZDUwZTQ2NTViOGEx/LmpwZw",
      category: "pattern",
      rating: 4.9,
      reviews: 156,
      isTopSeller: true,
      isOnSale: true,
      description: "Desert-inspired cactus pattern with premium canvas material",
      stock: 40,
      colors: ['green', 'beige'],
      sizes: ['one-size']
    },
    {
      id: 6,
      name: "Geometric Print Tote",
      price: 15.00,
      originalPrice: null,
      image: "https://imgs.search.brave.com/b5C9uI9-O1ZUQBxrfPCES8GTGNypfsuA4s-5Z7LcF48/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS40NDQ0/MTI1ODEuNzc5MC90/Yiw4NDB4ODQwLG1l/ZGl1bS1jLDEsMTk4/LDYwMCw2MDAtYmcs/ZjhmOGY4LnUyLmpw/Zw",
      category: "geometric",
      rating: 4.8,
      reviews: 94,
      isTopSeller: false,
      isOnSale: false,
      description: "Modern geometric design with clean lines and sophisticated style",
      stock: 60,
      colors: ['black', 'white'],
      sizes: ['one-size']
    },
    {
      id: 7,
      name: "Banana Print Tote",
      price: 15.00,
      originalPrice: null,
      image: "https://imgs.search.brave.com/7-LImxRPvyAkmy04eACWzhcfv2rCDifBXpW2HuRtgcI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFhNDBQbGUxTEwu/anBn",
      category: "funky",
      rating: 4.7,
      reviews: 112,
      isTopSeller: false,
      isOnSale: false,
      description: "Playful banana print that's sure to bring smiles wherever you go",
      stock: 35,
      colors: ['yellow', 'green'],
      sizes: ['one-size']
    },
    {
      id: 8,
      name: "Leaf Pattern Tote",
      price: 15.00,
      originalPrice: null,
      image: "https://imgs.search.brave.com/TAREj14ULW-KT9Xzw2uLwx_-VH4kTo_ZvryN1WtS8iw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE2RmZNUXpPZUwu/anBn",
      category: "pattern",
      rating: 4.6,
      reviews: 78,
      isTopSeller: false,
      isOnSale: false,
      description: "Nature-inspired leaf pattern with soft, organic colors",
      stock: 55,
      colors: ['green', 'brown'],
      sizes: ['one-size']
    },
    {
      id: 9,
      name: "Unicorn Magic Tote",
      price: 18.00,
      originalPrice: null,
      image: "https://imgs.search.brave.com/aqB9mkzHnXcVD4VV3hmU3QnIgtYwpbk2SfQ59LXa5M4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF2ZWxDOEpqTkwu/anBn",
      category: "funky",
      rating: 4.9,
      reviews: 203,
      isTopSeller: true,
      isOnSale: false,
      description: "Whimsical unicorn design perfect for dreamers and believers",
      stock: 20,
      colors: ['pink', 'purple'],
      sizes: ['one-size']
    },
    {
      id: 10,
      name: "Cityscape Tote",
      price: 17.00,
      originalPrice: 20.00,
      image: "https://imgs.search.brave.com/9aDEJY-Ovn9ODUho-n4nbGfux8bE5clEYfutgr_zueY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFhWDBPY0tTaUwu/anBn",
      category: "pattern",
      rating: 4.8,
      reviews: 145,
      isTopSeller: false,
      isOnSale: true,
      description: "Urban cityscape silhouette for the modern city dweller",
      stock: 38,
      colors: ['gray', 'blue'],
      sizes: ['one-size']
    },
    {
      id: 11,
      name: "Minimalist Black Tote",
      price: 20.00,
      originalPrice: null,
      image: "https://imgs.search.brave.com/PmHBUfWa3uy3z0KMP80Vklot_91LHyva2cvG5THeruw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydHdj/cmVhdGlvbi5jb20v/Y2RuL3Nob3AvZmls/ZXMvYmxhY2stbWlu/aW1hbGlzdC10b3Rl/LXF1YXRlci5qcGc_/dj0xNzE5MjEyMjU2",
      category: "minimalist",
      rating: 4.7,
      reviews: 89,
      isTopSeller: false,
      isOnSale: false,
      description: "Sleek minimalist design in classic black for everyday elegance",
      stock: 70,
      colors: ['black'],
      sizes: ['one-size']
    },
    {
      id: 12,
      name: "Vintage Floral Tote",
      price: 19.00,
      originalPrice: 25.00,
      image: "https://imgs.search.brave.com/InaP-TzW4dMHZwzUwqdTaYALr-N3SS9sN7hdA3DYXMs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS40NzUw/NjUyMDU3LjMwODEv/c3NyY28sdG90ZSxj/b3R0b24sY2FudmFz/X2NyZW1lLGZsYXRs/YXksc3F1YXJlLDYw/MHg2MDAtYmcsZjhm/OGY4LjEuanBn",
      category: "vintage",
      rating: 4.8,
      reviews: 134,
      isTopSeller: true,
      isOnSale: true,
      description: "Timeless vintage floral print with a retro charm",
      stock: 28,
      colors: ['red', 'cream'],
      sizes: ['one-size']
    },
    {
      id: 13,
      name: "Stripe Geometric Tote",
      price: 14.00,
      originalPrice: null,
      image: "https://imgs.search.brave.com/NdxTAAkpGGYevDASOw59WC87rh3v4jDbw3X2hKnh5PY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQxMDcyMjcwL3Iv/aWwvNTg2NGJkLzQ3/ODc2NjEyMjIvaWxf/NjAweDYwMC40Nzg3/NjYxMjIyX3Fna3Au/anBn",
      category: "geometric",
      rating: 4.5,
      reviews: 76,
      isTopSeller: false,
      isOnSale: false,
      description: "Bold stripes in a geometric pattern for a modern twist",
      stock: 42,
      colors: ['navy', 'white'],
      sizes: ['one-size']
    },
    {
      id: 14,
      name: "Tropical Paradise Tote",
      price: 22.00,
      originalPrice: 28.00,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=600&fit=crop",
      category: "pattern",
      rating: 4.9,
      reviews: 210,
      isTopSeller: true,
      isOnSale: true,
      description: "Vibrant tropical leaves and fruits for a vacation vibe",
      stock: 15,
      colors: ['green', 'yellow'],
      sizes: ['one-size']
    },
    {
      id: 15,
      name: "Retro Wave Tote",
      price: 16.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop",
      category: "vintage",
      rating: 4.6,
      reviews: 102,
      isTopSeller: false,
      isOnSale: false,
      description: "80s-inspired wave pattern with neon accents",
      stock: 33,
      colors: ['pink', 'blue'],
      sizes: ['one-size']
    },
    {
      id: 16,
      name: "Abstract Waves Tote",
      price: 18.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=600&fit=crop",
      category: "funky",
      rating: 4.7,
      reviews: 98,
      isTopSeller: false,
      isOnSale: false,
      description: "Fluid abstract waves in oceanic blues and teals",
      stock: 48,
      colors: ['teal', 'aqua'],
      sizes: ['one-size']
    },
    {
      id: 17,
      name: "Polka Dot Delight Tote",
      price: 13.00,
      originalPrice: 17.00,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop",
      category: "pattern",
      rating: 4.4,
      reviews: 65,
      isTopSeller: false,
      isOnSale: true,
      description: "Classic polka dots in playful color combinations",
      stock: 52,
      colors: ['red', 'white'],
      sizes: ['one-size']
    },
    {
      id: 18,
      name: "Zen Minimal Tote",
      price: 21.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=600&fit=crop",
      category: "minimalist",
      rating: 4.9,
      reviews: 167,
      isTopSeller: true,
      isOnSale: false,
      description: "Clean lines and subtle textures for zen simplicity",
      stock: 25,
      colors: ['white', 'gray'],
      sizes: ['one-size']
    },
    {
      id: 19,
      name: "Paisley Dream Tote",
      price: 17.00,
      originalPrice: 23.00,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop",
      category: "vintage",
      rating: 4.8,
      reviews: 121,
      isTopSeller: false,
      isOnSale: true,
      description: "Elegant paisley pattern with vintage-inspired hues",
      stock: 39,
      colors: ['purple', 'gold'],
      sizes: ['one-size']
    },
    {
      id: 20,
      name: "Cosmic Geometric Tote",
      price: 19.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=600&fit=crop",
      category: "geometric",
      rating: 4.7,
      reviews: 88,
      isTopSeller: false,
      isOnSale: false,
      description: "Space-themed geometric shapes for a stellar look",
      stock: 31,
      colors: ['black', 'silver'],
      sizes: ['one-size']
    }
  ];

  const handleAddToCart = (product, quantity = 1) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(prev => prev.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCartItems(prev => [...prev, { ...product, quantity }]);
    }
    console.log(`Added Rs{quantity} of product Rs{product.id} to cart`);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems(prev => prev.map(item => 
        item.id === productId ? { ...item, quantity } : item
      ));
    }
  };

  const handleToggleWishlist = (productId) => {
    setWishlistItems(prev => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && subscribeChecked) {
      console.log('Subscribed with email:', email);
      setEmail('');
      setSubscribeChecked(false);
      setShowNewsletter(false);
      alert('Thank you for subscribing to Accessories Store!');
    }
  };

  const getFilteredProducts = (allProducts) => {
    let filtered = allProducts.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filtered;
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-indigo-600">Accessories</h1>
              <span className="text-sm font-medium text-gray-600">Store</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#shop"
                onClick={(e) => { 
                  e.preventDefault(); 
                  setActivePage('shop'); 
                }}
                className={`text-sm font-medium transition-colors Rs{
                  activePage === 'shop' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                Shop
              </a>
              <a 
                href="#about"
                onClick={(e) => { 
                  e.preventDefault(); 
                  setActivePage('about'); 
                }}
                className={`text-sm font-medium transition-colors Rs{
                  activePage === 'about' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                About
              </a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">
                FAQ
              </a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">
                Gift Card
              </a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">
                Contact
              </a>
            </div>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden sm:block">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search accessories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Icons */}
              <div className="flex items-center space-x-2">
                <button 
                  className="p-2 text-gray-500 hover:text-indigo-600 transition-colors relative"
                  onClick={() => console.log('Open account')}
                  aria-label="Account"
                >
                  <FaUser className="w-4 h-4" />
                </button>
                <div className="relative">
                  <button 
                    className="p-2 text-gray-500 hover:text-indigo-600 transition-colors relative"
                    onClick={() => setShowCartModal(true)}
                    aria-label="Shopping Cart"
                  >
                    <FaShoppingCart className="w-4 h-4" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-indigo-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center text-center">
                        {cartCount > 99 ? '99+' : cartCount}
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 text-gray-500 hover:text-indigo-600"
                onClick={() => console.log('Open mobile menu')}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ShopSection 
          id="shop"
          products={products} 
          onAddToCart={handleAddToCart}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activePage={activePage}
          wishlistItems={wishlistItems}
          onToggleWishlist={handleToggleWishlist}
          onShowProductModal={setShowProductModal}
        />
        <AboutSection id="about" activePage={activePage} />
      </main>

      {/* Cart Modal */}
      {showCartModal && (
        <CartModal 
          cartItems={cartItems}
          onClose={() => setShowCartModal(false)}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemoveFromCart}
        />
      )}

      {/* Product Detail Modal */}
      {showProductModal && (
        <ProductDetailModal 
          product={showProductModal}
          onClose={() => setShowProductModal(null)}
          onAddToCart={handleAddToCart}
          isInWishlist={wishlistItems.includes(showProductModal.id)}
          onToggleWishlist={() => handleToggleWishlist(showProductModal.id)}
        />
      )}

      {/* Footer */}
      <Footer 
        showNewsletter={showNewsletter}
        setShowNewsletter={setShowNewsletter}
        email={email}
        setEmail={setEmail}
        subscribeChecked={subscribeChecked}
        setSubscribeChecked={setSubscribeChecked}
        onSubscribe={handleSubscribe}
      />
    </div>
  );
};

// Shop Section Component
const ShopSection = ({ id, products, onAddToCart, searchTerm, setSearchTerm, activePage, wishlistItems, onToggleWishlist, onShowProductModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showTopSellers, setShowTopSellers] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(50);

  const categories = [
    { id: 'all', name: 'All Accessories', count: products.length },
    { id: 'funky', name: 'Funky Prints', count: products.filter(p => p.category === 'funky').length },
    { id: 'pattern', name: 'Patterns', count: products.filter(p => p.category === 'pattern').length },
    { id: 'geometric', name: 'Geometric', count: products.filter(p => p.category === 'geometric').length },
    { id: 'minimalist', name: 'Minimalist', count: products.filter(p => p.category === 'minimalist').length },
    { id: 'vintage', name: 'Vintage', count: products.filter(p => p.category === 'vintage').length }
  ];

  const getFilteredProducts = () => {
    let filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    filtered = filtered.filter(product => product.price >= priceMin && product.price <= priceMax);

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
      default:
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();
  const topSellerProducts = filteredProducts.filter(p => p.isTopSeller);

  if (activePage !== 'shop') return null;

  return (
    <section id={id} className="py-8">
      {/* Hero Section */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover Your Perfect Accessory
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Elevate your style with our collection of vibrant, hand-designed tote bags that add personality 
          to your everyday carry. Each piece is crafted with love and attention to detail.
        </p>
        
        {/* Search Bar - Mobile */}
        <div className="max-w-md mx-auto mb-8 md:hidden">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search accessories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent"
            />
          </div>
        </div>
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
                  ? 'border-indigo-600 text-indigo-600 bg-indigo-50 shadow-md'
                  : 'border-gray-300 text-gray-600 hover:border-indigo-400 hover:text-indigo-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Advanced Filters */}
        <div className="flex items-center space-x-4">
          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Best Rated</option>
          </select>

          {/* Price Range */}
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Rs</span>
            <input
              type="number"
              min="0"
              max="50"
              value={priceMin}
              onChange={(e) => setPriceMin(Number(e.target.value))}
              className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            -
            <input
              type="number"
              min="0"
              max="50"
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          {/* Top Sellers Toggle */}
          <button
            onClick={() => setShowTopSellers(!showTopSellers)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-200 Rs{
              showTopSellers
                ? 'border-indigo-600 text-indigo-600 bg-indigo-50 shadow-md'
                : 'border-gray-300 text-gray-600 hover:border-indigo-400 hover:text-indigo-600'
            }`}
          >
            <FaStar className="w-3 h-3" />
            <span>Top Sellers</span>
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mb-12">
        {showTopSellers ? (
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Our Top Sellers
            </h3>
            {topSellerProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {topSellerProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={index} 
                    onAddToCart={onAddToCart}
                    isInWishlist={wishlistItems.includes(product.id)}
                    onToggleWishlist={onToggleWishlist}
                    onShowProductModal={onShowProductModal}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">No top sellers available in this category.</p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index} 
                onAddToCart={onAddToCart}
                isInWishlist={wishlistItems.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onShowProductModal={onShowProductModal}
              />
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <div className="flex justify-center space-x-2" data-aos="fade-up" data-aos-delay="200">
          <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">Previous</button>
          <button className="px-3 py-2 border border-gray-300 rounded text-sm bg-indigo-50 border-indigo-300">1</button>
          <button className="px-3 py-2 border border-gray-300 rounded text-sm">2</button>
          <button className="px-3 py-2 border border-gray-300 rounded text-sm">3</button>
          <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">Next</button>
        </div>
      )}

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16" data-aos="fade-up">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">No accessories found</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Try adjusting your search terms or browse our full collection
          </p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSortBy('featured');
              setPriceMin(0);
              setPriceMax(50);
            }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
};

// Product Card Component
const ProductCard = ({ product, index, onAddToCart, isInWishlist, onToggleWishlist, onShowProductModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative cursor-pointer"
      onClick={() => onShowProductModal(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Badges */}
      <div className="absolute z-10 top-3 left-3 space-y-1">
        {product.isOnSale && (
          <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
            Sale
          </div>
        )}
        {product.isTopSeller && (
          <div className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
            Top Seller
          </div>
        )}
      </div>

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Quick Actions Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
              <button 
                className="bg-white bg-opacity-90 p-3 rounded-full hover:bg-opacity-100 transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleWishlist(product.id);
                }}
                aria-label="Add to wishlist"
              >
                <FaHeart className={`w-5 h-5 transition-colors Rs{isInWishlist ? 'text-red-500 fill-current' : 'text-gray-700'}`} />
              </button>
              <button 
                className="bg-white bg-opacity-90 p-3 rounded-full hover:bg-opacity-100 transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  onShowProductModal(product);
                }}
                aria-label="Quick view"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
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
          <span className="text-xl font-bold text-gray-900">Rs{product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">Rs{product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Add to Cart Button - Non-hover */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Cart Modal Component
const CartModal = ({ cartItems, onClose, onUpdateQuantity, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900">
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600 py-8">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="flex space-x-4 mb-4 pb-4 border-b border-gray-100">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600">Rs{item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-gray-500 hover:text-indigo-600"
                      >
                        <FaMinus className="w-3 h-3" />
                      </button>
                      <span className="px-3 py-1 bg-gray-100 rounded">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-gray-500 hover:text-indigo-600"
                      >
                        <FaPlus className="w-3 h-3" />
                      </button>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total: Rs{total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Product Detail Modal Component
const ProductDetailModal = ({ product, onClose, onAddToCart, isInWishlist, onToggleWishlist }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900">
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-8 p-6">
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-xl" />
          <div>
            <p className="text-3xl font-bold text-gray-900 mb-2">Rs{product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <p className="text-lg text-gray-500 line-through mb-4">Rs{product.originalPrice.toFixed(2)}</p>
            )}
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Colors */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
              <div className="flex space-x-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 Rs{
                      selectedColor === color ? 'border-indigo-600' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-gray-500 hover:text-indigo-600"
                >
                  <FaMinus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 bg-gray-100 rounded">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-gray-500 hover:text-indigo-600"
                >
                  <FaPlus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => onAddToCart(product, quantity)}
                className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
              >
                <FaShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={onToggleWishlist}
                className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <FaHeart className={`w-5 h-5 Rs{isInWishlist ? 'text-red-500 fill-current' : 'text-gray-500'}`} />
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1 mb-4">
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
              <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Section Component (unchanged for brevity, but can add more content if needed)
const AboutSection = ({ id, activePage }) => {
  if (activePage !== 'about') return null;

  return (
    <section id={id} className="py-16" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Accessories Store</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about creating accessories that are more than just functional—they're a statement. 
            Each design tells a story, celebrates creativity, and adds a pop of personality to your everyday style.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6" data-aos="fade-up" data-aos-delay="100">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTruck className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Shipping</h3>
            <p className="text-gray-600">Orders over Rs50 ship free. Fast delivery within 3-5 business days.</p>
          </div>
          
          <div className="text-center p-6" data-aos="fade-up" data-aos-delay="200">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCreditCard className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Payment</h3>
            <p className="text-gray-600">Shop safely with our encrypted payment processing and multiple payment options.</p>
          </div>
          
          <div className="text-center p-6" data-aos="fade-up" data-aos-delay="300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">30-Day Returns</h3>
            <p className="text-gray-600">Not completely satisfied? Return your purchase within 30 days for a full refund.</p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, Accessories Store began with a simple idea: create accessories that 
                bring joy and personality to everyday life. From our funky printed totes to our elegant 
                pattern collections, every piece is designed by talented artists who believe in the power 
                of self-expression through fashion.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Premium, eco-friendly canvas materials that last</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Hand-drawn, original artwork from global artists</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Fair wages and sustainable production practices</p>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-delay="100">
              <img 
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop" 
                alt="Accessories Store Team"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center" data-aos="zoom-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Accessory?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our collection and discover the perfect tote bag to complement your unique style.
          </p>
          <a 
            href="#shop"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Shop Collection
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer Component (minor UI updates)
const Footer = ({ 
  showNewsletter, 
  setShowNewsletter, 
  email, 
  setEmail, 
  subscribeChecked, 
  setSubscribeChecked, 
  onSubscribe 
}) => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}
      ></div>

      {/* Newsletter Section */}
      <div className={`max-w-7xl mx-auto px-4 transition-all duration-500 Rs{
        showNewsletter ? 'max-h-screen opacity-100 py-16' : 'max-h-0 opacity-0 py-0 overflow-hidden'
      }`}>
        <div className="text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Accessories Community</h3>
            <p className="text-gray-300 mb-8">
              Get first access to new designs, exclusive offers, and styling tips delivered straight to your inbox.
            </p>
            
            <form onSubmit={onSubscribe} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-4 bg-gray-800 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={!email || !subscribeChecked}
                  className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold text-sm uppercase tracking-wide hover:bg-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Subscribe Now
                </button>
              </div>
              
              <label className="flex items-center justify-center space-x-3">
                <input
                  type="checkbox"
                  checked={subscribeChecked}
                  onChange={(e) => setSubscribeChecked(e.target.checked)}
                  className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 rounded focus:ring-indigo-400 focus:ring-2"
                  required
                />
                <span className="text-sm text-gray-300">
                  Yes, I want to be the first to know about new arrivals and exclusive offers. *
                </span>
              </label>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Toggle */}
      <div className="border-t border-gray-800 max-w-7xl mx-auto">
        <div className="px-4 py-4 flex justify-center">
          <button
            onClick={() => setShowNewsletter(!showNewsletter)}
            className="flex items-center space-x-2 text-gray-400 hover:text-indigo-400 transition-all duration-200 text-sm font-medium"
          >
            <span>{showNewsletter ? 'Close Newsletter' : 'Join Our Newsletter'}</span>
            <svg className={`w-4 h-4 transition-transform duration-200 Rs{showNewsletter ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 pb-12 pt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <h3 className="text-2xl font-bold text-indigo-400">Accessories</h3>
              <span className="text-gray-400">Store</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Your destination for unique, hand-designed accessories that elevate your everyday style. 
              From funky prints to elegant patterns, we bring personality to your accessories collection.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors duration-200"
                aria-label="Pinterest"
              >
                <FaPinterest className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Store Policies */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-6">Store Policy</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors duration-200 block">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors duration-200 block">
                  Store Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors duration-200 block">
                  Payment Methods
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-6">Contact Us</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div>
                <p className="font-medium mb-1">Phone</p>
                <p>(123) 456-7890</p>
              </div>
              <div>
                <p className="font-medium mb-1">Email</p>
                <p className="break-all">info@accessoriesstore.com</p>
              </div>
              <div>
                <p className="font-medium mb-1">Hours</p>
                <p>Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors duration-200 block">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors duration-200 block">Care Instructions</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors duration-200 block">Wholesale</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors duration-200 block">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Accessories Store. All rights reserved. 
              Powered and secured by modern technology.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AccessoriesStore;