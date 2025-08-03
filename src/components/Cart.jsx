export const Cart = ({ cartItems }) => (
  <div className="cart">
    <h2>Your Cart ({cartItems.length})</h2>
    {cartItems.length === 0 ? (
      <div className="empty-cart">
        <img src="/assets/images/illustration-empty-cart.svg" alt="Empty cart" />
        <p>Your added items will appear here</p>
      </div>
    ) : (
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>
    )}
  </div>
);
