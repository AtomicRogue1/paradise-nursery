import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductsPage from './components/ProductPage';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <Router>
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;