import React from 'react';
import Header from '../Header/Header';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import StayConnect from '../StayConnect/StayConnect';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Testimonials></Testimonials>
            <StayConnect></StayConnect>
            <Footer></Footer>
        </div>
    );
};

export default Home;