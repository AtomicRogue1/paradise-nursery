import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import store from '../redux/store';

let currentState = store.getState()

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({currentState.products.length})</Link>
    </nav>
  );
}

export default Navbar;
