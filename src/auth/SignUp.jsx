import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { auth } from "../../src/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({});

  const getInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const RegisterUser = (e) => {
    e.preventDefault();
    if (user.password === user.cpass) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((err) => {
          console.error(err.message);
        });
    } else {
      console.log("Password Not Match");
    }
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
              Sign Up
            </h3>
            <Form method="post" onSubmit={RegisterUser}>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "500", color: "#2d3436" }}>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  name="UserName"
                  onChange={getInput}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "500", color: "#2d3436" }}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={getInput}
                  required
                />
                <Form.Text className="text-muted">We'll never share your email.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "500", color: "#2d3436" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={getInput}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "500", color: "#2d3436" }}>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="cpass"
                  onChange={getInput}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Agree to terms and conditions" required />
              </Form.Group>

              <div className="d-grid mb-3">
                <Link to = "/"
                  type="submit"
                  variant="primary"
                  style={{
                    backgroundColor: "#0984e3",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "500",
                  }}
                >
                  Sign Up
                </Link>
              </div>

              <div className="text-center">
                <span style={{ color: "#636e72" }}>Already have an account? </span>
                <Link to="/SignIn" style={{ color: "#0984e3", fontWeight: "500" }}>
                  Sign In
                </Link>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
