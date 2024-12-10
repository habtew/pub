import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Product from "./Pages/Product"; 
import Cart from "./Pages/Cart"; 
import UserList from "./Pages/UserList"; 
import Login from "./Pages/Login"; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductDetails />} />
        <Route path="/product/:id" element={<Product />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;