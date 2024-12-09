import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector,useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null); 
    const [loading, setLoading] = useState(true);

    const dispatch= useDispatch();
    const addProduct =(product)=>{
      dispatch(addCart(product));
    }
  

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setProduct(result);
            } catch (error) {
                console.error("Failed to fetch product:", error);
            } finally {
                setLoading(false);
            }
        };
        getProduct();
    }, [id]);

    const Loading = () => <div>Loading.....</div>;

    const ShowProduct = () => (
        <div className="row  mt-5">
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px" />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">{product.category}</h4>
                <h2 className="display-5">{product.title}</h2>
                <p>{product.description}</p>
                <p className="lead fw-bold">${product.price}</p>
                <p className="lead fw-bold">
                    Rating: {product.rating ? product.rating.rate : "N/A"}
                    <FontAwesomeIcon icon={faStar} className="me-1" />
                </p>
                <button className="btn btn-outline-dark me-3" onClick={()=>addProduct(product)}> Add to cart</button>
                <NavLink to="/cart" className="btn btn-dark me-3"> Go to cart</NavLink >
            </div>
        </div>
    );

    return (
        <div className="container">
            <div className="row">
                {loading ? <Loading /> : product ? <ShowProduct /> : <div>Product not found.</div>}
            </div>
        </div>
    );
}

export default Product;