import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


function ProductDetails() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);


 
  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (componentMounted) {
          setData(result);
          setFilteredData(result); // Initialize filteredData with all products
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => (
    <div>Loading.......</div>
  );

  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(product => product.category === category);
      setFilteredData(filtered);
    }
  };

  const ShowProducts = () => (
    <div>
      <div className="buttons mb-3">
        <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("all")}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("men's clothing")}>Men's Clothes</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
        <button className="btn btn-outline-dark" onClick={() => filterProducts("electronics")}>Electronics</button>
      </div>
      <div className="row">
        {filteredData.map(product => (
          <div key={product.id} className="col-md-4 mb-4 d-flex">
            <div className="card flex-fill">
              <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-center lead fw-bold">${product.price}</p>
                <NavLink to={`/product/${product.id}`} className='btn btn-outline-dark'> Buy Now</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='container my-5 py-5'>
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default ProductDetails;