import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddProject from './Components/Add-Project/Add-Project';
import Projects from './Components/Projects/Projects';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <div>
                    <span><Link to="/">Add A project</Link></span>
                    <span><Link to="/projects">My Projects</Link></span>
                </div>
                <hr />

                <Route exact path="/" component={AddProject} />
                <Route path="/projects" component={Projects} />
            </div>
        </Router>
    );
  }
}

export default App;
