import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../Hooks/useAuth';


const Header = () => {
  const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
  <Navbar.Brand>
      <img
        as={HashLink} to="/home"
        src="https://demo.bosathemes.com/html/travele/assets/images/travele-logo.png"
        width="80"
        height="40"
        // className="d-inline-block align-top"
        // alt="React Bootstrap logo"
      />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
              <Nav.Link as={HashLink} to="/tours" >Tours</Nav.Link>
              <Nav.Link as={HashLink} to="/myTrips" >My Trips</Nav.Link>
              <Nav.Link as={HashLink} to="/addTrip" >Add Trip</Nav.Link>
              {user?.email ?
                            <Button onClick={logOut} className='btn-dark border-0'>Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                             <a className='text-decoration-none text-info' href="#login">{user?.displayName}</a>
                        </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      

        </div>
    );
};

export default Header;