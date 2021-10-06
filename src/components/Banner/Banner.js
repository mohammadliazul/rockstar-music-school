import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap';
import "animate.css";
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Carousel>
            <CarouselItem>
                <div className='banner container'>
                    <Container>
                        <Row md={2}>
                            <Col><h2 className='font text-center margin animate__animated animate__fadeInLeft'>Music for<br />Everyone</h2>
                                <br />
                                <Link to='/classes'><Button className="btn btn-danger">START LEARNING</Button></Link>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className='banner2 container'>
                    <Container>
                        <Row md={2}>
                            <Col><h2 className='font text-center margin animate__animated animate__fadeInLeft'>Music for<br />Everyone</h2>
                                <br />
                                <Link to='/classes'><Button className="btn btn-danger">START LEARNING</Button></Link>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className='banner3 container'>
                    <Container>
                        <Row md={2}>
                            <Col><h2 className='font text-center margin animate__animated animate__fadeInLeft'>Music for<br />Everyone</h2>
                                <br />
                                <Link to='/classes'><Button className="btn btn-danger">START LEARNING</Button></Link>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </CarouselItem>
        </Carousel>
    );
};

export default Banner;