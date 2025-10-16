import React from 'react';
import './App.css';
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Experience from "./sections/Experience";

function App() {
    return (
        <div className="App">
            <Navbar expand="lg" fixed="top" className="Navbar" data-bs-theme="dark">
                <div className="nav-wrapper" style={{ width: "100%" }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <About/>
            <Projects/>
            <Experience/>
            <Contact/>
        </div>
    );
}

export default App;
