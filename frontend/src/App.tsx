import React from 'react';
import './App.css';
import About from "./sections/About";
import Projects from "./sections/Projects";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar expand="lg" fixed="top" className="Navbar" data-bs-theme="dark">
                <div className="nav-wrapper">
                    <Nav>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
            <About/>
            <Projects/>
        </div>
    );
}

export default App;
