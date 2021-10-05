import React from 'react';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';

const Contacts = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div>
                <Container>
                    <Row md={4}>
                        <Col className='p-5'>

                            <div className=' align-items-center'>
                                <div className='ms-3'>
                                    <h1 className='text-danger text-center '><i className="fas fa-phone-alt"></i></h1>
                                </div>
                            </div>
                            <div>
                                <h6 className='my-3 text-gray'>1-800-1234-678</h6>
                                <h6 className='my-3 text-gray'>1-800-9876-098</h6>
                            </div>

                        </Col>
                        <Col className='p-5'>

                            <div className=' align-items-center'>
                                <div className='ms-3'>
                                    <h1 className='text-danger text-center '><i class="fas fa-envelope"></i></h1>
                                </div>
                            </div>
                            <div>
                                <h6 className='my-3 text-gray'>info@rockstar.org</h6>
                            </div>
                        </Col>
                        <Col className='p-5'>
                            <div className=' align-items-center'>
                                <div className='ms-3'>
                                    <h1 className='text-danger text-center '><i class="fas fa-map-marker-alt"></i></h1>
                                </div>
                            </div>
                            <div>
                                <h6 className='my-3 text-gray'>2130 Fulton Street San Diego, CA 94117-1080 USA</h6>
                            </div>
                            <i class="fas fa-globe-americas"></i>
                        </Col>
                        <Col className='p-5'>
                            <div className=' align-items-center'>
                                <div className='ms-3'>
                                    <h1 className='text-danger text-center '><i class="fas fa-globe-americas"></i></h1>
                                </div>
                            </div>
                            <div>
                                <h6 className='my-3 text-gray'>www.rockstar.org</h6>
                            </div>

                        </Col>

                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contacts;