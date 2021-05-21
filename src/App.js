import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import {Route,Router, Switch,Redirect} from 'react-router-dom';
import history from './history';
import Projects from './pages/Projects/Projects';
import Experiences from './pages/Experiences/Experiences';
import Resume from './pages/Resume/Resume'

function App() {
  return (
    <div className="App">
      <Router history = {history}>
        <Switch>
          <Route path = "/projects" component = {Projects} exact/>
          <Route path = "/experiences" component = {Experiences} exact/>
          {/* <Route path = "/resume" component = {Resume} exact/> */}
          <Route path = "/" component = {LandingPage} exact/>
          <Redirect from = "/*" to = "/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
