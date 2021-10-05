import User1 from '../../images/user-1.png';
import User2 from '../../images/user-2.png';
import User3 from '../../images/user-3.png';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div>
            <h1 className='text-center my-5'>Testimonials</h1>
            <div>
                <Container>
                    <Row md={3}>
                        <Col className='p-5'>

                            <div className='d-flex align-items-center'>
                                <div><img className='user-image' src={User1} alt="" /></div>
                                <div className='ms-3'>
                                    <h5 className='text-danger'>Harold Barnett</h5>
                                    <h6 className='text-secondary'>Student, Rhythm Guitar</h6>
                                </div>
                            </div>
                            <div>
                                <p className='my-3'>The benefits I have received by taking guitar lessons from you, have been numerous and priceless! Within the 2+ yrs, we have known each other, I have grown as a person and a player, thanks to Guitar Band.</p>
                            </div>
                        </Col>
                        <Col className='p-5'>

                            <div className='d-flex align-items-center'>
                                <div><img className='user-image' src={User2} alt="" /></div>
                                <div className='ms-3'>
                                    <h5 className='text-danger'>Albert Webb</h5>
                                    <h6 className='text-secondary'>Student, Lead Guitar</h6>
                                </div>
                            </div>
                            <div>
                                <p className='my-3'>I would say that the benefits of taking guitar lessons with Guitar Band were that I had somebody to constantly motivate me from a level I wanted to be at. Someone who knew what I wanted to learn and helped me.</p>
                            </div>
                        </Col>
                        <Col className='p-5'>
                            <div className='d-flex align-items-center'>
                                <div><img className='user-image' src={User3} alt="" /></div>
                                <div className='ms-3'>
                                    <h5 className='text-danger'>Kelly McMillan</h5>
                                    <h6 className='text-secondary'>Student, Guitar Theory</h6>
                                </div>
                            </div>
                            <div>
                                <p className='my-3'>You have great teachers who combine unparalleled skills and virtuosity with all-inclusive and ingenious methods of teaching that cover all aspects of guitar, music, and all things in between and beyond.</p>
                            </div>

                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Testimonials;