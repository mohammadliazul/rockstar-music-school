import React from 'react';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import Class1 from '../../images/class-1.png';
import Class2 from '../../images/class-2.png';
import Class3 from '../../images/class-3.png';
import Class4 from '../../images/class-4.png';
import Class5 from '../../images/class-5.png';
import Class6 from '../../images/class-6.png';
import { Col, Container, Row } from 'react-bootstrap';
import './Classes.css';


const Classes = () => {
    return (
        <div className='bg-color'>
            <NavigationBar></NavigationBar>
            <div>
                <h1 className='text-center my-5'>Music Classes</h1>
                <div>
                    <Container>
                        <Row md={3}>
                            <Col className='p-5'>

                                <div className=' align-items-center'>
                                    <div><img className='class-image mb-3' src={Class1} alt="" /></div>
                                    <div className='ms-3'>
                                        <h5 className='hover-color'>Guitar for Beginners</h5>
                                    </div>
                                </div>
                                <div>
                                    <p className='my-3 text-gray'>Our teachers will gladly teach you the basics of the world’s most popular instrument.</p>
                                </div>
                            </Col>
                            <Col className='p-5'>

                                <div className=' align-items-center'>
                                    <div><img className='class-image mb-3' src={Class2} alt="" /></div>
                                    <div className='ms-3'>
                                        <h5 className='hover-color'>Rhythm Guitar</h5>
                                    </div>
                                </div>
                                <div>
                                    <p className='my-3 text-gray'>Ideal for guitarists that want to establish a solid foundation for playing rhythm guitar.</p>
                                </div>
                            </Col>
                            <Col className='p-5'>
                                <div className=' align-items-center'>
                                    <div><img className='class-image mb-3' src={Class3} alt="" /></div>
                                    <div className='ms-3'>
                                        <h5 className='hover-color'>Lead Guitar</h5>
                                    </div>
                                </div>
                                <div>
                                    <p className='my-3 text-gray'>The lessons in this section are perfect for guitarists that are interested in playing guitar solos.</p>
                                </div>

                            </Col>

                        </Row>
                    </Container>
                    <Container>
                        <Row md={3}>
                            <Col className='p-5'>

                                <div className=' align-items-center'>
                                    <div><img className='class-image mb-3' src={Class4} alt="" /></div>
                                    <div className='ms-3'>
                                        <h5 className='hover-color'>Blues Guitar</h5>
                                    </div>
                                </div>
                                <div>
                                    <p className='my-3 text-gray'>These classes will introduce you to the blues, an incredibly important style of music.</p>
                                </div>
                            </Col>
                            <Col className='p-5'>

                                <div className=' align-items-center'>
                                    <div><img className='class-image mb-3' src={Class5} alt="" /></div>
                                    <div className='ms-3'>
                                        <h5 className='hover-color'>Guitar Theory</h5>
                                    </div>
                                </div>
                                <div>
                                    <p className='my-3 text-gray'>If you're interested in learning about music theory for the guitar, these lessons are for you.</p>
                                </div>
                            </Col>
                            <Col className='p-5'>
                                <div className=' align-items-center'>
                                    <div><img className='class-image mb-3' src={Class6} alt="" /></div>
                                    <div className='ms-3'>
                                        <h5 className='hover-color'>Live Guitar</h5>
                                    </div>
                                </div>
                                <div>
                                    <p className='my-3 text-gray'>We also provide live guitar lessons to students of various skill levels and age.</p>
                                </div>

                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Classes;