import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from "@fortawesome/free-brands-svg-icons";
import ProductDetails from './ProductDetails'; // Ensure this is the correct path to your Products component

function Home() {
  return (
    <div className="hero"> 
      <div className="card text-bg-dark text-white border-0">
        <img 
          src="/img/hero.jpg" 
          className="card-img" 
          alt="iPhone 14 series background" // More descriptive alt text
          height="550px" 
        />
        <div className="card-img-overlay d-flex flex-column justify-content-around">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              <FontAwesomeIcon icon={faApple} className="me-1"/> iPhone 14 Series
            </h5>
            <p className="card-text fs-2">
              Up to 10% off
            </p>
          </div>
        </div>
      </div>
      <ProductDetails />
    </div>
  );
}

export default Home;