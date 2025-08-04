import './ProductCard.css';
import { MinusCircle, PlusCircle } from "lucide-react"; 

export const ProductCard = ({ product, quantity = 0, addToCart, incrementQuantity, decrementQuantity }) => {
//   const [hovered, setHovered] = useState(false);

  return (
    <div
      className="product-card"
    //   onMouseEnter={() => setHovered(true)}
    //   onMouseLeave={() => setHovered(false)}
    >
      <img src={product.image.desktop} alt={product.name} />
      <div className="product-info">
        <p className="category">{product.category}</p>
        <h4>{product.name}</h4>
        <p className="price">${product.price.toFixed(2)}</p>

        {quantity > 0 ? (
          <div className="qty-button">
            <button onClick={() => decrementQuantity(product.id)}>
              <MinusCircle size={18} />
            </button>
            <span>{quantity}</span>
            <button onClick={() => incrementQuantity(product.id)}>
              <PlusCircle size={18} />
            </button>
          </div>
        ) : (
          <button className="add-btn" onClick={() => addToCart(product)}>
            🛒 Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
