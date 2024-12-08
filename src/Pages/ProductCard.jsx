import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div>
        <img src={product.image} alt={product.title} />
        <h4>{product.title}</h4>
        <p>${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;