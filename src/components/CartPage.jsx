import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, updateQuantity } from '../redux/productSlice';

function CartPage() {
  const cart = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(updateQuantity(item.id, item.quantity + 1))}>+</button>
              <button onClick={() => dispatch(updateQuantity(item.id, item.quantity - 1))}>-</button>
              <button onClick={() => dispatch(removeProduct(item.id))}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
