import React, { useState, useEffect } from 'react';
import { getCart, addToCart, removeFromCart, updateCartItem } from '../api/fakeStoreApi';
import CartItem from './CartItem';

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      const data = await getCart();
      setCart(data);
      calculateTotal(data);
    };
    fetchCart();
  }, []);

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
    setTotal(totalAmount);
  };

  const handleQuantityChange = async (itemId, newQuantity) => {
    await updateCartItem(itemId, newQuantity);
    const updatedCart = await getCart();
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  const handleRemoveItem = async (itemId) => {
    await removeFromCart(itemId);
    const updatedCart = await getCart();
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  const handleCheckout = () => {
    // Implement checkout logic here, e.g., redirect to a checkout page or process payment
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange} onRemove={handleRemoveItem} />
          ))}
          <p>Total: ${total}</p>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;