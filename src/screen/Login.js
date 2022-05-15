import React, { useState, useEffect } from 'react';
import { Container, Row, Col, img, Card, Button, Tabs,Tab, Navbar, NavDropdown, Nav, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';


export default function Login() { 
	return (
		<div>
		<Container style={{maxWidth: '100%', margin: '1rem', marginTop:0}}>
			<Row >
				<Navbar bg="light" expand="lg">
		              <Container fluid>
		                <Navbar.Brand href="/" style = {{marginLeft: "40px", fontSize: '2.3rem', fontWeight: 700}}>FISHU</Navbar.Brand>
		      
		                <Navbar.Toggle aria-controls="navbarScroll" />
		                <Navbar.Collapse id="navbarScroll">
		                  <Nav
		                    className="me-auto my-2 my-lg-0"
		                    style={{ maxHeight: '100px' }}
		                    navbarScroll
		                  >
		                    
		                  </Nav>
		                  
		                    <Nav.Link href="/login">Login</Nav.Link>
		                    <Nav.Link href="#action2"><Button variant="info">Register</Button></Nav.Link>

		                </Navbar.Collapse>
		              </Container>
		          </Navbar>
			</Row>
			<Row>

			<Col xs={6} >
			<h2 style = {{marginTop: '3rem'}}>Fishu Account Login</h2>
			<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-5">
			  <Tab eventKey="home" title="Email" style={{paddingLeft: '6rem'}}>
			    <label for="email" style={{fontSize: '1.5rem', marginRight: '15rem', marginBottom: '0.7rem'}}>Email</label><br />
			    <input type="email" id="email" style={{paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingRight: '6rem', paddingLeft: '0.5rem'}}/><br />
			    <label for="password" style={{fontSize: '1.5rem',marginRight: '12rem', marginTop: '1rem', textAlign: 'left', marginBottom: '0.7rem'}}>Password</label><br />
			    <input type="password" id="password" style={{marginBottom: '2rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingRight: '6rem', paddingLeft: '0.5rem'}}/><br />
			    <Button style={{marginBottom: '1rem', paddingRight: '8rem', paddingLeft: '8rem', paddingBottom: '0.5rem', paddingTop: '0.5rem'}}>Login</Button> <br />
			    <a href="#" style={{marginBottom: '0.5rem'}}>Forgot Password?</a> <br />
			    <a href="#" >Register</a> <br />
			  </Tab>
			  <Tab eventKey="profile" title="Phone Number">
			  	<label for="number" style={{fontSize: '1.5rem', marginRight: '9rem', marginBottom: '0.7rem'}}>Phone Number</label><br />
			    <input type="email" id="email" style={{paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingRight: '6rem', paddingLeft: '0.5rem'}}/><br />
			    <label for="password" style={{fontSize: '1.5rem',marginRight: '12rem', marginTop: '1rem', textAlign: 'left', marginBottom: '0.7rem'}}>Password</label><br />
			    <input type="password" id="password" style={{marginBottom: '2rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingRight: '6rem', paddingLeft: '0.5rem'}}/><br />
			    <Button style={{marginBottom: '1rem', paddingRight: '8rem', paddingLeft: '8rem', paddingBottom: '0.5rem', paddingTop: '0.5rem'}}>Login</Button> <br />
			    <a href="#" style={{marginBottom: '0.5rem'}}>Forgot Password?</a> <br />
			    <a href="#" >Register</a> <br />
			  </Tab>
			</Tabs>
			</Col>
			<Col xs={6}>
				<h2 style = {{marginTop: '3rem'}}>Connect QR code</h2>
				<h2>...</h2>
			</Col>
			</Row>
		</Container>
		</div>
)}