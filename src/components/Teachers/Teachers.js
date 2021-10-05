import React from 'react';
import Footer from '../Footer/Footer';
import Teacher1 from '../../images/teacher-1.jpg';
import Teacher2 from '../../images/teacher-2.jpg';
import Teacher3 from '../../images/teacher-3.jpg';
import Teacher4 from '../../images/teacher-4.jpg';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';

const Teachers = () => {
    return (
        <div>

            <NavigationBar></NavigationBar>
            <h1 className='text-center mt-5'>Our Teachers</h1>
            <div>
                <Container>
                    <Row md={4}>
                        <Col className='p-5'>

                            <div className='align-items-center'>
                                <div><img className='teacher-image' src={Teacher1} alt="" /></div>
                                <div className='mt-3'>
                                    <h4 className='text-danger'>Nathalie Porter</h4>
                                    <h5 className='text-secondary'>Founder, Guitar Theory Teacher</h5>
                                </div>
                            </div>
                        </Col>
                        <Col className='p-5'>

                            <div className='align-items-center'>
                                <div><img className='teacher-image' src={Teacher2} alt="" /></div>
                                <div className='mt-3'>
                                    <h4 className='text-danger'>John Thompson</h4>
                                    <h5 className='text-secondary'>Lead Guitar Teacher</h5>
                                </div>
                            </div>
                        </Col>
                        <Col className='p-5'>
                            <div className=' align-items-center'>
                                <div><img className='teacher-image' src={Teacher3} alt="" /></div>
                                <div className='mt-3'>
                                    <h4 className='text-danger'>Mary Williams</h4>
                                    <h5 className='text-secondary'>Rhythm Guitar Teacher</h5>
                                </div>
                            </div>
                        </Col>
                        <Col className='p-5'>
                            <div className=' align-items-center'>
                                <div><img className='teacher-image' src={Teacher4} alt="" /></div>
                                <div className='mt-3'>
                                    <h4 className='text-danger'>Sam Clarke</h4>
                                    <h5 className='text-secondary'>Blues Guitar Teacher</h5>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Teachers;