import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Row className="bg-dark text-light py-4">
            <Col>
               <div className='mt-3'>
               <span>Privacy Policy</span>
                <span>Term  and Condition </span>
                <span> FAQ</span>
               </div>
            </Col>


            <Col>
                <img src="https://demo.bosathemes.com/html/travele/assets/images/travele-logo.png" alt="" />
            </Col>


            <Col>
                <h6 className='mt-3'>Copyright © 2021 Travele. All rights reserveds</h6>
            </Col>
        </Row>
    );
};

export default Footer;