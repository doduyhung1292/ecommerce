import React, { useState, useEffect } from 'react';
import { Container, Row, Col, img, Card, Button } from 'react-bootstrap';
import NavBar from '../component/NavBar.js';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { FaBeer } from '@react-icons/all-files/fa/FaBeer';

export default function ProductPage() {
    let params = useParams();
    const [product, setProduct] = useState('');
    const [products, setProducts] = useState('');
    const [quantity, setQuantity] = useState(1);
    var productId = params.productID;
    const rate = 5;
    const rateNumber = 10;
    const soldNumber = 15;
    const getProduct = () => {
        axios.get('https://fakestoreapi.com/products/' + productId)
            .then(res => setProduct(res.data))
            .then(err => console.log(err))
    }
    getProduct();
    const decreaseQuantity = () => {

        if(quantity >= 2) {setQuantity((quantity) => quantity - 1);}
    }
    const increaseQuantity = () => {
        setQuantity((quantity) => quantity + 1);
    }
    const getProductSuggetion = () => {
        axios.get('https://fakestoreapi.com/products?limit=6')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
     }
     getProductSuggetion();
    return (
        <div>
            <NavBar />
            <Container style={{marginTop: '1rem'}}>
                <Row style={{marginBottom: '1rem'}}>Category > {product.category}</Row>
                <Row style={{marginTop: '2rem'}}>
                    <Col xs={4}>
                        <img src={product.image} style = {{maxWidth: '20rem'}}/>
                    </Col>
                    <Col xs={8}>
                        <h3 style={{textAlign: 'left', paddingLeft: '2rem', marginBottom: '1rem'}}>{product.title}</h3>
                        <h5 style={{textAlign: 'left', color: '#3091af', paddingLeft: '2rem', marginBottom: '2rem'}}> {rateNumber} rates | {soldNumber} Sold</h5>
                        <div style={{backgroundColor: '#f8f9fa', paddingTop: '1rem', paddingBottom: '1rem', marginLeft: '2rem'}}>
                            <h5 style={{textAlign: 'left', paddingLeft: '2rem'}}>${product.price}</h5>
                        </div>
                        <Row style={{marginTop: '2rem', marginLeft: '2rem'}}>
                            <Col xs={3}>
                                <h5 style={{textAlign: 'left'}}>Shipping</h5>
                            </Col>
                            <Col xs={9}>
                                <p style={{textAlign: 'left'}}> Free shipping</p>
                                <p style={{textAlign: 'left'}}>Shipping from China</p>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '2rem', marginLeft: '2rem'}}>
                            <Col xs={3}>
                                <h5 style={{textAlign: 'left'}}>Quantity</h5>
                            </Col>
                            <Col xs={9}>
                                <div style={{textAlign: 'left'}}>
                                <button onClick={decreaseQuantity} style={{border: 'none', paddingRight: '0.5rem',paddingLeft: '0.5rem', borderRadius: 1}}>-</button>
                                {quantity}
                                <button onClick={increaseQuantity} style={{border: 'none', paddingRight: '0.5rem',paddingLeft: '0.5rem', borderRadius: 1}}>+</button>
                                </div>
                            </Col>
                        </Row>
                        <Row style = {{marginTop: '2rem', marginLeft: '2rem'}}>
                            <Col xs={3}>
                                <div style={{textAlign: 'left', paddingLeft:0}}>
                                <button style={{borderColor: '#3091af', paddingLeft: "2rem", paddingRight: "2rem", paddingBottom: "0.8rem", paddingTop: "0.8rem", paddingLeft: "2rem"}}>Add to card</button>
                                </div>
                            </Col>
                            <Col xs={9}>
                                <div style={{textAlign: 'left', paddingLeft:0}}>
                                    <button style={{backgroundColor: '#3091af', border: 'none', paddingLeft: "2rem", paddingRight: "2rem", paddingBottom: "0.8rem", paddingTop: "0.8rem", paddingLeft: "2rem"}}>Buy now</button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style = {{marginTop: '2rem'}}>
                    <div style={{backgroundColor: '#e7ecf1', marginBottom: '2rem'}}>
                        <h3 style={{textAlign: 'left'}}>Description</h3>
                    </div>
                    <p style={{textAlign: 'left'}}>{product.description}</p>
                </Row>
                <Row style = {{marginTop: '2rem'}}>
                    <div style={{backgroundColor: '#e7ecf1', marginBottom: '2rem'}}>
                        <h3 style={{textAlign: 'left'}}>Product Ratings</h3>
                    </div>
                    <p style={{textAlign: 'left'}}>None</p>
                </Row>
                <Row style = {{marginTop: '2rem'}}>
                    <div style={{backgroundColor: '#e7ecf1', marginBottom: '2rem'}}>
                        <h3 style={{textAlign: 'left'}}>You may also like</h3>
                    </div>
                </Row>
                <Row>
                    {
                        products && products.map((data, index) => (
                            <Col xs={2}>
                                <Card style={{ width: '8rem', height: '16rem'}}>
                                  <Card.Img variant="top" src={data.image} 
                                  style={{maxHeight: '8rem', maxWidth: '8rem'}}/>
                                  <Card.Body style={{padding: 0, paddingTop: '16px'}}>
                                    <Card.Text> 
                                        <p style={{display: 'inline-block',
                                    maxWidth: '8rem',  overflow: 'hidden',
                                    textOverflow: 'ellipsis', whiteSpace: 'nowrap', margin: 0}}>
                                            {data.title}
                                        </p>
                                    </Card.Text>
                                    <Card.Text>
                                      ${data.price}
                                    </Card.Text>
                                    <Button variant="primary" size="sm">Add to card</Button>
                                    <Button variant="primary" size="sm" href={"http://localhost:3000/product/" + data.id} style={{marginLeft: '1.5px'}}>More</Button>
                                  </Card.Body>
                                </Card>
                            </Col>))}
                </Row>
            </Container>
        </div>
    )}