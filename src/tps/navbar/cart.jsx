// cart.jsx
/*import React from 'react';
import { useCart } from './CartContext'; // Assurez-vous d'utiliser le bon chemin


const Cart = () => {
  const { cart } = useCart(); // Utilisez 'cart' au lieu de 'Cart'
  const cartStyles = {

    top: '60px',
    right: 0,
    backgroundColor: 'black',
    padding: '10px',
    border: '1px solid #ccc',
  };

  if (cart.length === 0) {
    return null; // Ne pas rendre le panier s'il est vide
  }
  return (
    
    <div style={cartStyles} className="cart-container">
      <h3>Shopping Cart</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
    </div>
  );
};

export default Cart;*/

