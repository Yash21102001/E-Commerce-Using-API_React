import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Review from "./Review";
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    let getProduct = async () => {
      let fetchData = await fetch("https://fakestoreapi.com/products");
      let data = await fetchData.json();
      setProductData(data);
    };

    getProduct();
  }, []); // Remove setProductData from dependency array since it's not needed

  return (
    <Container>
      <Row className="justify-content-md-center">
        {productData.map((val) => (
          <Col md="auto" key={val.id}> {/* Add key prop for list rendering */}
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src={val.image}
                width={"18rem"}
                height={"200px"}
              />
              <Card.Body>
                <Card.Title>{val.title}</Card.Title>
                <Card.Text>{val.description.slice(0, 159)}...</Card.Text>
                <Card.Text>Price: ₹{Math.ceil(val.price * 2)}</Card.Text>
                <Button variant="danger" style={{ marginRight: "1rem" }}>
                  Delete
                </Button>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/View_Product/${val.id}`)} // Navigate to product details
                >
                  View More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    </Container>
  );
};

export default Product;