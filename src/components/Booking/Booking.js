import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const {tripId} = useParams()
    const [trip , setTrip] = useState({})


    useEffect(()=>{
        fetch(`https://stormy-ridge-43208.herokuapp.com/tours/${tripId}`)
        .then(res => res.json())
        .then(data => setTrip(data))
    },[])
    return (
        <div className=' mt-4 bg-dark'>
            <Row xs={1} md={2} className="g-4 ">
              <Col className='m-auto'>
        <Card className='p-3'>
          <Card.Img variant="top" className='booking-img' src={trip.img} />
          <Card.Body>
            <Card.Title className='text-danger'>{trip.name}</Card.Title>
            <h5>
                Location: {trip.country}
            </h5>
            <h6>
                Time: {trip.time}
            </h6>
            <h6>
                Cost: ${trip.cost}
            </h6>
            <p>{trip.about}</p>
          
            
          </Card.Body>
        </Card>
      </Col>
        </Row> 
        </div>
      
    );
};

export default Booking;