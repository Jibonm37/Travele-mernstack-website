import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tour = ({tour}) => {
    const { _id, name, cost, about, img,time, country } = tour;
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className='text-danger'>{name}</Card.Title>
          <h5>
              Location: {country}
          </h5>
          <h6>
              Time: {time}
          </h6>
        <Link to={`/booking/${_id}`}>
        
        <Button  className='btn-dark'>Book Now</Button>
        </Link>
          
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Tour;