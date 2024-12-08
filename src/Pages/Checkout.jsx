import React, { useState } from 'react';
 import { placeOrder } from '../api/fakeStoreApi';

function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '', // Add email field
    phone: '', // Add phone field
    paymentMethod: '', // Add payment method field (e.g., "credit card", "paypal")
    // ... other form fields as needed
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await placeOrder(formData);
      alert('Order placed successfully!'); // Replace with a success message component
      // Optionally, redirect to a confirmation or order history page
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred. Please try again later.'); // Replace with an error message component
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleChange} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        <label htmlFor="paymentMethod">Payment Method:</label>
        <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
          <option value="">Select Payment Method</option>
          {/* Add options for different payment methods */}
        </select>
        {/* Add other form fields as needed */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;