import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams, useNavigate } from 'react-router-dom';
import Review from './Review';
import { ToastContainer, toast } from 'react-toastify';

function View_Product() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let res = await fetch(`http://localhost:3000/products/${id}`);
        let data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div style={{ padding: "2rem" }}>Loading...</div>;
  }

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f7ff', minHeight: '100vh' }}>
      <Card style={{ maxWidth: '600px', margin: '0 auto', border: 'none', borderRadius: '12px', boxShadow: '0 4px 15px rgba(108, 92, 231, 0.1)' }}>
        <Card.Img variant="top" src={product.image} style={{ objectFit: 'contain', padding: '2rem', height: '300px' }} />
        <Card.Body>
          <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{product.title}</Card.Title>
          <Card.Text style={{ fontSize: '1rem', color: '#6c757d' }}>
            {product.description}
          </Card.Text>
          <h5>Price: ₹{Math.ceil(product.price * 50)}</h5>
          <p>Category: <strong>{product.category}</strong></p>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            ← Back to Products
          </Button>
        </Card.Body>
      </Card>
      <Review productId={product.id}/>
    </div>
  );
}

export default View_Product;
