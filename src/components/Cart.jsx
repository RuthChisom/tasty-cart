import "./Cart.css";

export const Cart = ({ cartItems, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2 className="cart-title">Your Cart ({cartItems.length})</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src="/assets/images/illustration-empty-cart.svg" alt="Empty Cart" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.name} className="cart-item">
                <img src={item.image.desktop} alt={item.name} className="cart-img" />

                <div className="cart-info">
                  <p className="cart-name">{item.name}</p>
                  <p className="cart-price">${item.price.toFixed(2)}</p>

                  <div className="cart-qty">
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="total-line">
              <span>Order Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="carbon-note">This is a <strong>carbon-neutral</strong> delivery</p>
            <button className="confirm-btn">Confirm Order</button>
          </div>
        </>
      )}
    </div>
  );
};
