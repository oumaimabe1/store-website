import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <ul className="list-group">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p className="mt-2">Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
    </div>
  );
};

export default Cart;

