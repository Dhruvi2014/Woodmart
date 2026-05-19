import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE } from '../api';
import { imageMap } from '../imageMap';

const Compare = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchCompare = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/compare`);
      const data = await res.json();
      if (data && data.products) setProducts(data.products);
    } catch (e) {
      console.error('Failed to load compare list', e);
    }
  };

  useEffect(() => {
    fetchCompare();
  }, []);

  const remove = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/api/compare/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProducts((p) => p.filter((x) => x.id !== id));
        const next = Math.max(0, (parseInt(localStorage.getItem('compareCount')||'0') - 1));
        localStorage.setItem('compareCount', String(next));
        window.dispatchEvent(new CustomEvent('compareUpdated', { detail: next }));
      }
    } catch (e) {
      console.error('Remove error', e);
    }
  };

  if (!products || products.length === 0) {
    return (
      <div className="container py-5">
        <h1>Compare</h1>
        <div className="text-center py-5">
          <h2>Compare list is empty.</h2>
          <p>No products added in the compare list. Add some products to compare them.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>Return To Shop</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h1>Compare</h1>
      <div className="row g-4">
        {products.map((p) => (
          <div key={p.id} className="col-md-4">
            <div className="card p-3">
              <img src={imageMap[p.image] || p.image} alt={p.name} className="img-fluid" />
              <h4 className="mt-2">{p.name}</h4>
              <p>${p.price}</p>
              <button className="btn btn-danger" onClick={() => remove(p.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compare;
