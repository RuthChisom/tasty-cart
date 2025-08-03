import './ProductCard.css';

export const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.image.desktop} alt={product.name} />
    <div className="product-info">
      <p className="category">{product.category}</p>
      <h4>{product.name}</h4>
      <p className="price">${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>🛒 Add to Cart</button>
    </div>
  </div>
);
