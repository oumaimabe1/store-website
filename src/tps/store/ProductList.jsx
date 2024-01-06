import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Button } from "react-bootstrap";
import { useCart } from "../navbar/CartContext"; 
import './style.css';

const Background = ({ children }) => (
  <div className="background">
    {children}
  </div>
);
const ProductList=() =>{
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState(["electronics", "jewelery", "men's clothing", "women's clothing"]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const {  addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
    });
  };

  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(response => response.json())
      .then(response => setCategories(response))
      .catch(error => console.error('Error fetching categories:', error));
  };

  const displayCategories = () => {
    return categories.map((category) => (
      <Button
        key={category}
        className={`btn btn-secondary category-button ${selectedCategory === category ? 'active' : ''}`}
        onClick={() => handleCategoryClick(category)}
      >
        {category}
      </Button>
    ));
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const displayProducts = () => {
    let filteredProducts = productList;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchInput) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          product.id.toString().includes(searchInput) ||
          product.price.toString().includes(searchInput) ||
          product.description.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    if (filteredProducts.length > 0) {
      return filteredProducts.map((product, key) => (
        <Product
          key={key}
          product={product}
          onAddToCart={() => handleAddToCart(product)}
        />
      ));
    } else {
      return (
        <tr>
          <td colSpan={7}>No items</td>
        </tr>
      );
    }
  };



  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(response => setProductList(response))
      .catch(error => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = document.querySelector('#Search').value;
    setSearchInput(searchValue);
  };

  return (
    <div>
  
     
    <Background>
      <div className='container-fluid mx-auto w-75 my-3'>
        <form className="my-form">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label className="col-form-label">Search:</label>
            </div>
            <div className="col-auto">
              <input type="text" id="Search" className="form-control search-input" placeholder="Enter your search query" />
            </div>
            <div className="col-auto">
              <input className='btn btn-primary search-button' type="Submit" value='Search' onClick={handleSearch} />
            </div>
          </div>
          <hr></hr>
          <div className="row g-3 align-items-center ">
            <div className="btn-group">
              {displayCategories()}
            </div>
          </div>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>price</th>
              <th>description</th>
              <th>category</th>
              <th>image</th>
              <th>rating</th>
            </tr>
          </thead>
          <tbody>
            {displayProducts()}
          </tbody>
        </table>
      </div>
    </Background>
</div>
  );
}
export default ProductList;
