import React from 'react';

function WishlistItem({ item, onRemove, onAddToCart }) {
  return (
    <div>
      <img src={item.product.image} alt={item.product.title} />
      <h4>{item.product.title}</h4>
      <p>${item.product.price}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
      <button onClick={() => onAddToCart(item.id)}>Add to Cart</button>
    </div>
  );
}

export default WishlistItem;