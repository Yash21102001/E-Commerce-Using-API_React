import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import View_Product from './View_Product';
import { ToastContainer, toast } from 'react-toastify';

function Update() {

    let [category, setCategory] = useState([""])
    let [product, setProduct] = useState({})
    let nevigate = useNavigate()
    let prodata = useParams();



    useEffect(() => {
        getCategory()
        getSingleProDetails()


    }, [setCategory]);

    let getSingleProDetails = async () => {
        let proDetails = await fetch("http://localhost:3000/products/" + prodata.id);

        let details = await proDetails.json();
        console.log(details);
        setProduct(details);

    }
    console.log(product);
    

    let getCategory = async () => {
        let getCatData = await fetch(
            "https://fakestoreapi.com/products/categories"
        );
        let cateData = await getCatData.json()
        setCategory(cateData)
    }

    let getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProduct({ ...product, [name]: value })
    }

    let submitData = async (e) => {
        e.preventDefault()

        console.log(product);
        await fetch("http://localhost:3000/products/"+prodata.id, {
            method: "put",
            body: JSON.stringify(product),
        });

        nevigate("/")

        // await fetch(`http://localhost:3000/products/${prodata.id}`, {
        //     method: "put",
        //     body: JSON.stringify(product),
        //   });
        //   nevigate("/");
      
    }

    return (
        <Container fluid style={{
            background: '#f5f7ff',
            minHeight: '100vh',
            padding: '1.5rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Row className="justify-content-center" style={{ width: '100%' }}>
                <Col md={6} lg={5} xl={4}>
                    <Card style={{
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
                        width: '100%'
                    }}>
                        <Card.Header style={{
                            background: '#6c5ce7',
                            color: 'white',
                            borderRadius: '12px 12px 0 0',
                            padding: '1rem',
                            textAlign: 'center'
                        }}>
                            <h3 style={{
                                margin: 0,
                                fontSize: '1.25rem',
                                fontWeight: '500'
                            }}>
                                Update Product
                            </h3>
                        </Card.Header>

                        <Card.Body style={{ padding: '1.5rem' }}>
                            <Form onSubmit={(e) => submitData(e)} method='post'>
                                <Form.Group className="mb-3">
                                    <Form.Label style={{
                                        fontSize: '0.875rem',
                                        color: '#4a4a4a',
                                        marginBottom: '0.25rem'
                                    }}>
                                        Category
                                    </Form.Label>
                                    <Form.Select
                                        name="category"
                                        onChange={(e) => getInput(e)}
                                        style={{
                                            padding: '0.5rem 0.75rem',
                                            borderRadius: '8px',
                                            border: '1px solid #e0e0e0',
                                            fontSize: '0.875rem'
                                        }}
                                    >
                                        <option value="">Select a category</option>
                                        {category.map((v, i) => {
                                            return <option key={i} value={v}>{v}</option>;
                                        })}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label style={{
                                        fontSize: '0.875rem',
                                        color: '#4a4a4a',
                                        marginBottom: '0.25rem'
                                    }}>
                                        Product Title
                                    </Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='title'
                                        value={product.title ? product.title : ""}

                                        onChange={(e) => getInput(e)}
                                        style={{
                                            padding: '0.5rem 0.75rem',
                                            borderRadius: '8px',
                                            border: '1px solid #e0e0e0',
                                            fontSize: '0.875rem'
                                        }}
                                    />
                                </Form.Group>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{
                                                fontSize: '0.875rem',
                                                color: '#4a4a4a',
                                                marginBottom: '0.25rem'
                                            }}>
                                                Price
                                            </Form.Label>
                                            <Form.Control
                                                type="number"
                                                name='price'
                                                value={product.price ? product.price : ""}
                                                onChange={(e) => getInput(e)}
                                                style={{
                                                    padding: '0.5rem 0.75rem',
                                                    borderRadius: '8px',
                                                    border: '1px solid #e0e0e0',
                                                    fontSize: '0.875rem'
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{
                                                fontSize: '0.875rem',
                                                color: '#4a4a4a',
                                                marginBottom: '0.25rem'
                                            }}>
                                                Image URL
                                            </Form.Label>

                                                <img src={product.image ? product.image : ""} alt="" height={100} width={100} />
                                            <Form.Control
                                                type="text"
                                                name='image'
                                                value={product.image ? product.image : ""}
                                                onChange={(e) => getInput(e)}
                                                style={{
                                                    padding: '0.5rem 0.75rem',
                                                    borderRadius: '8px',
                                                    border: '1px solid #e0e0e0',
                                                    fontSize: '0.875rem'
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-4">
                                    <Form.Label style={{
                                        fontSize: '0.875rem',
                                        color: '#4a4a4a',
                                        marginBottom: '0.25rem'
                                    }}>
                                        Description
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name='description'
                                        value={product.description ? product.description : ""}
                                        onChange={(e) => getInput(e)}
                                        style={{
                                            padding: '0.5rem 0.75rem',
                                            borderRadius: '8px',
                                            border: '1px solid #e0e0e0',
                                            fontSize: '0.875rem'
                                        }}
                                    />
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
                                        border: 'none',
                                        marginTop: '0.5rem'
                                    }}
                                >
                                    Update Product
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Update