import { useState , useEffect} from 'react';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const getQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const addToCart = (product) => {
  setCartItems((prevItems) => {
    const existing = prevItems.find((item) => item.id === product.id);
    if (existing) {
      return prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });
};

useEffect(() => {
  // console.log("CART ITEMS:", cartItems);
}, [cartItems]);



  const incrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

const removeFromCart = (id) => {
  setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
};


  return (
    <div className="app">
      <h1 className="section-title">Desserts</h1>
      <div className="main-content">
        <ProductList cartItems={cartItems}
          getQuantity={getQuantity}
          addToCart={addToCart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
        <Cart 
          cartItems={cartItems} 
          removeFromCart={removeFromCart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          />

      </div>
    </div>
  );
}

export default App;
