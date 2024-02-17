import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";

export default function Navbar() {
    return (
        <div id="navHoverArea">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="experience">My Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="projects">My Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}