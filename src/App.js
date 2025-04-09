import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 49.99,
      image: "https://via.placeholder.com/200x150?text=Headphones"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 89.99,
      image: "https://via.placeholder.com/200x150?text=Smart+Watch"
    }
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <h1>🛍️ My eCommerce Store</h1>
      <div className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart items={cartItems} />
    </div>
  );
}

export default App;

