import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import store from '../redux/store';
import { useState } from 'react';


function Navbar() {
  
  let currentState = store.getState()
  const [currentCartQuantity, setCartQuantity]=useState(0)

  const handleClick=()=>{
    setCartQuantity(currentState.products.length)
  }
  return (
    <nav>
      <Link style={{flex:'1'}} to="/">Home</Link>
      <Link style={{flex:'1'}} to="/products">Products</Link>
      <Link style={{flex:'1'}} onClick={()=>handleClick} to="/cart">Cart ({currentCartQuantity})</Link>
    </nav>
  );
}

export default Navbar;
