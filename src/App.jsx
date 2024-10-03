import React from 'react';
import LandingPage from './components/LandingPage';
import ProductPage from './components/ProductPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/products" element={<ProductPage/>} />
      </Routes>
    </Router>
  );
}

export default App
