import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function Nava(params) {
    return (
    	<div style={{backgroundColor: "#f5f5f5", marginTop: '0rem', paddingRight: 0, paddingLeft: 0}}>
    		<h5 style={{paddingTop: '2rem'}}>
    			<a href="#" style = {{textDecoration: 'none', color: '#221e1e'}}>Electronics</a></h5>
    		<h5 style={{paddingTop: '2.5rem'}}>
    			<a href="#" style = {{textDecoration: 'none', color: '#221e1e'}}>Jewelery</a></h5>
    		<h5 style={{paddingTop: '2.5rem'}}>
    			<a href="#" style = {{textDecoration: 'none', color: '#221e1e'}}>Men's clothing</a></h5>
    		<h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
    			<a href="#" style = {{textDecoration: 'none', color: '#221e1e'}}>Women's clothing</a></h5>
    	</div>
    )}