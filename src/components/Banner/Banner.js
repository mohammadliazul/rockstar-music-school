import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "animate.css";
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner container'>
            <Container>
                <Row md={2}>
                    <Col><h2 className='font text-center margin animate__slideInLeft'>Music for <br />Everyone</h2>
                        <br />
                        <Button className="btn btn-danger">START LEARNING</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;