import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaTag, FaImage, FaDollarSign, FaClipboardList, FaList } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

function AddProduct() {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();
        setCategory(data);
      } catch (err) {
        toast.error("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };
    getCategory();
  }, []);

  const getInput = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        setTimeout(() => navigate("/"), 1500);
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ background: '#f5f7ff', minHeight: '100vh', padding: '1.5rem 0' }}>
      <Row className="justify-content-center w-100">
        <Col md={6} lg={5} xl={4}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card style={{ border: 'none', borderRadius: '12px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
              <Card.Header className="text-white text-center" style={{ background: '#6c5ce7', borderRadius: '12px 12px 0 0', padding: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '500' }}>
                  Add New Product
                </h3>
              </Card.Header>
              <Card.Body style={{ padding: '1.5rem' }}>
                <Form onSubmit={submitData}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FaList className="me-2" />
                      Category
                    </Form.Label>
                    {loading ? (
                      <Spinner animation="border" variant="primary" />
                    ) : (
                      <Form.Select name="category" onChange={getInput} required>
                        <option value="">Select a category</option>
                        {category.map((cat, i) => (
                          <option key={i} value={cat}>{cat}</option>
                        ))}
                      </Form.Select>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FaClipboardList className="me-2" />
                      Product Title
                    </Form.Label>
                    <Form.Control type="text" name="title" onChange={getInput} required />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FaDollarSign className="me-2" />
                          Price
                        </Form.Label>
                        <Form.Control type="number" name="price" onChange={getInput} required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FaImage className="me-2" />
                          Image URL
                        </Form.Label>
                        <Form.Control type="text" name="image" onChange={getInput} required />
                      </Form.Group>
                    </Col>
                  </Row>

                  {product.image && (
                    <div className="text-center mb-3">
                      <img src={product.image} alt="Preview" style={{ maxHeight: '150px', objectFit: 'contain' }} />
                    </div>
                  )}

                  <Form.Group className="mb-4">
                    <Form.Label>
                      <FaTag className="me-2" />
                      Description
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" onChange={getInput} required />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      fontWeight: '500',
                      fontSize: '0.875rem',
                      borderRadius: '8px',
                      background: '#6c5ce7',
                      border: 'none'
                    }}
                  >
                    Add Product
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}

export default AddProduct;
