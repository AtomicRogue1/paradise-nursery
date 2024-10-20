import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';
import './ProductPage.css'

const products = [
  { id: 1, name: 'Aloe Vera', price: 10, image: 'https://greenripegarden.com/wp-content/uploads/2020/04/Aloe-Vera-Plant-2048x1365.jpg' },
  { id: 2, name: 'Lavender', price: 12, image: 'https://worldoffloweringplants.com/wp-content/uploads/2017/11/Lavandula-angustifolia-English-Lavender1.jpg' },
  { id: 3, name: 'Pansy', price: 15, image: 'https://www.agrifarming.in/wp-content/uploads/2021/07/pansy-327188_1920.jpg' },
  { id: 4, name: 'Tulips', price: 12, image: 'https://www.thespruce.com/thmb/jANLi9M1AIYqJJEXt-X-1vP_1_0=/2206x0/filters:no_upscale():max_bytes(150000):strip_icc()/tulips-planting-and-growing-tulips-1402137-02-706093a4073642429ada61c2839e7240.jpg' },
  { id: 5, name: 'Cactus', price: 20, image: 'https://www.thespruce.com/thmb/U2nAr_7bgYVZsch0ikAiXxS17y4=/4928x3264/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-554144227-577489063df78cb62c7629c8.jpg' },
  { id: 6, name: 'Lily', price: 12, image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Lilium_longiflorum_(Easter_Lily).JPG' },
];

function ProductsPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Our Plants</h1>
      <div className="product-list">
        {products.map((plant) => (
          <div style={{borderColor: "white", borderWidth: "thick", borderRadius: "8px", textAlign: "center", padding: "10px" }} key={plant.id}>
            <img style={{ width: "256px", height: "auto", objectFit: "contain" }} src={plant.image} alt={plant.name} />
            <h2>{plant.name}</h2>
            <p>${plant.price}</p>
            <button onClick={() => dispatch(addProduct(plant))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
