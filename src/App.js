import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import {Route,Router, Redirect} from 'react-router-dom';
import history from './history';
import Projects from './pages/Projects/Projects';
import Experiences from './pages/Experiences/Experiences';


function App() {
  return (
    <div className="App">
      <Router history = {history}>
        <Route path = "/" component = {LandingPage} exact/>
        <Route path = "/projects" component = {Projects} exact/>
        <Route path = "/experiences" component = {Experiences} exact/>
        <Redirect to = "/"/>
      </Router>
    </div>
  );
}

export default App;
