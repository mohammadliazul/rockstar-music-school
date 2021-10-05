import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import logo from '../../images/logo.png';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid className="container">
                    <NavLink to="/home"><img className="logo-size" src={logo} alt="" /></NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 fw-bold fs-5"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className='navLink' to="/home">Home</NavLink>
                            <NavLink className='navLink' to="/about">About</NavLink>
                            <NavLink className='navLink' to="/classes">Classes</NavLink>
                            <NavLink className='navLink' to="/teachers">Teachers</NavLink>
                            <NavLink className='navLink' to="/contacts">Contacts</NavLink>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button className="btn">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;