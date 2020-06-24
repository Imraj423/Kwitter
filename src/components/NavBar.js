import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Background  from './Logo1.png';
import LogOutbtn from './Logoutbtn';
const Styles = styled.div`
    .navbar {
        width:100vw;
        
    }

    .navbar-brand, .navbar-nav .nav-link {

        color:#bbb;

        &:hover {
            color: white;
        }
    }
`;

export const NavBar = () => {
    return (
      <Styles>
        <Navbar expand="lg">
          <img
            src={Background}
            alt="logo"
            width="70px"
            height="70px"
          />
          
          <Navbar.Brand href="/"> </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/profile">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/users">Users</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link onClick={LogOutbtn}>Logout</Link>
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item><Nav.Link><Link to="/contact">Contact</Link></Nav.Link></Nav.Item>  */}
            </Nav>
          {/* </Navbar.Collapse> */}
        </Navbar>
      </Styles>
    );
}