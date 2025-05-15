import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
    return <div style={{ 
      padding: "2rem", 
      textAlign: "center",
      fontSize: "1.2rem",
      color: "#6c5ce7"
    }}>Loading product details...</div>;
  }

  return (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        <Card style={{ 
          border: 'none',
          borderRadius: '16px',
          boxShadow: '0 6px 20px rgba(108, 92, 231, 0.12)',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            alignItems: 'center'
          }}>
            <div style={{
              flex: 1,
              padding: '2rem',
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Card.Img 
                variant="top" 
                src={product.image} 
                style={{ 
                  objectFit: 'contain', 
                  maxHeight: '350px',
                  width: '100%',
                  transition: 'transform 0.3s ease',
                  ':hover': {
                    transform: 'scale(1.05)'
                  }
                }} 
              />
            </div>
            <Card.Body style={{
              flex: 1,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <Card.Title style={{ 
                fontSize: '1.75rem', 
                fontWeight: '700',
                color: '#2d3436',
                marginBottom: '0.5rem'
              }}>
                {product.title}
              </Card.Title>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem'
              }}>
                <span style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#6c5ce7'
                }}>
                  ₹{Math.ceil(product.price * 50)}
                </span>
                <span style={{
                  fontSize: '0.85rem',
                  color: '#636e72',
                  backgroundColor: '#dfe6e9',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '50px',
                  textTransform: 'capitalize'
                }}>
                  {product.category}
                </span>
              </div>
              
              <Card.Text style={{ 
                fontSize: '1rem', 
                color: '#636e72',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {product.description}
              </Card.Text>
              
              <div style={{ marginTop: 'auto' }}>
                <Button 
                  variant="outline-primary"
                  onClick={() => navigate(-1)}
                  style={{
                    borderColor: '#6c5ce7',
                    fontWeight: '500',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    ':hover': {
                      backgroundColor: '#6c5ce7',
                      color: 'white'
                    }
                  }}
                >
                  ← Back to Products
                </Button>

                <Link to="/SignIn"><Button 
                  variant="outline-primary"
                  style={{
                    borderColor: '#6c5ce7',
                    fontWeight: '500',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    marginLeft: "10px",
                    ':hover': {
                      backgroundColor: '#6c5ce7',
                      color: 'white'
                    }
                  }}
                >
                  Add To Cart
                </Button></Link>
              </div>
            
                  
            </Card.Body>
            
          </div>
        </Card>
        <Review productId={product.id}/>
      </div>
    </div>
  );
}

export default View_Product;