import React, { useEffect, useState } from 'react';
import './Home.css'
import bannar from '../../images/Banner.jpg'
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
const Home = () => {
    const [tours, setTours ] = useState([])
    useEffect(()=>{
        fetch('https://stormy-ridge-43208.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => setTours(data))
    },[])
    return (
        <div className='home-page bg-dark'>
            <div className='bg-dark '>
          <img className=' banner-img' src={bannar} alt="" />
      </div>
      <Row xs={1} md={2} className="g-4">
        {
            tours.map(tour=> <Col
            tour ={tour}
            key={tour._id}
            >

<Card>
        <Card.Img variant="top" src={tour.img} />
        <Card.Body>
          <Card.Title className='text-danger'>{tour.name}</Card.Title>
          <h5>
              Location: {tour.country}
          </h5>
          <h6>
              Time: {tour.time}
          </h6>
        {/* <Link to={`/booking/${tour._id}`}>
        
        <Button  className='btn-dark'>Book Now</Button>
        </Link> */}
          
        </Card.Body>
      </Card>



            </Col>)
        }
      </Row>
        </div>
    );
};

export default Home;