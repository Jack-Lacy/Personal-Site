import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './sections/Home';
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Navbar from "./componants/Navbar";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <Experience></Experience>
    <Projects></Projects>
    <About></About>
    </>
  );
}

export default App;
