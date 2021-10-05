import React from 'react';
import './StayConnect.css';
import Button from '@restart/ui/esm/Button';
import { Form } from 'react-bootstrap';

const StayConnect = () => {
    return (
        <div className="container stayConnect stayConnect-bg-info d-flex justify-content-center align-items-center rounded-3">
            <div>
                <h1>LET'S STAY IN TOUCH</h1>
                <p>Get updates on Consert, specials events and more</p>
                <Form.Control type="email" placeholder="Enter Your Email" />
                <br />
                <Button className="btn btn-danger stayConnect-btn">SUBMIT</Button>

            </div>
        </div>
    );
};

export default StayConnect;