import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_BASE } from '../api';
import { imageMap } from '../imageMap';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/products/${id}`);
        const data = await res.json();
        if (data && data.product) setProduct(data.product);
      } catch (e) {
        console.error('Failed to load product', e);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="container py-4">Loading...</div>;

  return (
    <div className="container py-4">
      <button className="btn btn-link mb-3" onClick={() => navigate(-1)}>Back</button>
      <div className="row">
        <div className="col-md-6">
          <img src={imageMap[product.image] || product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
