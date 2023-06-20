import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return <nav className="nav">
        <Link to="/Home" className="site-title"> </Link>
        <ul>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/SiteInfo"> About Site </Link>
            </li>
            <li>
                <Link to="/MeInfo"> About Me </Link>
            </li>
        </ul>
        </nav>
}