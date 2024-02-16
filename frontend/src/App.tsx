import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Navbar from "./componants/Navbar";
import Title from "./sections/Title";
import Section from "./componants/Section";

function App() {
  return (
      <>
        <div id="app">
          <Navbar/>
          <Section header={"Welcome"} text={"Hello and welcome to my personal website! I am a software engineering student at the University of Western Ontario\n" +
              "currently on a year long internship before my 4th and final year of school. I am interning at CARFAX as a software\n" +
              "developer intern and have been enjoying my time learning how software engineers get things done in the real world.\n" +
              "I decided to build this website using some of the technologies I have learned in school and indstry to demonstrate\n" +
              "my skills and shed light on the experiences and projects I am the most proud of. Enjoy!"}></Section>
          <div id="expImageContainer">
            <Experience/>
          </div>
          <div id="projImageContainer">
            <Projects/>
          </div>
          <div id="aboutImageContainer">
            <About/>
          </div>
        </div>
    </>
  );
}

export default App;
