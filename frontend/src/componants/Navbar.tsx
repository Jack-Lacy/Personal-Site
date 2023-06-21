import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";

export default function Navbar() {
    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="SiteInfo">About Site</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="MeInfo">About Me</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}