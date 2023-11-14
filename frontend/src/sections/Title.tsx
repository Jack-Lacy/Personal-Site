import React from "react";
import Navbar from "../componants/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Title.css'
    
function Title () {
    return <>
        <h1>Welcome</h1>
        <div className="textBox">
            <p>
                Hello and welcome to my personal website! I am a software engineering student at the University of Western Ontario
                currently on a year long internship before my 4th and final year of school. I am interning at CARFAX as a software
                developer intern and have been enjoying my time learning how software engineers get things done in the real world.
                I decided to build this website using some of the technologies I have learned in school and indstry to demonstrate
                my skills and shed light on the experiences and projects I am the most proud of. Enjoy!
            </p>
        </div>
    </>
}
export default Title;