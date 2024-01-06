import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { CartProvider } from './tps/navbar/CartContext';
import ProductList from './tps/store/ProductList';
import Header from './tps/navbar/Header';
import Cart from './tps/navbar/cart';
import CartPage from './tps/navbar/CartPage';
const App = () => {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/shop" element={<ProductList />} />
          </Routes>
      </CartProvider>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
