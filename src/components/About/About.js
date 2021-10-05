import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutUsImg from '../../images/About-us.jpg';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';


const About = () => {
    return (<div>
        <NavigationBar></NavigationBar>
        <div className='container'>
            <Container >
                <Row md={2} >
                    <Col className='my-4 p-5'>
                        <div>
                            <img src={AboutUsImg} alt="" />
                        </div>
                    </Col>
                    <Col className='my-4 p-5'>
                        <div>
                            <h1>Welcome to Rockstar Music School!</h1>
                            <br />
                            <p className='text-gray'>Rockstar Music School offers comprehensive guitar lessons that start with the fundamentals, including scales, chords, tuning, arpeggios, and rhythm adapted to various skill levels.<br />Our core philosophy is that the best way for students to gain musical proficiency is through performance-based music education. All of our lessons for guitar students include a performance aspect.</p>
                            <br />
                            <Button className="btn btn-danger">READ MORE</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer></Footer>
    </div>

    );
};

export default About;