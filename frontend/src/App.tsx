import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./componants/Navbar";
import Section from "./componants/Section";

function App() {
    return (
        <>
                <Navbar/>
                <Section header={"Welcome"}
                         text={"Hello and welcome to my personal website! I am a software engineering student at the University of Western Ontario\n" +
                             "currently on a year long internship before my 4th and final year of school. I am interning at CARFAX as a software\n" +
                             "developer intern and have been enjoying my time learning how software engineers get things done in the real world.\n" +
                             "I decided to build this website using some of the technologies I have learned in school and indstry to demonstrate\n" +
                             "my skills and shed light on the experiences and projects I am the most proud of. Enjoy!"}></Section>
                <Section header={"Experience"}
                         text={"Go through various relevant experiences (CARFAX, WEST, maybe Metro) and explain what I learned and how\n" +
                             "they shaped me"}></Section>
                <Section header={"Projects"}
                         text={"Talk about the projects I have done both in and out of school and explain what I learned through them"}></Section>
                <Section header={"About"}
                         text={"Further in depth about the site itself and the technologies used to create it"}></Section>
        </>
    );
}

export default App;