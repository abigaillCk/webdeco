import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Project from './components/Project';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Product from './components/Product';
import Navbar from './components/Navbar';
import NewsDetail from './components/NewsDetail';
import ProjectDetail from './components/ProjectDetail';
import ProductDetail from './components/ProductDetail';
import ServiceDetail from './components/ServiceDetail';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/news/:id" element={<NewsDetail />}/>
        <Route path="/project/:id" element={<ProjectDetail />}/>
        <Route path="/product/:id" element={<ProductDetail />}/>
        <Route path="/service/:id" element={<ServiceDetail />}/>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
