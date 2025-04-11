// import React, { useEffect, useState } from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom';

// function AddProduct() {

//     let [category, setCategory] = useState([""])
//     let [product, setProduct] = useState({})

//     useEffect(() => {
//         let getCategory = async () => {
//             let getCatData = await fetch(
//                 "https://fakestoreapi.com/products/categories"
//             );
//             let cateData = await getCatData.json()
//             setCategory(cateData)
//         }
//         getCategory()

//     }, [setCategory])

//     let getInput = (e) => {
//         let name = e.target.name;
//         let value = e.target.value;
//         setProduct({ ...product, [name] : value})
//     }

//     let submitData = async(e) => {
//         e.preventDefault()
//         console.log(product);
//         let addPro = await fetch ("http://localhost:3000/products" ,{
//         method : "post",
//         body : JSON.stringify(product),
//         });
//         if (addPro) {
//             console.log("Product Insert");
//         } else {
//             console.log("Somthing Wrong");

//         }

//     }

//     return (
//         <Container>
//             <Row className="justify-content-md-center">

//                 <Col md="auto">
//                     <h1>Add Product Details</h1>
//                     <Form onSubmit={(e) => submitData(e)} method='post' >

//                         <Form.Select aria-label="Default select example" name="category" onChange={(e) => getInput(e)}>

//                             <option value="">--select Catrgory--</option>
//                             {category.map((v, i) => {
//                                 return <option value="{v}">{v}</option>;

//                             })}

//                         </Form.Select>

//                         <Form.Group as={Row} className="mb-3" >
//                             <Form.Label column sm="2">
//                                 Title
//                             </Form.Label>
//                             <Col sm="10">
//                                 <Form.Control type='text' name='titel' onChange={(e) => getInput(e)}/>
//                             </Col>
//                         </Form.Group>

//                         <Form.Group as={Row} className="mb-3" >
//                             <Form.Label column sm="2">
//                                 Price
//                             </Form.Label>
//                             <Col sm="10">
//                                 <Form.Control type="number" name='price' onChange={(e) => getInput(e)}/>
//                             </Col>
//                         </Form.Group>

//                         <Form.Group as={Row} className="mb-3" >
//                             <Form.Label column sm="2">
//                                 description
//                             </Form.Label>
//                             <Col sm="10">
//                                 <Form.Control as="textarea" rows={3} name='description' onChange={(e) => getInput(e)}/>
//                             </Col>
//                         </Form.Group>

//                         <Form.Group as={Row} className="mb-3" >
//                             <Form.Label column sm="2">
//                                 Image
//                             </Form.Label>
//                             <Col sm="10">
//                             <Form.Control type="text" name='image' onChange={(e) => getInput(e)}/>
//                                 <button type='submit'>Add Product</button>
//                             </Col>
//                         </Form.Group>
//                     </Form>
//                 </Col>

//             </Row>

//         </Container>
//     )
// }