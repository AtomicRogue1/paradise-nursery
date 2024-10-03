import React from 'react';
import './ProductPage.css'; // Optional styling

const plants = [
  { category: 'Succulents', name: 'Aloe Vera', price: '$12.99', image: '/assets/aloe.jpg' },
  { category: 'Succulents', name: 'Echeveria', price: '$9.99', image: '/assets/echeveria.jpg' },
  { category: 'Ferns', name: 'Boston Fern', price: '$15.99', image: '/assets/boston_fern.jpg' },
  { category: 'Ferns', name: 'Maidenhair Fern', price: '$14.99', image: '/assets/maidenhair_fern.jpg' },
  { category: 'Cacti', name: 'Golden Barrel Cactus', price: '$18.99', image: '/assets/golden_barrel.jpg' },
  { category: 'Cacti', name: 'Prickly Pear', price: '$20.99', image: '/assets/prickly_pear.jpg' },
];

const ProductPage = () => {
  const categories = ['Succulents', 'Ferns', 'Cacti'];

  return (
    <div className="product-page">
      <h1>Our Houseplants</h1>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="plant-category">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div key={plant.name} className="plant-item">
                  <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                  <h3>{plant.name}</h3>
                  <p>{plant.price}</p>
                  <button className="add-to-cart-button">Add to Cart</button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;