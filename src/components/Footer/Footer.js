import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container fluid className="container">
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
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
            <br />
            <hr className='bg-white container' />
            <div>
                <Container >
                    <Row md={2} >
                        <Col className=''>
                            <div className='d-flex justify-content-start'>
                                <img className="logo-size" src={logo} alt="" />
                            </div>
                        </Col>
                        <Col className=''>
                            <div>
                                <p className='text-white text-end'>© 2021 All Rights Reserved.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div >
    );
};

export default Footer;