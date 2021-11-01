import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours, setTours ] = useState([])
    useEffect(()=>{
        fetch('https://stormy-ridge-43208.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => setTours(data))
    },[])
    return (
        <div className='bg-dark'>
            <h2 className='text-info fs-1 py-4'>Our Trips </h2>
            <hr />
            
            <Row xs={1} md={2} className="g-4">


            {
                    tours.map(tour => <Tour
                    key={tour._id}
                    tour={tour}
                    >

                    </Tour> )
                }

            </Row>
        </div>
    );
};

export default Tours;