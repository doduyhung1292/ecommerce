import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../component/NavBar.js';
import Nava from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Card } from 'react-bootstrap';

export default function Home() {
    const [products, setProducts] = useState('');
    const createRate = () => {
        axios.get('https://fakestoreapi.com/products?limit=4')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
     }
     createRate();
     //console.log(products);

    return (
        <div>
            <div>
            	<NavBar />
                <Container style = {{maxWidth: '100%'}}>
                <Row >
                <Carousel >
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="//cdn.shopify.com/s/files/1/0563/9661/1673/files/slide-1.jpg?v=1651135036"
                      alt="First slide"
                      style = {{maxHeight: '38rem', maxWidth: '100%'}}
                    />
                    <Carousel.Caption>
                      <h3 style = {{color: '#221e1e', letterSpacing: '5px', fontSize: '3rem'}}>
                      Spring Collection</h3>
                      <Button variant="info">Shop now</Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="//cdn.shopify.com/s/files/1/0563/9661/1673/files/slide-2.jpg?v=1651135049"
                      alt="Second slide"
                      style = {{maxHeight: '38rem', maxWidth: '100%'}}
                    />

                    <Carousel.Caption>
                      <h3 style = {{color: '#221e1e', letterSpacing: '5px', fontSize: '3rem'}}>
                      Spring Collection</h3>
                      <Button variant="info">Shop now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                </Row>
            </Container>
            </div>
            <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
                <Row>
                    <Col xs={3} style={{backgroundColor: "#f5f5f5"}}>
                        <Nava />
                    </Col>
                    <Col xs={9}>
                        <Container>
                        <Row>
                        {
                        products && products.map((data, index) => (
                            <Col xs={3}>
                                <Card style={{ width: '13rem', height: '25rem'}}>
                                  <Card.Img variant="top" src={data.image} 
                                  style={{maxHeight: '15rem', maxWidth: '15rem'}}/>
                                  <Card.Body style={{padding: 0, paddingTop: '16px'}}>
                                    <Card.Text> 
                                        <p style={{display: 'inline-block',
                                    maxWidth: '10rem',  overflow: 'hidden',
                                    textOverflow: 'ellipsis', whiteSpace: 'nowrap', margin: 0}}>
                                            {data.title}
                                        </p>
                                    </Card.Text>
                                    <Card.Text>
                                      ${data.price}
                                    </Card.Text>
                                    <Button variant="primary">Add to card</Button>
                                    <Button variant="primary" href={"http://localhost:3000/product/" + data.id} style={{marginLeft: '1.5px'}}>More</Button>
                                  </Card.Body>
                                </Card>
                            </Col>))}
                        </Row>
                        </Container>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
