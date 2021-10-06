import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import Teacher1 from '../../images/teacher-1.jpg';
import Teacher2 from '../../images/teacher-2.jpg';
import Teacher3 from '../../images/teacher-3.jpg';
import Teacher4 from '../../images/teacher-4.jpg';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <Container className='py-5'>
                    <Row md={2}>
                        <Col className='text-secondary px-5'>
                            <h2>About Us</h2>
                            <br />
                            <p>Our Rockstar guitar school was founded in 1999 to help students of all ages and skill levels to pursue their dream of becoming guitar players. If you would like to learn how to play the world’s most popular instrument, our school is the place for you, regardless of your age and social status. We offer group and private lessons for children and adults.</p>

                        </Col>

                        <Col className='text-secondary px-5'>
                            <h2>Gallery</h2>
                            <br />
                            <Container>
                                <Row md={4}>
                                    <Col>
                                        <img className='teacher-image' src={Teacher1} alt="" />
                                    </Col>
                                    <Col>
                                        <img className='teacher-image' src={Teacher2} alt="" />
                                    </Col>
                                    <Col>
                                        <img className='teacher-image' src={Teacher3} alt="" />
                                    </Col>
                                    <Col>
                                        <img className='teacher-image' src={Teacher4} alt="" />
                                    </Col>
                                </Row>
                            </Container>
                            <br />
                            <Container>
                                <Row md={4}>
                                    <Col>
                                        <img className='teacher-image' src={Teacher3} alt="" />
                                    </Col>
                                    <Col>
                                        <img className='teacher-image' src={Teacher4} alt="" />
                                    </Col>
                                    <Col>
                                        <img className='teacher-image' src={Teacher1} alt="" />
                                    </Col>
                                    <Col>
                                        <img className='teacher-image' src={Teacher2} alt="" />
                                    </Col>

                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row md={2}>
                    <Col>
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
                    </Col>
                    <Col>
                        <div className='d-flex ms-5'>
                            <p className=''><i className="ps-3 hv pe-5 fw-bold  fab fa-facebook"></i></p>
                            <p><i className="pe-5 hv fab fa-twitter-square"></i></p>
                            <p><i className="pe-5 hv  fab fa-instagram-square"></i></p>
                            <p><i className="pe-5 hv fab fa-linkedin"></i></p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
            <hr className='bg-white container ' />
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