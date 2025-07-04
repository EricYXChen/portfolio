// Components

import Header from "./components/Header"
import Hero  from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Project from "./components/Project"
import Contact from "./components/Contact";


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const Portfolio = () => {
  return(
    <>
    <Header />
    <main>
      <Hero />
      <About />
      <Skill />
      <Work />
      <Project />
      <Contact />
    </main>
    </>
  )
}

export default Portfolio;