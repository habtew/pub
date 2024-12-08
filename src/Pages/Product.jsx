import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null); // Initialize as null
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`); // Use backticks
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
    }, [id]); // Add id to dependency array

    const Loading = () => {
        return <div>Loading.....</div>;
    };

    const ShowProduct = () => {
        return (
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px" />
                <h2 className="mt-3">{product.title}</h2>
                <p>{product.description}</p>
                <p className="lead fw-bold">${product.price}</p>
            </div>
        );
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : product ? <ShowProduct /> : <div>Product not found.</div>}
                </div>
            </div>
        </div>
    );
}

export default Product;