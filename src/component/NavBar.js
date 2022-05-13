import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


export default function NavBar(params) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/" style = {{marginLeft: "40px", fontSize: '2.3rem', fontWeight: 700}}>FISHU</Navbar.Brand>
    <NavDropdown title="Categories" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Jewelery</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Men's clothing</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Women's clothing</NavDropdown.Item>
        </NavDropdown>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Form className="d-flex" style = {{marginLeft: "500px"}}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      </Nav>
      
        <Nav.Link href="#action2">Đăng nhập</Nav.Link>
        <Nav.Link href="#action2"><Button variant="info">Đăng ký</Button></Nav.Link>

    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
