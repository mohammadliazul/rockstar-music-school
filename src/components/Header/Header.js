import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div>
            <div>
                <NavigationBar></NavigationBar>
            </div>

            <div>
                <Banner></Banner>
            </div>


        </div>
    );
};

export default Header;