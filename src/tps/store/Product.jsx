import React from "react";
import PropTypes from 'prop-types';
import Rating from "./Rating";
import { useCart } from "../navbar/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
    });
  };

  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.description}</td>
      <td>{product.category}</td>
      <td><img width={250} src={product.image} alt={product.title} /></td>
      <td>
        <Rating rate={product.rating.rate} count={product.rating.count} />
        {product.rating.rate}
      </td>
      <td>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          <a href="cart">Add to Cart</a>
        </button>
      </td>
    </tr>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Product;

