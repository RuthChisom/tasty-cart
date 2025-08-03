import { useState } from 'react';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="app">
      <h1 className="section-title">Desserts</h1>
      <div className="main-content">
        <ProductList addToCart={addToCart} />
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
