import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import TemplateSection from './components/TemplateSection';
import DomainSearch from './components/DomainSearch';
import ProductSelling from './components/ProductSelling';
import AIFeatures from './components/AIFeatures';
import Testimonials from './components/Testimonials';
import Senekers from './components/Senekers';
import InternationalPromo from './components/InternationalPromo';
import MarketingSuite from './components/marketingData';
import CustomerSupport from './components/CustomerSupport';
import VisionToRevenue from './components/VisionToRevenue';
import Footer from './components/Footer';
import SignUp from './components/login/SignUp';
import Login from './components/login/Login';
import ETemplate1 from './components/navbar/Templat/ETemplate1';
import Jud from './components/eCommercetemplate/Jud';
import Christinaglassess from './components/eCommercetemplate/Christinaglassess';
import Create from './components/onlinestore/Create';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FeatureSection />
            <TemplateSection />
            <DomainSearch />
            <ProductSelling />
            <AIFeatures />
            <Testimonials />
            <Senekers />
            <InternationalPromo />
            <MarketingSuite />
            <CustomerSupport />
            <VisionToRevenue />
          </>
        } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/eTemplate1" element={<ETemplate1 />} />
        <Route path="/jud" element={<Jud />} />
        <Route path="/christinaglassess" element={<Christinaglassess />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;