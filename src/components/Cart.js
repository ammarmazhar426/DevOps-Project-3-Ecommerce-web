import React from 'react';

const Cart = ({ items }) => {
  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

