import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiShoppingCart, FiEye, FiEdit2, FiTrash2, FiStar } from "react-icons/fi";

const ProductJsonServer = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    setProductData(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    getProduct();
  };

  return (
    <Container
      fluid
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)",
        minHeight: "100vh",
        padding: "3rem 1rem",
      }}
      className="pb-5"
    >
      <div className="text-center mb-5">
        <h1 style={{ color: "#2d3436", fontWeight: "700" }}>Our Products</h1>
        <p style={{ color: "#636e72" }}>Discover amazing products at great prices</p>
      </div>

      <Row className="justify-content-center g-4">
        {productData.map((val, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3}>
            <Card
              style={{
                border: "none",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                height: "100%",
              }}
              className="card-hover"
            >
              <div
                style={{
                  height: "200px",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    zIndex: "2",
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  {val.rating && (
                    <Badge
                      pill
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        color: "#f39c12",
                        fontSize: "0.75rem",
                        padding: "0.35rem 0.6rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <FiStar style={{ fontSize: "0.8rem" }} />
                      {val.rating.rate}
                    </Badge>
                  )}
                </div>
                <Card.Img
                  variant="top"
                  src={val.image}
                  style={{
                    width: "80%",
                    height: "80%",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                  }}
                  className="product-image"
                />
              </div>
              <Card.Body
                style={{
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <Card.Title
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#2d3436",
                      marginBottom: "0.5rem",
                      height: "40px",
                      overflow: "hidden",
                      lineHeight: "1.3",
                    }}
                  >
                    {val.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "#636e72",
                      fontSize: "0.85rem",
                      height: "60px",
                      overflow: "hidden",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {val.description}
                  </Card.Text>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#0984e3",
                    }}
                  >
                    ₹{Math.ceil(val.price * 50)}
                  </span>
                  <Badge
                    pill
                    style={{
                      backgroundColor: "#dfe6e9",
                      color: "#2d3436",
                      fontSize: "0.75rem",
                      padding: "0.4rem 0.7rem",
                      textTransform: "capitalize",
                    }}
                  >
                    {val.category}
                  </Badge>
                </div>

                <div className="d-grid gap-2">
                  <div className="d-flex gap-2">
                    <Link to={`/productDetails/${val.id}`} className="flex-grow-1">
                      <Button
                        variant="primary"
                        style={{
                          backgroundColor: "#0984e3",
                          border: "none",
                          borderRadius: "8px",
                          fontWeight: "500",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                        }}
                      >
                        <FiEye /> View
                      </Button>
                    </Link>
                    <Button
                      variant="outline-primary"
                      style={{
                        borderRadius: "8px",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <FiShoppingCart />
                    </Button>
                  </div>
                  <div className="d-flex gap-2">
                    <Link to={`/update/${val.id}`} className="flex-grow-1">
                      <Button
                        variant="outline-warning"
                        style={{
                          border: "1px solid #fdcb6e",
                          borderRadius: "8px",
                          fontWeight: "500",
                          color: "#2d3436",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                        }}
                      >
                        <FiEdit2 /> Edit
                      </Button>
                    </Link>
                    <Button
                      variant="outline-danger"
                      onClick={() => handleDelete(val.id)}
                      style={{
                        borderRadius: "8px",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <FiTrash2 />
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default ProductJsonServer;
