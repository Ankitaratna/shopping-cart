import React from 'react';
import { Link } from 'react-router-dom';

const Home=()=>{
  return ( <div>
    <h1>Welcome to Our Shopping Cart!</h1>
    <p>Explore our wide range of products and find great deals.</p>
    
    <div className="featured-products">
      {/* Display featured products or categories */}
      <div className="product-card">
        <img src="product1.jpg" alt="Product 1" />
        <h3>Product 1</h3>
        <p>High-quality product with great features.</p>
        <Link to="/products/1">View Details</Link>
      </div>
      
      <div className="product-card">
        <img src="product2.jpg" alt="Product 2" />
        <h3>Product 2</h3>
        <p>Another fantastic product for you.</p>
        <Link to="/products/2">View Details</Link>
      </div>
      
      {/* Add more featured products */}
    </div>
    
    <Link to="/cart">View Cart</Link> {/* Link to the shopping cart */}
  </div>)
}
export default Home;
