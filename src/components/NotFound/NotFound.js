import React from 'react';
import ErrorMassege from '../../images/banner_error_404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='img'>
            <img src={ErrorMassege} alt="" />
        </div>
    );
};

export default NotFound;