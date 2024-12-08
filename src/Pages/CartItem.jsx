import React from 'react';

function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <div>
      <img src={item.product.image} alt={item.product.title} />
      <h4>{item.product.title}</h4>
      <p>${item.product.price}</p>
      <input type="number" value={item.quantity} onChange={(e) => onQuantityChange(item.id, e.target.value)} />
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;