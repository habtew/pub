import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Product from "./Pages/Product"; // Import Product component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductDetails />} />
        <Route path="/product/:id" element={<Product />} /> {/* Ensure this route is set */}
      </Routes>
    </>
  );
}

export default App;