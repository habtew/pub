import React, { useState, useEffect } from 'react';
import { getWishlist, addToWishlist, removeFromWishlist } from '../api/fakeStoreApi';
import WishlistItem from './WishlistItem';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const data = await getWishlist();
      setWishlist(data);
    };
    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (itemId) => {
    await removeFromWishlist(itemId);
    const updatedWishlist = await getWishlist();
    setWishlist(updatedWishlist);
  };

  const handleAddToCart = async (itemId) => {
    try {
      
      await addToCart(itemId);
  
      
      const updatedCart = await getCart(); 
      setCart(updatedCart); 
  
      console.log('Item added to cart:', itemId);
    } catch (error) {
      console.error('Error adding item to cart:', error);
      
    }
  };

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((item) => (
            <WishlistItem
              key={item.id}
              item={item}
              onRemove={handleRemoveFromWishlist}
              onAdd={handleAddToCart}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;