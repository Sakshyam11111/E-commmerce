import React, { useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  ArrowUp,
  Globe,
  Shield,
  Award,
  Users
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleNewsletterSubmit = () => {
    if (email.trim()) {
      // Handle newsletter signup
      console.log('Newsletter signup:', email);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-500", name: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-400", name: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-500", name: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-600", name: "LinkedIn" },
  ];

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    Products: [
      { name: 'E-commerce', href: '#' },
      { name: 'Marketing Suite', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Mobile App', href: '#' },
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'Community', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Compliance', href: '#' },
    ],
  };

  const trustIndicators = [
    { icon: Shield, text: 'SSL Secured', color: 'text-green-400' },
    { icon: Award, text: 'Award Winning', color: 'text-yellow-400' },
    { icon: Users, text: '2M+ Users', color: 'text-blue-400' },
    { icon: Globe, text: 'Global Reach', color: 'text-purple-400' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute top-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Your Company
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Empowering businesses worldwide with innovative e-commerce solutions. Join millions of entrepreneurs building their dreams online.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm mb-4">Get the latest news and updates delivered to your inbox.</p>
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <button
                  onClick={handleNewsletterSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-4 text-gray-200">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-700/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600/20 rounded-lg">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Call us</p>
                <p className="text-white font-medium">+9 (977) 123-456-789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-600/20 rounded-lg">
                <Mail className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email us</p>
                <p className="text-white font-medium">WIX@company.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-600/20 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Visit us</p>
                <p className="text-white font-medium">Kathmandu, NP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Trust Indicators */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 mb-8">
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Stay Connected</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 bg-gray-800/50 rounded-full border border-gray-700/50 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  aria-label={social.name}
                >
                  <social.icon className={`w-6 h-6 transition-all duration-300 ${hoveredSocial === index ? 'scale-110' : ''}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 group">
                <div className={`p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 group-hover:scale-110 transition-all duration-300`}>
                  <indicator.icon className={`w-6 h-6 ${indicator.color}`} />
                </div>
                <span className="text-xs text-gray-400 text-center">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for entrepreneurs worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;