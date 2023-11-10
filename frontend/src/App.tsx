import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Navbar from "./componants/Navbar";
import Title from "./sections/Title";

function App() {
  return (
    <>
    <div id="titleImageContainer">
      <Navbar/>
      <Title/>
    </div>
    <div id="expImageContainer">
      <Experience/>
    </div>
    <div id="projImageContainer">
      <Projects/>
    </div>
    <div id="aboutImageContainer">
      <About/>
    </div>
    </>
  );
}

export default App;
