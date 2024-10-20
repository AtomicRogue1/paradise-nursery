import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, updateQuantity } from '../redux/productSlice';
import './CartPage.css'

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
              <div className='item1'>
              <h3>{item.name}</h3>
              <h5>${item.price}</h5>
              </div>
              <div className='item2'>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(updateQuantity(item.id, item.quantity + 1))}>+</button>
              <button onClick={() => dispatch(updateQuantity(item.id, item.quantity - 1))}>-</button>
              <button onClick={() => dispatch(removeProduct(item.id))}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <button style={{marginTop:'100px'}} onClick={()=>alert("Coming Soon!")}>Checkout</button>
    </div>
  );
}

export default CartPage;
