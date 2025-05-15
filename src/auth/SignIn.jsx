import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../src/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [loguser, setLogUser] = useState({});
  const navigate = useNavigate();

  const getInput = (e) => {
    const { name, value } = e.target;
    setLogUser({ ...loguser, [name]: value });
  };

  const Loginuser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loguser.email, loguser.password)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container
      fluid
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)",
        minHeight: "100vh",
        padding: "3rem 1rem",
      }}
    >
      <Row className="justify-content-center align-items-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card
            style={{
              border: "none",
              borderRadius: "16px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
              padding: "2rem",
              background: "#ffffff",
            }}
          >
            <h3 className="text-center mb-4" style={{ color: "#2d3436", fontWeight: "700" }}>
              Sign In
            </h3>
            <Form method="post" onSubmit={Loginuser}>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "500", color: "#2d3436" }}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={getInput}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "500", color: "#2d3436" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={getInput}
                  required
                />
              </Form.Group>

              <div className="d-grid mb-3">
                <Button
                  type="submit"
                  variant="primary"
                  style={{
                    backgroundColor: "#0984e3",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "500",
                  }}
                >
                  Login
                </Button>
              </div>
              <div className="text-center">
                <span style={{ color: "#636e72" }}>Don't have an account? </span>
                <Link to="/SignUp" style={{ color: "#0984e3", fontWeight: "500" }}>
                  Sign Up
                </Link>
              </div>
            </Form>
          </Card> 
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
