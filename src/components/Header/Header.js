import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container className='container'>
                    <Navbar.Brand className='fw-bold' href="#">My Task</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/" className='text-decoration-none me-3 fw-bold'>Add Task</Link>
                            <Link to="/addtask" className='text-decoration-none me-3 fw-bold'>My Task</Link>
                            <Link to="/addtask" className='text-decoration-none me-3 fw-bold'>Compeletd Task</Link>
                            <Link to="/login" className='text-decoration-none me-3 fw-bold'>Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;