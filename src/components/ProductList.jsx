import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import productsData from '../data/data.json';

export const ProductList = ({ addToCart, getQuantity, incrementQuantity, decrementQuantity }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);
// console.log("products = ",products[1].image);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard 
            key={product.id}
            product={product}
            quantity={getQuantity(product.id)}
            addToCart={addToCart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            />
      ))}
    </div>
  );
};
