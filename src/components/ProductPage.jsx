import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/reducers/cartActions';

const products = [
  { id: 1, name: 'Aloe Vera', description: 'Medicinal plant', price: 10, image: '/images/aloe.jpg' },
  { id: 2, name: 'Lavender', description: 'Aromatic plant', price: 12, image: '/images/lavender.jpg' },
  // Add more plants as needed
];

function ProductsPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Our Plants</h1>
      <div className="product-list">
        {products.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <p>${plant.price}</p>
            <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
