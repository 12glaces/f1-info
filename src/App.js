import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.scss';

const Home = () => <div>Home Content Goes Here</div>; // Replace with your home content
const About = () => <div>About Content Goes Here</div>; // Replace with your about content
const Projects = () => <div>Projects Content Goes Here</div>; // Replace with your projects content
const Skills = () => <div>Skills Content Goes Here</div>; // Replace with your skills content
const Contact = () => <div>Contact Content Goes Here</div>; // Replace with your contact content

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mx-auto p-4">
          <h1 >Welcome to f1 info</h1>
        </div>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;