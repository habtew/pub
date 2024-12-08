import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/';

export const getAllProducts = async () => {
const response = await axios.get(`${API_URL}products`);
 return response.data;};



// Call the function to fetch products

export const getProductById = async (productId) => {
  const response = await axios.get(`${API_URL}products/${productId}`);
  return response.data;
};

export const getCart = async () => {
  
  const response = await axios.get(`${API_URL}carts`); 
  return response.data;
};

export const createCart = async () => {
    // Assuming this endpoint creates a new cart and returns its details
    const response = await axios.post(`${API_URL}carts`, {});
    return response.data; // This should return the new cart ID
  };
  


  // Function to add an item to an existing cart
  export const addToCart = async (cartId, productId, quantity = 1) => {
    const response = await axios.post(`${API_URL}carts/${cartId}/items`, {
      productId,
      quantity,
    });
    return response.data;
  };

export const removeFromCart = async (itemId) => {
  
  const response = await axios.delete(`${API_URL}carts/YOUR_CART_ID/items/${itemId}`);
  return response.data;
};

export const updateCartItem = async (itemId, quantity) => {
  
  const response = await axios.put(`${API_URL}carts/YOUR_CART_ID/items/${itemId}`, {
    quantity,
  });
  return response.data;
};

export const getUserDetails = async (userId) => { 
    const response = await axios.get(`${API_URL}users/${userId}`); 
    return response.data;
  };
  
  export const updateUser = async (userData) => {
    const response = await axios.put(`${API_URL}users/${userData.id}`, userData); 
    return response.data;
  };

  // Function to retrieve wishlist items
export const getWishlist = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/me/wishlist`); 
      return response.data;
    } catch (error) {
      console.error('Error fetching wishlist:', error);
      
      return []; 
    }
  };
  
  // Function to add an item to the wishlist
  export const addToWishlist = async (productId) => {
    try {
      const response = await axios.post(`${API_URL}/users/me/wishlist`, { productId }); 
      return response.data;
    } catch (error) {
      console.error('Error adding item to wishlist:', error);
     
      throw error;
    }
  };
  
  // Function to remove an item from the wishlist
  export const removeFromWishlist = async (itemId) => {
    try {
      const response = await axios.delete(`${API_URL}/users/me/wishlist/${itemId}`); 
      return response.data;
    } catch (error) {
      console.error('Error removing item from wishlist:', error);
     
      throw error;
    }
  };



export const placeOrder = async (orderData) => {
    try {
      const response = await axios.post(`${API_URL}/orders`, orderData); 
      return response.data;
    } catch (error) {
      console.error('Error placing order:', error);
      throw error; 
    }
  };