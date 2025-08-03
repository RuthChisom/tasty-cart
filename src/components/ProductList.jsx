import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import productsData from '../data/data.json';

export const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);
console.log("products = ",products);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};
